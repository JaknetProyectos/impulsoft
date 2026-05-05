"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useContact } from "@/hooks/useContact";

export default function OfferModal() {
  const t = useTranslations("OfferModal");
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const { sendContactForm, isLoading } = useContact();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    if (!email) return;

    const result = await sendContactForm({
      nombre: "Cupón de descuento",
      email,
      telefono: "",
      mensaje: "Solicitud de cupón de descuento desde modal promocional",
      asunto: "Solicitud de cupón 10-15%",
      servicioDeseado: "Cupón promocional",
      presupuesto: "",
    });

    if (result.success) {
      setEmail("");
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Close */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors z-10 bg-white/50 rounded-full p-1"
        >
          <X size={24} />
        </button>

        <div className="p-8 text-center flex flex-col items-center">

          <span className="text-sm font-bold tracking-widest text-[#6366f1] uppercase">
            {t("title")}
          </span>

          <p className="text-gray-600 mt-4 mb-6">
            {t("description")}
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("placeholder")}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
          />

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-[#6366f1] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Enviando..." : t("cta")}
          </button>

        </div>
      </div>
    </div>
  );
}