"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useCart } from "@/context/CartContext";
import { useAlert } from "@/context/AlertContext";
import { processOctanoPayment } from "@/lib/payment";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  User,
  Mail,
  Phone,
  MapPin,
  Hash,
  CalendarDays,
  ShieldCheck,
  Globe,
} from "lucide-react";

type CheckoutForm = {
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  direccion: string;
  direccion2: string;
  ciudad: string;
  estado: string;
  pais: string;
  cp: string;
  referencias: string;
  cardNumber: string;
  cardName: string;
  month: string;
  year: string;
  cvv: string;
};

type CheckoutErrors = Partial<Record<keyof CheckoutForm, string>>;

const createInitialForm = (locale: string): CheckoutForm => ({
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  direccion: "",
  direccion2: "",
  ciudad: "",
  estado: "",
  pais: locale.startsWith("en") ? "Mexico" : "México",
  cp: "",
  referencias: "",
  cardNumber: "",
  cardName: "",
  month: "",
  year: "",
  cvv: "",
});

function FieldWrapper({
  children,
  error,
}: {
  children: ReactNode;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      {children}
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}

function labelClass(optional = false) {
  return `text-sm font-medium ${optional ? "text-slate-500" : "text-slate-300"}`;
}

function inputClass(hasError?: boolean) {
  return [
    "w-full h-12 rounded-xl bg-[#0b0f14] text-white placeholder:text-slate-500",
    "border transition outline-none px-4",
    hasError ? "border-red-500 focus:border-red-400" : "border-slate-800 focus:border-indigo-500",
  ].join(" ");
}

export default function CartPage() {
  const t = useTranslations("CartPage");
  const locale = useLocale();

  const { items, removeFromCart, updateQuantity, getTotal, clearCart } = useCart();
  const { showAlert } = useAlert();

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId] = useState(() => `IMP-${Date.now()}`);
  const [form, setForm] = useState<CheckoutForm>(() => createInitialForm(locale));
  const [errors, setErrors] = useState<CheckoutErrors>({});

  const subtotal = getTotal();
  const iva = subtotal * 0.16;
  const total = useMemo(() => subtotal + iva, [subtotal, iva]);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

  const setField = <K extends keyof CheckoutForm>(key: K, value: CheckoutForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const resetForm = () => {
    setForm(createInitialForm(locale));
    setErrors({});
  };

  const validateForm = () => {
    const nextErrors: CheckoutErrors = {};

    const emailRegex = /^\S+@\S+\.\S+$/;
    const onlyDigits = (value: string) => value.replace(/\D/g, "");

    if (!form.nombre.trim()) nextErrors.nombre = t("validation.required");
    if (!form.email.trim()) nextErrors.email = t("validation.required");
    else if (!emailRegex.test(form.email.trim())) nextErrors.email = t("validation.emailInvalid");

    if (!form.telefono.trim()) nextErrors.telefono = t("validation.required");
    else if (onlyDigits(form.telefono).length < 8) nextErrors.telefono = t("validation.phoneInvalid");

    if (!form.direccion.trim()) nextErrors.direccion = t("validation.required");
    if (!form.ciudad.trim()) nextErrors.ciudad = t("validation.required");
    if (!form.estado.trim()) nextErrors.estado = t("validation.required");
    if (!form.pais.trim()) nextErrors.pais = t("validation.required");
    if (!form.cp.trim()) nextErrors.cp = t("validation.required");
    else if (onlyDigits(form.cp).length < 4) nextErrors.cp = t("validation.postalCodeInvalid");

    if (!form.cardNumber.trim()) nextErrors.cardNumber = t("validation.required");
    else if (onlyDigits(form.cardNumber).length < 13) nextErrors.cardNumber = t("validation.cardNumberInvalid");

    if (!form.cardName.trim()) nextErrors.cardName = t("validation.required");

    if (!form.month.trim()) nextErrors.month = t("validation.required");
    else if (!/^(0?[1-9]|1[0-2])$/.test(form.month.trim())) nextErrors.month = t("validation.monthInvalid");

    if (!form.year.trim()) nextErrors.year = t("validation.required");
    else if (!/^\d{2}$/.test(form.year.trim())) nextErrors.year = t("validation.yearInvalid");

    if (!form.cvv.trim()) nextErrors.cvv = t("validation.required");
    else if (!/^\d{3,4}$/.test(form.cvv.trim())) nextErrors.cvv = t("validation.cvvInvalid");

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (items.length === 0 || total <= 0) {
      showAlert({
        type: "warning",
        title: t("alerts.emptyCart.title"),
        message: t("alerts.emptyCart.message"),
        confirmText: t("alerts.emptyCart.confirm"),
      });
      return;
    }

    if (!validateForm()) {
      showAlert({
        type: "warning",
        title: t("alerts.reviewData.title"),
        message: t("alerts.reviewData.message"),
        confirmText: t("alerts.reviewData.confirm"),
      });
      return;
    }

    setIsProcessing(true);

    try {
      /* =========================
         💳 1. PROCESAR PAGO
      ========================== */
      const paymentResponse = await processOctanoPayment({
        amount: Number(total.toFixed(2)),
        orderId,
        customer: {
          nombre: form.nombre.trim(),
          email: form.email.trim(),
          telefono: form.telefono.trim(),
          direccion: form.direccion.trim(),
          cp: form.cp.trim(),
        },
        cardData: {
          number: form.cardNumber.trim(),
          name: form.cardName.trim(),
          month: form.month.trim().padStart(2, "0"),
          year: form.year.trim(),
          cvv: form.cvv.trim(),
        },
      });

      /* =========================
         📩 2. ENVIAR EMAILS
      ========================== */
      try {
        await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orderId,
            customer: {
              nombre: form.nombre.trim(),
              email: form.email.trim(),
              telefono: form.telefono.trim(),
            },
            items,
            subtotal,
            iva,
            total,
            payment: paymentResponse,
          }),
        });
      } catch (emailError) {
        console.error("⚠️ Error enviando email:", emailError);
      }

      /* =========================
         ✅ 3. SUCCESS UX
      ========================== */
      showAlert({
        type: "success",
        title: t("alerts.success.title"),
        message: t("alerts.success.message"),
        confirmText: t("alerts.success.confirm"),
      });

      clearCart();
      resetForm();
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : t("alerts.error.fallback");

      showAlert({
        type: "error",
        title: t("alerts.error.title"),
        message: errorMessage,
        confirmText: t("alerts.error.confirm"),
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0f14] text-slate-300">
      <Header />
      <CartDrawer />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("backToStore")}
            </Link>
          </div>

          <div className="mb-10">
            <span className="text-indigo-400 text-sm font-medium">
              {t("hero.kicker")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
              {t("hero.title")}
            </h1>
          </div>

          {items.length === 0 ? (
            <div className="bg-[#11151c] border border-slate-800 rounded-2xl p-10 md:p-14 text-center">
              <ShoppingBag className="w-20 h-20 text-slate-600 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-white mb-3">
                {t("empty.title")}
              </h2>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                {t("empty.description")}
              </p>
              <Link href="/planes">
                <button className="bg-indigo-500 hover:bg-indigo-400 transition px-8 py-3 rounded-xl text-white font-semibold">
                  {t("empty.cta")}
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.95fr] gap-8 items-start">
              {/* Items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.plan.id}
                    className="bg-[#11151c] border border-slate-800 rounded-2xl p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {item.plan.name}
                            </h3>
                            <p className="text-sm text-slate-500">{item.plan.sku}</p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.plan.id)}
                            className="text-slate-500 hover:text-red-400 transition"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <p className="text-slate-400 text-sm mb-4">
                          {item.plan.description}
                        </p>

                        <div className="text-sm text-slate-400">
                          <p className="font-medium text-white mb-2">
                            {t("item.includes")}
                          </p>
                          <ul className="space-y-2">
                            {item.plan.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <ShieldCheck className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                            {item.plan.features.length > 3 && (
                              <li className="text-slate-500">
                                {t("item.more", { count: item.plan.features.length - 3 })}
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4">
                        <div className="flex items-center gap-2 bg-[#0b0f14] border border-slate-800 rounded-xl px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.plan.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 transition"
                          >
                            <Minus className="w-4 h-4" />
                          </button>

                          <span className="font-medium w-8 text-center text-white">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateQuantity(item.plan.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-800 transition"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-2xl font-bold text-white">
                            {formatPrice(item.plan.price * item.quantity)}
                          </p>
                          <p className="text-sm text-slate-500">
                            {t("taxLabel")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment */}
              <form
                onSubmit={handleCheckout}
                className="sticky top-24 bg-[#11151c] border border-slate-800 rounded-2xl p-6 md:p-8"
              >
                <h2 className="text-xl font-semibold text-white mb-6">
                  {t("summary.title")}
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-400">
                    <span>{t("summary.subtotal")}</span>
                    <span className="text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{t("summary.iva")}</span>
                    <span className="text-white">{formatPrice(iva)}</span>
                  </div>
                  <div className="h-px bg-slate-800 my-4" />
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">
                      {t("summary.total")}
                    </span>
                    <span className="text-2xl font-bold text-indigo-400">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {t("summary.order", { orderId })}
                  </p>
                </div>

                <div className="space-y-5 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
                      {t("sections.customer")}
                    </h3>

                    <div className="space-y-4">
                      <FieldWrapper error={errors.nombre}>
                        <label className={labelClass()}>
                          {t("form.nombre")}
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            required
                            placeholder={t("placeholders.nombre")}
                            value={form.nombre}
                            onChange={(e) => setField("nombre", e.target.value)}
                            className={`${inputClass(!!errors.nombre)} pl-11`}
                            aria-invalid={!!errors.nombre}
                          />
                        </div>
                      </FieldWrapper>

                      <FieldWrapper error={errors.email}>
                        <label className={labelClass()}>
                          {t("form.email")}
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="email"
                            required
                            placeholder={t("placeholders.email")}
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                            className={`${inputClass(!!errors.email)} pl-11`}
                            aria-invalid={!!errors.email}
                          />
                        </div>
                      </FieldWrapper>

                      <FieldWrapper error={errors.telefono}>
                        <label className={labelClass()}>
                          {t("form.telefono")}
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="tel"
                            required
                            placeholder={t("placeholders.telefono")}
                            value={form.telefono}
                            onChange={(e) => setField("telefono", e.target.value)}
                            className={`${inputClass(!!errors.telefono)} pl-11`}
                            aria-invalid={!!errors.telefono}
                          />
                        </div>
                      </FieldWrapper>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
                      {t("sections.billing")}
                    </h3>

                    <div className="space-y-4">
                      <FieldWrapper error={errors.direccion}>
                        <label className={labelClass()}>
                          {t("form.direccion")}
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            required
                            placeholder={t("placeholders.direccion")}
                            value={form.direccion}
                            onChange={(e) => setField("direccion", e.target.value)}
                            className={`${inputClass(!!errors.direccion)} pl-11`}
                            aria-invalid={!!errors.direccion}
                          />
                        </div>
                      </FieldWrapper>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <FieldWrapper error={errors.ciudad}>
                          <label className={labelClass()}>
                            {t("form.ciudad")}
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                              type="text"
                              required
                              placeholder={t("placeholders.ciudad")}
                              value={form.ciudad}
                              onChange={(e) => setField("ciudad", e.target.value)}
                              className={`${inputClass(!!errors.ciudad)} pl-11`}
                              aria-invalid={!!errors.ciudad}
                            />
                          </div>
                        </FieldWrapper>

                        <FieldWrapper error={errors.estado}>
                          <label className={labelClass()}>
                            {t("form.estado")}
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                              type="text"
                              required
                              placeholder={t("placeholders.estado")}
                              value={form.estado}
                              onChange={(e) => setField("estado", e.target.value)}
                              className={`${inputClass(!!errors.estado)} pl-11`}
                              aria-invalid={!!errors.estado}
                            />
                          </div>
                        </FieldWrapper>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <FieldWrapper error={errors.pais}>
                          <label className={labelClass()}>
                            {t("form.pais")}
                          </label>
                          <div className="relative">
                            <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                              type="text"
                              required
                              placeholder={t("placeholders.pais")}
                              value={form.pais}
                              onChange={(e) => setField("pais", e.target.value)}
                              className={`${inputClass(!!errors.pais)} pl-11`}
                              aria-invalid={!!errors.pais}
                            />
                          </div>
                        </FieldWrapper>

                        <FieldWrapper error={errors.cp}>
                          <label className={labelClass()}>
                            {t("form.cp")}
                          </label>
                          <div className="relative">
                            <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                              type="text"
                              required
                              placeholder={t("placeholders.cp")}
                              value={form.cp}
                              onChange={(e) => setField("cp", e.target.value)}
                              className={`${inputClass(!!errors.cp)} pl-11`}
                              aria-invalid={!!errors.cp}
                            />
                          </div>
                        </FieldWrapper>
                      </div>
                    </div>


                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
                      {t("sections.card")}
                    </h3>

                    <div className="space-y-4">
                      <FieldWrapper error={errors.cardNumber}>
                        <label className={labelClass()}>
                          {t("form.cardNumber")}
                        </label>
                        <div className="relative">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            required
                            maxLength={16}
                            placeholder={t("placeholders.cardNumber")}
                            inputMode="numeric"
                            value={form.cardNumber}
                            onChange={(e) => setField("cardNumber", e.target.value)}
                            className={`${inputClass(!!errors.cardNumber)} pl-11`}
                            aria-invalid={!!errors.cardNumber}
                          />
                        </div>
                      </FieldWrapper>

                      <FieldWrapper error={errors.cardName}>
                        <label className={labelClass()}>
                          {t("form.cardName")}
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            required
                            placeholder={t("placeholders.cardName")}
                            value={form.cardName}
                            onChange={(e) => setField("cardName", e.target.value)}
                            className={`${inputClass(!!errors.cardName)} pl-11`}
                            aria-invalid={!!errors.cardName}
                          />
                        </div>
                      </FieldWrapper>

                      <div className="grid grid-cols-3 gap-3">
                        <FieldWrapper error={errors.month}>
                          <label className={labelClass()}>
                            {t("form.month")}
                          </label>
                          <div className="relative">
                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                              type="text"
                              required
                              placeholder={t("placeholders.month")}
                              maxLength={2}
                              value={form.month}
                              onChange={(e) => setField("month", e.target.value)}
                              className={`${inputClass(!!errors.month)} pl-11`}
                              aria-invalid={!!errors.month}
                            />
                          </div>
                        </FieldWrapper>

                        <FieldWrapper error={errors.year}>
                          <label className={labelClass()}>
                            {t("form.year")}
                          </label>
                          <div className="relative">
                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                              type="text"
                              required
                              placeholder={t("placeholders.year")}
                              maxLength={2}
                              value={form.year}
                              onChange={(e) => setField("year", e.target.value)}
                              className={`${inputClass(!!errors.year)} pl-11`}
                              aria-invalid={!!errors.year}
                            />
                          </div>
                        </FieldWrapper>

                        <FieldWrapper error={errors.cvv}>
                          <label className={labelClass()}>
                            {t("form.cvv")}
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                              type="password"
                              required
                              placeholder={t("placeholders.cvv")}
                              maxLength={4}
                              value={form.cvv}
                              onChange={(e) => setField("cvv", e.target.value)}
                              className={`${inputClass(!!errors.cvv)} pl-11`}
                              aria-invalid={!!errors.cvv}
                            />
                          </div>
                        </FieldWrapper>


                      </div>

                      <div className="flex flex-row justify-between  gap-6 p-6">
                        <Image src="/octano.png" alt="Etomin" width={170} height={40} className="" />
                        <Image src="/secure-payment.png" alt="Etomin" width={150} height={40} className="brightness-0 invert" />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full h-12 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed transition text-white font-semibold flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      {t("buttons.processing")}
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      {t("buttons.pay")}
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-4">
                  <Lock className="w-4 h-4" />
                  <span>{t("security.message")}</span>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <p className="text-sm text-slate-500 text-center mb-3">
                    {t("paymentMethods")}
                  </p>
                  <div className="flex justify-center">
                    <Image
                      src="https://ext.same-assets.com/6640246/1248591981.png"
                      alt="Payment methods"
                      width={150}
                      height={40}
                      className="h-8 w-auto opacity-80"
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}