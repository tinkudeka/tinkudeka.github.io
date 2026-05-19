export function Skills() {
  const skillCategories = [
    {
      title: "💻 Technical",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "🛠️ Tools",
      skills: ["GitHub", "Canva", "Tally", "MS Office", "VS Code"],
    },
    {
      title: "🌟 Soft Skills",
      skills: ["Problem Solving", "Fast Learner", "Communication", "Research"],
    },
    {
      title: "🗣️ Languages",
      skills: ["Assamese (Native)", "Hindi (Fluent)", "English (Professional)"],
    },
  ];

  return (
    <section className="py-24 px-[6%] bg-background-alt" id="skills">
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-accent">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-8 hover:border-accent hover:translate-y-[-3px] transition-all"
          >
            <h3 className="text-lg font-medium mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-accent/10 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
