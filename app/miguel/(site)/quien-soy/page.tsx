import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, personSchema } from "@/lib/schema";
import Placeholder from "@/components/miguel/Placeholder";

export const metadata: Metadata = {
  title: "Miguel Aylwin Fernández — Abogado, arbitraje inmobiliario y de construcción",
  description:
    "Abogado especializado en conflictos de contratos inmobiliarios, de construcción e infraestructura, en arbitraje y en sede judicial. Socio de Aylwin Matta Abogados.",
};

// sameAs left empty until MAF supplies the real LinkedIn/ficha-profesional URLs —
// schema.org validity matters more here than a placeholder string that isn't a real URL.
const schema = personSchema({
  name: "Miguel Aylwin Fernández",
  jobTitle: "Abogado",
  worksForUrl: "https://aylwin.cl",
  sameAs: [],
});

export default function QuienSoy() {
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <JsonLd data={schema} />
      <h1 style={{ fontSize: "1.9rem" }}>Miguel Aylwin Fernández</h1>

      <p style={{ marginTop: "1rem" }}>
        <Placeholder label="FOTO — retrato profesional" />
      </p>

      <p>
        Soy abogado. Trabajo en conflictos de contratos inmobiliarios, de construcción e
        infraestructura, en arbitraje y en sede judicial, representando indistintamente a
        mandantes y a contratistas, a inmobiliarias y a quienes reclaman contra ellas.
      </p>

      <p>
        Veinte años en esto me dejaron una convicción que ordena cómo
        trabajo: <strong>ganar el juicio y salvar el negocio no son lo mismo.</strong> He visto
        empresas con razón obtener resultados favorables tarde, cuando el capital inmovilizado, las
        boletas vigentes y los proyectos perdidos ya habían hecho el daño que el fallo no podía
        reparar. Una victoria que llega después de que el proyecto murió es una derrota con otro
        nombre.
      </p>

      <p>
        Por eso mi trabajo empieza siempre por el mismo lugar: entender el negocio antes que el
        expediente. Cuánto vale para el cliente cerrar rápido, qué relación comercial hay que
        preservar, qué precedente no puede sentarse, cuánto capital soporta estar detenido. Esa
        información determina la estrategia jurídica, y no al revés.
      </p>

      <p>
        <strong>Sobre lo que no puedo ofrecer:</strong> no puedo garantizar el resultado de un
        juicio, y desconfío de quien lo haga. La historia judicial está llena de casos que se creían
        ganados. Lo que sí puedo comprometer es que llegues al proceso sabiendo cuáles son tus
        fortalezas, cuáles tus debilidades y qué está en juego, de modo que el resultado —cualquiera
        sea— esté dentro de lo previsto.
      </p>

      <h2>Dónde ejerzo</h2>
      <p>
        Soy socio de <strong>Aylwin Matta Abogados</strong>, en Santiago. Este sitio es mío y no del
        estudio: lo escribí para explicar cómo trabajo yo en esta materia. Los mandatos que tomo se
        ejecutan con la estructura del estudio, que es lo que me permite comprometer dedicación
        personal sin que eso signifique trabajar solo. El resto de la práctica está en{" "}
        <a href="https://aylwin.cl">Aylwin Matta Abogados</a>.
      </p>

      <p style={{ marginTop: "2rem" }}>
        → <Link href="/como-trabajo">Cómo trabajo</Link> · <Link href="/contacto">Contacto</Link>
      </p>
    </div>
  );
}
