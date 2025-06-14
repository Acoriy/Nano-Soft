import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  AlertTriangle,
  Code,
  Server,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

import ImageOg from "../assets/LogoNanosSoft.png";
import SEO from "./SEO";
import SchemaMarkup from "./SchemaMatkup";



const CyberSecurity = () => {
  // Variantes pour l’animation en cascade
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Schema.org 
  const cybersecuritySchema = {
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Cybersecurity Services",
        "name": "خدمات الأمن السيبراني - نانو سوفت",
        "description": "حلول متكاملة لحماية البيانات والشبكات من التهديدات الإلكترونية",
        "provider": {
          "@type": "Organization",
          "name": "نانو سوفت",
          // "logo": `${process.env.VITE_SITE_URL}${ImageOg}`
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "تقييم المخاطر الأمنية",
            "description": "تحليل شامل للثغرات الأمنية وتحديد نقاط الضعف",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "LYD",
              "price": "1000-5000"
            }
          },
          {
            "@type": "Offer",
            "name": "حماية البيانات والتشفير",
            "description": "تقنيات التشفير المتقدمة لحماية المعلومات الحساسة",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "LYD",
              "price": "2000-10000"
            }
          }
        ],
        // "image": `${process.env.VITE_SITE_URL}${ImageOg}`
      },
      {
        "@type": "Organization",
        "name": "نانو سوفت",
        "url": "https://nanosoft.ly",
        // "logo": `${process.env.VITE_SITE_URL}${ImageOg}`,
        "sameAs": [
          "https://facebook.com/nanosoft",
          "https://linkedin.com/company/nanosoft"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Libya"
        },
        "knowsLanguage": "ar",
        "foundingDate": "2020"
      },
      {
        "@type": "WebPage",
        "name": "خدمات الأمن السيبراني - نانو سوفت",
        "description": "حلول أمنية متكاملة لحماية البنية التحتية الرقمية",
        "mainContentOfPage": {
          "@type": "WebPageElement",
          "cssSelector": ".container"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          // "url": `${process.env.VITE_SITE_URL}${ImageOg}`
        }
      }
    ]
  };
  

  return (
    <main className="pt-20  overflow-hidden">
      {/* Open Graph */}
      <SEO
        title="نانو سوفت - خدمات الأمن السيبراني"
        description="حلول متكاملة لحماية بياناتك ومنشأتك من المخاطر الإلكترونية مع أحدث التقنيات الأمنية"
        image={ImageOg}
        category="Cybersecurity Services"
        keywords="الأمن السيبراني , أمن الشبكات , أمن المعلومات , الحماية من البرمجيات الخبيثة , جدار الحماية (Firewall) , الاختبار الاختراقي (Penetration Testing) , تحليل الثغرات الأمنية"
        url="https://nanosoft.ly/cybersecurity"
      />

      {/* Schema.org */}
      <SchemaMarkup schema={cybersecuritySchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden" aria-labelledby="cybersecurity-hero">
        <div className="absolute inset-0 bg-gradient-to-tr from-nanosoft-primary via-nanosoft-secondary to-nanosoft-accent opacity-90" aria-hidden="true"></div>
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNSIvPjwvZz48L2c+PC9zdmc+')] opacity-20"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
          <h1
        id="cybersecurity-hero"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4"
          >
        الأمن السيبراني
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 text-center max-w-3xl mx-auto">
        حلول متكاملة لحماية بياناتك ومنشأتك من المخاطر الإلكترونية et renforcer
        l’<strong>sécurité numérique</strong>.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="container mx-auto px-4 py-8 sm:py-12 md:py-20 relative z-10"
        >
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 text-white mt-8 md:mt-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-right"
          >
            حماية متكاملة لأعمالك الرقمية
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl mb-8 text-gray-100 text-center md:text-right"
          >
            في عصر التحول الرقمي، يعتبر الأمن السيبراني أحد أهم التحديات التي
            تواجه الشركات والمؤسسات. نقدم حلولاً شاملة لحماية بنيتك التحتية وبياناتك
            من الهجمات الإلكترونية المتطورة.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link to="/contact" className="flex-1">
          <Button
            size="lg"
            className="w-full bg-white md:text-xl text-nanosoft-primary hover:bg-gray-200"
            aria-label="تواصل معنا"
          >
            تواصل معنا
          </Button>
            </Link>
            <Link to="/pricing" className="flex-1">
          <Button
            size="lg"
            variant="outline"
            className="w-full border-white md:text-xl text-white bg-transparent hover:bg-white/10"
            aria-label="اكتشف المزيد"
          >
            اكتشف المزيد
          </Button>
            </Link>
          </motion.div>
          {/* Icons for mobile/tablet */}
          <div className="flex justify-center md:justify-start gap-4 mt-8 md:mt-12">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white/80" aria-label="حماية" />
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-white/80" aria-label="قفل" />
            <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-white/80" aria-label="تنبيه" />
            <Code className="w-8 h-8 sm:w-10 sm:h-10 text-white/80" aria-label="كود" />
            <Server className="w-8 h-8 sm:w-10 sm:h-10 text-white/80" aria-label="خادم" />
            <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-white/80" aria-label="مراقبة" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-nanosoft-primary/20 animate-pulse" aria-hidden="true"></div>
            <div className="absolute inset-6 rounded-full bg-nanosoft-primary/30 animate-pulse [animation-delay:500ms]" aria-hidden="true"></div>
            <div className="absolute inset-12 rounded-full bg-nanosoft-primary/40 animate-pulse [animation-delay:1000ms]" aria-hidden="true"></div>
            <div className="absolute inset-0 flex items-center justify-center">
          <Shield
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-white"
            strokeWidth={1.5}
            aria-hidden="true"
          />
            </div>
          </div>
        </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50" aria-labelledby="cybersecurity-services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              id="cybersecurity-services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              خدمات الأمن السيبراني
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              نقدم مجموعة شاملة من الحلول الأمنية المتقدمة لحماية بيئتك الرقمية.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Card 1 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-primary/10 rounded-full inline-block" aria-hidden="true">
                    <Shield className="h-8 w-8 text-nanosoft-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">تقييم المخاطر الأمنية</h3>
                  <p className="text-gray-600">
                    تحليل شامل لنظامك الرقمي لتحديد نقاط الضعف والثغرات الأمنية
                    واقتراح الحلول المناسبة.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-secondary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-secondary/10 rounded-full inline-block" aria-hidden="true">
                    <Lock className="h-8 w-8 text-nanosoft-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">حماية البيانات والتشفير</h3>
                  <p className="text-gray-600">
                    تأمين معلوماتك الحساسة باستخدام أحدث تقنيات التشفير وإدارة الهويات.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-tertiary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-tertiary/10 rounded-full inline-block" aria-hidden="true">
                    <AlertTriangle className="h-8 w-8 text-nanosoft-tertiary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">الاستجابة للحوادث الأمنية</h3>
                  <p className="text-gray-600">
                    فريق متخصص للاستجابة السريعة وتقديم الدعم الفوري للحوادث الأمنية.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 4 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-accent hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-accent/10 rounded-full inline-block" aria-hidden="true">
                    <Code className="h-8 w-8 text-nanosoft-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">تأمين التطبيقات والأنظمة</h3>
                  <p className="text-gray-600">
                    تأمين تطبيقاتك وأنظمتك ضد نقاط الضعف باستخدام أفضل الممارسات.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 5 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-primary hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-primary/10 rounded-full inline-block" aria-hidden="true">
                    <Server className="h-8 w-8 text-nanosoft-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">أمن البنية التحتية</h3>
                  <p className="text-gray-600">
                    حماية الشبكات والخوادم باستخدام تقنيات المراقبة المستمرة.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Card 6 */}
            <motion.div variants={itemVariants} className="h-full">
              <Card className="h-full border-t-4 border-t-nanosoft-accent hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-nanosoft-accent/10 rounded-full inline-block" aria-hidden="true">
                    <Eye className="h-8 w-8 text-nanosoft-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">المراقبة الأمنية المستمرة</h3>
                  <p className="text-gray-600">
                    مراقبة 24/7 لأنظمتك للكشف المبكر عن التهديدات والتعامل معها.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16" aria-labelledby="cybersecurity-process">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              id="cybersecurity-process"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              منهجيتنا في الأمن السيبراني
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              نتبع نهجاً شاملاً ومنظماً لتأمين بيئتك الرقمية.
            </motion.p>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-nanosoft-primary/20 hidden md:block" aria-hidden="true"></div>

            {/* Process Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0 order-2 md:order-1">
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
                    التقييم والتشخيص
                  </h3>
                  <p className="text-gray-600">
                    تحليل شامل لبنيتك التحتية لتحديد نقاط الضعف والمخاطر والثغرات الأمنية.
                  </p>
                </div>
              </div>
              <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div
                  className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10"
                  aria-label="الخطوة 1"
                >
                  1
                </div>
              </div>
              <div className="w-full md:w-1/2 order-3" aria-hidden="true"></div>
            </motion.div>

            {/* Process Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="w-full md:w-1/2 order-3" aria-hidden="true"></div>
              <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div
                  className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10"
                  aria-label="الخطوة 2"
                >
                  2
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2 md:order-3">
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
                    تصميم استراتيجية الأمان
                  </h3>
                  <p className="text-gray-600">
                    بناء استراتيجية أمنية متكاملة تناسب احتياجات عملك وتعالج المخاطر المحددة.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Process Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center mb-12"
            >
              <div className="w-full md:w-1/2 md:pl-12 mb-6 md:mb-0 order-2 md:order-1">
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
                    تنفيذ الحلول الأمنية
                  </h3>
                  <p className="text-gray-600">
                    تنفيذ الحلول الأمنية المناسبة مثل جدران الحماية وأنظمة مراقبة الشبكة.
                  </p>
                </div>
              </div>
              <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div
                  className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10"
                  aria-label="الخطوة 3"
                >
                  3
                </div>
              </div>
              <div className="w-full md:w-1/2 order-3" aria-hidden="true"></div>
            </motion.div>

            {/* Process Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-1/2 order-3" aria-hidden="true"></div>
              <div className="md:w-14 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                <div
                  className="w-10 h-10 rounded-full bg-nanosoft-primary flex items-center justify-center text-white text-lg font-bold z-10"
                  aria-label="الخطوة 4"
                >
                  4
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2 md:order-3">
                <div className="p-6 rounded-lg shadow-lg bg-white">
                  <h3 className="text-xl font-bold mb-3 text-nanosoft-primary">
                    المراقبة والتحسين المستمر
                  </h3>
                  <p className="text-gray-600">
                    خدمات مراقبة دورية وتحديثات مستمرة لضمان الحماية المستمرة ضد التهديدات.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-nanosoft-primary to-nanosoft-accent text-white" aria-labelledby="cybersecurity-cta">
        <div className="container mx-auto px-4">
          <motion.div
            id="cybersecurity-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              احمِ عملك الآن مع حلولنا للأمن السيبراني
            </h2>
            <p className="text-xl mb-8 text-green-50">
              تواصل معنا اليوم للحصول على استشارة مجانية ومعرفة كيف يمكننا مساعدتك في حماية أعمالك وبياناتك.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-nanosoft-primary hover:text-white border-white hover:bg-white/10"
                  aria-label="تعرف على المزيد"
                >
                  تعرف على المزيد
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-transparent text-white border border-white hover:bg-white hover:text-nanosoft-primary"
                  aria-label="طلب استشارة مجانية"
                >
                  طلب استشارة مجانية
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CyberSecurity;
