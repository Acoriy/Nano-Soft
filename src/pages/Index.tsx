import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { IoIosArrowBack } from "react-icons/io";
import { ArrowLeft } from "lucide-react";

import SEO from "../components/SEO.js";
// import ImageOg from "../assets/LogoNanosSoft.png";

// Import des données et assets
import { serviceCategories } from "../data/pricingData.js";
import ProductsSection from "@/components/ProductsSection";
// import HomeBlogSection from "@/components/HomeBlogSection";
import LogosSection from "@/components/LogosSection";

// Images et logos
import systems from "../assets/IndexImages/systheme partenaria.webp";
import HeroImage from "../assets/IndexImages/heroImage.webp";
import ExperiencesImage from "../assets/IndexImages/experiences.webp";
import Customer1 from "../assets/CustomersLogo/Picture1.webp";
import Customer2 from "../assets/CustomersLogo/Picture2.webp";
import Customer3 from "../assets/CustomersLogo/Picture3.webp";
import Customer4 from "../assets/CustomersLogo/Picture4.webp";
import Customer5 from "../assets/CustomersLogo/Picture5.webp";
import Customer6 from "../assets/CustomersLogo/Picture6.webp";
import Customer7 from "../assets/CustomersLogo/Picture7.webp";
import Customer8 from "../assets/CustomersLogo/Picture8.webp";
import Customer9 from "../assets/CustomersLogo/Picture9.webp";
import SchemaMarkup from "@/components/SchemaMatkup.js";

const brands = [
  { src: Customer1, alt: "Microsoft" },
  { src: Customer2, alt: "IBM" },
  { src: Customer3, alt: "Oracle" },
  { src: Customer4, alt: "Amazon Web Services" },
  { src: Customer5, alt: "Amazon Web Services" },
  { src: Customer6, alt: "Amazon Web Services" },
  { src: Customer7, alt: "Amazon Web Services" },
  { src: Customer8, alt: "Amazon Web Services" },
  { src: Customer9, alt: "Amazon Web Services" },
];

