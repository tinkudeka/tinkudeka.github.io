export function Education() {
  const education = [
    {
      icon: "🎓",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Dispur College, Gauhati University",
      date: "Expected 2026",
    },
    {
      icon: "📘",
      title: "Higher Secondary Certificate – Science",
      institution: "Mrityunjay Academy, Barpeta · AHSEC",
      date: "2023",
    },
    {
      icon: "📗",
      title: "High School Leaving Certificate (HSLC)",
      institution: "Asomi Jatiya Vidyalaya, Nalbari · SEBA",
      date: "2021",
    },
    {
      icon: "🏅",
      title: "Diploma in Computer Applications (DCA)",
      institution: "Learning Lab Institute (MSME Registered, Govt. of India) · Grade A",
      date: "Sep 2021 – Mar 2022",
      isCert: true,
    },
  ];

  return (
    <section className="py-24 px-[6%]" id="education">
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-12 text-center">
        Education & <span className="text-accent">Certifications</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-xl p-7 flex gap-5 items-start hover:border-accent hover:translate-y-[-4px] transition-all"
          >
            <span className="text-3xl flex-shrink-0">{item.icon}</span>
            <div>
              <h3 className="text-base font-medium mb-1">{item.title}</h3>
              <p className="text-muted text-sm">{item.institution}</p>
              <p className="text-accent-2 text-sm mt-2">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
