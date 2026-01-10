import gsap from "gsap";
import { ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <main className="h-screen flex-center">
      <h1 className="text-4xl font-bold flex-center">Hello GSAP!</h1>
    </main>
  );
}
