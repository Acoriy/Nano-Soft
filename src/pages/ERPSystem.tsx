import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import {
  Check,
  Building,
  Database,
  Users,
  ShoppingCart,
  Package,
  BarChart3,
  Activity,
  Globe,
  Settings,
  Shield,
  Cloud,
  CheckCircle2,
  Clock,
  CreditCard,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPricesByCategory, Price } from "@/services/priceService";
import { Link } from "react-router-dom";

// ERP images :
import Sales from "../assets/ERPSystem/Sales.webp";
import ResurceHuman from "../assets/ERPSystem/resurece human.webp";
import Statistiques from "../assets/ERPSystem/Statistiques.webp";
import Magasin from "../assets/ERPSystem/magasinier.webp";
import Contabilty from "../assets/ERPSystem/contability.webp";
import Achats from "../assets/ERPSystem/Achats.webp";
import ERP from "../assets/ERPSystem/ERP.webp";
import ERP_Hero from "../assets/ERPSystem/ERP-Hero.webp";

import SEO from "../components/SEO";
import ImageOg from "../assets/LogoNanosSoft.png";
import SchemaMarkup from "@/components/SchemaMatkup";


const features = [
  {
    title: "إدارة المبيعات والعملاء",
    icon: <ShoppingCart className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "نظام متكامل لإدارة المبيعات وتتبع الطلبات والفواتير وإدارة علاقات العملاء مع تقارير مفصلة وتحليلات متقدمة",
    points: [
      "إنشاء عروض الأسعار والفواتير بسهولة",
      "تتبع الطلبات من البداية وحتى التسليم",
      "تنظيم ومتابعة قاعدة بيانات العملاء",
      "تحليل أنماط المبيعات واتجاهات العملاء",
    ],
    imageFeatre: Sales,
  },
  {
    title: "إدارة المشتريات والموردين",
    icon: <Package className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "أتمتة كاملة لدورة الشراء من طلبات الشراء إلى استلام البضائع والدفع للموردين مع تقارير تفصيلية عن أداء الموردين",
    points: [
      "إنشاء وإدارة طلبات الشراء آليًا",
      "متابعة مستويات المخزون وإعادة الطلب تلقائيًا",
      "إدارة وتقييم الموردين بشكل منهجي",
      "تحليل تكاليف الشراء وفرص التوفير",
    ],
    imageFeatre: Achats,
  },
  {
    title: "إدارة المخزون والمستودعات",
    icon: <Database className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "نظام متطور لإدارة المخزون والمستودعات مع تتبع دقيق لحركة البضائع وآليات متقدمة للجرد والتقييم والتنبؤ",
    points: [
      "تتبع المخزون في الوقت الحقيقي عبر مواقع متعددة",
      "إدارة التحويلات بين المستودعات بسهولة",
      "تنبيهات آلية لإعادة الطلب والمخزون المنخفض",
      "دعم الباركود وتقنية RFID لتتبع أفضل",
    ],
    imageFeatre: Magasin,
  },
  {
    title: "إدارة المالية والمحاسبة",
    icon: <BarChart3 className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "نظام محاسبي متكامل يشمل دفتر الأستاذ العام والأصول والمصروفات والإيرادات والتقارير المالية المتوافقة مع المعايير المحاسبية",
    points: [
      "إدارة دورة المحاسبة بالكامل",
      "إنشاء تقارير مالية احترافية",
      "متابعة الإيرادات والمصروفات بدقة",
      "تحليل الأداء المالي واتخاذ القرارات",
    ],
    imageFeatre: Contabilty,
  },
  {
    title: "إدارة الموارد البشرية",
    icon: <Users className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "منظومة متكاملة لإدارة شؤون الموظفين من التوظيف والتعيين وحتى إنهاء الخدمة مع إدارة الرواتب والإجازات والأداء",
    points: [
      "إدارة بيانات الموظفين والهيكل التنظيمي",
      "تتبع الحضور والانصراف والإجازات",
      "إدارة الرواتب والمستحقات والضرائب",
      "تقييم الأداء وخطط التطوير المهني",
    ],
    imageFeatre: ResurceHuman,
  },
  {
    title: "التقارير والتحليلات",
    icon: <Activity className="h-8 w-8 text-nanosoft-primary" />,
    description:
      "منصة تحليل متقدمة مع لوحات متابعة تفاعلية وتقارير مخصصة ومؤشرات أداء رئيسية لدعم اتخاذ القرارات الاستراتيجية",
    points: [
      "لوحات متابعة مخصصة لمختلف المستويات الإدارية",
      "تقارير تفصيلية قابلة للتصدير بصيغ متعددة",
      "تحليلات تنبؤية لدعم التخطيط المستقبلي",
      "مؤشرات أداء رئيسية لقياس نجاح الأعمال",
    ],
    imageFeatre: Statistiques,
  },
];

