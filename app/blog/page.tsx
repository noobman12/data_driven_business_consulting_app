import Navbar from '../components/Navbar';
import BlogHero from '../components/BlogHero';
import BlogGrid from '../components/BlogGrid';
import PopularNow from '../components/PopularNow';
import Testimonials from '../components/Testimonials'; // Reused
import FAQ from '../components/FAQ'; // Reused
import CTA from '../components/CTA'; // Reused
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ef4476] selection:text-white">
      <Navbar />
      <BlogHero />
      <BlogGrid />
      <PopularNow />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
