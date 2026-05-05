"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function TeamNetwork() {
  const t = useTranslations("teamNetwork");

  return (
    <section className="py-24 bg-[#0b0f14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">

          {/* Network illustration */}
          <div className="relative w-full max-w-md mb-10">
            <div className="relative bg-[#11151c] rounded-2xl p-10 border border-slate-800">

              {/* Center avatar */}
              <div className="w-24 h-24 mx-auto bg-[#0b0f14] border border-slate-700 rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src="https://ext.same-assets.com/6640246/2196200113.png"
                  alt={t("centerAvatarAlt")}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              {/* Surrounding avatars */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 bg-[#11151c] border border-slate-700 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={t("avatarAlt")}
                    width={56}
                    height={56}
                  />
                </div>
              </div>

              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-[#11151c] border border-slate-700 rounded-full flex items-center justify-center text-slate-300 font-semibold">
                  Y
                </div>
              </div>

              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-[#11151c] border border-slate-700 rounded-full flex items-center justify-center text-slate-300 font-semibold">
                  A
                </div>
              </div>

              <div className="absolute bottom-0 left-1/4 translate-y-1/2">
                <div className="w-12 h-12 bg-[#11151c] border border-slate-700 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={t("avatarAlt")}
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              {/* subtle connection effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="w-full h-full border border-dashed border-slate-700 rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-xl">
            {t("title")}
          </h2>

          <p className="text-slate-400 mb-8 max-w-md">
            {t("description")}
          </p>

          <Link href={"/planes"}>
            <button className="bg-indigo-500 hover:bg-indigo-400 transition px-8 py-3 rounded-2xl text-white font-semibold">
              {t("cta")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}