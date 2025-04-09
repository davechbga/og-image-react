import { FontOption, GradientPreset, ThemePreset } from "@/types";

export const FONT_OPTIONS: FontOption[] = [
  { name: "Default", value: "inherit" },
  { name: "Playfair Display", value: "'Playfair Display', serif" },
  { name: "Montserrat", value: "'Montserrat', sans-serif" },
  { name: "Roboto", value: "'Roboto', sans-serif" },
  { name: "Open Sans", value: "'Open Sans', sans-serif" },
  { name: "Lato", value: "'Lato', sans-serif" },
  { name: "Poppins", value: "'Poppins', sans-serif" },
];

export const GRADIENT_PRESETS: GradientPreset[] = [
  {
    name: "Violet to Indigo",
    from: "#8B5CF6",
    to: "#6366F1",
    direction: "to-r",
  },
  {
    name: "Indigo to Cyan",
    from: "#6366F1",
    to: "#06B6D4",
    direction: "to-r",
  },
  {
    name: "Cyan to Emerald",
    from: "#06B6D4",
    to: "#10B981",
    direction: "to-r",
  },
  {
    name: "Emerald to Yellow",
    from: "#10B981",
    to: "#EAB308",
    direction: "to-r",
  },
  {
    name: "Yellow to Red",
    from: "#EAB308",
    to: "#EF4444",
    direction: "to-r",
  },
  {
    name: "Red to Pink",
    from: "#EF4444",
    to: "#EC4899",
    direction: "to-r",
  },
  {
    name: "Pink to Purple",
    from: "#EC4899",
    to: "#8B5CF6",
    direction: "to-r",
  },
  {
    name: "Ocean",
    from: "#0EA5E9",
    to: "#2563EB",
    direction: "to-br",
  },
  {
    name: "Sunset",
    from: "#F97316",
    to: "#DB2777",
    direction: "to-r",
  },
  {
    name: "Forest",
    from: "#16A34A",
    to: "#15803D",
    direction: "to-b",
  },
];

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: "minimal",
    name: "Minimal",
    config: {
      background: {
        type: "color",
        value: "#FFFFFF",
      },
      titleOptions: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#000000",
        alignment: "left",
      },
      descriptionOptions: {
        fontSize: 24,
        fontWeight: "normal",
        color: "#64748B",
        alignment: "left",
      },
      spacing: {
        padding: 60,
        gap: 16,
      },
      fontFamily: "inherit",
      layout: "standard",
    },
  },
  {
    id: "dark",
    name: "Dark Mode",
    config: {
      background: {
        type: "color",
        value: "#0F172A",
      },
      titleOptions: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#FFFFFF",
        alignment: "left",
      },
      descriptionOptions: {
        fontSize: 24,
        fontWeight: "normal",
        color: "#94A3B8",
        alignment: "left",
      },
      spacing: {
        padding: 60,
        gap: 16,
      },
      fontFamily: "inherit",
      layout: "standard",
    },
  },
  // {
  //   id: "gradient",
  //   name: "Gradient",
  //   config: {
  //     background: {
  //       type: "gradient",
  //       value: "",
  //       gradient: {
  //         from: "#8B5CF6",
  //         to: "#EC4899",
  //         direction: "to-r",
  //       },
  //     },
  //     titleOptions: {
  //       fontSize: 48,
  //       fontWeight: "bold",
  //       color: "#FFFFFF",
  //       alignment: "center",
  //     },
  //     descriptionOptions: {
  //       fontSize: 24,
  //       fontWeight: "normal",
  //       color: "#FFFFFF",
  //       alignment: "center",
  //     },
  //     spacing: {
  //       padding: 60,
  //       gap: 16,
  //     },
  //     fontFamily: "inherit",
  //     layout: "centered",
  //   },
  // },
  {
    id: "centered",
    name: "Centered",
    config: {
      background: {
        type: "color",
        value: "#F8FAFC",
      },
      titleOptions: {
        fontSize: 52,
        fontWeight: "bold",
        color: "#0F172A",
        alignment: "center",
      },
      descriptionOptions: {
        fontSize: 26,
        fontWeight: "normal",
        color: "#334155",
        alignment: "center",
      },
      spacing: {
        padding: 60,
        gap: 20,
      },
      fontFamily: "inherit",
      layout: "centered",
    },
  },
  {
    id: "modern",
    name: "Modern",
    config: {
      background: {
        type: "color",
        value: "#F8FAFC",
      },
      titleOptions: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#0F172A",
        alignment: "left",
      },
      descriptionOptions: {
        fontSize: 24,
        fontWeight: "normal",
        color: "#64748B",
        alignment: "left",
      },
      spacing: {
        padding: 80,
        gap: 24,
      },
      fontFamily: "'Montserrat', sans-serif",
      layout: "standard",
    },
  },
  {
    id: "elegant",
    name: "Elegant",
    config: {
      background: {
        type: "color",
        value: "#FFFFFF",
        decorator: {
          type: "circle",
          position: "top-right",
          size: 180,
          color: "#F1F5F9",
        },
      },
      titleOptions: {
        fontSize: 56,
        fontWeight: "bold",
        color: "#1E293B",
        alignment: "left",
      },
      descriptionOptions: {
        fontSize: 22,
        fontWeight: "normal",
        color: "#475569",
        alignment: "left",
      },
      spacing: {
        padding: 70,
        gap: 20,
      },
      fontFamily: "'Playfair Display', serif",
      layout: "standard",
    },
  },
  {
    id: "vibrant",
    name: "Vibrant",
    config: {
      background: {
        type: "color",
        value: "#EC4899",
      },
      titleOptions: {
        fontSize: 58,
        fontWeight: "bold",
        color: "#FFFFFF",
        alignment: "left",
      },
      descriptionOptions: {
        fontSize: 24,
        fontWeight: "normal",
        color: "#FFFFFF",
        alignment: "left",
      },
      spacing: {
        padding: 70,
        gap: 20,
      },
      fontFamily: "'Poppins', sans-serif",
      layout: "standard",
    },
  },
  {
    id: "minimal-dark",
    name: "Minimal Dark",
    config: {
      background: {
        type: "color",
        value: "#1E1E1E",
      },
      titleOptions: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#FFFFFF",
        alignment: "left",
      },
      descriptionOptions: {
        fontSize: 22,
        fontWeight: "normal",
        color: "#A3A3A3",
        alignment: "left",
      },
      spacing: {
        padding: 60,
        gap: 16,
      },
      fontFamily: "'Inter', sans-serif",
      layout: "standard",
    },
  },
  {
    id: "bottom-aligned",
    name: "Bottom Aligned",
    config: {
      background: {
        type: "color",
        value: "#FFFFFF",
      },
      titleOptions: {
        fontSize: 52,
        fontWeight: "bold",
        color: "#0F172A",
        alignment: "left",
      },
      descriptionOptions: {
        fontSize: 24,
        fontWeight: "normal",
        color: "#64748B",
        alignment: "left",
      },
      spacing: {
        padding: 60,
        gap: 16,
      },
      layout: "bottom",
      fontFamily: "'Open Sans', sans-serif",
    },
  },
];

export const DEFAULT_CONFIG: ThemePreset = {
  id: "default",
  name: "Default",
  config: {
    title: "Your  Title",
    description:
      "This is a description that will be displayed on the image",
    background: {
      type: "color",
      value: "#FFFFFF",
      decorator: null,
    },
    logo: null,
    titleOptions: {
      fontSize: 48,
      fontWeight: "bold",
      color: "#000000",
      alignment: "left",
    },
    descriptionOptions: {
      fontSize: 24,
      fontWeight: "normal",
      color: "#64748B",
      alignment: "left",
    },
    spacing: {
      padding: 60,
      gap: 16,
    },
    theme: "default",
    fontFamily: "inherit",
    layout: "standard",
  },
};
