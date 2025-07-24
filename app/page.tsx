import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Hobbies } from "./components/Hobbies";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <Hero />
      <Projects />
      <About />
      <Hobbies />
      <Contact />
    </div>
  )
}
