import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import MenuSection from "./components/MenuSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <MenuSection/>
      <Contact/>
    </main>
  );
}