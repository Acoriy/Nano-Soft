import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { z } from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import emailjs from "@emailjs/browser";

import SEO from "../components/SEO";
import ImageOg from "../assets/LogoNanosSoft.png";
import SchemaMarkup from "@/components/SchemaMatkup";
// import ContactUsImg from "../assets/concatUs.jpg"; // Image facultative

const contactFormSchema = z.object({
  name: z.string().min(3, { message: "الاسم يجب أن يكون 3 أحرف على الأقل" }),
  email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
  phone: z
    .string()
    .min(8, { message: "رقم الهاتف يجب أن يكون 8 أرقام على الأقل" }),
  subject: z
    .string()
    .min(5, { message: "الموضوع يجب أن يكون 5 أحرف على الأقل" }),
  message: z
    .string()
    .min(10, { message: "الرسالة يجب أن تكون 10 أحرف على الأقل" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى التحقق من البيانات المدخلة وإعادة المحاولة",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      if (!form.current) throw new Error("Form reference is not set");

      // --- My Confige :
      // const result = await emailjs.sendForm(
      //   'service_in2loup',
      //   'template_9mt8ryc',
      //   form.current,
      //   { publicKey: 'bYnS8JUIkrD4vRZBu' }
      // );

      // -- Mohamed Confige :
      const result = await emailjs.sendForm(
        "service_w9gtwfo",
        "template_3c2s94c",
        form.current,
        { publicKey: "2S3jnjugx7id4sdfs" }
      );

      if (result.status === 200) {
        toast({
          title: "تم إرسال الرسالة بنجاح",
          description: "شكراً لتواصلك معنا، سنرد عليك في أقرب وقت ممكن.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "خطأ في إرسال الرسالة",
        description:
          "حدث خطأ أثناء محاولة إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقًا.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  //  schema.org :
  const contactSchema = {
    "@graph": [
      {
        "@type": "Organization",
        "name": "نانو سوفت",
        "url": "https://nanosoft.ly",
        // "logo": `${process.env.VITE_SITE_URL}${ImageOg}`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+218-918889193",
          "contactType": "الدعم الفني",
          "email": "info@nanosoft.ly",
          "areaServed": "LY",
          "availableLanguage": "ar",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "https://schema.org/Monday",
              "https://schema.org/Tuesday",
              "https://schema.org/Wednesday",
              "https://schema.org/Thursday",
              "https://schema.org/Saturday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          }
        },
        "sameAs": [
          "https://facebook.com/nanosoft",
          "https://linkedin.com/company/nanosoft"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "شارع الثورة",
          "addressLocality": "طرابلس",
          "addressRegion": "ليبيا",
          "postalCode": "00218",
          "addressCountry": "LY"
        }
      },
      {
        "@type": "ContactPage",
        "name": "صفحة الاتصال - نانو سوفت",
        "description": "نحن هنا لمساعدتك ودعمك. لا تتردد في التواصل معنا في أي وقت للاستفسار أو طلب المساعدة.",
        "mainContentOfPage": {
          "@type": "WebPageElement",
          "cssSelector": "#contact-form-title"
        },
        "relatedLink": [
          "https://nanosoft.ly/pricing",
          "https://nanosoft.ly/about"
        ]
      },
      {
        "@type": "QAPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ما هي مدة الرد على الاستفسارات؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "عادة ما نرد على جميع الاستفسارات خلال 24 ساعة من تلقيها خلال أيام العمل."
            }
          },
          {
            "@type": "Question",
            "name": "هل تقدمون خدمات الدعم الفني المستمر؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نقدم خدمات الدعم الفني المستمر لجميع عملائنا، وذلك ضمن باقات الدعم المختلفة التي نوفرها."
            }
          }
        ],
        "potentialAction": {
          "@type": "CommunicateAction",
          "name": "إرسال رسالة",
          "url": "https://nanosoft.ly/contact",
          "expectsAcceptanceOf": {
            "@type": "Offer",
            "name": "استجابة خلال 24 ساعة"
          }
        }
      }
    ]
  };
  
  return (
    <main
      className="pt-24 pb-20 bg-gradient-to-b from-white to-gray-50 min-h-screen"
      lang="ar"
    >
       {/* open graph */}
      <SEO
        title="نانو سوفت - صفحة الاتصال"
        description="نحن هنا لمساعدتك ودعمك. لا تتردد في التواصل معنا في أي وقت للاستفسار أو طلب المساعدة."
        image={ImageOg}
        category="contact"
        keywords="الدعم الفني , خدمة العملاء ,  مركز المساعدة"
        url="https://nanosoft.ly/contact"
      />
      {/* schema.org */}
      <SchemaMarkup schema={contactSchema} />


      <div className="container mx-auto px-4">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-nanosoft-primary/10 text-nanosoft-primary rounded-full text-sm font-medium mb-4">
            اتصل بنا
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نحن هنا لمساعدتك ودعمك. لا تتردد في التواصل معنا في أي وقت للاستفسار
            أو طلب المساعدة.
          </p>
        </motion.header>

        {/*
        Vous pouvez ajouter ici un élément visuel (image) facultatif à l'aide de lazy loading.
        Exemple : 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="w-full mb-12 overflow-hidden">
          <img src={ContactUsImg} alt="اتصل بنا" className="w-full h-[400px] object-cover rounded-2xl" loading="lazy" />
        </motion.div>
        */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Cartes de contact */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-4"
            aria-label="معلومات الاتصال"
          >
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div
                    className="bg-nanosoft-primary/10 p-3 rounded-full"
                    aria-hidden="true"
                  >
                    <Phone className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-lg mb-2">أرقام الهاتف</h3>
                    <p className="text-gray-600 mb-1">918889193 218+</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div
                    className="bg-nanosoft-primary/10 p-3 rounded-full"
                    aria-hidden="true"
                  >
                    <Mail className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-lg mb-2">
                      البريد الإلكتروني
                    </h3>
                    <p className="text-gray-600">info@nanosoft.ly</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div
                    className="bg-nanosoft-primary/10 p-3 rounded-full"
                    aria-hidden="true"
                  >
                    <Clock className="h-6 w-6 text-nanosoft-primary" />
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-lg mb-2">ساعات العمل</h3>
                    <p className="text-gray-600 mb-1">
                      السبت - الخميس: 9:00 ص - 5:00 م
                    </p>
                    <p className="text-gray-600">الجمعة: مغلق</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.aside>

          {/* Formulaire de contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
            aria-labelledby="contact-form-title"
          >
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8">
                <h2
                  id="contact-form-title"
                  className="text-2xl font-bold mb-6 text-right"
                >
                  أرسل لنا رسالة
                </h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 text-right">
                      <Label htmlFor="name" className="block text-gray-700">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="أدخل اسمك الكامل"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-red-500" : ""}
                        aria-required="true"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 text-right">
                      <Label htmlFor="email" className="block text-gray-700">
                        البريد الإلكتروني{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-red-500" : ""}
                        aria-required="true"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 text-right">
                      <Label htmlFor="phone" className="block text-gray-700">
                        رقم الهاتف <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="000000000 218+"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-red-500" : ""}
                        aria-required="true"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 text-right">
                      <Label htmlFor="subject" className="block text-gray-700">
                        الموضوع <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="موضوع الرسالة"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "border-red-500" : ""}
                        aria-required="true"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 text-right">
                    <Label htmlFor="message" className="block text-gray-700">
                      الرسالة <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-red-500" : ""}
                      aria-required="true"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <Button
                      type="submit"
                      className="bg-nanosoft-primary hover:bg-nanosoft-secondary text-white px-8 py-2 rounded-lg transition-colors flex items-center justify-center"
                      disabled={isSubmitting}
                      aria-label="إرسال الرسالة"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-2"></div>
                      ) : (
                        <Send className="ml-2 h-5 w-5" />
                      )}
                      إرسال الرسالة
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Section FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-3xl mx-auto"
          aria-label="الأسئلة المتكررة"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            الأسئلة المتكررة
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b">
              <AccordionTrigger className="text-lg font-semibold py-4 text-right">
                ما هي مدة الرد على الاستفسارات؟
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-right pb-4">
                عادة ما نرد على جميع الاستفسارات خلال 24 ساعة من تلقيها خلال
                أيام العمل.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b">
              <AccordionTrigger className="text-lg font-semibold py-4 text-right">
                هل تقدمون خدمات الدعم الفني المستمر؟
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-right pb-4">
                نعم، نقدم خدمات الدعم الفني المستمر لجميع عملائنا، وذلك ضمن
                باقات الدعم المختلفة التي نوفرها.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b">
              <AccordionTrigger className="text-lg font-semibold py-4 text-right">
                كيف يمكنني طلب عرض سعر للخدمات؟
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-right pb-4">
                يمكنك طلب عرض سعر من خلال ملء نموذج الاتصال أعلاه، أو عبر
                الاتصال المباشر.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b">
              <AccordionTrigger className="text-lg font-semibold py-4 text-right">
                هل تقدمون خدمات خارج ليبيا؟
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-right pb-4">
                نعم، نقدم خدماتنا لعملاء من جميع أنحاء العالم، ولدينا القدرة على
                العمل عن بُعد ودعمهم على مدار الساعة.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>
      </div>
    </main>
  );
};

export default ContactUs;
