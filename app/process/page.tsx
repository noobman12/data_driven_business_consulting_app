import Navbar from '../components/Navbar';
import ProcessHero from '../components/ProcessHero';
import ProcessSteps from '../components/ProcessSteps';
import Testimonials from '../components/Testimonials'; // Reused
import FAQ from '../components/FAQ'; // Reused
import CTA from '../components/CTA'; // Reused
import Footer from '../components/Footer';

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ef4476] selection:text-white">
      <Navbar />
      <ProcessHero />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
