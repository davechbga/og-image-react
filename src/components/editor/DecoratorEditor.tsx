import { OGImageConfig } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { Circle, Square, Triangle, X } from "lucide-react";
import { ColorPicker } from "@/components/ColorPicker";

// const DECORATOR_OPTIONS: DecoratorOption[] = [
//   { name: "None", type: "none", color: "" },
//   { name: "Circle", type: "circle", color: "#8B5CF6" },
//   { name: "Square", type: "square", color: "#EC4899" },
//   { name: "Triangle", type: "triangle", color: "#10B981" },
// ];

const POSITION_OPTIONS = [
  { name: "Top Left", value: "top-left" },
  { name: "Top Right", value: "top-right" },
  { name: "Bottom Left", value: "bottom-left" },
  { name: "Bottom Right", value: "bottom-right" },
];

interface DecoratorEditorProps {
  config: OGImageConfig;
  updateConfig: (updates: Partial<OGImageConfig>) => void;
}

export function DecoratorEditor({
  config,
  updateConfig,
}: DecoratorEditorProps) {
  const decorator = config.background.decorator;

  const handleDecoratorChange = (type: string) => {
    if (type === "none") {
      updateConfig({
        background: {
          ...config.background,
          decorator: null,
        },
      });
    } else {
      updateConfig({
        background: {
          ...config.background,
          decorator: {
            type,
            position: decorator?.position || "top-right",
            size: decorator?.size || 100,
            color: decorator?.color || "#8B5CF6",
          },
        },
      });
    }
  };

  const updateDecorator = (updates: Partial<typeof decorator>) => {
    if (!decorator) return;

    updateConfig({
      background: {
        ...config.background,
        decorator: {
          ...decorator,
          ...updates,
        },
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Background Decorators</h3>

        <div className="flex gap-2 flex-wrap">
          <Toggle
            pressed={!decorator || decorator.type === "none"}
            onClick={() => handleDecoratorChange("none")}
            className="border-2 p-2 h-auto"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">None</span>
          </Toggle>

          <Toggle
            pressed={decorator?.type === "circle"}
            onClick={() => handleDecoratorChange("circle")}
            className="border-2 p-2 h-auto"
          >
            <Circle className="h-5 w-5" />
            <span className="sr-only">Circle</span>
          </Toggle>

          <Toggle
            pressed={decorator?.type === "square"}
            onClick={() => handleDecoratorChange("square")}
            className="border-2 p-2 h-auto"
          >
            <Square className="h-5 w-5" />
            <span className="sr-only">Square</span>
          </Toggle>

          <Toggle
            pressed={decorator?.type === "triangle"}
            onClick={() => handleDecoratorChange("triangle")}
            className="border-2 p-2 h-auto"
          >
            <Triangle className="h-5 w-5" />
            <span className="sr-only">Triangle</span>
          </Toggle>
        </div>

        {decorator && decorator.type !== "none" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Position</Label>
              <Select
                value={decorator.position}
                onValueChange={(value) => updateDecorator({ position: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  {POSITION_OPTIONS.map((pos) => (
                    <SelectItem key={pos.value} value={pos.value}>
                      {pos.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Size: {decorator.size}px</Label>
              </div>
              <Slider
                value={[decorator.size]}
                min={50}
                max={300}
                step={10}
                onValueChange={(value) => updateDecorator({ size: value[0] })}
              />
            </div>

            <div className="space-y-2">
              <Label>Color</Label>
              <ColorPicker
                value={decorator.color}
                onChange={(color) => updateDecorator({ color })}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
