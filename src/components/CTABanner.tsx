"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

export default function CTABanner() {
  const t = useTranslations("ctaPanel");

  return (
    <section className="py-24 bg-[#0f1117] relative overflow-hidden">
      {/* Subtle glow accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#61afef]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#c678dd]/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1a1d25] border border-[#2a2f3a] rounded-3xl p-10 md:p-14 text-center shadow-xl">

          <span className="text-[#61afef] text-sm font-semibold tracking-wide uppercase">
            {t("badge")}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
            {t("title")}
          </h2>

          <Link href="/planes">
            <Button className="bg-[#6366f1] text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg transition-all">
              {t("cta")}
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
}