"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, ShoppingCart, Globe } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const { getItemCount, setIsCartOpen } = useCart();
  const itemCount = getItemCount();

  const services = [
    { name: t("services.items.mobile"), href: "/servicios/desarrollo-de-aplicaciones-moviles" },
    { name: t("services.items.web"), href: "/servicios/diseno-y-desarrollo-de-sitios-web" },
    { name: t("services.items.maintenance"), href: "/servicios/mantenimiento-y-soporte-de-software" },
    { name: t("services.items.uiux"), href: "/servicios/desarrollo-ux-ui" },
    { name: t("services.items.api"), href: "/servicios/integracion-de-api-y-desarrollo-de-soluciones-de-software-a-medida" },
    { name: t("services.items.erp"), href: "/servicios/desarrollo-de-sistemas-de-gestion-empresarial-erp" },
  ];

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-[#0b0f14]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="impulsoftwarewareLogo"
              width={300}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm">
            <Link href="/" className="text-slate-300 hover:text-white transition">
              {t("nav.home")}
            </Link>

            <Link href="/nosotros" className="text-slate-300 hover:text-white transition">
              {t("nav.about")}
            </Link>

            {/* Servicios */}
            <div className="relative group">
              <div className="flex items-center text-slate-300 hover:text-white cursor-pointer transition">
                {t("nav.services")}
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>

              <div className="absolute top-full left-0 w-full h-4" />

              <div className="absolute left-0 top-[calc(100%+8px)] w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="rounded-2xl border border-slate-800 bg-[#11151c] shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/planes" className="text-slate-300 hover:text-white transition">
              {t("nav.plans")}
            </Link>

            <Link href="/contacto" className="text-slate-300 hover:text-white transition">
              {t("nav.contact")}
            </Link>

            {/* Language Switch */}
            <div className="flex items-center gap-2 ml-4">
              <Globe className="w-4 h-4 text-slate-400" />
              <button
                onClick={() => switchLanguage("es")}
                className={`text-xs ${locale === "es" ? "text-white" : "text-slate-400"}`}
              >
                ES
              </button>
              <button
                onClick={() => switchLanguage("en")}
                className={`text-xs ${locale === "en" ? "text-white" : "text-slate-400"}`}
              >
                EN
              </button>
            </div>

            {/* Cart */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative text-slate-300 hover:text-white transition"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/planes">
              <Button className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-6 py-2 rounded-2xl">
                {t("cta")}
              </Button>
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setIsCartOpen(true)} className="relative text-slate-300">
              <ShoppingCart className="h-5 w-5" />
            </button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] bg-[#0b0f14] border-slate-800">
                <div className="flex flex-col space-y-6 mt-8 text-slate-300">
                  <Link href="/" onClick={() => setIsOpen(false)}>{t("nav.home")}</Link>
                  <Link href="/nosotros" onClick={() => setIsOpen(false)}>{t("nav.about")}</Link>

                  <div>
                    <p className="mb-2 text-white">{t("nav.services")}</p>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-slate-400 hover:text-white pl-2"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link href="/planes" onClick={() => setIsOpen(false)}>{t("nav.plans")}</Link>
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>{t("nav.contact")}</Link>

                  {/* Language switch mobile */}
                  <div className="flex gap-4">
                    <button onClick={() => switchLanguage("es")}>ES</button>
                    <button onClick={() => switchLanguage("en")}>EN</button>
                  </div>

                  <Link href="/planes">
                    <Button className="bg-indigo-500 hover:bg-indigo-400 text-white mt-4">
                      {t("cta")}
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}