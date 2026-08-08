import type { Metadata } from "next";
import GraficoCuantias from "@/components/miguel/GraficoCuantias";
import Link from "next/link";
import { JsonLd, datasetSchema } from "@/lib/schema";
import MiguelCierreCta from "@/components/miguel/MiguelCierreCta";

export const metadata: Metadata = {
  title: "Estadísticas del arbitraje en Chile: CAM Santiago 2025",
  description:
    "Qué materias concentran el arbitraje en Chile y cuáles son las cuantías reales de las causas, según la Memoria del CAM Santiago.",
};

const schema = datasetSchema({
  name: "Estadísticas del arbitraje en Chile 2025 (CAM Santiago)",
  description:
    "Materias, cuantías, tipos de árbitro y resultados de las 489 solicitudes de arbitraje ingresadas al CAM Santiago en 2025.",
  url: "https://miguelaylwin.com/estadisticas-arbitraje-chile",
});

export default function Estadisticas() {
  return (
    <>
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <JsonLd data={schema} />
      <div className="miguel-page-title">
        <p className="miguel-label">Datos · CAM Santiago 2025</p>
        <h1 className="miguel-display-title">Cuánto y qué se arbitra en Chile</h1>
      </div>
      <p className="miguel-nota">
        Fuente: Reporte Anual 2025 del CAM Santiago. Los números absolutos priman sobre los
        porcentajes del reporte en los tres puntos donde este es internamente inconsistente
        (señalados abajo como notas de fuente).
      </p>

      <h2>Volumen</h2>
      <p><strong>489 solicitudes de arbitraje</strong> ingresadas en 2025:</p>
      <table>
        <thead><tr><th>Tipo</th><th>Solicitudes</th></tr></thead>
        <tbody>
          <tr><td>Arbitraje Nacional</td><td>451</td></tr>
          <tr><td>Arbitraje de Emergencia</td><td>27</td></tr>
          <tr><td>Arbitraje Internacional</td><td>11</td></tr>
        </tbody>
      </table>
      <p>En el mismo período ingresaron 98 solicitudes de mediación.</p>

      <h2>Qué materias se arbitran</h2>
      <table>
        <thead><tr><th>Materia</th><th>Solicitudes</th><th>%</th></tr></thead>
        <tbody>
          <tr className="miguel-fila-clave"><td>Inmobiliario</td><td>151</td><td>34,2%</td></tr>
          <tr className="miguel-fila-clave"><td>Construcción / Infraestructura</td><td>92</td><td>20,9%</td></tr>
          <tr><td>Sociedades comerciales</td><td>39</td><td>8,8%</td></tr>
          <tr><td>Energía</td><td>39</td><td>8,8%</td></tr>
          <tr><td>Servicios profesionales</td><td>17</td><td>3,9%</td></tr>
          <tr><td>Minería</td><td>16</td><td>3,6%</td></tr>
          <tr><td>Agropecuario</td><td>16</td><td>3,6%</td></tr>
          <tr><td>Alimentos</td><td>16</td><td>3,6%</td></tr>
          <tr><td>Telecomunicaciones y TI</td><td>13</td><td>2,9%</td></tr>
          <tr><td>Bancario y financiero</td><td>13</td><td>2,9%</td></tr>
          <tr><td>Servicios logísticos</td><td>11</td><td>2,5%</td></tr>
          <tr><td>Seguros</td><td>9</td><td>2,0%</td></tr>
          <tr><td>Salud</td><td>9</td><td>2,0%</td></tr>
        </tbody>
      </table>
      <p><strong>Más de la mitad del arbitraje chileno —el 55,1%— es inmobiliario o de construcción.</strong> Ninguna otra materia se acerca.</p>

      <h2>En qué contratos estaba la cláusula arbitral</h2>
      <table>
        <thead><tr><th>Contrato</th><th>N°</th><th>%</th></tr></thead>
        <tbody>
          <tr><td>Compraventa</td><td>101</td><td>18,5%</td></tr>
          <tr><td>Prestación de servicios</td><td>89</td><td>16,3%</td></tr>
          <tr><td>Contrato de construcción</td><td>76</td><td>13,9%</td></tr>
          <tr><td>Promesa de compraventa</td><td>74</td><td>13,5%</td></tr>
          <tr><td>Arrendamiento</td><td>48</td><td>8,8%</td></tr>
          <tr><td>Leasing</td><td>29</td><td>5,3%</td></tr>
          <tr><td>Compraventa de acciones</td><td>22</td><td>4,0%</td></tr>
          <tr><td>Constitución de sociedad</td><td>20</td><td>3,7%</td></tr>
          <tr><td>Contrato de suministro</td><td>18</td><td>3,3%</td></tr>
          <tr><td>Franquicia</td><td>10</td><td>1,8%</td></tr>
        </tbody>
      </table>

      <h2>Cuánto se disputa</h2>
      <p>
        De las 443 causas iniciadas en 2025, <strong>286 tenían cuantía determinada (65%)</strong> y{" "}
        <strong>157 indeterminada (35%)</strong>.
      </p>
      <p>El reporte separa según la nómina del árbitro designado, y esa separación muestra dos mercados distintos:</p>
      <GraficoCuantias />
      <table>

        <thead><tr><th>Tramo UF</th><th>Nómina General</th><th>Árbitro Joven</th><th>Total</th><th>%</th><th>Acumulado</th></tr></thead>
        <tbody>
          <tr><td>0 – 500</td><td>10</td><td>20</td><td>30</td><td>10,6%</td><td>10,6%</td></tr>
          <tr><td>501 – 1.100</td><td>20</td><td>15</td><td>35</td><td>12,3%</td><td>22,9%</td></tr>
          <tr><td>1.101 – 8.000</td><td>43</td><td>48</td><td>91</td><td>32,0%</td><td>54,9%</td></tr>
          <tr><td>8.001 – 25.000</td><td>63</td><td>2</td><td>65</td><td>22,9%</td><td>77,8%</td></tr>
          <tr><td>25.001 – 65.000</td><td>29</td><td>—</td><td>29</td><td>10,2%</td><td>88,0%</td></tr>
          <tr><td>65.001 – 150.000</td><td>12</td><td>—</td><td>12</td><td>4,2%</td><td>92,3%</td></tr>
          <tr><td>150.001 – 350.000</td><td>11</td><td>—</td><td>11</td><td>3,9%</td><td>96,1%</td></tr>
          <tr><td>350.001 y más</td><td>11</td><td>—</td><td>11</td><td>3,9%</td><td>100%</td></tr>
        </tbody>
      </table>
      <p className="miguel-nota">(Los tramos informados suman 284 causas.)</p>

      <p>
        <strong>Hay dos circuitos y conviene saber en cuál cae tu caso.</strong> Los Árbitros
        Jóvenes del CAM concentran las causas medianas: el 55% de las suyas está entre 1.101 y 8.000
        UF, y prácticamente ninguna supera las 25.000. Los árbitros de nómina general llevan las
        grandes: el 68% de sus causas supera las 8.000 UF y su tramo más frecuente es el de 8.001 a
        25.000.
      </p>
      <p><strong>En conjunto: 55% de las causas disputa menos de 8.000 UF y 45% más de esa cifra.</strong> Un 22% supera las 25.000 UF.</p>

      <h2>Qué tipo de árbitro se designa</h2>
      <table>
        <thead><tr><th>Calidad</th><th>N°</th><th>%</th></tr></thead>
        <tbody>
          <tr><td>Mixto</td><td>264</td><td>58,5%</td></tr>
          <tr><td>Arbitrador</td><td>187</td><td>41,5%</td></tr>
          <tr><td>De derecho</td><td>0</td><td>0%</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Nadie designa árbitros de derecho.</strong> El mercado chileno eligió, sin excepción
        registrada en 2025, procedimientos flexibles: mixtos cuando quiere que el fallo se someta a
        la ley, arbitradores cuando prefiere equidad. Entre los árbitros de nómina general la
        preferencia por el mixto es más marcada (61%) que entre los jóvenes (51,8%).
      </p>

      <h2>Quién elige al árbitro</h2>
      <p>
        De 435 causas informadas, <strong>248 (57%) contemplaban la designación de común acuerdo</strong>,
        por cláusula o voluntariamente. Pero solo 90 (20,7%) terminaron designando de ese modo: en
        las otras 345 (79,3%) designó el Consejo del CAM.
      </p>
      <p>
        <strong>Más de la mitad de las partes tiene derecho a elegir su árbitro y no lo ejerce.</strong>{" "}
        Es, probablemente, la decisión de mayor impacto y menor costo que se deja pasar en el
        arbitraje chileno.
      </p>

      <h2>Arbitraje de emergencia</h2>
      <p>27 solicitudes en 2025, un 13% más que en 2024.</p>
      <table>
        <thead><tr><th>Industria</th><th>N°</th><th>%</th></tr></thead>
        <tbody>
          <tr><td>Construcción</td><td>14</td><td>51,8%</td></tr>
          <tr><td>Inmobiliario</td><td>4</td><td>14,8%</td></tr>
          <tr><td>Energía</td><td>2</td><td>7,4%</td></tr>
          <tr><td>Bancario</td><td>2</td><td>7,4%</td></tr>
        </tbody>
      </table>
      <ul>
        <li><strong>Resultado:</strong> acogido 16 (59,3%), acogido parcialmente 4 (14,8%), rechazado 7 (25,9%).</li>
        <li><strong>Duración promedio: 5,4 días corridos</strong> desde la aceptación y juramento del árbitro hasta la sentencia definitiva.</li>
        <li>Medida más pedida: prohibición de celebrar actos y contratos (14 casos, 40%), seguida de medidas innominadas (11) y retención de bienes (6).</li>
      </ul>
      <p>
        <strong>Construcción concentra más de la mitad de los arbitrajes de emergencia del país.</strong>{" "}
        → <Link href="/arbitraje-de-emergencia-chile">Arbitraje de emergencia: cómo parar el daño en días</Link>
      </p>

      <h2>Cómo terminan los arbitrajes</h2>
      <p>De 464 causas de Arbitraje Nacional terminadas en 2025:</p>
      <table>
        <thead><tr><th>Tipo de cierre</th><th>%</th></tr></thead>
        <tbody>
          <tr><td>Laudo arbitral</td><td>47%</td></tr>
          <tr><td>Acuerdo (avenimiento, conciliación o transacción)</td><td>18%</td></tr>
          <tr><td>Desistimiento</td><td>11%</td></tr>
          <tr><td>Orden de conclusión</td><td>9%</td></tr>
          <tr><td>Abandono</td><td>7%</td></tr>
          <tr><td>Acumulación</td><td>4%</td></tr>
          <tr><td>Retiro</td><td>3%</td></tr>
          <tr><td>Incompetencia</td><td>1%</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Solo el 47% de los arbitrajes llega a sentencia.</strong> Más de la mitad termina
        antes, y casi uno de cada cinco por acuerdo entre las partes. Es el dato que más debería
        pesar al decidir si conviene entrar a un arbitraje y con qué expectativa.
      </p>

      <h2>Qué se pide</h2>
      <p>
        Indemnización de perjuicios 31,5%, cumplimiento forzado 18,3%, resolución del contrato
        14,2%, pago 8%, restitución 6,4%, cláusula penal 4%, multas 3,2%, cobro de rentas de
        arrendamiento 2,9%, interpretación de contrato 2,3%.
      </p>

      <p>
        <Link href="/cuanto-cuesta-arbitraje-chile">Cuánto cuesta y cuánto dura un arbitraje</Link> ·{" "}
        <Link href="/como-trabajo">Cómo trabajo</Link>
      </p>
      <p className="miguel-nota">
        Fuente: Reporte Anual 2025, Centro de Arbitraje y Mediación de la Cámara de Comercio de
        Santiago.
      </p>
    </div>
      <MiguelCierreCta />
    </>
  );
}
