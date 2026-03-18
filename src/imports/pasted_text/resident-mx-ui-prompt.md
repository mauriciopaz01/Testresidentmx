# Prompt de Diseño UI para Resident.mx — Figma Maker

Diseña una interfaz de usuario de alta fidelidad en Figma para la aplicación Resident.mx, utilizando herramientas de IA de diseño. El diseño debe contemplar cuidadosamente las siguientes especificaciones técnicas y visuales:

---

## Perfiles de Usuario y Flujo de Navegación

### Administrador (Web Desktop)

Interfaz web de escritorio con un dashboard general (métricas financieras, avisos e indicadores clave de la comunidad). Incluye:

- **Finanzas/Pagos:** registro de ingresos y egresos de cuotas de mantenimiento, control de pagos de residentes y aprobación de comprobantes. Usa tarjetas de estadísticas con borde `#E0F2F1`, valores en Helvetica Bold 28px negro `#000000` y etiquetas en Regular 13px gris `#6B7280`. Gráficas de barras con `#23C1DA` para ingresos y `#A5F3FC` para egresos. Tablas de datos con headers uppercase 11px Bold gris `#6B7280` sobre fondo `#F9FAFB`, filas en Regular 14px negro con hover `#F9FAFB` y filas de totales con `font-weight: 700` y borde superior doble.
- **Reservaciones:** calendario de reservas de amenidades, con opción de aprobar o rechazar solicitudes. Tablas de solicitudes con columnas Área Común, Fecha Solicitada y Estado. Status badges: "Pendiente" en `#F59E0B`, "Aprobado" en `#10B981`, "Rechazado" en `#EF4444`.
- **Control de Accesos:** monitoreo de entradas/salidas de la colonia, generación y gestión de códigos QR para visitantes.
- **Reportes/Administración:** informes financieros mensuales y estadísticas, gestión de usuarios y residentes, envío de comunicados y encuestas a la comunidad.

**Navegación:** Sidebar fijo izquierdo de 240px, fondo blanco `#FFFFFF` con borde derecho `1px solid #E5E7EB`. Logo wordmark "Resident.mx" en Helvetica Bold 20px negro arriba. Ítems del menú: ícono 20px + label Regular 14px gris `#6B7280`, con gap 12px, padding `10px 12px`, border-radius 8px. Ítem activo: texto `#23C1DA`, Bold, fondo `#F0FDFA`. Ítems del menú: Dashboard, Finanzas, Usuarios, Residencias, Áreas Comunes, Proveedores, Chat, Comunicados. Usuario en la esquina inferior izquierda del sidebar.

**Hero Banner:** En cada sección principal, banner superior con imagen de fondo en escala de grises del residencial, overlay `rgba(0,0,0,0.5)`, logo wordmark blanco centrado 32px. Debajo: avatar con brandmark en cuadrado negro border-radius 16px, nombre de la comunidad Bold 18px y subtítulo Regular 14px gris `#9CA3AF`.

---

### Residente (App Móvil iOS/Android)

Aplicación móvil con pantalla de inicio tipo dashboard personalizada.

- **Inicio:** Header con hamburger menu izquierda + título "Inicio" centrado en Bold 16px. Sección de saludo: "Hola, [Nombre]!" en Bold 24px negro + mensaje motivacional Regular 14px gris `#6B7280`. Grid 2x2 de feature cards: fondo `#F5F5F5`, border-radius 16px, padding 24px 16px, con ícono 32px negro + título Bold 15px + subtítulo Regular 12px gris. Cards: Mi Hogar, Visitantes, Áreas Comunes, Cuotas. Debajo: CTA card oscura `#1F1F1F` border-radius 16px con ícono QR + "Generar QR de Acceso" Bold 16px blanco. Info card de pre-autorización con título Bold 15px, detalles Regular 13px gris, flecha derecha.
- **Pagos:** pago de cuotas de mantenimiento en línea, visualización de historial de pagos y facturas.
- **Reservaciones:** reservar áreas comunes como gimnasio o salón de eventos, con confirmación y detalles de reserva.
- **Accesos/Visitas:** generación de códigos QR o claves temporales para autorizar la entrada de visitantes a la propiedad, y notificaciones cuando sus visitantes ingresen.
- **Reportes/Incidencias:** formularios para reportar problemas de mantenimiento o quejas vecinales, seguimiento del estado de estos reportes.
- **Comunicados y Comunidad:** lectura de avisos oficiales, encuestas en línea y directorio de contactos útiles del condominio.

**Navegación:** Barra inferior fija, fondo blanco con `border-top: 1px solid #E5E7EB`, padding 8px con `safe-area-inset-bottom`. 4 tabs: ícono 24px + label 10px. Inactivos: gris `#9CA3AF`. Activos: negro `#000000` Bold. Tabs: Inicio, Scaner, Ayuda, Comunicados.

---

### Vigilante (App Móvil / Módulo Caseta)

Aplicación móvil enfocada en control de accesos en la caseta de seguridad.

