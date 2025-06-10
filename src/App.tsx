



import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Suspense fallback={null}>
      <Navbar />
    </Suspense>
    <main>
      {children}
    </main>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </>
);

const Index = lazy(() => import("./pages/Index"));
const Pricing = lazy(() => import("./pages/Pricing"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const WebDevService = lazy(() => import("./pages/WebDevService"));
const AccountingSystem = lazy(() => import("./pages/AccountingSystem"));
const InventorySystem = lazy(() => import("./pages/InventorySystem"));
const HRSystem = lazy(() => import("./pages/HRSystem"));
const Injaze = lazy(() => import("./pages/Injaze"));
const ERPSystem = lazy(() => import("./pages/ERPSystem"));
const PrivacyPolicy = lazy(() => import("./pages/PrivasyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermesAndConditions"));
const CyberSecurity = lazy(() => import("./components/CyberSecurity"));
const CloudServices = lazy(() => import("./components/CloudServices"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const PriceAdmin = lazy(() => import("./pages/admin/PriceAdmin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Loading = lazy(() => import("./components/Loading"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center"><Loading /></div>}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<MainLayout><Index /></MainLayout>} />
                <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
                <Route path="/contact" element={<MainLayout><ContactUs /></MainLayout>} />
                <Route path="/software-development" element={<MainLayout><WebDevService /></MainLayout>} />
                <Route path="/accounting" element={<MainLayout><AccountingSystem /></MainLayout>} />
                <Route path="/inventory" element={<MainLayout><InventorySystem /></MainLayout>} />
                <Route path="/hr" element={<MainLayout><HRSystem /></MainLayout>} />
                <Route path="/injaz" element={<MainLayout><Injaze /></MainLayout>} />
                <Route path="/erp" element={<MainLayout><ERPSystem /></MainLayout>} />
                <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
                <Route path="/terms-of-use" element={<MainLayout><TermsAndConditions /></MainLayout>} />
                <Route path="/cyber-security" element={<MainLayout><CyberSecurity /></MainLayout>} />
                <Route path="/cloud-services" element={<MainLayout><CloudServices /></MainLayout>} />

                {/* Admin routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin" element={<DashboardLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="prices" element={<PriceAdmin />} />
                </Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
