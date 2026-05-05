import { Plan } from "@/context/CartContext";

export const plansSpanish: Plan[] = [
  {
    id: "plan-basico",
    name: "Básico",
    description: "Para iniciar y dar a conocer tu empresa",
    price: 3654,
    sku: "PLAN-2510-0006-6136",
    features: [
      "Desarrollo de una aplicación móvil",
      "Diseño y desarrollo de un sitio web",
      "Mantenimiento y soporte de software",
    ],
  },
  {
    id: "ideal",
    name: "Ideal",
    description:
      "Ideal para personas con idea de proyecto que aún no están listas para invertir en desarrollo completo.",
    price: 870,
    sku: "PLAN-2510-0004-BB7A",
    features: [
      "Asesoría de 1 hora sobre estructura de sitio web y app móvil (sin desarrollo).",
      "Wireframe básico (boceto) para 1 pantalla de sitio web o app móvil.",
      "Checklist de recomendaciones técnicas y diseño.",
    ],
  },
  {
    id: "descubrimiento",
    name: "Descubrimiento",
    description:
      "Ideal para freelancers, emprendedores que necesitan validar su idea o tener presencia digital básica.",
    price: 1800,
    sku: "PLAN-2510-0005-FCAE",
    features: [
      "Diseño de una landing page sencilla (una sección tipo scroll, responsive).",
      "Prototipo básico de app móvil (no funcional, solo diseño) o asesoría para estructurarla.",
      "10 días de soporte limitado vía correo electrónico para ajustes menores.",
    ],
  },
  {
    id: "plan-estandar",
    name: "Estándar",
    description: "Date a conocer y comienza a relacionarte con tu mercado meta",
    price: 5780,
    sku: "PLAN-2510-0007-12AB",
    features: [
      "Desarrollo de una aplicación móvil",
      "Diseño y desarrollo de un sitio web",
      "Mantenimiento y soporte de software",
      "Desarrollo de Interfaces de Usuario (UI) y Experiencia de Usuario (UX)",
    ],
  },
  {
    id: "plan-intermedio",
    name: "Intermedio",
    description: "Diseño web profesional y funcionalidad esencial.",
    price: 7155,
    sku: "PLAN-2510-0008-D839",
    features: [
      "Desarrollo de una aplicación móvil",
      "Diseño y desarrollo de 2 sitios web",
      "Mantenimiento y soporte de software",
      "Integración de API y desarrollo de soluciones de software a la medida",
    ],
  },
  {
    id: "plan-basico-startups",
    name: "Básico para Startups",
    description: "Diseño, desarrollo y UI integrado",
    price: 13580,
    sku: "PLAN-2510-0009-ABC1",
    features: [
      "Desarrollo de 1 aplicación móvil",
      "Diseño y desarrollo de 1 sitio web",
      "Integración básica de API",
      "Mantenimiento y soporte básico de software",
      "Desarrollo de Interfaces de Usuario (UI) y Experiencia de Usuario (UX) básicos",
    ],
  },
  {
    id: "plan-empresarial-inicial",
    name: "Empresarial Inicial",
    description: "Web completa con integración de comercio electrónico y soporte continuo",
    price: 22400,
    sku: "PLAN-2510-0010-B4F8",
    features: [
      "Desarrollo de 1 aplicación móvil",
      "Diseño y desarrollo de 2 sitios web",
      "Desarrollo básico de Sistemas de Gestión Empresarial (ERP)",
      "Integración de API estándar",
      "Mantenimiento y soporte de software durante 6 meses",
      "Desarrollo de Interfaces de Usuario (UI) y Experiencia de Usuario (UX) para una aplicación",
    ],
  },
  {
    id: "plan-avanzado-pymes",
    name: "Avanzado para PYMEs",
    description: "Diseño web avanzado y características personalizadas",
    price: 33800,
    sku: "PLAN-2510-0011-3BB9",
    features: [
      "Desarrollo de 2 aplicaciones móviles",
      "Diseño y desarrollo de 2 sitios web",
      "Desarrollo y personalización de Sistemas de Gestión Empresarial (ERP)",
      "Integración avanzada de API",
      "Mantenimiento y soporte de software durante 1 año",
      "Desarrollo completo de Interfaces de Usuario (UI) y Experiencia de Usuario (UX)",
    ],
  },
  {
    id: "plan-professional",
    name: "Professional",
    description: "Web optimizada para móviles con diseño atractivo y rendimiento rápido.",
    price: 45200,
    sku: "PLAN-2510-0012-C66C",
    features: [
      "Desarrollo de 2 aplicaciones móviles con funcionalidades avanzadas",
      "Diseño y desarrollo de 3 sitios web",
      "Desarrollo completo de Sistemas de Gestión Empresarial (ERP) personalizado",
      "Integración de API complejas y desarrollo de soluciones a medida",
      "Mantenimiento y soporte de software durante 1 año",
      "Desarrollo completo de Interfaces de Usuario (UI) y Experiencia de Usuario (UX)",
    ],
  },
  {
    id: "plan-premium-medio",
    name: "Premium Medio",
    description: "Diseño personalizado, funcionalidades avanzadas y mantenimiento integral",
    price: 54900,
    sku: "PLAN-2510-0013-38C1",
    features: [
      "Desarrollo de 3 aplicaciones móviles",
      "Diseño y desarrollo de 3 sitios web",
      "Desarrollo de Sistemas de Gestión Empresarial (ERP) con características adicionales",
      "Integración de API personalizada",
      "Mantenimiento y soporte de software durante 1 año",
      "Desarrollo avanzado de Interfaces de Usuario (UI) y Experiencia de Usuario (UX)",
    ],
  },
  {
    id: "plan-premium-plus",
    name: "Premium Plus",
    description: "Desarrollo web, optimización SEO y soporte técnico garantizado.",
    price: 65000,
    sku: "PLAN-2510-0014-4E8D",
    features: [
      "Desarrollo de 3 aplicaciones móviles con integración compleja",
      "Diseño y desarrollo de 4 sitios web con funcionalidades especiales",
      "Desarrollo de Sistemas de Gestión Empresarial (ERP) altamente personalizado",
      "Integración y desarrollo avanzado de API y soluciones de software",
      "Mantenimiento y soporte de software durante 1 año con actualizaciones regulares",
      "Desarrollo completo de Interfaces de Usuario (UI) y Experiencia de Usuario (UX)",
    ],
  },
  {
    id: "plan-explora",
    name: "Explora",
    description: "Ideal para quienes buscan una primera orientación profesional sin compromiso técnico.",
    price: 450,
    sku: "PLAN-2510-0003-79C6",
    features: [
      "Asesoría de 30 min sobre estructura web o app.",
      "Revisión general de idea o boceto existente.",
      "Sugerencias clave en 1 documento PDF.",
    ],
  },
  {
    id: "plan-idea-rapida",
    name: "Idea Rápida",
    description: "Para emprendedores que necesitan una guía ágil y clara para iniciar su proyecto digital.",
    price: 285,
    sku: "PLAN-2510-0002-22A5",
    features: [
      "Wireframe en digital (1 pantalla).",
      "Lista express de recomendaciones de contenido.",
      "Plantilla editable para organizar secciones web/app.",
    ],
  },
  {
    id: "plan-checklist-basico",
    name: "Checklist Básico",
    description: "Para quienes solo necesitan una guía clara antes de iniciar.",
    price: 155,
    sku: "PLAN-2510-0001-22EF",
    features: [
      "Checklist técnico y de diseño para sitios web o apps.",
      "Recursos sugeridos.",
      "Consejos esenciales en una cuartilla (PDF).",
    ],
  },
];

export const getPlansGrouped = () => {
  const mainPlans = plansSpanish.slice(0, 9);
  const smallPlans = plansSpanish.slice(9);
  return { mainPlans, smallPlans };
};
