@AGENTS.md

# Sitio de captación — Aylwin Matta Abogados

Landing pages + funnel de captación de clientes para **Aylwin Matta Abogados** (aylwin.cl), estudio jurídico chileno fundado en 1974 (refundado 2014). Este repo contiene el sitio Next.js desplegado en Vercel: https://aylwin-arbitraje-landing.vercel.app

## Contexto de negocio

- **Objetivo:** convertir presupuesto de Google Ads en mandatos firmados, al menor costo posible. Fase de prueba: CLP 50.000/semana, solo Red de Búsqueda.
- **Materias activas:** arbitraje comercial (`/arbitraje`) y reclamos de ilegalidad (`/reclamo-ilegalidad`). El home (`/`) es una página de marca/orgánico (nació como ejemplo de arbitraje de construcción; pendiente de redefinir).
- **Regla estratégica:** el tráfico pagado va SOLO a las landings de campaña (noindex). aylwin.cl nunca recibe tráfico pagado.
- **Personas:** Miguel Aylwin Fernández "MAF" (socio, dueño del sistema de ads y única persona que aprueba contenido factual), Vicente Aylwin Fernández (socio), Miguel Aylwin Oyarzún (respaldo senior, en el estudio desde 1977).
- Nota: en este repo también hace commits **Hermes**, un agente que corre en un VPS (usuario git "Hermes VPS Backup" / root@vps-hermes). Es normal ver sus commits.

## Arquitectura

- **Next.js 16** (App Router, TypeScript) + **Tailwind v4** (tokens CSS en `app/globals.css`, no hay tailwind.config).
- **Páginas:** `app/page.tsx` (home, secciones en `components/`), `app/arbitraje/page.tsx` y `app/reclamo-ilegalidad/page.tsx` (landings de campaña — contenido como objeto `CampaignContent`, render en `components/campaign/CampaignLanding.tsx`).
- **Lead API:** `app/api/lead/route.ts` — valida, inserta en **Neon Postgres** (tabla `leads`) y dispara alerta instantánea a **Telegram**. Si la BD falla, la alerta sale igual (ningún lead se pierde en silencio).
- **Tracking:** las landings capturan `gclid/wbraid/gbraid` (90 días en localStorage, prefijado tipo `gclid:XXX`) + UTMs (sessionStorage), y los envían con cada lead. Esto alimenta el tracking de conversiones offline de Google Ads.
- **Tabla `leads`:** id, created_at, name, email, phone, company, message, utm_source/medium/campaign/term, click_id, materia, status ('nuevo'→'contactado'→…), notified_at.
- **Env vars** (nombres; los valores viven en Vercel): `DATABASE_URL` (Neon, auto-provisionada), `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.

### Avisos de leads de miguelaylwin.com

`app/api/miguel-lead/route.ts` guarda en la tabla `leads_miguelaylwin` y avisa por **dos canales independientes**: Telegram y correo. Van en paralelo con `Promise.allSettled` — que falle uno no impide el otro, y un fallo de base de datos nunca suprime el aviso. Solo se responde 502 si el lead no quedó en ninguna parte.

Cada canal se activa solo si tiene sus variables; si faltan, no hace nada y el despliegue no falla.

| Variable | Para qué |
|---|---|
| `RESEND_API_KEY` | Clave de API de Resend |
| `LEAD_EMAIL_TO` | Destinatario(s), separados por coma |
| `LEAD_EMAIL_FROM` | Remitente, p. ej. `Avisos <avisos@miguelaylwin.com>` |

**Para activar el correo:** crear cuenta en Resend, verificar el dominio `miguelaylwin.com` con los registros DNS que indica (no tocar el DNS de aylwin.cl), y definir las tres variables en Vercel.

**Al activarlo hay que actualizar `/politica-privacidad`**: la sección «Con quién se comparten» enumera los encargados de tratamiento y hoy no incluye al proveedor de correo. Los datos que viajan incluyen la descripción del conflicto.

WhatsApp queda pendiente: requiere API de WhatsApp Business de Meta, número dedicado y **plantillas aprobadas** (los mensajes iniciados por la empresa no admiten texto libre fuera de la ventana de 24 horas).

## Sistema de diseño (de aylwin.cl — no desviarse)

- **Tipografías:** Bodoni Moda (títulos, `font-serif`) + Poppins (cuerpo, peso base 300) vía next/font en `app/layout.tsx`.
- **Colores (tokens en `globals.css`):** `ink-900/800/700/600` (negros #131313/#1a1a1a), `brand-600` (#A8000D, rojo institucional — ÚNICO acento), `brand-500` (hover), `surface` (#f9f9f9), `panel`, `line`, `muted`.
- Un solo acento de color. Sin gradientes de colores nuevos. Íconos SVG inline (nunca emoji).
- Marcadores de sección numerados "01/" en rojo (patrón de aylwin.cl).
- Botones de WhatsApp en verde #0e7a5f (color de reconocimiento de WhatsApp, excepción deliberada).
- **Animación:** patrón `data-reveal` (IntersectionObserver + CSS en globals.css; 350ms, 12px). Respeta `prefers-reduced-motion`.
- **Accesibilidad:** labels visibles, contraste ≥4.5:1, touch targets ≥44px, `focus-visible` en CTAs.

## Reglas de contenido (NO negociables — ética CEP 2011, Colegio de Abogados)

1. **Cero invención factual.** Experiencia, casos, credenciales, plazos legales: solo hechos confirmados por MAF. Los marcadores `[PENDIENTE...]` los reemplaza únicamente él.
2. Sin promesas de resultado ("ganamos su juicio"), sin superlativos no verificables ("los mejores"), sin urgencia artificial (solo plazos legales reales).
3. Léxico prohibido: potenciar, empoderar, sinergia, disruptivo, transformador, ecosistema, "alto impacto", invaluable, crucial, meticuloso, robusto, versátil.
4. Todo en español de Chile, tono directo y sobrio.
5. Las landings de campaña mantienen `robots: noindex` — no quitarlo.

## Flujo de trabajo

```bash
npm install
npm run dev        # desarrollo local
npm run build      # SIEMPRE verificar antes de push — nunca pushear build roto
```

- Push a `main` → **despliegue automático a producción** en Vercel (~1 min). Para cambios grandes, usar branch + PR (los PRs generan preview deploys).
- **No tocar `app/api/lead/route.ts`** sin acuerdo explícito — es el corazón del funnel y está probado end-to-end.
- No agregar recursos externos (CDNs, fuentes remotas fuera de next/font, scripts de terceros) a las landings de campaña sin discutirlo: afectan velocidad y Quality Score de Ads.
- Probar el flujo de leads en producción: enviar el formulario con `?gclid=TEST123` en la URL y verificar que llegue la alerta de Telegram con `Ref: gclid:TEST123`.

## Roadmap (fases pendientes)

GA4 + Google Tag Manager → cuenta de Google Ads (facturación CLP) + campañas de búsqueda → fan-out de leads a Gmail/Google Sheets → dashboard `/dashboard` protegido leyendo Neon → conversiones offline (CSV a Google Ads).
