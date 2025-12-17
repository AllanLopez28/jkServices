# JK Service Agency – Accounting & Tax Services

Sitio web corporativo moderno, bilingüe (ES/EN), desarrollado para **JK Service Agency**, una preparadora de impuestos enfocada en la **comunidad hispana de Brentwood, NY y alrededores**.

El proyecto está pensado como un **MVP estático**, pero con una arquitectura clara y escalable para futuras funcionalidades como páginas de detalle por servicio, agenda de citas, blog y automatizaciones.

---

## 🧾 Contexto del negocio

- Tipo de negocio: Preparadora de impuestos y servicios contables
- Ubicación: Brentwood, NY (Long Island)
- Público objetivo: Comunidad hispana
- Idiomas: Español / Inglés
- Temporada alta: Enero – Abril
- Servicios principales:
  - Impuestos individuales (1040)
  - ITIN (nuevo / renovación)
  - Self-employed / 1099
  - Negocios (LLC / Corp)
  - Payroll
  - Sales Tax
  - Enmiendas
  - Back taxes
  - Representación ante IRS / NYSDTF

---

## 🎯 Objetivos del sitio

- Explicar los servicios de forma clara y accesible
- Generar confianza (experiencia, bilingüe, enfoque comunitario)
- Facilitar contacto inmediato (teléfono y WhatsApp)
- Servir como base para escalar funcionalidades futuras

---

## 🛠 Stack tecnológico

### Framework
- **Next.js 14** (App Router)
- Renderizado estático (SSG)

### Estilos
- **Tailwind CSS**
- Diseño claro, corporativo y profesional
- Paleta basada en el logo de JK Service Agency
- Tipografía:
  - **Montserrat Black (900)** → títulos
  - **Montserrat Bold / Medium** → textos

### Animaciones
- **Framer Motion**
  - Animaciones de entrada
  - Hover effects
  - Transiciones suaves en filtros y acordeones

### Internacionalización
- Rutas por idioma:
  - `/es`
  - `/en`
- Idioma determinado por la URL
- Español como idioma base
- Traducción automática básica para inglés (sin diccionarios estáticos)

---

## 📁 Estructura del proyecto

