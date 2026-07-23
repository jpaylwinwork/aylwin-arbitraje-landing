const items = [
  {
    stat: "50+",
    label: "años de tradición jurídica del estudio que nos respalda",
  },
  {
    stat: "Best Lawyers",
    label: "reconocimiento profesional del estudio",
  },
  {
    stat: "Santiago",
    label: "presencia en el centro corporativo de Las Condes",
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Credenciales" className="bg-white border-b border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.stat} className="text-center sm:text-left">
            <p className="font-serif text-3xl font-semibold text-ink-700">
              {item.stat}
            </p>
            <p className="mt-1 text-sm text-muted leading-snug">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
