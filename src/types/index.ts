
export interface OGImageConfig {
  title: string;
  description: string;
  background: {
    type: "color" | "gradient" | "image";
    value: string;
    gradient?: {
      from: string;
      to: string;
      direction: string;
    };
    decorator?: {
      type: string;
      position: string;
      size: number;
      color: string;
    } | null;
  };
  logo?: string | null;
  titleOptions: {
    fontSize: number;
    fontWeight: string;
    color: string;
    alignment: "left" | "center" | "right";
  };
  descriptionOptions: {
    fontSize: number;
    fontWeight: string;
    color: string;
    alignment: "left" | "center" | "right";
  };
  spacing: {
    padding: number;
    gap: number;
  };
  theme: string;
  fontFamily?: string;
  layout?: "standard" | "split" | "centered" | "bottom" | "top";
}

export interface GradientPreset {
  name: string;
  from: string;
  to: string;
  direction: string;
}

export interface ThemePreset {
  id: string;
  name: string;
  config: Partial<OGImageConfig>;
  preview?: string;
}

export interface FontOption {
  name: string;
  value: string;
}

export interface DecoratorOption {
  name: string;
  type: string;
  color: string;
}
