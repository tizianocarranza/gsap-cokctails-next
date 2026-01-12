"use client"

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Navbar, Hero, Cocktails, About, Art } from "./components";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
}
