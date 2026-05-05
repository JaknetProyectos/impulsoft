"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { User, Phone, Mail, FileText, MessageSquare } from "lucide-react";
import { useContact } from "@/hooks/useContact";

export default function Contact() {
  const t = useTranslations("contactSection");
  const { sendContactForm, isLoading } = useContact();

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await sendContactForm({
      ...formData,
      servicioDeseado: "",
      presupuesto: "",
    });

    if (result.success) {
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    }
  };

  return (
    <section className="py-20 bg-[#22252b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <div className="mb-6">
              <Image
                src="https://ext.same-assets.com/6640246/1487493906.png"
                alt="Contact icon"
                width={50}
                height={50}
                className="opacity-80"
              />
            </div>

            <span className="text-indigo-400 text-sm font-medium">
              {t("badge")}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              {t("title")}
            </h2>

            <p className="text-slate-400 mb-10 max-w-md">
              {t("description")}
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-[#11151c] border border-slate-800 px-4 py-3 rounded-xl">
                <Image
                  src="https://ext.same-assets.com/6640246/3369382463.png"
                  alt="Fast response"
                  width={28}
                  height={28}
                />
                <span className="text-sm text-slate-300">
                  {t("highlights.fastResponse")}
                </span>
              </div>

              <div className="flex items-center gap-3 bg-[#11151c] border border-slate-800 px-4 py-3 rounded-xl">
                <Image
                  src="https://ext.same-assets.com/6640246/749086074.png"
                  alt="Quality service"
                  width={28}
                  height={28}
                />
                <span className="text-sm text-slate-300">
                  {t("highlights.quality")}
                </span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-[#11151c] border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              {t("form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              {[
                {
                  icon: <User className="w-5 h-5" />,
                  type: "text",
                  placeholder: t("form.fields.name"),
                  value: formData.nombre,
                  key: "nombre",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  type: "tel",
                  placeholder: t("form.fields.phone"),
                  value: formData.telefono,
                  key: "telefono",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  type: "email",
                  placeholder: t("form.fields.email"),
                  value: formData.email,
                  key: "email",
                },
                {
                  icon: <FileText className="w-5 h-5" />,
                  type: "text",
                  placeholder: t("form.fields.subject"),
                  value: formData.asunto,
                  key: "asunto",
                },
              ].map((field) => (
                <div key={field.key} className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                    {field.icon}
                  </div>

                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.key]: e.target.value,
                      })
                    }
                    required
                    className="w-full pl-12 pr-4 h-12 rounded-xl bg-[#0b0f14] border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              ))}

              <div className="relative">
                <div className="absolute left-4 top-4 text-slate-500">
                  <MessageSquare className="w-5 h-5" />
                </div>

                <textarea
                  placeholder={t("form.fields.message")}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  required
                  className="w-full pl-12 pr-4 pt-3 pb-3 min-h-[120px] rounded-xl bg-[#0b0f14] border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed transition h-12 rounded-xl text-white font-medium"
              >
                {isLoading ? t("form.sending") : t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}