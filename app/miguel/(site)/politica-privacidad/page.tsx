import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad — Miguel Aylwin Fernández",
  description:
    "Qué datos recopila este sitio, para qué se usan, con quién se comparten y cómo ejercer tus derechos sobre ellos.",
};

export default function PoliticaPrivacidad() {
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="miguel-page-title">
        <p className="miguel-label">Política de privacidad</p>
        <h1 className="miguel-display-title">Qué hago con tus datos</h1>
      </div>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable de los datos personales que se recopilan a través de este sitio es{" "}
        <strong>Miguel Aylwin Fernández</strong>, con domicilio en Av. Apoquindo 3910, piso 3, Las
        Condes, Santiago, Chile, y correo <a href="mailto:mp@aylwin.cl">mp@aylwin.cl</a>.
      </p>

      <h2>2. Qué datos recopilo</h2>
      <p>
        Solo los que entregas voluntariamente y los mínimos necesarios para que el sitio funcione.
      </p>
      <ul>
        <li>
          <strong>Datos de contacto y de tu consulta.</strong> Nombre, empresa, cargo, correo,
          teléfono y la descripción del conflicto que decidas incluir al usar un formulario o
          escribirme directamente. En el formulario de consulta se piden además el tipo de conflicto,
          su cuantía estimada y su estado procesal, que sirven para evaluar si puedo ayudarte.
        </li>
        <li>
          <strong>Datos de navegación.</strong> El proveedor de alojamiento registra datos técnicos
          de cada solicitud —dirección IP, tipo de navegador, página solicitada— necesarios para
          servir la página. Además, este sitio usa <strong>Google Analytics</strong> para saber qué
          contenidos se leen y por dónde llegan las visitas: recoge datos de uso de forma agregada
          —páginas vistas, duración, origen del tráfico, tipo de dispositivo y ubicación
          aproximada—. No se emplea para identificarte ni para elaborar un perfil comercial.
        </li>
        <li>
          <strong>Identificadores de campaña.</strong> Si llegas desde un anuncio, el identificador
          de clic que asigna Google (<code>gclid</code>, <code>wbraid</code> o <code>gbraid</code>) y
          los parámetros de origen de la visita se guardan en una cookie propia de este sitio
          (<code>miguel_click_id</code>, 90 días) y se envían junto con el formulario, para saber qué
          campañas generan consultas reales. Solo se instala si llegas por esa vía.
        </li>
      </ul>
      <p>
        Los datos de navegación e identificadores de campaña no van asociados a tu nombre mientras no
        envíes un formulario. Si lo envías, quedan vinculados a tu consulta.
      </p>

      <h2>3. Para qué los uso</h2>
      <ul>
        <li>
          <strong>Responder tu consulta:</strong> evaluar preliminarmente el conflicto que planteas,
          definir si puedo ayudarte y coordinar una reunión.
        </li>
        <li>
          <strong>Gestión profesional:</strong> mantener registro de los contactos y comunicaciones
          asociados a la prestación de servicios legales.
        </li>
        <li>
          <strong>Medición:</strong> entender qué contenidos se leen y qué campañas publicitarias
          generan consultas reales, para escribir sobre lo que sirve y no gastar en lo que no.
        </li>
      </ul>
      <p>
        No uso tus datos para enviarte comunicaciones comerciales no solicitadas ni para elaborar
        perfiles con fines distintos de los anteriores.
      </p>

      <h2>4. Secreto profesional</h2>
      <p>
        Los antecedentes y detalles del caso que me envíes para evaluación quedan amparados por el
        deber de secreto profesional <strong>desde el primer contacto</strong>, exista o no mandato y
        hayas pagado o no honorarios. El Código de Ética Profesional (2011) extiende al cliente
        potencial —quien consulta seriamente al abogado por un asunto— los deberes de
        confidencialidad y lealtad propios del cliente.
      </p>
      <p>
        Este deber es más exigente que la protección de datos y opera con independencia de ella. Por
        eso conviene que en el primer mensaje describas la situación en términos generales, sin
        adjuntar documentos ni antecedentes reservados.
      </p>

      <h2>5. Con quién se comparten</h2>
      <p>
        <strong>Tus datos no se venden, no se ceden ni se comercializan.</strong> Se comparten
        únicamente con los proveedores tecnológicos necesarios para operar el sitio, que actúan como
        encargados de tratamiento por mi cuenta:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> — alojamiento del sitio.
        </li>
        <li>
          <strong>Neon</strong> — base de datos donde se almacenan las consultas recibidas.
        </li>
        <li>
          <strong>Google</strong> — Gmail, como canal por el que recibo el aviso inmediato de cada
          consulta nueva; y Google Analytics, para la medición de uso del sitio. Analytics no
          recibe los datos de tu consulta: solo información de navegación.
        </li>
      </ul>
      <p>
        Algunos de estos proveedores operan servidores fuera de Chile, de modo que el tratamiento
        puede implicar una transferencia internacional de datos. Fuera de estos casos, no comunico
        tus datos a terceros, salvo requerimiento de autoridad competente conforme a la ley.
      </p>

      <h2>6. Cuánto tiempo los conservo</h2>
      <p>
        Las consultas que no derivan en un encargo se conservan mientras sean necesarias para dar
        seguimiento al contacto, y luego se eliminan a tu solicitud. Si el contacto deriva en un
        mandato, los antecedentes se conservan por el plazo que exigen las obligaciones
        profesionales y legales aplicables al ejercicio de la abogacía. La cookie de campaña caduca
        sola a los 90 días; los registros técnicos del servidor y los datos de analítica se
        conservan según los plazos de retención de cada proveedor.
      </p>

      <h2>7. Seguridad</h2>
      <p>
        Las comunicaciones de este sitio viajan cifradas (HTTPS) y he adoptado medidas técnicas y
        organizativas razonables para proteger la información contra el acceso no autorizado, la
        pérdida o la alteración. Ningún sistema es infalible: por eso el primer mensaje no debería
        contener documentos ni antecedentes reservados.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Conforme a la legislación chilena de protección de datos personales, puedes ejercer en
        cualquier momento tus derechos de:
      </p>
      <ul>
        <li>
          <strong>Acceso:</strong> saber qué datos tuyos tengo.
        </li>
        <li>
          <strong>Rectificación:</strong> corregir datos inexactos o incompletos.
        </li>
        <li>
          <strong>Cancelación:</strong> pedir que los elimine cuando ya no sean necesarios para los
          fines que motivaron su recopilación.
        </li>
        <li>
          <strong>Oposición:</strong> oponerte a que se usen para fines determinados.
        </li>
      </ul>
      <p>
        Escríbeme a <a href="mailto:mp@aylwin.cl">mp@aylwin.cl</a> indicando{" "}
        <em>«Protección de datos»</em> en el asunto. Respondo en los plazos que fija la ley.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Google Analytics instala cookies para distinguir visitas y sesiones. Además, si llegas
        desde un anuncio, este sitio instala una cookie propia:{" "}
        <code>miguel_click_id</code>, que caduca a los 90 días y sirve para atribuir tu consulta a
        la campaña por la que llegaste. No hay cookies de analítica ni de terceros. Puedes
        bloquearla o eliminarla desde la configuración de tu navegador: el sitio sigue funcionando
        igual, porque ninguna cookie condiciona el acceso al contenido.
      </p>

      <h2>10. Vigencia y cambios</h2>
      <p>
        Esta política puede actualizarse para reflejar cambios legales o técnicos. La versión vigente
        es siempre la publicada en esta página.
      </p>
      <p className="miguel-aviso-nota">Última actualización: julio de 2026.</p>
    </div>
  );
}
