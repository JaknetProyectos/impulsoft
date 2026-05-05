import { Plan } from "@/context/CartContext";

export const plansEnglish: Plan[] = [
  {
    id: "plan-basico",
    name: "Basic",
    description: "To start and make your company known",
    price: 3654,
    sku: "PLAN-2510-0006-6136",
    features: [
      "Mobile application development",
      "Website design and development",
      "Software maintenance and support",
    ],
  },
  {
    id: "ideal",
    name: "Ideal",
    description:
      "Ideal for people with a project idea who are not yet ready to invest in full development.",
    price: 870,
    sku: "PLAN-2510-0004-BB7A",
    features: [
      "1-hour consulting session on website and mobile app structure (no development).",
      "Basic wireframe (sketch) for 1 screen of a website or mobile app.",
      "Checklist of technical and design recommendations.",
    ],
  },
  {
    id: "descubrimiento",
    name: "Discovery",
    description:
      "Ideal for freelancers and entrepreneurs who need to validate their idea or establish a basic digital presence.",
    price: 1800,
    sku: "PLAN-2510-0005-FCAE",
    features: [
      "Design of a simple landing page (single scroll-type section, responsive).",
      "Basic mobile app prototype (non-functional, design only) or consulting to structure it.",
      "10 days of limited email support for minor adjustments.",
    ],
  },
  {
    id: "plan-estandar",
    name: "Standard",
    description: "Get known and start connecting with your target market",
    price: 5780,
    sku: "PLAN-2510-0007-12AB",
    features: [
      "Mobile application development",
      "Website design and development",
      "Software maintenance and support",
      "User Interface (UI) and User Experience (UX) development",
    ],
  },
  {
    id: "plan-intermedio",
    name: "Intermediate",
    description: "Professional web design and essential functionality.",
    price: 7155,
    sku: "PLAN-2510-0008-D839",
    features: [
      "Mobile application development",
      "Design and development of 2 websites",
      "Software maintenance and support",
      "API integration and custom software solutions development",
    ],
  },
  {
    id: "plan-basico-startups",
    name: "Startup Basic",
    description: "Design, development and integrated UI",
    price: 13580,
    sku: "PLAN-2510-0009-ABC1",
    features: [
      "Development of 1 mobile application",
      "Design and development of 1 website",
      "Basic API integration",
      "Basic software maintenance and support",
      "Basic UI/UX development",
    ],
  },
  {
    id: "plan-empresarial-inicial",
    name: "Initial Business",
    description: "Full website with e-commerce integration and ongoing support",
    price: 22400,
    sku: "PLAN-2510-0010-B4F8",
    features: [
      "Development of 1 mobile application",
      "Design and development of 2 websites",
      "Basic ERP development",
      "Standard API integration",
      "Software maintenance and support for 6 months",
      "UI/UX design for one application",
    ],
  },
  {
    id: "plan-avanzado-pymes",
    name: "Advanced for SMEs",
    description: "Advanced web design and custom features",
    price: 33800,
    sku: "PLAN-2510-0011-3BB9",
    features: [
      "Development of 2 mobile applications",
      "Design and development of 2 websites",
      "ERP customization and development",
      "Advanced API integration",
      "Software maintenance and support for 1 year",
      "Full UI/UX development",
    ],
  },
  {
    id: "plan-professional",
    name: "Professional",
    description: "Mobile-optimized web with attractive design and fast performance.",
    price: 45200,
    sku: "PLAN-2510-0012-C66C",
    features: [
      "Development of 2 mobile applications with advanced features",
      "Design and development of 3 websites",
      "Custom ERP system development",
      "Complex API integrations and custom solutions",
      "Software maintenance and support for 1 year",
      "Full UI/UX development",
    ],
  },
  {
    id: "plan-premium-medio",
    name: "Mid Premium",
    description: "Custom design, advanced features and full maintenance",
    price: 54900,
    sku: "PLAN-2510-0013-38C1",
    features: [
      "Development of 3 mobile applications",
      "Design and development of 3 websites",
      "ERP with additional features",
      "Custom API integration",
      "Software maintenance and support for 1 year",
      "Advanced UI/UX development",
    ],
  },
  {
    id: "plan-premium-plus",
    name: "Premium Plus",
    description: "Web development, SEO optimization and guaranteed technical support.",
    price: 65000,
    sku: "PLAN-2510-0014-4E8D",
    features: [
      "Development of 3 mobile applications with complex integration",
      "Design and development of 4 websites with special features",
      "Highly customized ERP system",
      "Advanced API integration and software solutions",
      "Software maintenance and support for 1 year with regular updates",
      "Full UI/UX development",
    ],
  },
  {
    id: "plan-explora",
    name: "Explore",
    description: "Ideal for those seeking initial professional guidance without technical commitment.",
    price: 450,
    sku: "PLAN-2510-0003-79C6",
    features: [
      "30-minute consultation on web or app structure.",
      "General review of idea or existing draft.",
      "Key suggestions in a PDF document.",
    ],
  },
  {
    id: "plan-idea-rapida",
    name: "Quick Idea",
    description: "For entrepreneurs who need a fast and clear guide to start their digital project.",
    price: 285,
    sku: "PLAN-2510-0002-22A5",
    features: [
      "Digital wireframe (1 screen).",
      "Quick content recommendation list.",
      "Editable template to organize web/app sections.",
    ],
  },
  {
    id: "plan-checklist-basico",
    name: "Basic Checklist",
    description: "For those who only need a clear starting guide.",
    price: 155,
    sku: "PLAN-2510-0001-22EF",
    features: [
      "Technical and design checklist for websites or apps.",
      "Suggested resources.",
      "Essential tips in a one-page PDF.",
    ],
  },
];

export const getPlansGroupedEnglish = () => {
  const mainPlans = plansEnglish.slice(0, 9);
  const smallPlans = plansEnglish.slice(9);
  return { mainPlans, smallPlans };
};