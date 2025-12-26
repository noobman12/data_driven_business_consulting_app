import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import About from '../components/About'; // Reused Vision section
import MissionGrid from '../components/MissionGrid';
import TeamGallery from '../components/TeamGallery';
import Awards from '../components/Awards';
import Testimonials from '../components/Testimonials'; // Reused
import FAQ from '../components/FAQ'; // Reused
import CTA from '../components/CTA'; // Reused
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ef4476] selection:text-white">
      <Navbar />
      <AboutHero />
      <About /> {/* "Empowering Businesses with Vision..." */}
      <MissionGrid />
      <TeamGallery />
      <Awards />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
