import Hero from './components/Hero';
import Experience from './components/Experience';
import Builds from './components/Builds';
import About from './components/About';
import Contact from './components/Contact';
import { ColorStrip, PressSlug } from './components/Marks';

export default function Home() {
  return (
    <>
      <Hero />
      <ColorStrip />
      <PressSlug sheet="sheet 2 · work history" />
      <Experience />
      <Builds />
      <PressSlug sheet="sheet 4 · about" className="pslug--join" />
      <About />
      <Contact />
    </>
  );
}
