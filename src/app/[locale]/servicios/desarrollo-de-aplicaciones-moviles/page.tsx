import { ServicePage } from "@/components/ServicePage";
import { Smartphone, Layers, Palette, Smile } from "lucide-react";
import { useLocale } from "next-intl";

function MobileAppsServicePage() {
  return (
    <ServicePage
      brandName="impulsoftware"
      breadcrumb={["impulsoftware", "Desarrollo de aplicaciones móviles"]}

      title="Desarrollo de aplicaciones móviles"
      subtitle="Apps a medida para iOS y Android"

      heroDescription="Creamos aplicaciones móviles personalizadas para iOS y Android que destacan por su diseño atractivo, funcionalidad intuitiva y rendimiento excepcional."

      primaryCtaLabel="Ver planes"

      introTitle="Tu aplicación hecha realidad"
      introDescription="Desde aplicaciones de comercio electrónico hasta herramientas de productividad."

      introBullets={[
        "Nos enfocamos en mejorar la experiencia del usuario",
        "Nos aseguramos que la aplicación sea fácil de navegar",
        "Atendemos la satisfacción de las expectativas de tus usuarios",
        "Realizamos pruebas exhaustivas para garantizar estabilidad y rendimiento óptimo",
      ]}

      introCtaLabel="Ver planes"

      valueSectionTitle="Hacemos diseños creativos para cada aplicación móvil"
      valueSectionDescription="Cada aplicación se diseña pensando en la experiencia del usuario, el rendimiento y la identidad de tu marca."

      cards={[
        {
          title: "Usabilidad",
          description: "Interfaces claras y bien estructuradas que facilitan la interacción del usuario.",
          icon: <Layers className="h-5 w-5" />,
        },
        {
          title: "Facilidad de uso",
          description: "Navegación intuitiva que permite a los usuarios lograr sus objetivos sin fricción.",
          icon: <Smartphone className="h-5 w-5" />,
        },
        {
          title: "Diseño de marca",
          description: "Aplicaciones alineadas con la identidad visual y valores de tu negocio.",
          icon: <Palette className="h-5 w-5" />,
        },
        {
          title: "Satisfacción del usuario",
          description: "Experiencias que generan engagement, retención y mejores resultados.",
          icon: <Smile className="h-5 w-5" />,
        },
      ]}

      footerTitle="Descubre los planes que tenemos para ti"
      footerDescription="Convierte tu idea en una aplicación sólida, escalable y lista para crecer."
      footerCtaLabel="Ver planes"
    />
  );
}

function MobileAppsServicePageEN() {
  return (
    <ServicePage
      brandName="impulsoftware"
      breadcrumb={["impulsoftware", "Mobile App Development"]}

      title="Mobile App Development"
      subtitle="Custom apps for iOS and Android"

      heroDescription="We build custom mobile applications for iOS and Android that stand out for their attractive design, intuitive functionality, and outstanding performance."

      primaryCtaLabel="View plans"

      introTitle="Your app made real"
      introDescription="From e-commerce apps to productivity tools."

      introBullets={[
        "We focus on improving user experience",
        "We ensure the app is easy to navigate",
        "We meet and exceed user expectations",
        "We perform thorough testing to ensure stability and optimal performance",
      ]}

      introCtaLabel="View plans"

      valueSectionTitle="We create creative designs for every mobile app"
      valueSectionDescription="Each application is designed with user experience, performance, and your brand identity in mind."

      cards={[
        {
          title: "Usability",
          description: "Clear and structured interfaces that make user interaction easy.",
          icon: <Layers className="h-5 w-5" />,
        },
        {
          title: "Ease of use",
          description: "Intuitive navigation that allows users to achieve their goals without friction.",
          icon: <Smartphone className="h-5 w-5" />,
        },
        {
          title: "Brand design",
          description: "Apps aligned with your business identity and visual values.",
          icon: <Palette className="h-5 w-5" />,
        },
        {
          title: "User satisfaction",
          description: "Experiences that generate engagement, retention, and better results.",
          icon: <Smile className="h-5 w-5" />,
        },
      ]}

      footerTitle="Discover the plans we have for you"
      footerDescription="Turn your idea into a solid, scalable application ready to grow."
      footerCtaLabel="View plans"
    />
  );
}

export default function Page() {
  const locale = useLocale();

  return locale === "en" ? (
    <MobileAppsServicePageEN />
  ) : (
    <MobileAppsServicePage />
  );
}