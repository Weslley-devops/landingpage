import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
