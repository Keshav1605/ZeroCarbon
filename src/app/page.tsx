import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ProtocolExplainer } from '@/components/sections/ProtocolExplainer';
import { Capabilities } from '@/components/sections/Capabilities';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { Architecture } from '@/components/sections/Architecture';
import { Integrations } from '@/components/sections/Integrations';
import { CtaBand } from '@/components/sections/CtaBand';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProtocolExplainer />
        <Capabilities />
        <ComparisonTable />
        <Architecture />
        <Integrations />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
