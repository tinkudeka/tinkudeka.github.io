import Image from "next/image";
import Link from "next/link";

export function About() {
  const cards = [
    { emoji: "🎓", text: "Final Year BCA" },
    { emoji: "💼", text: "IT Intern @ AMTRON" },
    { emoji: "🌐", text: "Full-Stack Dev" },
    { emoji: "📍", text: "Guwahati, Assam" },
  ];

  return (
    <section className="py-24 px-[6%]" id="about">
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-accent">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-5">
          <p className="text-muted text-base">
            I&apos;m a final-year BCA student at Dispur College, Gauhati University,
            with a strong drive for analytical problem-solving and self-directed
            learning. I love building real-world technology solutions that solve
            actual problems.
          </p>
          <p className="text-muted text-base">
            I&apos;ve worked as an IT Intern at AMTRON (Assam Electronics Development
            Corporation Ltd.), where I gained hands-on experience in government
            IT infrastructure and enterprise-level systems.
          </p>
          <p className="text-muted text-base">
            Fluent in Assamese, Hindi, and English — I enjoy translating complex
            technical ideas into simple, clear language.
          </p>
          <div className="flex gap-6 flex-wrap mt-6">
            <Link
              href="https://linkedin.com/in/tinkudeka"
              target="_blank"
              className="text-accent font-medium flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </Link>
            <Link
              href="https://github.com/tinkudeka"
              target="_blank"
              className="text-accent font-medium flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <i className="fab fa-github"></i> GitHub
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:translate-y-[-4px] hover:border-accent transition-all"
            >
              <span className="text-3xl">{card.emoji}</span>
              <p className="text-muted text-sm mt-2">{card.text}</p>
            </div>
          ))}
          <div className="col-span-2 mt-4 rounded-2xl overflow-hidden border-2 border-border hover:border-accent hover:translate-y-[-4px] transition-all">
            <Image
              src="/images/photo2.jpeg"
              alt="Tinku Deka"
              width={600}
              height={320}
              className="w-full h-80 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
