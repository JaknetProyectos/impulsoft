import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Impulsosoft | Desarrollo de Software a Medida",
    template: "%s | Impulsosoft",
  },
  description:
    "Desarrollamos software a medida: aplicaciones móviles, sitios web, sistemas ERP, integración de APIs y soluciones digitales personalizadas para empresas que buscan crecer.",
  keywords: [
    "desarrollo de software",
    "software a medida",
    "desarrollo de aplicaciones móviles",
    "desarrollo web",
    "sistemas ERP",
    "integración de API",
    "UX UI diseño",
    "soluciones digitales",
    "empresa de software México",
    "Impulsosoft",
  ],
  authors: [{ name: "Impulsosoft" }],
  creator: "Impulsosoft",
  publisher: "Impulsosoft",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // No definimos lang aquí porque lo hará el layout dinámico
    <html suppressHydrationWarning>
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}