import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/miguel/Placeholder";

export const metadata: Metadata = {
  title: "Cómo trabajo, según el tamaño y la urgencia del conflicto — Miguel Aylwin",
  description:
    "Tres modalidades de trabajo según el tamaño y la urgencia del conflicto: vía acotada, vía completa y vía de urgencia para arbitraje de emergencia.",
};

export default function ComoTrabajo() {
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="miguel-page-title">
        <p className="miguel-label">Cómo trabajo</p>
        <h1 className="miguel-display-title">Cómo trabajo, según el tamaño y la urgencia del conflicto</h1>
      </div>

      <p>
        No todos los conflictos requieren lo mismo, y cobrar lo mismo por todos sería un mal
        negocio para el cliente. Por eso trabajo con tres modalidades declaradas.
      </p>

      <h2>Vía acotada — conflictos de 1.000 a 8.000 UF</h2>
      <p>
        Es el tramo más frecuente del arbitraje chileno: cerca del 44% de las causas con cuantía
        determinada del CAM está aquí, y es la franja donde el propio Centro asigna a sus Árbitros
        Jóvenes.
      </p>
      <p>
        En este tramo el servicio es <strong>deliberadamente acotado</strong>: alcance definido por
        escrito, precio fijo por etapa, plazos comprometidos. Incluye el diagnóstico del conflicto,
        la definición de la ruta y la tramitación. No incluye el análisis exhaustivo de la vía
        completa, y no debe incluirlo: un estudio de trescientas horas sobre una disputa de 3.000 UF
        sería un mal negocio para ti, y te lo diría igual.
      </p>
      <p>Lo que sí tienes garantizado en esta vía es saber de antemano cuánto vas a pagar y qué vas a recibir.</p>

      <h2>Vía completa — conflictos sobre 8.000 UF</h2>
      <p>
        El 45% de las causas con cuantía determinada, más las de cuantía indeterminada, que suelen
        ser las mayores. Aquí opera la metodología completa de ocho etapas, con dedicación personal:
      </p>
      <ul>
        <li>
          <strong>El análisis va primero.</strong> Antes de recomendar negociar o litigar, el
          análisis completo de causa raíz, prueba disponible, posiciones e intereses de ambas
          partes y costo de cada escenario.
        </li>
        <li>
          <strong>El presupuesto se conversa al principio.</strong> Estructura de honorarios,
          alcance y gastos previstos, por escrito, antes de empezar.
        </li>
        <li><strong>Me hago cargo yo.</strong> El que evalúa el caso es el que lo lleva.</li>
        <li>
          <strong>La información fluye sin que haya que pedirla.</strong> Actualizaciones
          periódicas, acceso a la documentación y respuesta en plazos comprometidos.
        </li>
      </ul>
      <p>
        Tomo <Placeholder label="CUPOS" /> casos nuevos al mes en esta modalidad. No es una técnica
        de venta: es la consecuencia de que el que revisa el caso sea el mismo que lo lleva.
      </p>

      <h2>Vía de urgencia — arbitraje de emergencia</h2>
      <p>
        Cuando hay un reloj corriendo: una boleta que van a cobrar, un terreno que se va a
        transferir, fondos que se están disponiendo. Alcance corto, plazo de días, honorario de
        urgencia definido antes de empezar.
      </p>
      <p>
        En 2025 el CAM resolvió estas solicitudes en 5,4 días corridos promedio, y acogió total o
        parcialmente tres de cada cuatro. → <Link href="/arbitraje-de-emergencia-chile">Arbitraje de emergencia</Link>
      </p>

      <h2>Bajo 1.000 UF</h2>
      <p>
        No tomo casos bajo esa cuantía. No por selectividad: bajo ese monto el costo del proceso
        rara vez se justifica para el cliente, y es lo que te diría en la reunión de todos modos.
      </p>

      <p style={{ marginTop: "2rem" }}>
        → <Link href="/contacto">Contacto</Link>
      </p>
    </div>
  );
}
