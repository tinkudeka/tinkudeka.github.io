export function Experience() {
  const experiences = [
    {
      title: "IT Intern",
      company: "AMTRON – Assam Electronics Development Corporation Ltd., Guwahati",
      date: "2024 · 1 Month",
      points: [
        "Analysed day-to-day technical workflows in a government IT environment",
        "Resolved software issues using structured troubleshooting logic",
        "Gained exposure to enterprise-level IT systems and user behaviour",
      ],
    },
  ];

  return (
    <section className="py-24 px-[6%] bg-background-alt" id="experience">
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-accent">Experience</span>
      </h2>

      <div className="max-w-3xl mx-auto relative timeline-line">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-8 mb-10">
            <div className="w-7 h-7 min-w-7 bg-accent rounded-full border-[3px] border-background mt-1 flex-shrink-0 relative z-10" />
            <div className="bg-card border border-border rounded-xl p-6 flex-1 hover:border-accent transition-colors">
              <h3 className="text-lg font-medium mb-1">{exp.title}</h3>
              <p className="text-accent text-sm mb-1">{exp.company}</p>
              <p className="text-muted text-xs mb-4">{exp.date}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-muted text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
