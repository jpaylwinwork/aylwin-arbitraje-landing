const team = [
  {
    name: "Miguel Aylwin Fernández",
    role: "Socio",
    bio: "Abogado de Aylwin Abogados, con práctica en resolución de controversias y cumplimiento regulatorio en proyectos de construcción e infraestructura.",
  },
  {
    name: "Vicente Aylwin Fernández",
    role: "Socio",
    bio: "Abogado especializado en disputas contractuales del sector construcción. [Biografía por confirmar]",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900">
          El equipo
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Socios a cargo directo de cada caso, con el respaldo institucional de
          Aylwin Abogados.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {team.map((member) => (
            <article
              key={member.name}
              className="rounded-lg border border-line bg-surface p-8"
            >
              <div
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-700 font-serif text-2xl font-semibold text-white"
              >
                {member.name
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy-900">
                {member.name}
              </h3>
              <p className="text-sm font-bold text-gold-600 uppercase tracking-wide">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted max-w-3xl border-l-4 border-gold-600 pl-4">
          Con el respaldo de <strong className="text-navy-900">Miguel Aylwin Oyarzún</strong>,
          abogado del estudio desde 1977 y referente en resolución de
          controversias del sector construcción.
        </p>
      </div>
    </section>
  );
}
