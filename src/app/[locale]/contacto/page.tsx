"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Contact from "@/components/Contact";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function ContactoPage() {
  const t = useTranslations("contact");

  return (
    <main className="min-h-screen bg-[#0b0f14] text-slate-300">
      <Header />
      <CartDrawer />

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="text-indigo-400 text-sm font-medium">
          {t("hero.badge")}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
          {t("hero.title")}
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {t("hero.description")}
        </p>
      </section>

      {/* FORM */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-[#22252b] border border-slate-800 rounded-2xl p-8">
          <Contact />
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">

          {/* Dirección */}
          <div className="bg-[#11151c] border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-indigo-400" />
            </div>

            <h3 className="text-white font-semibold mb-3">
              {t("cards.address.title")}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              {t("cards.address.value")}
            </p>
          </div>

          {/* Email */}
          <div className="bg-[#11151c] border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-indigo-400" />
            </div>

            <h3 className="text-white font-semibold mb-3">
              {t("cards.email.title")}
            </h3>

            <Link
              href="mailto:contacto@impulsoftwareware.com"
              className="text-slate-400 hover:text-white transition text-sm"
            >
              {t("cards.email.value")}
            </Link>
          </div>

          {/* Teléfono */}
          <div className="bg-[#11151c] border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-indigo-400" />
            </div>

            <h3 className="text-white font-semibold mb-3">
              {t("cards.phone.title")}
            </h3>

            <Link
              href="tel:+525552063047"
              className="text-slate-400 hover:text-white transition text-sm"
            >
              {t("cards.phone.value")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
        <div className="bg-[#11151c] border border-slate-800 rounded-2xl p-10 flex flex-col items-center gap-6">

          <Image
            src="/logo.png"
            alt="Logo"
            width={400}
            height={100}
            className="opacity-80"
          />

          <p className="text-slate-400 max-w-xl">
            {t("cta")}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}