import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import WhyEnovo from '@/components/WhyEnovo';
import TechExpertise from '@/components/TechExpertise';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import InternationalClients from '@/components/InternationalClients';
import Testimonials from '@/components/Testimonials';
import FAQs from '@/components/FAQs';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <WhyEnovo />
        <TechExpertise />
        <Services />
        <Industries />
        <Process />
        <InternationalClients />
        <Testimonials />
        <FAQs />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