const benefits = [
  {
    title: "زيادة الإنتاجية وتقليل التكاليف",
    description:
      "أتمتة العمليات المتكررة وتحسين الكفاءة التشغيلية مما يؤدي إلى خفض التكاليف وزيادة الإنتاجية",
    icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
  },
  {
    title: "تحسين التواصل والتعاون",
    description:
      "منصة موحدة تعزز التواصل والتعاون بين مختلف أقسام الشركة وتزيل الحواجز التنظيمية",
    icon: <Users className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "توحيد البيانات وتحسين دقتها",
    description:
      "قاعدة بيانات مركزية تضمن اتساق المعلومات وتقلل من الأخطاء البشرية وازدواجية البيانات",
    icon: <Database className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "اتخاذ قرارات أفضل",
    description:
      "تحليلات متقدمة وتقارير شاملة تمكن المدراء من اتخاذ قرارات مستنيرة بناءً على بيانات دقيقة ومحدثة",
    icon: <Activity className="h-6 w-6 text-orange-500" />,
  },
  {
    title: "تحسين خدمة العملاء",
    description:
      "استجابة أسرع لاحتياجات العملاء وتحسين جودة الخدمة من خلال الوصول الفوري للمعلومات المطلوبة",
    icon: <ShoppingCart className="h-6 w-6 text-teal-500" />,
  },
  {
    title: "المرونة وقابلية التوسع",
    description:
      "نظام قابل للتخصيص والتوسع ليتناسب مع نمو الأعمال واحتياجاتها المتغيرة على المدى الطويل",
    icon: <Globe className="h-6 w-6 text-indigo-500" />,
  },
];

const testimonials = [
  {
    content:
      "نظام ERP من نانوسوفت غيّر طريقة عملنا بالكامل. أصبحت العمليات أكثر كفاءة وانخفضت التكاليف بنسبة 30%.",
    author: "أحمد محمد",
    position: "المدير التنفيذي، شركة الأفق للتجارة",
  },
  {
    content:
      "ساعدنا النظام على توحيد جميع بياناتنا في مكان واحد مما سهل عملية اتخاذ القرارات وحسّن من أدائنا العام.",
    author: "سارة أحمد",
    position: "مدير العمليات، مجموعة النجاح",
  },
  {
    content:
      "بفضل نظام إدارة المخزون المتطور، انخفضت نسبة المخزون الراكد بنسبة 40% وتحسنت دقة الجرد بشكل ملحوظ.",
    author: "محمد علي",
    position: "مدير اللوجستيات، شركة الشرق للتوزيع",
  },
];

