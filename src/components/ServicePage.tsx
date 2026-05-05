import React from "react";
import { ChevronRight, ArrowRight, Sparkles, LayoutGrid, PenTool, Code2, ShieldCheck } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "@/i18n/routing";

export type ServiceFeature = {
    title: string;
    description: string;
    icon?: React.ReactNode;
};

export type ServiceStat = {
    label: string;
    value: string;
};

export type ServicePageProps = {
    brandName?: string;
    breadcrumb?: string[];
    title: string;
    subtitle: string;
    heroDescription: string;
    heroImage?: React.ReactNode;
    primaryCtaLabel: string;
    secondaryCtaLabel?: string;
    onPrimaryCta?: () => void;
    onSecondaryCta?: () => void;
    introTitle: string;
    introDescription: string;
    introImage?: React.ReactNode;
    introBullets: string[];
    introCtaLabel: string;
    valueSectionTitle: string;
    valueSectionDescription: string;
    cards: ServiceFeature[];
    stats?: ServiceStat[];
    footerTitle: string;
    footerDescription: string;
    footerCtaLabel: string;
};

const defaultImage = (
    <div className="flex h-full min-h-[280px] items-center justify-center rounded-[28px] border border-slate-800 bg-[#161b22] text-sm font-medium text-slate-400 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        Imagen
    </div>
);

function SectionHeading({
    eyebrow,
    title,
    description,
    centered = false,
}: {
    eyebrow?: string;
    title: string;
    description: string;
    centered?: boolean;
}) {
    return (
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            {eyebrow ? (
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    {eyebrow}
                </div>
            ) : null}
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
                {description}
            </p>
        </div>
    );
}

function GlassPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={`rounded-[30px] border border-slate-800 bg-[#11151c] shadow-[0_24px_80px_rgba(0,0,0,0.35)] ${className}`}
        >
            {children}
        </div>
    );
}

export function ServicePage({
    brandName = "impulsoftware",
    breadcrumb = ["impulsoftware", "Servicio"],
    title,
    subtitle,
    heroDescription,
    heroImage,
    primaryCtaLabel,
    secondaryCtaLabel,
    onPrimaryCta,
    onSecondaryCta,
    introTitle,
    introDescription,
    introImage,
    introBullets,
    introCtaLabel,
    valueSectionTitle,
    valueSectionDescription,
    cards,
    stats,
    footerTitle,
    footerDescription,
    footerCtaLabel,
}: ServicePageProps) {
    return (
        <div className="min-h-screen bg-[#0b0f14] text-slate-200 antialiased">
            <Header />
            <main>
                {/* Hero */}
                <section className="relative overflow-hidden border-b border-slate-800">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.08),transparent_26%)]" />
                    <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-16">
                        <div>
                            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                                <span className="font-medium text-slate-300">{brandName}</span>
                                {breadcrumb.slice(1).map((item) => (
                                    <React.Fragment key={item}>
                                        <ChevronRight className="h-4 w-4 text-slate-600" />
                                        <span>{item}</span>
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                                <Sparkles className="h-3.5 w-3.5" />
                                {subtitle}
                            </div>

                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                                {title}
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                                {heroDescription}
                            </p>



                            {stats?.length ? (
                                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                                    {stats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-2xl border border-slate-800 bg-[#11151c] p-4"
                                        >
                                            <div className="text-2xl font-semibold text-white">{stat.value}</div>
                                            <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>

                       <GlassPanel className="overflow-hidden p-0">
                        {typeof heroImage == "string" ? (
                            <img
                                src={heroImage}
                                alt={title}
                                className="h-full min-h-[320px] w-full rounded-[30px] object-cover"
                            />
                        ) : (
                            heroImage ?? defaultImage
                        )}
                    </GlassPanel>
                    </div>
                </section>

                {/* Intro */}
                <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
                    <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                        <GlassPanel className="order-2 overflow-hidden p-0 lg:order-1">
                            {typeof introImage === "string" ? (
                                <img
                                    src={introImage}
                                    alt={introTitle}
                                    className="h-full min-h-[320px] w-full rounded-[30px] object-cover"
                                />
                            ) : (
                                introImage ?? defaultImage
                            )}
                        </GlassPanel>

                        <div className="order-1 lg:order-2">
                            <SectionHeading title={introTitle} description={introDescription} />

                            <ul className="mt-8 space-y-4">
                                {introBullets.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-[#11151c] px-4 py-4"
                                    >
                                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-500/20">
                                            <ShieldCheck className="h-3.5 w-3.5" />
                                        </span>
                                        <p className="text-sm leading-6 text-slate-300 md:text-base">{item}</p>
                                    </li>
                                ))}
                            </ul>

                            <Link href={"/planes"}>
                                <button
                                    onClick={onPrimaryCta}
                                    className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                                >
                                    {introCtaLabel}
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Value cards */}
                <section className="border-y border-slate-800 bg-[#0f131a]">
                    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
                        <SectionHeading
                            centered
                            eyebrow="Diseño estratégico"
                            title={valueSectionTitle}
                            description={valueSectionDescription}
                        />

                        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {cards.map((card) => (
                                <GlassPanel key={card.title} className="p-6 transition hover:-translate-y-1 hover:border-slate-700">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/20">
                                        {card.icon ?? <LayoutGrid className="h-5 w-5" />}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-400">{card.description}</p>
                                </GlassPanel>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
                    <GlassPanel className="overflow-hidden p-8 md:p-10 lg:p-12">
                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div>
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                                    <Code2 className="h-3.5 w-3.5" />
                                    Inicia ahora
                                </div>
                                <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                                    {footerTitle}
                                </h3>
                                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                                    {footerDescription}
                                </p>
                            </div>

                            <div className="flex lg:justify-end">
                                <Link href={"/planes"}>
                                    <button
                                        onClick={onSecondaryCta ?? onPrimaryCta}
                                        className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-indigo-400"
                                    >
                                        {footerCtaLabel}
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </GlassPanel>
                </section>
            </main>
            <Footer />
        </div>
    );
}

/*
  Ejemplo listo con tu información de diseño y desarrollo de sitios web.
  Puedes cambiar textos, imágenes, íconos, CTAs y tarjetas sin tocar la estructura.
*/

