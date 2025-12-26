import Navbar from '../components/Navbar';
import BookingHero from '../components/BookingHero';
import BookingForm from '../components/BookingForm';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#ef4476] selection:text-white">
      <Navbar />
      <BookingHero />
      <BookingForm />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
