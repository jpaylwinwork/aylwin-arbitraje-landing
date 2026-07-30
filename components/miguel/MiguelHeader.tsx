import Link from "next/link";

export default function MiguelHeader() {
  return (
    <header style={{ borderBottom: "1px solid var(--miguel-line)" }}>
      <div className="miguel-container" style={{ padding: "20px 20px" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontWeight: 600, fontSize: "1.05rem" }}>Miguel Aylwin Fernández</span>
          <span className="miguel-kicker" style={{ marginLeft: 10 }}>
            Abogado
          </span>
        </Link>
      </div>
    </header>
  );
}
