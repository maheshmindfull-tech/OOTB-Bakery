import { useEffect } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Equipment from "./pages/Equipment";
import FoodSafety from "./pages/FoodSafety";
import Facility from "./pages/Facility";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const main = document.querySelector("main");
    if (!main) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const nodes = [...main.querySelectorAll("section:not(.hero)")];
    const seen = nodes.filter((node) => node.getBoundingClientRect().top < window.innerHeight * 0.92);
    const waiting = nodes.filter((node) => !seen.includes(node));
    nodes.forEach((node) => node.classList.add("reveal"));
    const frame = requestAnimationFrame(() => {
      seen.forEach((node) => node.classList.add("is-in"));
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
    );
    waiting.forEach((node) => observer.observe(node));
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="food-safety" element={<FoodSafety />} />
        <Route path="facilities" element={<Facility />} />
        <Route path="industries" element={<Industries />} />
        <Route path="careers" element={<Careers />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
