import Navbar from '../components/Navbar';
import PricingHero from '../components/PricingHero';
import PricingFeatures from '../components/PricingFeatures';
import Pricing from '../components/Pricing'; // Reused from Home
import Testimonials from '../components/Testimonials'; // Reused
import FAQ from '../components/FAQ'; // Reused
import CTA from '../components/CTA'; // Reused
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ef4476] selection:text-white">
      <Navbar />
      <PricingHero />
      <PricingFeatures />
      <Pricing /> {/* "Transparent Pricing..." section */}
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
