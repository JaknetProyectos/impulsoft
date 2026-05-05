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
        heroImage: (
            <div className="flex min-h-[320px] items-center justify-center rounded-[28px] border border-slate-800 bg-[#141a22] p-6">
                <div className="grid gap-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/20">
                        <PenTool className="h-7 w-7" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-white">Sitios que convierten</p>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                            Una experiencia visual sólida, estructura clara y enfoque profesional.
                        </p>
                    </div>
                </div>
            </div>
        ),
        primaryCtaLabel: "Solicitar una cotización",
        secondaryCtaLabel: "Ver planes",
        introTitle: "Diseño de páginas web creativas",
        introDescription: "Porque cada empresa es diferente.",
        introImage: (
            <div className="flex min-h-[320px] items-center justify-center rounded-[28px] border border-slate-800 bg-[#141a22] p-6">
                <div className="grid gap-3 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/20">
                        <LayoutGrid className="h-7 w-7" />
                    </div>
                    <p className="text-lg font-semibold text-white">Diseño profesional</p>
                    <p className="max-w-sm text-sm leading-6 text-slate-400">
                        Visual, consistente y listo para distintos tipos de negocio.
                    </p>
                </div>
            </div>
        ),
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

            heroImage={
                <div className="flex min-h-[320px] items-center justify-center rounded-[28px] border border-slate-800 bg-[#141a22] p-6">
                    <div className="grid gap-4 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/20">
                            <PenTool className="h-7 w-7" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-white">High-converting websites</p>
                            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                                A strong visual experience, clear structure, and professional focus.
                            </p>
                        </div>
                    </div>
                </div>
            }

            primaryCtaLabel="Request a quote"
            secondaryCtaLabel="View plans"

            introTitle="Creative website design"
            introDescription="Because every business is different."

            introImage={
                <div className="flex min-h-[320px] items-center justify-center rounded-[28px] border border-slate-800 bg-[#141a22] p-6">
                    <div className="grid gap-3 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/20">
                            <LayoutGrid className="h-7 w-7" />
                        </div>
                        <p className="text-lg font-semibold text-white">Professional design</p>
                        <p className="max-w-sm text-sm leading-6 text-slate-400">
                            Visual, consistent, and suitable for different types of businesses.
                        </p>
                    </div>
                </div>
            }

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