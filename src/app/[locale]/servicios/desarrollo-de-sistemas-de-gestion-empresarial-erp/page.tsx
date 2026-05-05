import { ServicePage } from "@/components/ServicePage";
import { BarChart3, Search, Settings, GraduationCap } from "lucide-react";
import { useLocale } from "next-intl";

function ErpServicePage() {
    return (
        <ServicePage
            brandName="impulsoftware"
            breadcrumb={["impulsoftware", "Sistemas ERP"]}

            title="Desarrollo de Sistemas de Gestión Empresarial (ERP)"
            subtitle="Optimiza y controla tu operación"

            heroDescription="Creamos sistemas de gestión empresarial personalizados que automatizan procesos clave y mejoran la eficiencia operativa en tu empresa."

            primaryCtaLabel="Ver planes"

            introTitle="Automatiza los procesos clave de tu empresa"
            introDescription="Diseñamos soluciones ERP a medida que centralizan la información y optimizan cada área de tu negocio."

            introBullets={[
                "Gestión de inventarios y compras",
                "Contabilidad y gestión de recursos humanos",
                "Adaptación completa a las necesidades específicas de tu negocio",
                "Automatización de procesos clave para mejorar la eficiencia operativa",
            ]}

            introCtaLabel="Ver planes"

            valueSectionTitle="Soluciones ERP diseñadas para tu negocio"
            valueSectionDescription="Analizamos tu operación para construir un sistema que se adapte a tu empresa, no al revés."

            cards={[
                {
                    title: "Análisis detallado",
                    description: "Comprendemos tus procesos comerciales y requisitos operativos para diseñar la mejor solución.",
                    icon: <Search className="h-5 w-5" />,
                },
                {
                    title: "Identificación de mejoras",
                    description: "Detectamos oportunidades de optimización para hacer tu operación más eficiente.",
                    icon: <BarChart3 className="h-5 w-5" />,
                },
                {
                    title: "Diseño y desarrollo",
                    description: "Construimos sistemas a medida con módulos específicos según las necesidades de tu empresa.",
                    icon: <Settings className="h-5 w-5" />,
                },
                {
                    title: "Capacitación y soporte",
                    description: "Acompañamos a tu equipo para asegurar una implementación y adopción exitosa.",
                    icon: <GraduationCap className="h-5 w-5" />,
                },
            ]}

            footerTitle="Descubre los planes que tenemos para ti"
            footerDescription="Centraliza tu operación, automatiza procesos y toma mejores decisiones con un sistema ERP hecho a tu medida."
            footerCtaLabel="Ver planes"
        />
    );
}

function ErpServicePageEN() {
    return (
        <ServicePage
            brandName="impulsoftware"
            breadcrumb={["impulsoftware", "ERP Systems"]}

            title="Enterprise Resource Planning (ERP) Development"
            subtitle="Optimize and control your operations"

            heroDescription="We build custom enterprise resource planning systems that automate key processes and improve operational efficiency across your company."

            primaryCtaLabel="View plans"

            introTitle="Automate your company's key processes"
            introDescription="We design tailored ERP solutions that centralize information and optimize every area of your business."

            introBullets={[
                "Inventory and purchasing management",
                "Accounting and human resources management",
                "Fully adapted to your specific business needs",
                "Automation of key processes to improve operational efficiency",
            ]}

            introCtaLabel="View plans"

            valueSectionTitle="ERP solutions designed for your business"
            valueSectionDescription="We analyze your operations to build a system that adapts to your company, not the other way around."

            cards={[
                {
                    title: "Detailed analysis",
                    description: "We understand your business processes and operational requirements to design the best solution.",
                    icon: <Search className="h-5 w-5" />,
                },
                {
                    title: "Opportunity identification",
                    description: "We detect optimization opportunities to make your operations more efficient.",
                    icon: <BarChart3 className="h-5 w-5" />,
                },
                {
                    title: "Design & development",
                    description: "We build custom systems with specific modules based on your company's needs.",
                    icon: <Settings className="h-5 w-5" />,
                },
                {
                    title: "Training & support",
                    description: "We guide your team to ensure successful implementation and adoption.",
                    icon: <GraduationCap className="h-5 w-5" />,
                },
            ]}

            footerTitle="Discover the plans we have for you"
            footerDescription="Centralize your operations, automate processes, and make better decisions with a custom-built ERP system."
            footerCtaLabel="View plans"
        />
    );
}

export default function Page() {
    const locale = useLocale();

    return locale === "en" ? (
        <ErpServicePageEN />
    ) : (
        <ErpServicePage />
    );
}