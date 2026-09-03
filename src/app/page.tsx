import LoadingScreen from "./components/LoadingScreen";
import ParallaxHero from "./components/ParallaxHero";
import AboutSection from "./components/AboutSection";
import MarqueeBanner from "./components/MarqueeBanner";
import FestStatsBanner from "./components/FestStatsBanner";
import PrizePoolSection from "./components/PrizePoolSection";
import EventsDial from "./components/EventsDial";
import TimelineSection from "./components/TimelineSection";
import RegistrationCTA from "./components/RegistrationCTA";
import FAQSection from "./components/FAQSection";
import SponsorsSection from "./components/SponsorsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <LoadingScreen />
      <ParallaxHero />
      <AboutSection />
      <MarqueeBanner />
      <FestStatsBanner />
      <EventsDial />
      <PrizePoolSection />
      <TimelineSection />
      <RegistrationCTA />
      <FAQSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
