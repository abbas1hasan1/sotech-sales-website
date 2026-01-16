import Hero from './components/Hero';
import Differentiators from './components/Differentiators';
import PricingCalculator from './components/PricingCalculator';
import WhatsIncluded from './components/WhatsIncluded';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Differentiators />
      <PricingCalculator />
      <WhatsIncluded />
      <CTASection />
    </main>
  );
}
