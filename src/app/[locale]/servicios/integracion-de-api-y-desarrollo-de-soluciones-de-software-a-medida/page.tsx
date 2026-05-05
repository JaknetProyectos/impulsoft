import { ServicePage } from "@/components/ServicePage";
import { Link2, Cpu, Workflow, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";



function ApiIntegrationServicePage() {
  return (
    <ServicePage
      brandName="impulsoftware"
      breadcrumb={["impulsoftware", "Integración de API y soluciones a medida"]}

      title="Integración de API y desarrollo de soluciones de software a la medida"
      subtitle="Conecta, automatiza y escala"

      heroDescription="Nos especializamos en la integración de API y el desarrollo de soluciones de software a medida que optimizan la eficiencia e interoperabilidad en tu empresa."

      primaryCtaLabel="Ver planes"

      heroImage="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      introImage="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

      introTitle="¿Cómo lo hacemos?"
      introDescription="Trabajamos desde la integración de sistemas existentes hasta el desarrollo de nuevas soluciones personalizadas."

      introBullets={[
        "Comprendemos tus sistemas existentes y tus necesidades de integración",
        "Identificamos las API relevantes y diseñamos arquitecturas robustas y escalables",
        "Desarrollamos soluciones personalizadas que aprovechan al máximo estas integraciones",
        "Automatizamos procesos para mejorar la colaboración y el flujo de datos",
        "Nos enfocamos en la seguridad y la fiabilidad en todo momento",
      ]}

      introCtaLabel="Ver planes"

      valueSectionTitle="Soluciones creativas para tu negocio"
      valueSectionDescription="Porque cada negocio es diferente, diseñamos integraciones que realmente aportan valor operativo y estratégico."

      cards={[
        {
          title: "Identificación de API",
          description: "diseñamos una arquitectura de integración robusta y escalable.",
          icon: <Link2 className="h-5 w-5" />,
        },
        {
          title: "Soluciones personalizadas",
          description: "Para aprovechar al máximo las integraciones.",
          icon: <Cpu className="h-5 w-5" />,
        },
        {
          title: "Automatización de procesos",
          description: "Mejorando la colaboración y optimizando el flujo de datos en tu empresa.",
          icon: <Workflow className="h-5 w-5" />,
        },
        {
          title: "Seguridad y fiabilidad",
          description: "nos enfocamos en la seguridad y la fiabilidad, asegurando que tus datos estén protegidos y que tus sistemas funcionen sin problemas en todo momento.",
          icon: <ShieldCheck className="h-5 w-5" />,
        },
      ]}

      footerTitle="Descubre los planes que tenemos para ti"
      footerDescription="Integra tus sistemas, automatiza procesos y lleva la eficiencia de tu empresa al siguiente nivel."
      footerCtaLabel="Ver planes"
    />
  );
}


function ApiIntegrationServicePageEN() {
  return (
    <ServicePage
      brandName="impulsoftware"
      breadcrumb={["impulsoftware", "API Integration and Custom Solutions"]}

      title="API Integration and Custom Software Solutions Development"
      subtitle="Connect, automate, and scale"

      heroDescription="We specialize in API integration and custom software development that improves efficiency and interoperability across your business systems."

      primaryCtaLabel="View plans"

      introTitle="How do we do it?"
      introDescription="We work from integrating existing systems to building fully custom software solutions."

      introBullets={[
        "We analyze your existing systems and integration needs",
        "We identify relevant APIs and design robust, scalable architectures",
        "We build custom solutions that maximize integration value",
        "We automate processes to improve collaboration and data flow",
        "We focus on security and reliability at all times",
      ]}

      introCtaLabel="View plans"

      valueSectionTitle="Creative solutions for your business"
      valueSectionDescription="Because every business is different, we design integrations that truly add operational and strategic value."

      cards={[
        {
          title: "API identification",
          description: "We design a robust and scalable integration architecture.",
          icon: <Link2 className="h-5 w-5" />,
        },
        {
          title: "Custom solutions",
          description: "To fully leverage your system integrations.",
          icon: <Cpu className="h-5 w-5" />,
        },
        {
          title: "Process automation",
          description: "Improving collaboration and optimizing data flow across your company.",
          icon: <Workflow className="h-5 w-5" />,
        },
        {
          title: "Security & reliability",
          description:
            "We focus on security and reliability, ensuring your data is protected and your systems run smoothly at all times.",
          icon: <ShieldCheck className="h-5 w-5" />,
        },
      ]}
      heroImage="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      introImage="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

      footerTitle="Discover the plans we have for you"
      footerDescription="Integrate your systems, automate processes, and take your business efficiency to the next level."
      footerCtaLabel="View plans"
    />
  );
}


export default function Page() {
  const locale = useLocale();

  return locale === "en"
    ? <ApiIntegrationServicePageEN />
    : <ApiIntegrationServicePage />;
}