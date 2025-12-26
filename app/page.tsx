import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Blog from './components/Blog';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ef4476] selection:text-white">
      <Navbar />
      <Hero />
      <Logos />
      <About />
      <Services />
      <WhyChooseUs />
      <CaseStudies />
      <Blog />
      <Pricing />
      <Team />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
