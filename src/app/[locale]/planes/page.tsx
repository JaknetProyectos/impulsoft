"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Pricing from "@/components/Pricing";
import { useTranslations } from "next-intl";

export default function PlanesPage() {
  const t = useTranslations("plans");

  return (
    <main className="min-h-screen bg-[#0b0f14] text-slate-300">
      <Header />
      <CartDrawer />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="text-sm text-indigo-400 mb-3">
          {t("badge")}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {t("title")}
        </h1>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-[#0b0f14] border border-slate-800 rounded-2xl p-6 md:p-8">
          <Pricing />
        </div>
      </section>

      <Footer />
    </main>
  );
}