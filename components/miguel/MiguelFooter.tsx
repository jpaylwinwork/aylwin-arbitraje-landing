import Image from "next/image";
import Link from "next/link";

export default function MiguelFooter() {
  return (
    <footer className="miguel-footer">
      <div className="miguel-container miguel-wide miguel-footer-inner">
        <div className="miguel-footer-identidad">
          <p className="miguel-footer-name">Miguel Aylwin Fernández</p>
          <p className="miguel-footer-cargo">Socio · Aylwin Matta Abogados</p>

          <address className="miguel-footer-datos">
            Av. Apoquindo 3910, piso 3, Las Condes · Santiago, Chile
            <br />
            <a href="tel:+56969080084">+56 9 6908 0084</a>
            {" · "}
            <a href="mailto:mp@aylwin.cl">mp@aylwin.cl</a>
          </address>
        </div>

        {/* Marca del estudio, enlazada a su sitio. El archivo original venía en
          * JPG sobre fondo negro: pegado tal cual dejaba un rectángulo visible
          * sobre el #131313 del pie, así que se convirtió a PNG con fondo
          * transparente conservando los colores macizos del logotipo. */}
        <a className="miguel-footer-estudio" href="https://aylwin.cl" rel="noopener">
          <Image
            src="/miguel/logo-aylwin-matta.png"
            alt="Aylwin Matta Abogados"
            width={360}
            height={119}
          />
        </a>

        <div className="miguel-footer-legal">
          <Link href="/politica-privacidad">Política de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
