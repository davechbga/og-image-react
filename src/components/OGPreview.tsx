import { useRef, useState, useEffect } from "react";
import { OGImageConfig } from "@/types";
import { cn } from "@/lib/utils";

interface OGPreviewProps {
  config: OGImageConfig;
}

export function OGPreview({ config }: OGPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const setScale = useState(1)[1];

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        // Full OG size is 1200x630
        const targetWidth = 1200;
        setScale(containerWidth / targetWidth);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [setScale]);

  const getBackgroundStyle = () => {
    const { type, value, gradient } = config.background;

    if (type === "image" && value) {
      return {
        backgroundImage: `url(${value})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    } else if (type === "gradient" && gradient) {
      return {
        backgroundImage: `linear-gradient(${gradient.direction}, ${gradient.from}, ${gradient.to})`,
      };
    } else {
      return {
        backgroundColor: value,
      };
    }
  };

  // Function to render decorator based on config
  const renderDecorator = () => {
    const decorator = config.background.decorator;
    if (!decorator || decorator.type === "none") return null;

    let decoratorStyle: React.CSSProperties = {
      position: "absolute",
      width: `${decorator.size}px`,
      height: `${decorator.size}px`,
      backgroundColor: decorator.color,
    };

    // Position the decorator
    switch (decorator.position) {
      case "top-left":
        decoratorStyle = { ...decoratorStyle, top: 0, left: 0 };
        break;
      case "top-right":
        decoratorStyle = { ...decoratorStyle, top: 0, right: 0 };
        break;
      case "bottom-left":
        decoratorStyle = { ...decoratorStyle, bottom: 0, left: 0 };
        break;
      case "bottom-right":
        decoratorStyle = { ...decoratorStyle, bottom: 0, right: 0 };
        break;
    }

    // Shape of the decorator
    switch (decorator.type) {
      case "circle":
        decoratorStyle = { ...decoratorStyle, borderRadius: "50%" };
        break;
      case "square":
        break;
      case "triangle":
        // For triangle, we use a different approach with a pseudo-element
        return (
          <div
            style={{
              position: "absolute",
              ...getTrianglePosition(decorator.position),
              width: 0,
              height: 0,
              borderStyle: "solid",
              ...getTriangleBorders(
                decorator.position,
                decorator.size,
                decorator.color
              ),
            }}
          />
        );
    }

    return <div style={decoratorStyle} />;
  };

  // Helper functions for triangle decorator
  const getTrianglePosition = (position: string) => {
    switch (position) {
      case "top-left":
        return { top: 0, left: 0 };
      case "top-right":
        return { top: 0, right: 0 };
      case "bottom-left":
        return { bottom: 0, left: 0 };
      case "bottom-right":
        return { bottom: 0, right: 0 };
      default:
        return {};
    }
  };

  const getTriangleBorders = (
    position: string,
    size: number,
    color: string
  ) => {
    switch (position) {
      case "top-left":
        return {
          borderWidth: `${size}px ${size}px 0 0`,
          borderColor: `${color} transparent transparent transparent`,
        };
      case "top-right":
        return {
          borderWidth: `${size}px 0 0 ${size}px`,
          borderColor: `${color} transparent transparent transparent`,
        };
      case "bottom-left":
        return {
          borderWidth: `0 ${size}px ${size}px 0`,
          borderColor: `transparent transparent ${color} transparent`,
        };
      case "bottom-right":
        return {
          borderWidth: `0 0 ${size}px ${size}px`,
          borderColor: `transparent transparent ${color} transparent`,
        };
      default:
        return {};
    }
  };

  return (
    <div className="rounded-lg border overflow-hidden bg-secondary/50">
      <div className="p-4 border-b bg-secondary">
        <h3 className="font-medium">Preview</h3>
      </div>

      <div ref={containerRef} className="p-4 flex justify-center items-center ">
        <div
          id="og-canvas"
          className="og-canvas shadow-sm relative overflow-hidden "
          style={getBackgroundStyle()}
        >
          {renderDecorator()}
          <div
            className="flex flex-col h-full"
            style={{
              padding: `${config.spacing.padding}px`,
              position: "relative",
              zIndex: 1,
            }}
          >
            {config.logo && (
              <div className="mb-auto">
                <img
                  src={config.logo}
                  alt="Logo"
                  className="h-12 object-contain"
                />
              </div>
            )}

            <div
              className={cn({
                "mt-auto": config.layout === "bottom",
                "mb-auto": config.layout === "top",
                "my-auto": config.layout === "centered",
              })}
              style={{
                gap: `${config.spacing.gap}px`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1
                className={cn("break-words", {
                  "text-left": config.titleOptions.alignment === "left",
                  "text-center": config.titleOptions.alignment === "center",
                  "text-right": config.titleOptions.alignment === "right",
                  "font-bold": config.titleOptions.fontWeight === "bold",
                  "font-normal": config.titleOptions.fontWeight === "normal",
                })}
                style={{
                  fontSize: `${config.titleOptions.fontSize}px`,
                  lineHeight: 1.2,
                  color: config.titleOptions.color,
                  fontFamily: config.fontFamily || "inherit",
                }}
              >
                {config.title}
              </h1>

              <p
                className={cn("break-words", {
                  "text-left": config.descriptionOptions.alignment === "left",
                  "text-center":
                    config.descriptionOptions.alignment === "center",
                  "text-right": config.descriptionOptions.alignment === "right",
                  "font-bold": config.descriptionOptions.fontWeight === "bold",
                  "font-normal":
                    config.descriptionOptions.fontWeight === "normal",
                })}
                style={{
                  fontSize: `${config.descriptionOptions.fontSize}px`,
                  lineHeight: 1.5,
                  color: config.descriptionOptions.color,
                  fontFamily: config.fontFamily || "inherit",
                }}
              >
                {config.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
