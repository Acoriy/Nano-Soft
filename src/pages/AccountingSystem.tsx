import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import {
  Check,
  CreditCard,
  BarChart3,
  FileText,
  LayoutDashboard,
  LineChart,
  Receipt,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "إدارة الفواتير الإلكترونية",
    icon: <Receipt className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "إنشاء فواتير احترافية بسهولة وإرسالها للعملاء مباشرة عبر البريد الإلكتروني",
  },
  {
    title: "إدارة المصروفات والإيرادات",
    icon: <CreditCard className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "تتبع جميع المصروفات والإيرادات بدقة عالية مع تصنيفها حسب الأقسام",
  },
  {
    title: "التقارير المالية",
    icon: <BarChart3 className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "تقارير مالية شاملة ومتنوعة (الميزانية العمومية، قائمة الدخل، التدفقات النقدية)",
  },
  {
    title: "إدارة دفتر الأستاذ",
    icon: <FileText className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "دفتر أستاذ متكامل لتسجيل كافة القيود المحاسبية اليومية بطريقة مبسطة",
  },
  {
    title: "إدارة الحسابات البنكية",
    icon: <LayoutDashboard className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "ربط وإدارة الحسابات البنكية المتعددة مع تتبع جميع المعاملات المالية",
  },
  {
    title: "التحليل المالي",
    icon: <LineChart className="h-8 w-8 text-nanosoft-primary" />,
    description: "أدوات تحليل مالي متقدمة تساعدك على فهم الوضع المالي لمؤسستك",
  },
];

const benefits = [
  "توفير الوقت وتقليل الأخطاء المحاسبية",
  "زيادة الدقة في التقارير المالية",
  "تحسين اتخاذ القرارات المالية",
  "تبسيط عمليات المحاسبة اليومية",
  "سهولة الوصول للبيانات المالية من أي مكان",
  "تأمين البيانات المالية بأحدث تقنيات الحماية",
];

// images :
import HeroAcounting from "../assets/AcountingImages/AcountingHero.webp";
import Acounting1 from "../assets/AcountingImages/Acounting1.webp";
import SEO from "../components/SEO";
import ImageOg from "../assets/LogoNanosSoft.png";
import SchemaMarkup from "@/components/SchemaMatkup";

const AccountingSystem = () => {
  // schema.org :
  const accountingSchema = {
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "برنامج محاسبة متكامل لإدارة الشركات - نانو سوفت",
        description:
          "نظام محاسبة سحابي شامل مصمم خصيصاً للشركات والمؤسسات في ليبيا والعالم العربي",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        softwareHelp: "https://nanosoft.ly/support",
        featureList: features.map((f) => f.title),
        screenshot: {
          "@type": "ImageObject",
          // "url": `${window.location.origin}${HeroAcounting}`,
          width: 1200,
          height: 630,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "LYD",
          availability: "https://schema.org/InStock",
          url: "https://nanosoft.ly/pricing",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          ratingCount: "237",
        },
      },
      {
        "@type": "Organization",
        name: "نانو سوفت",
        url: "https://nanosoft.ly",
        // "logo": `${window.location.origin}${ImageOg}`,
        sameAs: [
          "https://facebook.com/nanosoft",
          "https://linkedin.com/company/nanosoft",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+218-21-1234567",
          contactType: "الدعم الفني",
          areaServed: "LY",
          availableLanguage: "ar",
        },
      },
      {
        "@type": "WebSite",
        url: "https://nanosoft.ly",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://nanosoft.ly/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-28  md:pt-32">
      {/* Open Graph  */}
      <SEO
        title="نانو سوفت - برنامج محاسبة متكامل لإدارة الشركات"
        description="نظام محاسبة سحابي شامل مصمم خصيصاً للشركات والمؤسسات في ليبيا والعالم العربي"
        image={ImageOg}
        category="Software"
        keywords="برنامج محاسبة , نظام محاسبي متكامل , حلول محاسبية للشركات , إدارة الحسابات المالية , برنامج محاسبة سحابي"
        url="https://nanosoft.ly/accounting"
      />
      {/* Schema.org */}

      <SchemaMarkup schema={accountingSchema} />

      <PageHeader
        title="برنامج محاسبة متكامل لإدارة الشركات"
        description="نظام محاسبة سحابي شامل مصمم خصيصاً للشركات والمؤسسات في ليبيا والعالم العربي"
      />

      {/* Hero Section with Image */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 my-10 md:my-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 text-right mt-8 md:mt-0"
        >
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-4">
            نظام متكامل
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">
            أدر حساباتك المالية بكل احترافية وسهولة
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8">
            برنامج المحاسبة من نانوسوفت يوفر لك كل ما تحتاجه لإدارة الحسابات
            المالية بكفاءة عالية وبواجهة سهلة الاستخدام مع تقارير متكاملة تساعدك
            على اتخاذ القرارات الصحيحة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end items-stretch sm:items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-nanosoft-primary hover:bg-nanosoft-primary/90">
                طلب عرض توضيحي
              </Button>
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">
                تعرف على المزيد
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={HeroAcounting}
            alt="نظام المحاسبة"
            className="rounded-lg shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-full object-cover h-48 sm:h-72 md:h-[400px]"
          />
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="my-20">
        <div className="text-center mb-12">
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-2">
            مميزات النظام
          </Badge>
          <h2 className="text-3xl font-bold">
            كل ما تحتاجه في نظام محاسبي واحد
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            يوفر برنامج المحاسبة من نانوسوفت مجموعة شاملة من الأدوات المحاسبية
            التي تلبي احتياجات مؤسستك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-right"
            >
              <div className="mb-4 flex justify-end">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="my-20 bg-gradient-to-r from-nanosoft-primary/5 to-nanosoft-primary/10 rounded-2xl p-8 lg:p-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <img
              src={Acounting1}
              alt="فوائد النظام المحاسبي"
              className="rounded-lg shadow-xl object-cover h-[400px] w-full"
            />
          </div>
          <div className="flex-1 text-right">
            <Badge className="bg-nanosoft-primary/20 text-nanosoft-primary hover:bg-nanosoft-primary/30 mb-4">
              لماذا تختارنا؟
            </Badge>
            <h2 className="text-3xl font-bold mb-6">
              فوائد استخدام نظام المحاسبة من نانوسوفت
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-nanosoft-primary rounded-full p-1 flex-shrink-0 mr-2">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <Link to="/pricing">
              <Button className="mt-8 bg-nanosoft-primary hover:bg-nanosoft-primary/90">
                ابدأ الآن مجاناً
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="my-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          جاهز لتطوير أعمالك المحاسبية؟
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          انضم إلى آلاف الشركات التي تستخدم نظام المحاسبة من نانوسوفت لإدارة
          حساباتها المالية بكفاءة وأمان
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/pricing">
            <Button className="bg-nanosoft-primary hover:bg-nanosoft-primary/90 px-8 py-6 text-lg">
              ابدأ الاشتراك مجانا
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="px-8 py-6 text-lg">
              تواصل مع فريق المبيعات
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccountingSystem;
