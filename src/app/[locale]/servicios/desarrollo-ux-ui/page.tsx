import { ServicePage } from "@/components/ServicePage";
import { Users, Layout, MousePointerClick, Palette } from "lucide-react";
import { useLocale } from "next-intl";

export function UiUxServicePage() {
  return (
    <ServicePage
      brandName="impulsoftware"
      breadcrumb={["impulsoftware", "Desarrollo UI/UX"]}

      title="Desarrollo de Interfaces de Usuario (UI) y Experiencia de Usuario (UX)"
      subtitle="Diseño centrado en el usuario"

      heroDescription="Diseñamos interfaces de usuario intuitivas y atractivas que brindan una experiencia de usuario excepcional en todas tus aplicaciones y plataformas digitales."

      primaryCtaLabel="Ver planes"

      introTitle="Diseño de interfaces de usuario"
      introDescription="Creamos experiencias digitales pensadas para usuarios reales, enfocadas en usabilidad, claridad y resultados."

      introBullets={[
        "Diseño de wireframes para estructurar la experiencia desde el inicio",
        "Creación de prototipos interactivos para validar ideas rápidamente",
        "Interfaces visualmente atractivas y funcionales",
        "Experiencias consistentes en todas tus plataformas digitales",
      ]}

      introCtaLabel="Ver planes"

      valueSectionTitle="Desarrollo de Interfaces UI y Experiencia UX"
      valueSectionDescription="Combinamos investigación, diseño y funcionalidad para crear productos digitales que no solo se ven bien, sino que funcionan de forma intuitiva."

      cards={[
        {
          title: "Comprensión del usuario",
          description: "Analizamos necesidades, comportamientos y objetivos para diseñar experiencias realmente útiles.",
          icon: <Users className="h-5 w-5" />,
        },
        {
          title: "Diseño de wireframes",
          description: "Estructuramos la navegación y jerarquía del contenido antes de pasar al diseño visual.",
          icon: <Layout className="h-5 w-5" />,
        },
        {
          title: "Prototipos interactivos",
          description: "Simulamos la experiencia real del producto para validar flujos y detectar mejoras.",
          icon: <MousePointerClick className="h-5 w-5" />,
        },
        {
          title: "Estética + funcionalidad",
          description: "Equilibramos diseño visual atractivo con una experiencia fluida y eficiente.",
          icon: <Palette className="h-5 w-5" />,
        },
      ]}

      footerTitle="Descubre los planes que tenemos para ti"
      footerDescription="Transforma la experiencia de tus usuarios con interfaces diseñadas para convertir y retener."
      footerCtaLabel="Ver planes"
    />
  );
}

export function UiUxServicePageEN() {
  return (
    <ServicePage
      brandName="impulsoftware"
      breadcrumb={["impulsoftware", "UI/UX Design"]}

      title="User Interface (UI) and User Experience (UX) Development"
      subtitle="User-centered design"

      heroDescription="We design intuitive and visually appealing user interfaces that deliver an exceptional user experience across all your applications and digital platforms."

      primaryCtaLabel="View plans"

      introTitle="User interface design"
      introDescription="We create digital experiences designed for real users, focused on usability, clarity, and results."

      introBullets={[
        "Wireframe design to structure the experience from the start",
        "Interactive prototyping to quickly validate ideas",
        "Visually appealing and functional interfaces",
        "Consistent experiences across all your digital platforms",
      ]}

      introCtaLabel="View plans"

      valueSectionTitle="UI Interfaces and UX Experience Development"
      valueSectionDescription="We combine research, design, and functionality to create digital products that not only look good but also feel intuitive to use."

      cards={[
        {
          title: "User understanding",
          description: "We analyze needs, behaviors, and goals to design truly useful experiences.",
          icon: <Users className="h-5 w-5" />,
        },
        {
          title: "Wireframe design",
          description: "We structure navigation and content hierarchy before moving into visual design.",
          icon: <Layout className="h-5 w-5" />,
        },
        {
          title: "Interactive prototypes",
          description: "We simulate the real product experience to validate flows and detect improvements.",
          icon: <MousePointerClick className="h-5 w-5" />,
        },
        {
          title: "Aesthetics + functionality",
          description: "We balance visual design with a smooth and efficient user experience.",
          icon: <Palette className="h-5 w-5" />,
        },
      ]}

      footerTitle="Discover the plans we have for you"
      footerDescription="Transform your users’ experience with interfaces designed to convert and retain."
      footerCtaLabel="View plans"
    />
  );
}

export default function Page() {
  const locale = useLocale();

  return locale === "en" ? (
    <UiUxServicePageEN />
  ) : (
    <UiUxServicePage />
  );
}