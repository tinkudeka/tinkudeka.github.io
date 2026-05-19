import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center pt-[70px] overflow-hidden relative">
      {/* Left side: text */}
      <div className="p-10 md:pl-[6%] md:pr-[5%] order-2 md:order-1 text-center md:text-left z-10">
        <p className="text-sm text-accent tracking-[3px] uppercase mb-2">
          Hello, I&apos;m
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 gradient-text">
          Tinku Deka
        </h1>
        <p className="text-base text-accent-2 font-medium mb-5">
          BCA Student · Full-Stack Developer · Problem Solver
        </p>
        <p className="text-muted text-base mb-8 max-w-md mx-auto md:mx-0">
          Passionate about building technology-driven solutions and exploring
          how people search, think, and interact with information.
        </p>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <Link
            href="#projects"
            className="bg-accent text-background px-8 py-3 rounded-full font-bold text-sm hover:translate-y-[-2px] hover:shadow-[0_8px_25px_rgba(232,168,56,0.4)] transition-all inline-block"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="border-2 border-accent text-accent px-8 py-3 rounded-full font-semibold text-sm hover:bg-accent hover:text-background transition-all inline-block"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right side: full photo */}
      <div className="w-full h-[55vh] md:h-screen relative overflow-hidden order-1 md:order-2 hero-image-overlay">
        <Image
          src="/images/profile.jpg"
          alt="Tinku Deka"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </section>
  );
}
