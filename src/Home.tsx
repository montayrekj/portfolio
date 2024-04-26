import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="w-screen min-h-screen font-light px-6">
      <div className="max-w-screen-xl mx-auto pt-32 text-center">
        <Hero />
        <AboutMe />
        <Languages />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
