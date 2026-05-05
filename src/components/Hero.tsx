"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0b0f14]">

      {/* Decorative elements */}
      <div className="absolute top-32 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-slate-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* IMAGE */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative bg-[#11151c] border border-slate-800 rounded-2xl p-6">

              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={t("imageAlt")}
                width={600}
                height={500}
                className="w-full h-auto animate-float"
                priority
              />

              <Image
                src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={t("decorativeAlt")}
                width={60}
                height={60}
                className="absolute top-20 right-0 animate-float-delayed opacity-70"
              />

              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={t("decorativeAlt")}
                width={50}
                height={50}
                className="absolute bottom-20 left-0 animate-float opacity-70"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#11151c] border border-slate-800 px-4 py-2 rounded-xl mb-6">
              <span className="text-slate-400">
                {t("badge.start")}
              </span>
              <span className="text-indigo-400 font-bold">
                {t("badge.highlight")}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t("title")}
            </h1>

            {/* CTA */}
            <Link href={"/planes"}>
              <button className="bg-indigo-500 hover:bg-indigo-400 transition px-8 py-4 rounded-2xl text-white font-semibold text-lg">
                {t("cta")}
              </button>
            </Link>

            {/* Arrow */}
            <div className="hidden lg:block absolute bottom-10 right-10">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                className="text-slate-600"
              >
                <path
                  d="M10 30 Q30 10 50 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-indigo-400 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}