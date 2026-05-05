"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";

export default function CustomPlanPage() {
    const t = useTranslations("customPlan");
    const { addToCart } = useCart();

    const [quoteId, setQuoteId] = useState("");
    const [price, setPrice] = useState<number | "">("");

    const handleAddToCart = () => {
        const plan = {
            id: `custom-${Date.now()}`,
            name: t("planName"),
            description: `${t("quoteLabel")}: ${quoteId || "N/A"}`,
            price: Number(price) || 0,
            sku: "custom-plan",
            features: [t("feature")],
        };

        addToCart(plan);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-[#0b0f14] text-slate-300 px-6 py-16">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <h1 className="text-4xl font-bold text-white mb-2">
                        {t("title")}
                    </h1>
                    <p className="text-slate-500 mb-12">
                        {t("breadcrumb")}
                    </p>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Imagen */}
                        <div className="bg-[#11151c] rounded-2xl p-6 flex items-center justify-center">
                            <Image
                                src="https://by-software.com/wp-content/uploads/2024/04/configuration.png"
                                alt="Configuración"
                                width={300}
                                height={300}
                                className="object-contain"
                            />
                        </div>

                        {/* Formulario */}
                        <div className="space-y-8">

                            {/* Contacto */}
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-2">
                                    {t("contact.title")}
                                </h2>
                                <p className="text-slate-400 mb-4">
                                    {t("contact.description")}
                                </p>

                                <button className="bg-indigo-500 hover:bg-indigo-400 transition px-6 py-3 rounded-2xl text-white font-medium">
                                    {t("contact.button")}
                                </button>
                            </div>

                            {/* Form */}
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-2">
                                    {t("form.title")}
                                </h2>
                                <p className="text-slate-400 mb-6">
                                    {t("form.description")}
                                </p>

                                <div className="space-y-4">

                                    <div>
                                        <label className="text-sm text-slate-400">
                                            {t("form.quoteId")}
                                        </label>
                                        <input
                                            type="text"
                                            value={quoteId}
                                            onChange={(e) => setQuoteId(e.target.value)}
                                            className="w-full mt-1 bg-[#11151c] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm text-slate-400">
                                            {t("form.price")}
                                        </label>
                                        <input
                                            type="text"
                                            value={price}
                                            onChange={(e) => setPrice(Number(e.target.value))}
                                            className="w-full mt-1 bg-[#11151c] border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Totales */}
                            <div className="bg-[#11151c] rounded-2xl p-6 border border-slate-800 space-y-3">
                                <div className="flex justify-between text-slate-400">
                                    <span>{t("totals.options")}</span>
                                    <span>${Number(price || 0).toLocaleString("es-MX")}</span>
                                </div>

                                <div className="flex justify-between text-white font-semibold text-lg">
                                    <span>{t("totals.total")}</span>
                                    <span>${Number(price || 0).toLocaleString("es-MX")}</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-indigo-500 hover:bg-indigo-400 transition px-6 py-4 rounded-2xl text-white font-semibold text-lg"
                            >
                                {t("cta")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}