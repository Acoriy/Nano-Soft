import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Shield,
  Server,
  Globe,
  Users,
  Zap,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import { Link } from "react-router-dom";

import ImageOg from "../assets/LogoNanosSoft.png";
import SEO from "./SEO";
import SchemaMarkup from "./SchemaMatkup";

// Factorisation des cartes statistiques
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
    <div className="text-5xl font-bold mb-4">{value}</div>
    <p>{label}</p>
  </div>
);

const CloudServices = () => {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Schema.org :
  const cloudSchema = {
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Cloud Computing Services",
        name: "خدمات الحوسبة السحابية - نانو سوفت",
        description:
          "حلول سحابية متكاملة تجمع بين المرونة والأمان والأداء العالي لتلبية احتياجات الأعمال",
        provider: {
          "@type": "Organization",
          name: "نانو سوفت",
          // "logo": `${process.env.VITE_SITE_URL}${ImageOg}`
        },
        offers: [
          {
            "@type": "Offer",
            name: "البنية التحتية كخدمة (IaaS)",
            description: "موارد حوسبة افتراضية عالية الأداء مع مرونة كاملة",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: "LYD",
              price: "500-5000",
            },
          },
          {
            "@type": "Offer",
            name: "المنصة كخدمة (PaaS)",
            description: "بيئة تطوير وتشغيل متكاملة للتطبيقات",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: "LYD",
              price: "1000-10000",
            },
          },
        ],
        // "image": `${process.env.VITE_SITE_URL}${ImageOg}`
      },
      {
        "@type": "Organization",
        name: "نانو سوفت",
        url: "https://nanosoft.ly",
        // "logo": `${process.env.VITE_SITE_URL}${ImageOg}`,
        sameAs: [
          "https://facebook.com/nanosoft",
          "https://linkedin.com/company/nanosoft",
        ],
        areaServed: {
          "@type": "Country",
          name: "Libya",
        },
        knowsLanguage: "ar",
        foundingDate: "2020",
      },
      {
        "@type": "WebPage",
        name: "خدمات السحابة - نانو سوفت",
        description: "حلول سحابية متكاملة لإدارة البنية التحتية والتطبيقات",
        mainContentOfPage: {
          "@type": "WebPageElement",
          cssSelector: ".container",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          // "url": `${process.env.VITE_SITE_URL}${ImageOg}`
        },
      },
    ],
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* Open Graph */}
      <SEO
        title="نانو سوفت - خدمات الحوسبة السحابية"
        description="حلول سحابية متكاملة تجمع بين المرونة والأمان والأداء العالي لتلبية احتياجات أعمالك"
        image={ImageOg}
        category="Cloud Computing Services"
        keywords="خدمات الحوسبة السحابية , الحوسبة السحابية , التخزين السحابي , النسخ الاحتياطي السحابي , أمان البيانات في السحابة"
        url="https://nanosoft.ly/cloud-services"
      />
      {/* Schema.org */}
      <SchemaMarkup schema={cloudSchema} />

      {/* Hero Section */}
      <section className="relative overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-custom-green-1 via-custom-green-2 to-custom-green-4 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTIgMmg1NnY1NkgyVjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-16 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
            >
              خدمات الحوسبة السحابية
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base xs:text-lg sm:text-xl text-white/90 max-w-xl md:max-w-3xl mx-auto"
            >
              حلول سحابية متكاملة تجمع بين المرونة والأمان والأداء العالي لتلبية
              احتياجات أعمالك
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 xs:w-56 xs:h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 relative mx-auto">
                <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-white/20 animate-pulse [animation-delay:400ms]"></div>
                <div className="absolute inset-10 rounded-full bg-white/20 animate-pulse [animation-delay:800ms]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cloud
                    className="w-16 h-16 xs:w-20 xs:h-20 sm:w-32 sm:h-32 text-white"
                    strokeWidth={1}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.7 }}
                  className="absolute -right-4 -top-4 xs:-right-6 xs:-top-6 sm:-right-8 sm:-top-8 p-2 xs:p-3 sm:p-4 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center"
                >
                  <Database className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.7 }}
                  className="absolute -left-4 top-6 xs:-left-6 xs:top-8 sm:-left-8 sm:top-12 p-2 xs:p-3 sm:p-4 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center"
                >
                  <Server className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.7 }}
                  className="absolute right-0 -bottom-2 xs:-bottom-3 sm:-bottom-4 p-2 xs:p-3 sm:p-4 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="flex justify-center mt-4 xs:mt-6 sm:mt-8 md:mt-10"
          >
            <div className="flex flex-wrap gap-3 xs:gap-4 justify-center md:mb-5">
              <Link to="/pricing">
                <Button
                  size="lg"
                  className="bg-white text-base xs:text-lg md:text-xl text-nanosoft-primary hover:bg-gray-200"
                >
                  استكشاف الخدمات
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-base xs:text-lg md:text-xl text-white bg-transparent hover:bg-white/10"
                >
                  اكتشف المزيد
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 140"
            className="w-full h-10 xs:h-14 sm:h-20 md:h-28"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,101.3C384,117,480,139,576,128C672,117,768,75,864,64C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              مميزات خدماتنا السحابية
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              نقدم حلولًا سحابية متكاملة مصممة لتلبية متطلبات الأعمال المعاصرة
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Feature Card 1 */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-custom-green-1/20 hover:border-custom-green-1/40">
                <CardContent className="pt-6">
                  <div className="mb-6 p-4 bg-custom-green-1/10 rounded-full inline-flex items-center justify-center">
                    <Server className="h-8 w-8 text-nanosoft-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    البنية التحتية كخدمة (IaaS)
                  </h3>
                  <p className="text-gray-600">
                    استفد من موارد الحوسبة عند الطلب مع خوادم افتراضية عالية
                    الأداء وتخزين مرن وشبكات قابلة للتخصيص، بدون الحاجة
                    للاستثمار في الأجهزة المادية.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-custom-green-2/20 hover:border-custom-green-2/40">
                <CardContent className="pt-6">
                  <div className="mb-6 p-4 bg-custom-green-2/10 rounded-full inline-flex items-center justify-center">
                    <Database className="h-8 w-8 text-nanosoft-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    المنصة كخدمة (PaaS)
                  </h3>
                  <p className="text-gray-600">
                    بيئة تطوير وتشغيل متكاملة تتيح لك التركيز على بناء تطبيقاتك
                    دون القلق بشأن البنية التحتية. مثالية لفرق التطوير
                    والمؤسسات.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-custom-green-3/20 hover:border-custom-green-3/40">
                <CardContent className="pt-6">
                  <div className="mb-6 p-4 bg-custom-green-3/10 rounded-full inline-flex items-center justify-center">
                    <Globe className="h-8 w-8 text-nanosoft-tertiary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    البرمجيات كخدمة (SaaS)
                  </h3>
                  <p className="text-gray-600">
                    حلول برمجية جاهزة تعمل على السحابة وتتميز بسهولة الوصول
                    والاستخدام عبر الإنترنت. اشترك واستخدم دون الحاجة للتثبيت أو
                    الصيانة.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-custom-green-4/20 hover:border-custom-green-4/40">
                <CardContent className="pt-6">
                  <div className="mb-6 p-4 bg-custom-green-4/10 rounded-full inline-flex items-center justify-center">
                    <Shield className="h-8 w-8 text-nanosoft-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">الأمان السحابي</h3>
                  <p className="text-gray-600">
                    حماية متكاملة لبياناتك وتطبيقاتك مع أحدث تقنيات الأمان، بما
                    في ذلك التشفير، والمراقبة المستمرة، والحماية من البرمجيات
                    الخبيثة والهجمات.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature Card 5 */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-custom-green-1/20 hover:border-custom-green-1/40">
                <CardContent className="pt-6">
                  <div className="mb-6 p-4 bg-custom-green-1/10 rounded-full inline-flex items-center justify-center">
                    <Users className="h-8 w-8 text-nanosoft-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">الدعم والاستشارات</h3>
                  <p className="text-gray-600">
                    فريق دعم متخصص متاح على مدار الساعة، مع خدمات استشارية
                    احترافية لمساعدتك على تحقيق أقصى استفادة من الحلول السحابية
                    الخاصة بك.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature Card 6 */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-custom-green-2/20 hover:border-custom-green-2/40">
                <CardContent className="pt-6">
                  <div className="mb-6 p-4 bg-custom-green-2/10 rounded-full inline-flex items-center justify-center">
                    <Zap className="h-8 w-8 text-nanosoft-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    قابلية التوسع والمرونة
                  </h3>
                  <p className="text-gray-600">
                    قم بزيادة أو تقليل الموارد بناءً على الحاجة، وادفع فقط مقابل
                    ما تستخدمه. مرونة لا مثيل لها تناسب الشركات الناشئة
                    والمؤسسات الكبيرة.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-custom-green-1/5 to-custom-green-4/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              لماذا تختار خدماتنا السحابية؟
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              مزايا تنافسية تساعدك على النمو والتطور في عالم الأعمال الرقمي
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiNmMGY4ZjQiLz48cGF0aCBkPSJNNDY3LjIgMTgwLjVjLTE4LjMtMTMuNi00MS4zLTIzLjgtNzEuNS0yMS4zYy0yMi4yIDEuOC01MC4yIDE1LjgtNjUuNCAzNS42Yy02LjcgOC43LTEwLjcgMTkuNS0xMS4zIDMwLjZjLTAuNyAxNC4zIDQuNSAyOC42IDE0LjQgMzguN2M5LjkgMTAuMSAyMy41IDE2IDM3LjEgMTguM2MyNi4yIDQuNCA1NC02LjMgNzEuMi0yNi4zYzE3LjItMjAgMjUtNDguMSAyNS41LTc1LjZaIiBmaWxsPSIjZDdmNGU3Ii8+PGNpcmNsZSBjeD0iNDAwIiBjeT0iMzAwIiByPSIxMjAiIGZpbGw9IiMxMDlBNjAiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PHBhdGggZD0iTTU1OC41IDQ2MC4yYzE1LjgtMTkgMjUuNi00NC41IDE4LjQtNzcuMWMtNS4zLTIzLjgtMjYuMS01NC42LTUzLjgtNzEuNmMtMTIuMi03LjUtMjcuMS0xMS4zLTQxLjUtMTAuNWMtMTguNSAwLjktMzUuOSAxMC43LTQ2LjkgMjYuMmMtMTEgMTUuNC0xNi4xIDM0LjgtMTMuNiA1My4xYzQuOSAzNSAzMi44IDY1LjEgNzEgNzQuN2MzOC4xIDkuNiA3OS44LTIuOSAxMDYuMy0yNi44WiIgZmlsbD0iI2Q3ZjRlNyIvPjxwYXRoIGQ9Ik0zMzcuMiA0NTAuNGM4LjcgMjMuNyAyOS41IDQxLjQgNTguNyA0MS44YzIzLjEgMC40IDUxLjQtMTMuOCA2Ni42LTM1LjRjNi43LTkuNSAxMC4yLTIxLjIgOS43LTMyLjhjLTAuNy0xNC45LTguMS0yOS0xOS41LTM4LjFjLTExLjQtOS4xLTI2LjItMTMtMzkuOC0xMi42Yy0yNi4xIDAuOC01MiAxNi41LTY1IDQxLjJjLTEzLjEgMjQuNy0xNS43IDU2LjUtMTAuNyA4NS45WiIgZmlsbD0iI2Q3ZjRlNyIvPjwvc3ZnPg=="
                alt="Cloud Benefits Illustration"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Benefit 1 */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 bg-custom-green-1/20 p-3 rounded-full">
                  <Zap className="w-6 h-6 text-nanosoft-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    تحسين الكفاءة التشغيلية
                  </h3>
                  <p className="text-gray-600">
                    تقليل تكاليف البنية التحتية وصيانة النظم، مع تبسيط العمليات
                    وزيادة الإنتاجية من خلال أتمتة المهام المتكررة.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 2 */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 bg-custom-green-2/20 p-3 rounded-full">
                  <Settings className="w-6 h-6 text-nanosoft-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    المرونة والقابلية للتوسع
                  </h3>
                  <p className="text-gray-600">
                    إمكانية زيادة أو تقليل الموارد حسب الحاجة، مما يتيح لك
                    التكيف مع المتطلبات المتغيرة لعملك بسرعة وكفاءة.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 3 */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 bg-custom-green-3/20 p-3 rounded-full">
                  <Shield className="w-6 h-6 text-nanosoft-tertiary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    الأمان والامتثال
                  </h3>
                  <p className="text-gray-600">
                    أنظمة حماية متقدمة تضمن أمان بياناتك، مع ضمان الامتثال
                    للمعايير الدولية واللوائح التنظيمية المحلية.
                  </p>
                </div>
              </motion.div>

              {/* Benefit 4 */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="flex-shrink-0 bg-custom-green-4/20 p-3 rounded-full">
                  <Users className="w-6 h-6 text-nanosoft-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    تعاون أفضل وإنتاجية معززة
                  </h3>
                  <p className="text-gray-600">
                    سهولة التعاون بين فريقك والعمل من أي مكان، مع إمكانية الوصول
                    للبيانات والتطبيقات عن بُعد بشكل آمن وفعال.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nanosoft-primary to-nanosoft-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              استعد للانطلاق نحو السحابة
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              ابدأ رحلتك نحو التحول الرقمي مع خدماتنا السحابية المتكاملة.
              الاستشارة الأولى مجانية!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-transparent text-white border border-white hover:bg-white hover:text-nanosoft-primary"
                >
                  تواصل معنا الآن
                </Button>
              </Link>

              <Link to="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-nanosoft-primary hover:text-white border-white hover:bg-white/10"
                >
                  طلب عرض مخصص
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  value: "99.9%",
                  label: "وقت التشغيل مع ضمان اتفاقية مستوى الخدمة",
                },
                { value: "24/7", label: "دعم فني متخصص على مدار الساعة" },
                { value: "30+", label: "نموذج جاهز للنشر السريع" },
              ].map((stat, idx) => (
                <StatCard key={idx} value={stat.value} label={stat.label} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;
