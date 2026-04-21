import HeroSection from "@/components/home/HeroSection";
import FeaturedProject from "@/components/home/FeaturedProject";
import ProjectGrid from "@/components/home/ProjectGrid";
import AboutSnippet from "@/components/home/AboutSnippet";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProject />
      <ProjectGrid />
      <AboutSnippet />
    </>
  );
}
