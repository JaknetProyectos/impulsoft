"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import Image from "next/image";

export type AlertType = "error" | "success" | "warning" | "info";

export interface AlertOptions {
  title: string;
  message: string;
  icon?: React.ReactNode;
  image?: string;
  confirmText?: string;
  onClose?: () => void;
  type?: AlertType;
}

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

const typeStyles = {
  success: {
    accent: "text-white",
    button: "bg-indigo-500 py-3  hover:bg-green-400",
    defaultIcon: <CheckCircle className="h-10 w-10" />,
  },
  error: {
    accent: "text-white",
    button: "bg-red-500  py-3 hover:bg-red-400",
    defaultIcon: <AlertCircle className="h-10 w-10" />,
  },
  warning: {
    accent: "text-white",
    button: "bg-red-500  py-3",
    defaultIcon: <AlertTriangle className="h-10 w-10" />,
  },
  info: {
    accent: "text-white",
    button: "bg-indigo-500  py-3 hover:bg-indigo-400",
    defaultIcon: <Info className="h-10 w-10" />,
  },
};

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<AlertOptions | null>(null);

  const showAlert = useCallback((opts: AlertOptions) => {
    setOptions(opts);
    setIsOpen(true);
  }, []);

  const hideAlert = useCallback(() => {
    setIsOpen(false);
    if (options?.onClose) options.onClose();
  }, [options]);

  const type = options?.type || "info";
  const styles = typeStyles[type];

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}

      {isOpen && options && (
        <div className="fixed inset-0  bg-black/70 z-50 flex items-center justify-center p-6">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
            onClick={hideAlert}
          />

          {/* MODAL */}
          <div className="relative w-full max-w-md bg-[#11151c] backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200">

            {/* CLOSE */}
            <button
              onClick={hideAlert}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8">

              {/* ICON */}
              <div className={`flex justify-center mb-6 ${styles.accent}`}>
                {options.icon || styles.defaultIcon}
              </div>

              {/* IMAGE */}
              {options.image && (
                <div className="relative aspect-video w-full mb-6 rounded-xl overflow-hidden border border-slate-800">
                  <Image
                    src={options.image}
                    alt="Alert"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* TEXT */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {options.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {options.message}
                </p>
              </div>

              {/* BUTTON */}
              <button
                onClick={hideAlert}
                className={`w-full h-11 rounded-xl text-white py-5 font-medium  transition ${styles.button}`}
              >
                {options.confirmText || "Continuar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert debe ser usado dentro de AlertProvider");
  }
  return context;
};