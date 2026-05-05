"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Services() {
  const t = useTranslations("services");

  const services = [
    {
      title: t("items.mobile"),
      icon: "https://ext.same-assets.com/6640246/999595684.png",
    },
    {
      title: t("items.web"),
      icon: "https://ext.same-assets.com/6640246/4009586048.png",
    },
    {
      title: t("items.maintenance"),
      icon: "https://ext.same-assets.com/6640246/453319153.png",
    },
    {
      title: t("items.api"),
      icon: "https://blog.postman.com/wp-content/uploads/2020/07/API-101-What-Is-a-REST-API-scaled.jpg",
    },
    {
      title: t("items.uiux"),
      icon: "https://fireartstudio.s3-accelerate.amazonaws.com/wp-content/uploads/2018/01/image4-1-1.gif",
    },
    {
      title: t("items.erp"),
      icon: "/erp.png",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#0b0f14]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-[#11151c] border border-slate-800 rounded-2xl cursor-pointer transition-all duration-300 hover:border-slate-600 hover:bg-[#151a22]"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-indigo-500/5" />

              <div className="relative flex flex-col items-center text-center">

                {/* Icon container */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-xl bg-[#0b0f14] border border-slate-800">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}