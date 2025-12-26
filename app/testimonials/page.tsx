import Navbar from '../components/Navbar';
import TestimonialsHero from '../components/TestimonialsHero';
import Testimonials from '../components/Testimonials'; // Reused
import SuccessStoriesGallery from '../components/SuccessStoriesGallery';
import FeaturedTestimonialGrid from '../components/FeaturedTestimonialGrid';
import FAQ from '../components/FAQ'; // Reused
import CTA from '../components/CTA'; // Reused
import Footer from '../components/Footer';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ef4476] selection:text-white">
      <Navbar />
      <TestimonialsHero />
      <Testimonials /> {/* Stats & Highlight Quote */}
      <SuccessStoriesGallery />
      <FeaturedTestimonialGrid />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
