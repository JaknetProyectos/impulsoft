"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Pillars() {
  const t = useTranslations("pillars");

  const pillars = [
    {
      title: t("items.innovation.title"),
      description: t("items.innovation.description"),
      icon: "https://ext.same-assets.com/6640246/733598654.png",
    },
    {
      title: t("items.quality.title"),
      description: t("items.quality.description"),
      icon: "https://ext.same-assets.com/6640246/2209562753.png",
    },
    {
      title: t("items.collaboration.title"),
      description: t("items.collaboration.description"),
      icon: "https://ext.same-assets.com/6640246/383386724.png",
    },
    {
      title: t("items.ethics.title"),
      description: t("items.ethics.description"),
      icon: "https://ext.same-assets.com/6640246/3181823798.png",
    },
    {
      title: t("items.commitment.title"),
      description: t("items.commitment.description"),
      icon: "https://ext.same-assets.com/6640246/3562676242.png",
    },
  ];

  return (
    <section className="py-24 bg-[#0b0f14]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="text-indigo-400 text-sm font-medium">
            {t("badge")}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            {t("title")}
          </h2>

          <p className="text-slate-400 mb-6">
            {t("description")}
          </p>

          <Link href={"/planes"}>
            <button className="bg-indigo-500 hover:bg-indigo-400 transition px-6 py-2 rounded-xl text-white font-semibold">
              {t("cta")}
            </button>
          </Link>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-6 bg-[#11151c] border border-slate-800 rounded-2xl transition hover:bg-[#151a22] hover:border-slate-600"
            >
              <div className="flex flex-col items-start">

                {/* Icon */}
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-[#0b0f14] border border-slate-800">
                  <Image
                    src={pillar.icon}
                    alt={pillar.title}
                    width={32}
                    height={32}
                    className="object-contain transition group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}