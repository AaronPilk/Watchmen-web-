import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { GotYour6 } from "@/components/sections/GotYour6";
import { WatchBuild } from "@/components/sections/WatchBuild";
import { Membership } from "@/components/sections/Membership";
import { Experiences } from "@/components/sections/Experiences";
import { AppSection } from "@/components/sections/AppSection";
import { Benefits } from "@/components/sections/Benefits";
import { Stats } from "@/components/sections/Stats";
import { Fund } from "@/components/sections/Fund";
import { StoryTeaser } from "@/components/sections/StoryTeaser";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <WhoWeAre />
        <GotYour6 />
        <WatchBuild />
        <Membership />
        <Experiences />
        <AppSection />
        <Benefits />
        <Stats />
        <Fund />
        <StoryTeaser />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
