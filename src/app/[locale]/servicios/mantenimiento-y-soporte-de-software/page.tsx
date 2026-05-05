import { ServicePage } from "@/components/ServicePage";
import { Wrench, LifeBuoy, Gauge, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";

function MaintenanceServicePage() {
  return (
    <ServicePage
      brandName="impulsoftware"
      breadcrumb={["impulsoftware", "Mantenimiento y soporte de software"]}

      title="Mantenimiento y soporte de software"
      subtitle="Soporte continuo y confiable"

      heroDescription="Ofrecemos servicios de mantenimiento y soporte continuo para garantizar el rendimiento óptimo, junto a la seguridad de tus aplicaciones y sistemas de software."

      heroImage="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      introImage="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

      primaryCtaLabel="Ver planes"

      introTitle="Servicios de mantenimiento y soporte continuo"
      introDescription="Desde actualizaciones de software hasta resolución de problemas técnicos."

      introBullets={[
        "Garantizar el rendimiento óptimo y la seguridad de tus aplicaciones y sistemas de software",
        "Nuestro equipo está disponible para ayudarte en cada paso del camino",
        "Mantener tus aplicaciones actualizadas y funcionando sin problemas",
        "Blindarte con nuestro soporte dedicado para proteger tus sistemas",
      ]}

      introCtaLabel="Ver planes"

      valueSectionTitle="Servicios de mantenimiento y soporte continuo"
      valueSectionDescription="Nos enfocamos en mantener tus sistemas estables, seguros y funcionando sin interrupciones para que tu negocio no se detenga."

      cards={[
        {
          title: "Mantenimiento",
          description: "Actualizaciones constantes y mejoras para asegurar el correcto funcionamiento del software.",
          icon: <Wrench className="h-5 w-5" />,
        },
        {
          title: "Soporte continuo",
          description: "Atención técnica disponible para resolver incidencias y dudas en cualquier momento.",
          icon: <LifeBuoy className="h-5 w-5" />,
        },
        {
          title: "Rendimiento óptimo",
          description: "Monitoreo y optimización para garantizar velocidad, estabilidad y eficiencia.",
          icon: <Gauge className="h-5 w-5" />,
        },
        {
          title: "Seguridad",
          description: "Protección constante contra vulnerabilidades y mantenimiento de entornos seguros.",
          icon: <ShieldCheck className="h-5 w-5" />,
        },
      ]}

      footerTitle="Descubre los planes que tenemos para ti"
      footerDescription="Asegura la continuidad de tu operación con un servicio de soporte profesional y constante."
      footerCtaLabel="Ver planes"
    />
  );
}

function MaintenanceServicePageEN() {
  return (
    <ServicePage
      brandName="impulsoftware"
      breadcrumb={["impulsoftware", "Software Maintenance and Support"]}

      title="Software Maintenance and Support"
      subtitle="Continuous and reliable support"
      heroImage="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      introImage="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      heroDescription="We provide ongoing maintenance and support services to ensure optimal performance and security across your applications and software systems."

      primaryCtaLabel="View plans"

      introTitle="Continuous maintenance and support services"
      introDescription="From software updates to technical issue resolution."

      introBullets={[
        "Ensure optimal performance and security of your applications and software systems",
        "Our team is available to support you every step of the way",
        "Keep your applications updated and running smoothly",
        "Protect your systems with dedicated support and monitoring",
      ]}

      introCtaLabel="View plans"

      valueSectionTitle="Continuous maintenance and support services"
      valueSectionDescription="We focus on keeping your systems stable, secure, and running without interruptions so your business never stops."

      cards={[
        {
          title: "Maintenance",
          description:
            "Continuous updates and improvements to ensure proper software performance.",
          icon: <Wrench className="h-5 w-5" />,
        },
        {
          title: "Ongoing support",
          description:
            "Technical assistance available to resolve issues and questions at any time.",
          icon: <LifeBuoy className="h-5 w-5" />,
        },
        {
          title: "Optimal performance",
          description:
            "Monitoring and optimization to ensure speed, stability, and efficiency.",
          icon: <Gauge className="h-5 w-5" />,
        },
        {
          title: "Security",
          description:
            "Constant protection against vulnerabilities and secure environment maintenance.",
          icon: <ShieldCheck className="h-5 w-5" />,
        },
      ]}

      footerTitle="Discover the plans we have for you"
      footerDescription="Ensure business continuity with professional and ongoing support services."
      footerCtaLabel="View plans"
    />
  );
}

export default function Page() {
  const locale = useLocale();

  return locale === "en"
    ? <MaintenanceServicePageEN />
    : <MaintenanceServicePage />;
}