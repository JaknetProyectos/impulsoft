import { ServicePage, ServicePageProps } from "@/components/ServicePage";
import { PenTool, LayoutGrid, Sparkles, Code2, ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";

function ServicePageExample() {
    const webService: ServicePageProps = {
        brandName: "impulsoftware",
        breadcrumb: ["impulsoftware", "Diseño y desarrollo de sitios web"],
        title: "Diseño y desarrollo de sitios web",
        subtitle: "Diseño web a medida",
        heroDescription:
            "Diseñamos y desarrollamos sitios web a medida que reflejen la identidad de tu marca, a la par de ofrecer una experiencia de usuario excepcional.",
        heroImage: "https://loop-media.co/wp-content/uploads/2025/01/Complete-Guide-to-Web-Development-and-Design.jpg",
        introImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        primaryCtaLabel: "Solicitar una cotización",
        secondaryCtaLabel: "Ver planes",
        introTitle: "Diseño de páginas web creativas",
        introDescription: "Porque cada empresa es diferente.",

        introBullets: [
            "Diseñamos y desarrollamos sitios web a medida.",
            "Diseño que refleja la identidad de tu marca.",
            "Desde sitios web corporativos hasta plataformas de comercio electrónico.",
            "Creamos sitios web visualmente impactantes y totalmente funcionales.",
        ],
        introCtaLabel: "Solicitar una cotización",
        valueSectionTitle: "Diseños web creativos",
        valueSectionDescription:
            "Nos comprometemos a crear sitios web visualmente impactantes y totalmente funcionales que te ayuden a destacarte en línea.",
        cards: [
            {
                title: "Sitios web a medida",
                description:
                    "Reflejan la identidad de tu marca y ofrecen una experiencia de usuario excepcional.",
                icon: <Sparkles className="h-5 w-5" />,
            },
            {
                title: "Producción de diseño",
                description:
                    "Comenzamos con una fase de descubrimiento donde comprendemos tus objetivos comerciales, tu audiencia y tus requisitos técnicos.",
                icon: <PenTool className="h-5 w-5" />,
            },
            {
                title: "Desarrollo",
                description:
                    "Usamos tecnologías modernas y estándares web para crear un sitio totalmente funcional y receptivo.",
                icon: <Code2 className="h-5 w-5" />,
            },
            {
                title: "Garantía",
                description:
                    "Realizamos pruebas exhaustivas en diferentes dispositivos y navegadores para garantizar la compatibilidad y la calidad del sitio.",
                icon: <ShieldCheck className="h-5 w-5" />,
            },
        ],

        footerTitle: "Descubre los planes que tenemos para ti",
        footerDescription:
            "Te ayudamos a lanzar una presencia web sólida, profesional y lista para crecer con tu negocio.",
        footerCtaLabel: "Ver planes",
    };

    return <ServicePage {...webService} />;
}

function WebServicePageEN() {
    return (
        <ServicePage
            brandName="impulsoftware"
            breadcrumb={["impulsoftware", "Web Design and Development"]}

            title="Website Design and Development"
            subtitle="Custom web design"

            heroDescription="We design and develop custom websites that reflect your brand identity while delivering an exceptional user experience."



            primaryCtaLabel="Request a quote"
            secondaryCtaLabel="View plans"

            introTitle="Creative website design"
            introDescription="Because every business is different."

            heroImage="https://loop-media.co/wp-content/uploads/2025/01/Complete-Guide-to-Web-Development-and-Design.jpg"
            introImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

            introBullets={[
                "We design and develop custom websites.",
                "Designs that reflect your brand identity.",
                "From corporate websites to e-commerce platforms.",
                "We create visually impactful and fully functional websites.",
            ]}

            introCtaLabel="Request a quote"

            valueSectionTitle="Creative web designs"
            valueSectionDescription="We are committed to building visually striking and fully functional websites that help you stand out online."

            cards={[
                {
                    title: "Custom websites",
                    description:
                        "They reflect your brand identity and provide an exceptional user experience.",
                    icon: <Sparkles className="h-5 w-5" />,
                },
                {
                    title: "Design process",
                    description:
                        "We start with a discovery phase where we understand your business goals, audience, and technical requirements.",
                    icon: <PenTool className="h-5 w-5" />,
                },
                {
                    title: "Development",
                    description:
                        "We use modern technologies and web standards to build a fully functional and responsive website.",
                    icon: <Code2 className="h-5 w-5" />,
                },
                {
                    title: "Quality assurance",
                    description:
                        "We perform thorough testing across devices and browsers to ensure compatibility and quality.",
                    icon: <ShieldCheck className="h-5 w-5" />,
                },
            ]}

            footerTitle="Discover the plans we have for you"
            footerDescription="We help you launch a solid, professional web presence ready to grow with your business."
            footerCtaLabel="View plans"
        />
    );
}

export default function Page() {
    const locale = useLocale();

    return locale === "en" ? <WebServicePageEN /> : <ServicePageExample />;
}