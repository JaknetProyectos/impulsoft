"use client";

import { useCart } from "@/context/CartContext";
import { useTranslations } from "next-intl";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link, useRouter } from "@/i18n/routing";

export default function CartDrawer() {
  const t = useTranslations("cart");
  const { items, removeFromCart, updateQuantity, getTotal, isCartOpen, setIsCartOpen } = useCart();

  const router = useRouter();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
    }).format(price);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-[#0b0f14] text-slate-300 border-l border-slate-800">

        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-xl text-white">
            <ShoppingBag className="w-6 h-6 text-indigo-400" />
            {t("title")}
          </SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex flex-col h-[calc(100vh-200px)]">

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="w-16 h-16 text-slate-600 mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">
                {t("empty.title")}
              </h3>
              <p className="text-slate-500 mb-6">
                {t("empty.subtitle")}
              </p>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  router.push("/carrito");
                }}
                className="bg-indigo-500 hover:bg-indigo-400 transition px-6 py-3 rounded-xl text-white font-medium"
              >
                {t("empty.button")}
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">

                {items.map((item) => (
                  <div
                    key={item.plan.id}
                    className="bg-[#11151c] border border-slate-800 rounded-2xl p-4"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold text-white">
                          {item.plan.name}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {item.plan.sku}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.plan.id)}
                        className="text-slate-500 hover:text-red-500 transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3 bg-[#0b0f14] border border-slate-800 rounded-xl px-2 py-1">
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

                      <span className="font-bold text-white">
                        {formatPrice(item.plan.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <Separator className="mb-4 bg-slate-800" />

                <div className="flex justify-between items-center mb-2 text-slate-400">
                  <span>{t("summary.subtotal")}</span>
                  <span className="text-white font-medium">
                    {formatPrice(getTotal())}
                  </span>
                </div>

                <div className="flex justify-between items-center mb-4 text-slate-400">
                  <span>{t("summary.tax")}</span>
                  <span className="text-white font-medium">
                    {formatPrice(getTotal() * 0.16)}
                  </span>
                </div>

                <Separator className="mb-4 bg-slate-800" />

                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-white">
                    {t("summary.total")}
                  </span>
                  <span className="text-xl font-bold text-indigo-400">
                    {formatPrice(getTotal() * 1.16)}
                  </span>
                </div>

                <Link href="/carrito" onClick={() => setIsCartOpen(false)}>
                  <button className="w-full bg-indigo-500 hover:bg-indigo-400 transition h-12 rounded-xl text-white font-semibold">
                    {t("checkout")}
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}