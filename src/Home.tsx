import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Languages from "./components/Languages";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-white dark:bg-black text-black dark:text-white font-light px-6">
      <div className="max-w-screen-xl mx-auto pt-32 text-center">
        <Hero />
        <AboutMe />
        <Languages />
      </div>
    </div>
  );
}
