import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Hobbies } from "./components/Hobbies";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Hobbies />
      <Contact />
    </>
  )
}
