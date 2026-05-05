"use client";

import { useLocale, useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { Link } from "@/i18n/routing";

import { Check } from "lucide-react";
import { plansSpanish } from "@/lib/plans-data";
import { plansEnglish } from "@/lib/plans-english";

export default function Pricing() {

  const locale = useLocale()
  const plans = locale === "es" ? plansSpanish : plansEnglish;

  const t = useTranslations("pricing");
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const mainPlans = plans.slice(0, 9);
  const smallPlans = plans.slice(9);

  return (
    <section id="planes" className="py-24 bg-[#0b0f14]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("title")}
          </h2>
        </div>

        {/* MAIN PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {mainPlans.map((plan) => (
            <div
              key={plan.id}
              className="group bg-[#11151c] border border-slate-800 rounded-2xl p-6 transition hover:bg-[#151a22] hover:border-slate-600"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {plan.name}
              </h3>

              <p className="text-slate-400 text-sm mb-4 min-h-[40px]">
                {plan.description}
              </p>

              <div className="mb-4">
                <span className="text-slate-500 text-sm">MXN</span>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">
                    ${formatPrice(plan.price)}
                  </span>
                  <span className="text-slate-500 ml-1">
                    {t("tax")}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-xs mb-4">
                SKU: {plan.sku}
              </p>

              <div className="mb-6">
                <p className="text-white font-semibold mb-3">
                  {t("includes")}
                </p>

                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-slate-300 text-sm"
                    >
                      <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => addToCart(plan)}
                className="w-full bg-indigo-500 hover:bg-indigo-400 transition text-white font-semibold py-3 rounded-xl"
              >
                {t("buy")}
              </button>
            </div>
          ))}
        </div>

        {/* SMALL PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {smallPlans.map((plan) => (
            <div
              key={plan.id}
              className="group bg-[#11151c] border border-slate-800 rounded-2xl p-6 transition hover:bg-[#151a22] hover:border-slate-600"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {plan.name}
              </h3>

              <p className="text-slate-400 text-sm mb-4">
                {plan.description}
              </p>

              <div className="mb-4">
                <span className="text-slate-500 text-sm">MXN</span>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">
                    ${formatPrice(plan.price)}
                  </span>
                  <span className="text-slate-500 ml-1">
                    {t("tax")}
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-xs mb-4">
                SKU: {plan.sku}
              </p>

              <div className="mb-6">
                <p className="text-white font-semibold mb-3">
                  {t("includes")}
                </p>

                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-slate-300 text-sm"
                    >
                      <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => addToCart(plan)}
                className="w-full bg-indigo-500 hover:bg-indigo-400 transition text-white font-semibold py-3 rounded-xl"
              >
                {t("buy")}
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <span className="text-indigo-400 text-sm font-medium">
            {t("cta.badge")}
          </span>

          <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-6">
            {t("cta.title")}
          </h3>

          <Link href={"/plan-personalizado"}>
            <button className="bg-indigo-500 hover:bg-indigo-400 transition px-8 py-3 rounded-xl text-white font-semibold">
              {t("cta.button")}
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}