- **Pantalla principal:** Hero banner con imagen residencial en escala de grises + logo wordmark blanco centrado. Perfil del vigilante: avatar circular negro 80px con ícono persona, nombre Bold 18px + "En turno" Regular 14px gris `#9CA3AF`.
- **Verificación de acceso:** Detail list card con borde `1px solid #E5E7EB`, border-radius 16px, padding 20px. Título "Código de acceso válido" Bold 16px. Filas clave-valor: label gris `#9CA3AF` Regular 14px izquierda, valor negro Regular 14px derecha, separadas por `border-bottom: 1px solid #F3F4F6`. Campos: Empresa, Nombre, Residencia, Vigente (con checkmark cyan `#23C1DA`), Fecha de expiración.
- **Botón "Registrar acceso":** full-width, negro `#000000`, texto blanco Bold 14px, border-radius 12px, padding 14px 24px.
- **Upload de identificación:** Input con ícono de imagen + placeholder "Elige una imagen..." Regular 14px gris, fondo `#F3F4F6`, border-radius 12px.
- **Botón "Volver":** full-width negro con flecha izquierda + "Volver" Bold.

La UI para vigilante debe ser muy simplificada y de alto contraste (considerando uso bajo luz solar), con botones grandes y listados fáciles de leer. Navegación principalmente en una sola pantalla principal con accesos directos a escáner, lista de visitas y búsqueda de residente.

---

## Componentes UI Principales

El diseño debe incorporar componentes de interfaz consistentes y reutilizables en todas las pantallas:

### Barra de Navegación

- **Web (Admin):** Sidebar izquierdo 240px, fondo blanco, ítems con íconos 20px + labels. Activo: cyan `#23C1DA`.
- **Móvil (Residente):** Tab bar inferior, 4 tabs ícono 24px + label 10px. Activo: negro bold.
- **Móvil (Vigilante):** Header simple hamburger + título centrado.

### Botones

| Variante | Background | Color | Border | Border-radius | Padding |
|----------|-----------|-------|--------|---------------|---------|
| Primario | `#000000` | `#FFFFFF` | none | 12px | 14px 24px |
| Outline | `#FFFFFF` | `#000000` | `1px solid #D1D5DB` | 12px | 14px 24px |
| Outline Activo | `#FFFFFF` | `#23C1DA` | `1px solid #23C1DA` | 20px | 8px 16px |
| OAuth/Google | `#FFFFFF` | `#000000` | `1px solid #E5E7EB` | 12px | 14px 24px |

Todos los botones: Helvetica Bold 14px, `width: 100%` por defecto. Hover del primario: `opacity: 0.9`. Active: `scale(0.98)`.

### Tarjetas

- **Stat Card:** Borde `#E0F2F1`, border-radius 12px, padding 20px. Valor Bold 28px negro + label Regular 13px gris. Grid de 4 columnas en web, 2 en móvil.
- **Feature Card (móvil):** Fondo `#F5F5F5`, border-radius 16px, padding 24px 16px. Ícono 32px + título Bold 15px + sub Regular 12px.
- **CTA Card:** Fondo `#1F1F1F`, border-radius 16px, padding 24px. Ícono 48px + texto Bold 16px blanco. Hover: `#2A2A2A`.
- **Info Card:** Fondo blanco, bordes horizontales `#E5E7EB`. Título Bold 15px + detalles Regular 13px gris + flecha derecha.
- **Login Card:** Fondo `rgba(40,40,40,0.85)`, `backdrop-filter: blur(16px)`, border-radius 20px, padding 40px 28px. Max-width 400px.

### Inputs

Fondo `#F3F4F6`, border `1px solid transparent`, border-radius 12px, padding 14px 16px. Placeholder gris `#9CA3AF`. Focus: `border-color: #23C1DA` con `box-shadow: 0 0 0 3px rgba(35,193,218,0.15)`. En login card: fondo `rgba(255,255,255,0.1)`, borde `rgba(255,255,255,0.15)`.

### Listas y Tablas

- **Detail List:** Border `#E5E7EB`, border-radius 16px, padding 20px. Filas: flex space-between, label gris `#9CA3AF`, valor negro, separador `#F3F4F6`.
- **Data Table:** Headers: Bold 11px uppercase `#6B7280`, fondo `#F9FAFB`. Celdas: Regular 14px, padding 14px 16px, borde `#F3F4F6`. Hover fila: `#F9FAFB`. Total: Bold con `border-top: 2px solid #E5E7EB`.

### Modales y Formularios

Implementa ventanas emergentes para confirmaciones y formularios breves. Al agregar una reservación o registrar un pago manual, aparece un modal centrado con fondo semitransparente `rgba(0,0,0,0.5)` detrás, contenedor blanco border-radius 20px, padding 32px. Campos con el estilo de inputs descrito arriba. Botón primario negro para confirmar, outline para cancelar.

### Notificaciones y Feedback

- **Notification Banner:** Barra full-width `#23C1DA`, texto blanco Regular 13px centrado con ícono 16px.
- **Toast éxito:** `#10B981` con texto blanco.
- **Toast alerta:** `#F59E0B` con texto negro.
- **Toast error:** `#EF4444` con texto blanco.
- **Dividers:** `1px solid #E5E7EB` estándar, `#F3F4F6` ligero, `2px solid #23C1DA` para acento.

