import { ThemeProvider } from "next-themes";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

const Layout = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    <a
      href="#main"
      className="sr-only z-[60] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Saltar al contenido
    </a>
    <Navbar />
    <main id="main">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppFloat />
    <Toaster />
  </ThemeProvider>
);

export default Layout;
