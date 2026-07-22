import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Statistics } from "@/components/Statistics";
import { Skills } from "@/components/Skills";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Timeline } from "@/components/Timeline";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { CodingProfiles } from "@/components/CodingProfiles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { CinematicOverlay } from "@/components/CinematicOverlay";
import { DevBuddy } from "@/components/DevBuddy";
import { GlobalInteractions } from "@/components/GlobalInteractions";

export default function Home() {
  return (
    <>
      <GlobalInteractions />
      <Preloader />
      <BackgroundVideo />
      <CinematicOverlay />
      <CustomCursor />
      <DevBuddy />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <About />
        <Statistics />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Timeline />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Achievements />
        <div className="section-divider" />
        <CodingProfiles />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