const Index = () => {
  const [changeIcon, setChangeIcon] = useState(false);

  // SEO
  // const ImageOg = "https://nanosoft.ly/LogoNanosSoft.png?w=1200&h=630&fit=crop";
  const ImageOg =
    "https://nanosoft-sass.vercel.app/src/assets/Og-Images/LogoNanosSoft.jpg";

  const handleHoverIconBtn = () => setChangeIcon(!changeIcon);

  // Schema structured data (Schema.org)
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "نانو سوفت",
        url: "https://nanosoft.ly",
        // "logo": `${process.env.VITE_SITE_URL}${ImageOg}`,
        description:
          "شركة برمجيات متخصصة في تطوير الحلول الرقمية المتكاملة للشركات والمؤسسات",
        foundingDate: "2018",
        founders: [
          {
            "@type": "Person",
            name: "المؤسس",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+218918889193",
          contactType: "customer service",
          email: "info@nanosoft.ly",
          areaServed: "LY",
        },
        sameAs: [
          "https://facebook.com/nanosoft",
          "https://linkedin.com/company/nanosoft",
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "Libya",
        },
      },
      {
        "@type": "WebSite",
        name: "نانو سوفت",
        url: "https://nanosoft.ly",
        description:
          "الحلول البرمجية المتكاملة لتطوير الأعمال والأنظمة الإدارية",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://nanosoft.ly/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-x-hidden" lang="ar">
      {/* Open Graph  */}
      <SEO
        title="نانو سوفت - حلول الأنظمة الرقمية"
        description="شركة برمجيات متخصصة في تطوير المواقع والتطبيقات وأنظمة إدارة الأعمال المتكاملة بتقنيات حديثة"
        image={ImageOg}
        category="Software Solutions"
        keywords="حلول تكنولوجيا الشركات , أنظمة إدارة الأعمال الذكية , منصة أعمال رقمية متكاملة , "
        url="https://nanosoft.ly"
      />

      <SchemaMarkup schema={homepageSchema} />

      {/* Section Hero */}
      <section className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center pt-20 md:pt-16">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/70 dark:to-gray-900/30"></div>
        <div className="container mx-auto px-4 z-10 py-12 md:py-20 w-full h-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 text-center lg:text-right"
            >
              <span className="inline-block px-4 py-1 bg-nanosoft-primary/10 text-nanosoft-primary rounded-full text-sm font-semibold mb-4">
                الرائدة في حلول تقنية المعلومات
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight">
                <span className="inline-block relative text-nanosoft-primary">
                  NanoSoft
                </span>
                <br />
                <span className="font-semibold">لحلول الأنظمة الرقمية</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                نقدم لك حلول تقنية متكاملة تساعدك على تطوير أعمالك وزيادة إنتاجيتك مع أحدث التقنيات المبتكرة.
              </p>
              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center lg:justify-start">
                <Link
                  to="/pricing"
                  className="text-white bg-nanosoft-primary text-lg md:text-xl font-bold px-6 py-3 md:p-4 rounded-lg hover:bg-green-700 transition-colors duration-300 w-full sm:w-auto text-center"
                  aria-label="Essai gratuit"
                >
                  تجربة مجانية
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent text-nanosoft-accent font-bold text-lg md:text-xl flex items-center justify-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-1 w-full sm:w-auto"
                  onMouseEnter={handleHoverIconBtn}
                  onMouseLeave={handleHoverIconBtn}
                  aria-label="احجز عرضًا توضيحيًا"
                >
                  <span>احجز عرضًا توضيحيًا</span>
                  <span className="flex items-center">
                    {changeIcon ? (
                      <ArrowLeft size={24} className="md:w-7 md:h-7" />
                    ) : (
                      <IoIosArrowBack size={24} className="md:w-7 md:h-7" />
                    )}
                  </span>
                </Link>
              </div>
            </motion.div>
            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative mb-12 lg:mb-0 flex justify-center"
            >
              <div className="w-full h-full absolute top-4 md:top-8 right-4 md:right-8 bg-nanosoft-primary/10 rounded-2xl md:rounded-3xl"></div>
              <img
                src={HeroImage}
                alt="Software Development"
                className="rounded-2xl md:rounded-3xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover shadow-xl md:shadow-2xl"
                loading="lazy"
              />
              {/* Quality Badge */}
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] xl:w-[300px]">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-3 md:p-4">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center">
                      {/* Check Icon */}
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-nanosoft-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-sm md:text-base">
                      جودة عالية
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    نحن نقدم حلولًا برمجية عالية الجودة تلبي احتياجاتك وتتجاوز توقعاتك.
                  </p>
                </div>
              </div>
              {/* Delivery Badge */}
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] xl:w-[250px]">
                <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl  p-3 md:p-4">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-nanosoft-primary/20 flex items-center justify-center">
                      {/* Clock Icon */}
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-nanosoft-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-sm md:text-base">
                      تسليم سريع
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    نلتزم بتسليم مشاريعنا في الوقت المحدد دون المساس بالجودة.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute -bottom-2 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#services"
            className="flex flex-col items-center text-gray-400 hover:text-nanosoft-primary transition-colors"
            aria-label="تعرف على المزيد"
          >
            <span className="text-xs md:text-sm mb-1 md:mb-2">
              تعرف على المزيد
            </span>
            {/* Down Arrow Icon */}
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Section Logos Clients */}
      <LogosSection brands={brands} />

      {/* Section Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-nanosoft-primary/10 text-nanosoft-primary rounded-full text-sm font-medium mb-4">
              خدماتنا
            </span>
            <h2 id="services" className="text-3xl md:text-4xl font-bold mb-6">
              حلول مبتكرة لأعمالك
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المصممة لمساعدة شركتك على النمو
              والازدهار في العالم الرقمي.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className="w-16 h-16 rounded-2xl bg-nanosoft-primary/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-nanosoft-primary group-hover:text-white transition-all duration-300"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={`/${service.id}`}
                  className="inline-flex items-center text-nanosoft-primary font-medium group-hover:translate-x-2 transition-transform duration-300"
                  aria-label="عرض التفاصيل"
                >
                  عرض التفاصيل
                  <svg
                    className="w-5 h-5 mr-2 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-full absolute top-8 left-8 bg-nanosoft-primary/10 rounded-3xl"></div>
              <img
                src={ExperiencesImage}
                alt="Our Team"
                className="rounded-3xl w-full h-[500px] object-cover shadow-2xl relative z-10"
                loading="lazy"
              />
              <div className="absolute -top-6 -left-6 z-20">
                <div className="bg-nanosoft-primary rounded-2xl shadow-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">+7 سنوات</h4>
                  <p className="text-white/80">من الخبرة في مجال البرمجيات</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 bg-nanosoft-primary/10 text-nanosoft-primary rounded-full text-sm font-medium mb-4">
                من نحن
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                فريق من الخبراء المتخصصين في تطوير البرمجيات
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                بدأت رحلتنا في سنة 2018، ومنذ ذلك الحين قمنا بمساعدة العديد من
                الزبائن على رقمنة أعمالهم وتحسين كفائتها.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div
                    className="w-5 h-5 rounded-full bg-nanosoft-primary/20 flex items-center justify-center ml-3 mt-1"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-nanosoft-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    فريق من المطورين المحترفين ذوي الخبرة العالية
                  </p>
                </div>
                <div className="flex items-start">
                  <div
                    className="w-5 h-5 rounded-full bg-nanosoft-primary/20 flex items-center justify-center ml-3 mt-1"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-nanosoft-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    نهج مخصص يركز على احتياجات العميل
                  </p>
                </div>
                <div className="flex items-start">
                  <div
                    className="w-5 h-5 rounded-full bg-nanosoft-primary/20 flex items-center justify-center ml-3 mt-1"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-nanosoft-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    تقنيات متطورة وأحدث الأدوات لتقديم أفضل النتائج
                  </p>
                </div>
                <div className="flex items-start">
                  <div
                    className="w-5 h-5 rounded-full bg-nanosoft-primary/20 flex items-center justify-center ml-3 mt-1"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-nanosoft-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600">
                    دعم مستمر ومتابعة لضمان رضا العملاء
                  </p>
                </div>
              </div>
              {/* <LinkScroll
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="inline-flex items-center hover:cursor-pointer px-6 py-3 bg-nanosoft-primary text-white rounded-xl font-medium hover:bg-nanosoft-secondary transition-colors"
                    aria-label="تعرف على خدماتنا"
                  >
                    تعرف على خدماتنا
                    <svg className="w-5 h-5 mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </LinkScroll> */}

              <a
                href="#services"
                className="inline-flex  items-center  hover:cursor-pointer px-6 py-3 bg-nanosoft-primary text-white rounded-xl font-medium hover:bg-nanosoft-secondary transition-colors"
                aria-label="تعرف على خدماتنا"
              >
                <LinkScroll
                  to="services"
                  className="flex flex-row"
                  spy={true}
                  smooth={true}
                  duration={500}
                  role="button"
                  tabIndex={0}
                >
                  تعرف على خدماتنا
                  <svg
                    className="w-5 h-5 mr-2 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </LinkScroll>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-nanosoft-primary/10 text-nanosoft-primary rounded-full text-sm font-medium mb-4">
              لماذا تختارنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              مميزات NanoSoft
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نحن نسعى جاهدين لتقديم أفضل الحلول البرمجية التي تلبي احتياجات
              عملائنا وتتجاوز توقعاتهم.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-nanosoft-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-nanosoft-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">حلول آمنة وموثوقة</h3>
              <p className="text-gray-600">
                نحن نضع أمن البيانات في مقدمة أولوياتنا، ونستخدم أحدث تقنيات
                الحماية لضمان سلامة بياناتك.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-nanosoft-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-nanosoft-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">أداء عالي وسرعة فائقة</h3>
              <p className="text-gray-600">
                نطور حلولًا مُحسّنة للأداء تعمل بسرعة وكفاءة، مما يوفر تجربة
                مستخدم سلسة وسريعة.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-nanosoft-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-nanosoft-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">تصميم سهل الاستخدام</h3>
              <p className="text-gray-600">
                نركز على تصميم واجهات سهلة الاستخدام وبديهية تجعل التفاعل مع
                تطبيقاتنا تجربة ممتعة.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-nanosoft-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-nanosoft-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">تحديثات مستمرة</h3>
              <p className="text-gray-600">
                نقدم تحديثات منتظمة لتطبيقاتنا لضمان مواكبتها لأحدث التقنيات
                والمعايير الأمنية.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-nanosoft-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-nanosoft-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">قابلية للتوسع</h3>
              <p className="text-gray-600">
                نطور حلولًا قابلة للتوسع تنمو مع نمو أعمالك، مما يضمن استمرارية
                الاستفادة منها على المدى الطويل.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-nanosoft-primary/10 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-nanosoft-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">دعم فني متميز</h3>
              <p className="text-gray-600">
                نقدم دعمًا فنيًا متميزًا على مدار الساعة لضمان حل أي مشكلات قد
                تواجهك في أسرع وقت ممكن.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductsSection />

      {/* Blog Section */}
      {/* <HomeBlogSection /> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-nanosoft-primary to-nanosoft-accent rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="p-10 md:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  جاهز لتطوير أعمالك؟
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  دعنا نساعدك في تحويل أفكارك إلى حلول رقمية مبتكرة. اتصل بنا
                  اليوم للحصول على استشارة مجانية وابدأ رحلتك نحو النجاح الرقمي.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/pricing"
                    className="px-8 py-4 bg-white text-nanosoft-primary rounded-xl font-medium hover:bg-gray-100 transform transition-all duration-300 shadow-lg text-center"
                    aria-label="عرض الأسعار"
                  >
                    عرض الأسعار
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 border border-white text-white rounded-xl font-medium hover:bg-white/10 transform transition-all duration-300 text-center"
                    aria-label="تواصل معنا"
                  >
                    تواصل معنا
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src={systems}
                  alt="أنظمة شراكة"
                  className="w-full h-full object-cover"
                  style={{ maxHeight: "500px" }}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