---

## Estilo Visual y Guía de Marca

### Paleta de Colores (Brandbook Oficial)

| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| Primario | Negro | `#000000` | Logo, textos principales, botones primarios, fondos de CTA |
| Primario | Cyan/Turquesa | `#23C1DA` | Acento principal, ítems activos del menú, headings en fondo oscuro, links, notification banners, focus de inputs, gráficas de ingresos |
| Secundario | Azul | `#3483FA` | Elementos secundarios, enlaces alternativos |
| Secundario | Púrpura | `#8958FE` | Acentos complementarios, gradientes decorativos |
| Secundario | Gris rosado | `#FDF7FA` | Fondos sutiles |
| Neutro | Blanco | `#FFFFFF` | Fondos de tarjetas, sidebar, contenido principal |
| Neutro | Gris fondo | `#F3F4F6` | Inputs, feature cards |
| Neutro | Gris texto | `#6B7280` | Texto secundario, labels de tablas |
| Neutro | Gris placeholder | `#9CA3AF` | Placeholders, subtítulos, ítems inactivos |
| Neutro | Gris borde | `#E5E7EB` | Bordes de tarjetas, dividers, tab bar |
| Neutro | Gris hover | `#F9FAFB` | Hover de filas de tabla, headers de tabla |
| Feedback | Verde | `#10B981` | Éxito, aprobado |
| Feedback | Amarillo | `#F59E0B` | Alerta, pendiente |
| Feedback | Rojo | `#EF4444` | Error, rechazado |

### Tipografía

- **Familia:** Helvetica / Helvetica Neue (brandbook oficial). Fallback: Arial, sans-serif.
- **Headings:** Bold (700). Tamaños: H1 28px, H2 22px, H3 18px, H4 16px, H5 15px.
- **Body/Paragraph:** Regular (400), 14px.
- **Labels y captions:** Regular 13px o 12px.
- **Tablas headers:** Bold 11px uppercase, letter-spacing 0.05em.
- **Tab labels (móvil):** Regular/Bold 10px.
- **Color de headings:** Negro `#000000` en fondos claros, Cyan `#23C1DA` en fondos oscuros.

### Estilo General

- Limpio, intuitivo y minimalista. Amplio espacio en blanco entre secciones.
- Border-radius suaves: 12px para botones e inputs, 16px para tarjetas y cards, 20px para modales y login card.
- Íconos: lineales (outline) de 20-32px, estilo Material Design o Lucide, color negro `#000000` sobre fondos claros, blanco sobre fondos oscuros. Inactivos en gris `#9CA3AF`.
- Sombras: mínimas. Hover de tarjetas: `box-shadow: 0 2px 8px rgba(0,0,0,0.06)`.
- Imágenes de hero/banner: fotografías de residenciales en escala de grises con overlay oscuro.
- Logo: usar siempre brandmark (ícono casa) + wordmark "Resident.mx" o solo wordmark según el espacio. Negro sobre blanco, blanco sobre negro. Nunca cambiar colores, distorsionar ni agregar efectos.

---

## Inspiración Visual

Inspírate en aplicaciones modernas de administración de comunidades y fintech, combinando lo mejor de ambos mundos. El dashboard del administrador debe recordar a apps fintech con gráficas de barras simplificadas usando la paleta cyan/aqua de la marca para las finanzas, mientras que las pantallas de residente toman referencia de apps de comunidad/vecinos con secciones de noticias y accesos rápidos. Utiliza animaciones sutiles y transiciones fluidas (300ms ease) al cambiar de pantalla o al actualizar datos, dando una sensación de aplicación moderna y pulida. La estética debe transmitir profesionalismo confiable (propio de fintech) a la vez que calidez y cercanía (propio de aplicaciones comunitarias).

---

## Accesibilidad y Plataforma

- **Contraste:** Mínimo WCAG AA. Texto negro `#000000` sobre blanco `#FFFFFF` = ratio 21:1. Gris `#6B7280` sobre blanco = verificar ratio. El cyan `#23C1DA` sobre blanco puede no cumplir para texto pequeño; usarlo solo para íconos, bordes y texto grande o sobre fondos oscuros.
- **Tamaños táctiles:** Mínimo 44px de alto para botones y tabs en móvil. Los botones primarios ya tienen 14px padding vertical + texto = ~48px.
- **Tipografía responsive:** 16px base en web, ajustable en móvil. Permitir reflujo de texto sin romper maquetación.
- **Móvil:** Patrones nativos iOS/Android: navegación inferior fija, headers fijos con título, scroll vertical, `safe-area-inset-bottom`.
- **Desktop:** Layout de columnas: sidebar 240px + contenido principal expandido. Tablas y gráficas más densas. Hover states en todos los interactivos.
- **Daltonismo:** No depender solo de color para comunicar estado. Usar íconos (checkmark, X, reloj) junto a los status badges de color.