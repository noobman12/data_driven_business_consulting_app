import Navbar from '../components/Navbar';
import ServiceHero from '../components/ServiceHero';
import Services from '../components/Services'; // Reused from Home
import ServiceDetail from '../components/ServiceDetail';
import ServiceSolutions from '../components/ServiceSolutions';
import CaseStudies from '../components/CaseStudies'; // Reused
import Testimonials from '../components/Testimonials'; // Reused
import FAQ from '../components/FAQ'; // Reused
import CTA from '../components/CTA'; // Reused
import Footer from '../components/Footer';

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ef4476] selection:text-white">
      <Navbar />
      <ServiceHero />
      <Services /> {/* "Strategic Solutions to Optimize..." 5-card grid */}
      <ServiceDetail /> {/* "Financial Advisory..." with video placeholder */}
      <ServiceSolutions /> {/* "Strategic Solutions..." image + numbered list */}
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
