"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function About() {
  const t = useTranslations("aboutSection");

  const values = [
    {
      title: t("values.innovation"),
      icon: "https://ext.same-assets.com/6640246/1361300322.png",
    },
    {
      title: t("values.ethics"),
      icon: "https://ext.same-assets.com/6640246/2610315482.png",
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-[#0b0f14]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#11151c] border border-slate-800 rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {t("title")}
              </h2>

              <p className="text-slate-400 mb-8">
                {t("subtitle")}
              </p>

              {/* Values */}
              <div className="space-y-4 mb-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-[#0b0f14] hover:bg-[#151a22] transition"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#11151c] border border-slate-800 flex-shrink-0">
                      <Image
                        src={value.icon}
                        alt={value.title}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>

                    <h3 className="font-semibold text-white">
                      {value.title}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-slate-400 text-sm max-w-xs">
                  {t("note")}
                </p>

                <Link href={"/nosotros"}>
                  <button className="bg-indigo-500 hover:bg-indigo-400 transition px-6 py-2 rounded-xl text-white font-semibold">
                    {t("cta")}
                  </button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0b0f14]">
                <Image
                  src="https://ext.same-assets.com/6640246/3793909326.jpeg"
                  alt={t("imageAlt")}
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}