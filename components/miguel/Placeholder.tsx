// Visually unmissable placeholder chip for any data point MAF hasn't provided
// yet ([AÑOS], [FOTO], [CUPOS], etc.). Never render plausible-sounding
// invented content in its place — this component exists specifically so that
// doesn't happen by accident.
export default function Placeholder({ label }: { label: string }) {
  return <span className="miguel-placeholder">[{label} — PENDIENTE]</span>;
}
