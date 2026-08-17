import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Glance from '@/components/landing/Glance';
import Conditions from '@/components/landing/Conditions';
import HowItWorks from '@/components/landing/HowItWorks';
import Features from '@/components/landing/Features';
import FoodCheck from '@/components/landing/FoodCheck';
import PlanAndGrocery from '@/components/landing/PlanAndGrocery';
import PrepSpotlight from '@/components/landing/PrepSpotlight';
import Assistant from '@/components/landing/Assistant';
import AppDownload from '@/components/landing/AppDownload';
import Testimonials from '@/components/landing/Testimonials';
import { Security, Disclaimer } from '@/components/landing/Security';
import Faq from '@/components/landing/Faq';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f6f8fa' }}>
      <Navbar />

      <main id="top">
        <Hero />
        <Glance />
        <Conditions />
        <HowItWorks />
        <Features />
        <FoodCheck />
        <PlanAndGrocery />
        <PrepSpotlight />
        <Assistant />
        <AppDownload />
        <Testimonials />
        <Security />
        <Disclaimer />
        <Faq />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
