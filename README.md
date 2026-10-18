# Invitación de graduación · Noelia

React + Vite + Tailwind CSS. Diseño turquesa claro/perlado y profundo, negro y oro. Apertura animada, arte original con IA, cuenta regresiva, dedicatoria a padres, fecha y lugar, calendario descargable y confirmación por WhatsApp.

## Ejecutar
Requiere Node.js 20.19+ o 22.12+.
```sh
npm install
npm run dev
```
```sh
npm test
npm run build
npm run preview
```
La carpeta `dist` contiene la versión para hosting estático. La vista local usa exclusivamente 127.0.0.1.

## Personalizar
Edita `src/config.js`: nombre, carrera, fecha, nombres de padres, dirección, pin de Google Maps, teléfono de confirmación, textos y colores. La imagen se encuentra en `public/images/graduacion-editorial.png`; es una composición generada con IA, no una fotografía de la graduada. Las fuentes se descargan desde Google Fonts con alternativas locales.

Fecha confirmada por el usuario: 7 de noviembre de 2026. La hora «a las 5» se interpretó como 17:00 de Bolivia, guardada con zona explícita `-04:00`. El pin corresponde a la ubicación compartida en el proyecto anterior. Para confirmaciones se ha usado el teléfono facilitado antes: +591 73769491, que no se muestra como texto en la invitación. El código de vestimenta fue retirado a petición del usuario.

La cuenta regresiva usa la hora del dispositivo y no pasa a valores negativos; al llegar al momento del evento cambia a celebración. El calendario exporta 17:00 de Bolivia como 21:00 UTC, sin inventar una hora de finalización.

La confirmación prepara un mensaje en WhatsApp: no envía mensajes automáticamente ni guarda confirmaciones en una base de datos. Los nombres y cantidad de invitados se mantienen en el navegador hasta que el visitante abre el mensaje.

Animaciones y desplazamiento suave respetan `prefers-reduced-motion`. Apertura con teclado, foco visible, etiquetas de formulario y textos alternativos incluidos. El mapa abre el pin exacto al pulsarlo.

## Fotografías familiares
El nombre de la madre se corrigió a Dorotea Villarroel Cabrera. Los agradecimientos incluyen padres, hermanos, hermanas, sobrinas y sobrino.
Configura portrait: {src: '/images/mi-foto.jpg', alt: 'Noelia en su sesión de graduación'} para la foto fija de portada. Configura memories: [{src: '/images/familia-1.jpg', alt: 'Noelia con su familia', caption: 'Un logro compartido'}, ...] para el carrusel. Sin archivos reales proporcionados, estos campos permanecen vacíos y no se muestran personas inventadas. El carrusel respeta movimiento reducido y se pausa al enfocarlo con teclado.


Las tres fotografías de personas son imágenes provisionales generadas con IA; no representan a Noelia ni a su familia real. Se reemplazan en src/config.js (portrait y memories).
