"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import {
  Computer,
  Globe,
  PaintbrushIcon,
  Pointer,
  Smartphone,
  ToggleLeftIcon,
} from "lucide-react";

export default function NosotrosPage() {
  const t = useTranslations("about");

  const icons = [
    <Smartphone key="1" />,
    <Globe key="2" />,
    <Pointer key="3" />,
    <Computer key="4" />,
    <PaintbrushIcon key="5" />,
    <ToggleLeftIcon key="6" />,
  ];

  return (
    <main className="min-h-screen bg-[#0b0f14] text-slate-300">
      <Header />
      <CartDrawer />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-indigo-400 text-sm font-medium">
            {t("hero.badge")}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-slate-400 text-lg">
            {t("hero.description")}
          </p>
        </div>

        <div className="bg-[#11151c] rounded-2xl p-6">
          <Image
            src="https://ext.same-assets.com/6640246/3793909326.jpeg"
            alt="Our Team"
            width={600}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* DIGITALIZACIÓN */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800 grid lg:grid-cols-2 gap-16 items-center">
        <div className="bg-[#11151c] rounded-2xl p-6">
          <Image
            src="https://by-software.com/wp-content/uploads/2023/06/success_img.png"
            alt="Success"
            width={600}
            height={500}
            className="rounded-xl object-contain"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("digital.title")}
          </h2>

          <p className="text-slate-400 mb-10">
            {t("digital.description")}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {t.raw("services").map((item: string, i: number) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[#11151c] border border-slate-800 p-4 rounded-2xl hover:border-slate-600 transition"
              >
                <div className="text-indigo-400">{icons[i]}</div>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-[#11151c] border border-slate-800 rounded-2xl p-8">
          <div>
            <Image
              src="https://by-software.com/wp-content/uploads/2023/06/history_img.jpg"
              alt="Historia"
              width={600}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="space-y-6">
            <span className="text-indigo-400 text-sm">
              {t("cta.badge")}
            </span>

            <h2 className="text-3xl font-bold text-white">
              {t("cta.title")}
            </h2>

            <p className="text-slate-400">
              {t("cta.description")}
            </p>

            <div>
              <h3 className="text-white font-semibold mb-3">
                {t("cta.objectiveTitle")}
              </h3>

              <ul className="space-y-2 text-slate-400">
                {t.raw("cta.objectives").map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <Link href="/contacto">
              <button className="mt-4 bg-indigo-500 hover:bg-indigo-400 transition px-6 py-3 rounded-2xl text-white font-medium">
                {t("cta.button")}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}