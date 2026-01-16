import Hero from './components/Hero';
import ValueReveal from './components/ValueReveal';
import PricingCalculator from './components/PricingCalculator';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueReveal />
      <PricingCalculator />
      <CTASection />
    </main>
  );
}
