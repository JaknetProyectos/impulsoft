"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin } from "lucide-react";

const links = [
  { key: "about", href: "/nosotros" },
  { key: "plans", href: "/planes" },
  { key: "contact", href: "/contacto" },
];

const policies = [
  { key: "terms", href: "/legal/terminos" },
  { key: "privacy", href: "/legal/privacidad" },
  { key: "refunds", href: "/legal/reembolsos" },
];

const services = [
  { key: "mobile", href: "/servicios/desarrollo-de-aplicaciones-moviles" },
  { key: "web", href: "/servicios/diseno-y-desarrollo-de-sitios-web" },
  { key: "uiux", href: "/servicios/desarrollo-ux-ui" },
  { key: "support", href: "/servicios/mantenimiento-y-soporte-de-software" },
  { key: "api", href: "/servicios/integracion-de-api-y-desarrollo-de-soluciones-de-software-a-medida" },
  { key: "erp", href: "/servicios/desarrollo-de-sistemas-de-gestion-empresarial-erp" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0b0f14] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Logo + contacto */}
          <div>
            <Image
              src="/logo.png"
              alt="impulsoftwarewareLogo"
              width={100}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-slate-400 mb-2">
              {t("contactLabel")}
            </p>
            <Link
              href="tel:+525552063047"
              className="text-xl font-semibold text-white hover:text-indigo-400 transition"
            >
              +52 55 5206 3047
            </Link>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("navigation.title")}
            </h4>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition"
                  >
                    {t(`navigation.items.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mt-8 mb-4">
              {t("policies.title")}
            </h4>

            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.key}>
                  <Link
                    href={policy.href}
                    className="text-sm text-slate-400 hover:text-white transition"
                  >
                    {t(`policies.items.${policy.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">
              {t("services.title")}
            </h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.key}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-white transition"
                  >
                    {t(`services.items.${service.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("contact.title")}
            </h4>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500" />
                <Link
                  href="tel:+525552063047"
                  className="text-sm text-slate-400 hover:text-white transition"
                >
                  +52 55 5206 3047
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500" />
                <Link
                  href="mailto:informacion@impulsosoft.com"
                  className="text-sm text-slate-400 hover:text-white transition"
                >
                  informacion@impulsosoft.com
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 mt-0.5" />
                <span className="text-sm text-slate-400">
                  {t("contact.address")}
                </span>
              </li>
            </ul>

            {/* Pagos */}
            <div className="mt-6">
              <Image
                src="https://ext.same-assets.com/6640246/1248591981.png"
                alt="Métodos de pago"
                width={120}
                height={30}
                className="h-8 w-auto opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-500">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}