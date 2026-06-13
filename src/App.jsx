import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import AppShowcase from "./sections/ShowcaseSection";
import FeatureCard from "./sections/FeatureCard";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <AppShowcase/>
    <LogoSection/>
    <FeatureCard/>
    <ExperienceSection/>
    </>
  )
}

export default App
  