const ERPSystem = () => {
  const [pricingPlans, setPricingPlans] = useState<Price[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [customFeatures, setCustomFeatures] = useState([...features]);

  // schema.org :
  const erpSchema = {
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "نظام تخطيط موارد المؤسسة NanoSoft ERP",
        "description": "نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة لإدارة الشركات والمؤسسات بكفاءة عالية",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "softwareVersion": "3.2.1",
        "featureList": features.map(f => f.title),
        "screenshot": {
          "@type": "ImageObject",
          // "url": `${process.env.VITE_SITE_URL}${ERP_Hero}`,
          "width": 1200,
          "height": 630
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "LYD",
          "lowPrice": "500",
          "highPrice": "5000",
          "offerCount": "3",
          "url": "https://nanosoft.ly/pricing"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "ratingCount": "89"
        },
        "review": testimonials.map(testimonial => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": testimonial.author
          },
          "reviewBody": testimonial.content,
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        }))
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
        "name": "صفحة نظام ERP - نانو سوفت",
        "description": "نظام ERP متكامل لإدارة كافة عمليات الشركات والمؤسسات بكفاءة عالية",
        "mainContentOfPage": {
          "@type": "WebPageElement",
          "cssSelector": ".container"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          // "url": `${process.env.VITE_SITE_URL}${ERP_Hero}`
        }
      }
    ]
  };

  useEffect(() => {
    const loadPrices = async () => {
      try {
        setIsLoading(true);
        const prices = await getPricesByCategory("erp");

        if (prices.length > 0) {
          setPricingPlans(prices);
        } else {
          console.log("No pricing plans found for ERP category");
        }
      } catch (error) {
        console.error("Error loading ERP pricing plans:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPrices();
  }, []);




  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-28  md:pt-32">
       {/* Open Graph  */}
       <SEO
        title="نانو سوفت - نظام تخطيط موارد المؤسسة ERP"
        description="نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة لإدارة الشركات والمؤسسات بكفاءة عالية"
        image={ImageOg}
        category="ERP Software"
        keywords="نظام ERP متكامل , برنامج إدارة الشركات , حلول ERP للشركات , نظام تخطيط موارد المؤسسات , إدارة العمليات بالبرمجيات "
        url="https://nanosoft.ly/erp"
      />
      {/* schema.org */}
      <SchemaMarkup schema={erpSchema} />
      <PageHeader
        title="نظام تخطيط موارد المؤسسة NanoSoft ERP"
        description="نظام متكامل يربط جميع عمليات الأعمال في منصة موحدة لإدارة الشركات والمؤسسات بكفاءة عالية"
      />

      {/* Hero Section with Image */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 my-10 md:my-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full md:w-auto text-right mt-8 md:mt-0"
        >
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-4">
            حل متكامل
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">
            منصة واحدة لإدارة جميع عمليات مؤسستك
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8">
            نظام ERP من نانوسوفت يوفر حلاً شاملاً لجميع احتياجات مؤسستك، من
            المبيعات والمشتريات إلى المخزون والمالية والموارد البشرية، كل ذلك
            من خلال منصة موحدة وسهلة الاستخدام تساعدك على تحسين الكفاءة وخفض
            التكاليف وزيادة الإنتاجية.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end items-stretch sm:items-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-nanosoft-primary hover:bg-nanosoft-primary/90 px-6 py-4 sm:py-6 text-base sm:text-lg">
                طلب عرض توضيحي
              </Button>
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto px-6 py-4 sm:py-6 text-base sm:text-lg">
                تعرف على المزيد
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 w-full md:w-auto"
        >
          <img
            src={ERP_Hero}
            alt="نظام تخطيط موارد المنشأة"
            className="rounded-lg shadow-2xl w-full object-cover h-48 sm:h-64 md:h-[400px] max-h-[400px]"
          />
        </motion.div>
      </div>

      {/* Main Benefits Section */}
      <div className="my-20 bg-gradient-to-r from-nanosoft-primary/5 to-nanosoft-primary/10 rounded-2xl p-8 lg:p-12">
        <div className="text-center mb-12">
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-4">
            لماذا نانوسوفت ERP؟
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            نظام ERP صمم خصيصًا للشركات العربية
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            يلبي نظام ERP من نانوسوفت احتياجات الشركات العربية مع دعم كامل للغة
            العربية ومتوافق مع المتطلبات المحلية والتشريعات الضريبية في المنطقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rtl">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 text-right"
            >
              <div className="mb-4 flex justify-end">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="my-20">
        <div className="text-center mb-12">
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-2">
            كيف يعمل النظام
          </Badge>
          <h2 className="text-3xl font-bold">
            نظام متكامل يربط جميع أقسام المؤسسة
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            يعمل نظام ERP على توحيد جميع البيانات والعمليات في منصة واحدة، مما
            يسمح بتدفق المعلومات بسلاسة بين مختلف الأقسام
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-nanosoft-primary/5 rounded-full z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-end text-right"
            >
              <div className="bg-white p-5 rounded-lg shadow-md mb-4 w-full">
                <h3 className="text-xl font-semibold mb-2">
                  قاعدة بيانات موحدة
                </h3>
                <p className="text-gray-600">
                  تخزين جميع بيانات المؤسسة في مكان واحد، مما يضمن اتساق
                  المعلومات وسهولة الوصول إليها من جميع الأقسام
                </p>
              </div>
              <Building className="h-12 w-12 text-nanosoft-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-end text-right"
            >
              <div className="bg-white p-5 rounded-lg shadow-md mb-4 w-full">
                <h3 className="text-xl font-semibold mb-2">تكامل الوظائف</h3>
                <p className="text-gray-600">
                  ربط جميع وظائف الأعمال من المبيعات إلى المالية والموارد
                  البشرية في نظام واحد متكامل يعمل بسلاسة
                </p>
              </div>
              <Settings className="h-12 w-12 text-nanosoft-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-end text-right"
            >
              <Globe className="h-12 w-12 text-nanosoft-primary" />
              <div className="bg-white p-5 rounded-lg shadow-md mt-4 w-full">
                <h3 className="text-xl font-semibold mb-2">الوصول عن بعد</h3>
                <p className="text-gray-600">
                  إمكانية الوصول إلى النظام من أي مكان وفي أي وقت عبر الإنترنت،
                  مما يتيح المرونة في العمل وإدارة الأعمال عن بعد
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-end text-right"
            >
              <Activity className="h-12 w-12 text-nanosoft-primary" />
              <div className="bg-white p-5 rounded-lg shadow-md mt-4 w-full">
                <h3 className="text-xl font-semibold mb-2">
                  تحليل البيانات وذكاء الأعمال
                </h3>
                <p className="text-gray-600">
                  أدوات متقدمة لتحليل البيانات واستخراج رؤى قيمة تساعد في اتخاذ
                  القرارات الإستراتيجية وتحسين الأداء العام
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Tabs */}
      <div className="my-20">
        <div className="text-center mb-12">
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-2">
            وحدات النظام
          </Badge>
          <h2 className="text-3xl font-bold">
            وحدات متكاملة لتلبية احتياجات مؤسستك
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            يتكون نظام ERP من نانوسوفت من مجموعة من الوحدات المتكاملة التي يمكن
            تفعيلها حسب احتياجات مؤسستك
          </p>
        </div>

        <Tabs defaultValue="sales" className="w-full ">
          <TabsList className="mb-6 w-full flex flex-wrap justify-center gap-2 min-h-fit">
            <TabsTrigger value="sales">المبيعات والعملاء</TabsTrigger>
            <TabsTrigger value="purchase">المشتريات والموردين</TabsTrigger>
            <TabsTrigger value="inventory">المخزون والمستودعات</TabsTrigger>
            <TabsTrigger value="finance">المالية والمحاسبة</TabsTrigger>
            <TabsTrigger value="hr">الموارد البشرية</TabsTrigger>
            <TabsTrigger value="reports">التقارير والتحليلات</TabsTrigger>
          </TabsList>

          {customFeatures.map((feature, index) => (
            <TabsContent
              key={index}
              value={
                ["sales", "purchase", "inventory", "finance", "hr", "reports"][
                  index
                ]
              }
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 text-right">
                  <div className="mb-4 text-nanosoft-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>

                  <ul className="space-y-3">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center justify-end gap-3">
                        <span>{point}</span>
                        <Check className="h-5 w-5 text-green-500 shrink-0" />
                      </li>
                    ))}
                  </ul>

                  <Link to="/pricing">
                    <Button className="mt-4 bg-nanosoft-primary hover:bg-nanosoft-primary/90">
                      اكتشف المزيد
                    </Button>
                  </Link>
                </div>

                <div className="flex-1">
                  <img
                    src={feature.imageFeatre}
                    alt={feature.title}
                    className="rounded-lg shadow-lg w-full h-[350px] object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Testimonials */}
      <div className="my-20">
        <div className="text-center mb-12">
          <Badge className="bg-nanosoft-primary/10 text-nanosoft-primary hover:bg-nanosoft-primary/20 mb-2">
            آراء العملاء
          </Badge>
          <h2 className="text-3xl font-bold">ماذا يقول عملاؤنا عن نظام ERP</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            نفتخر بثقة عملائنا وتجاربهم الناجحة مع نظام ERP من نانوسوفت
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-right"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="my-20 bg-gradient-to-r from-nanosoft-primary/5 to-nanosoft-primary/10 rounded-2xl p-8 lg:p-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <img
              src={ERP}
              alt="لماذا تختار نانوسوفت"
              className="rounded-lg shadow-xl object-cover h-[400px] w-full"
            />
          </div>
          <div className="flex-1 text-right">
            <Badge className="bg-nanosoft-primary/20 text-nanosoft-primary hover:bg-nanosoft-primary/30 mb-4">
              لماذا تختارنا؟
            </Badge>
            <h2 className="text-3xl font-bold mb-6">
              ما يميز نظام ERP من نانوسوفت
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <Shield className="h-6 w-6 text-nanosoft-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    أمان عالي وخصوصية تامة
                  </h3>
                  <p className="text-gray-600">
                    نظام آمن بمعايير عالمية لحماية بياناتك وخصوصية معلوماتك
                    المهمة
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Cloud className="h-6 w-6 text-nanosoft-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    حلول سحابية متكاملة
                  </h3>
                  <p className="text-gray-600">
                    اعمل من أي مكان وفي أي وقت عبر حلولنا السحابية دون الحاجة
                    لبنية تحتية معقدة
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Clock className="h-6 w-6 text-nanosoft-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    سرعة في التنفيذ والتشغيل
                  </h3>
                  <p className="text-gray-600">
                    بدء استخدام النظام في وقت قياسي مع دعم فني متميز على مدار
                    الساعة
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <CreditCard className="h-6 w-6 text-nanosoft-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    تكلفة منخفضة وعائد استثمار مرتفع
                  </h3>
                  <p className="text-gray-600">
                    أسعار تنافسية مع عائد استثمار سريع من خلال تحسين الكفاءة
                    وخفض التكاليف
                  </p>
                </div>
              </div>
            </div>

            <Link to="/pricing">
              <Button className="mt-8 bg-nanosoft-primary hover:bg-nanosoft-primary/90">
                ابدأ الآن
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="my-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          جاهز لتطوير مؤسستك مع نظام ERP متكامل؟
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          انضم إلى آلاف الشركات التي تستخدم نظام ERP من نانوسوفت لتحسين كفاءة
          العمليات وزيادة الإنتاجية
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

export default ERPSystem;
