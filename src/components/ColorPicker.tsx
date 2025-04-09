
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronDown } from "lucide-react";

interface ColorPickerProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

const presetColors = [
  "#FFFFFF", // White
  "#F8FAFC", // Slate 50
  "#F1F5F9", // Slate 100
  "#E2E8F0", // Slate 200
  "#CBD5E1", // Slate 300
  "#64748B", // Slate 500
  "#334155", // Slate 700
  "#0F172A", // Slate 900
  "#EF4444", // Red 500
  "#F97316", // Orange 500
  "#F59E0B", // Amber 500
  "#EAB308", // Yellow 500
  "#84CC16", // Lime 500
  "#22C55E", // Green 500
  "#10B981", // Emerald 500
  "#14B8A6", // Teal 500
  "#06B6D4", // Cyan 500
  "#0EA5E9", // Sky 500
  "#3B82F6", // Blue 500
  "#6366F1", // Indigo 500
  "#8B5CF6", // Violet 500
  "#A855F7", // Purple 500
  "#D946EF", // Fuchsia 500
  "#EC4899", // Pink 500
];

export function ColorPicker({ value, onChange, label }: ColorPickerProps) {
  const [color, setColor] = useState(value || "#FFFFFF");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setColor(value);
  }, [value]);

  const handleChange = (newColor: string) => {
    setColor(newColor);
    onChange(newColor);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    handleChange(newColor);
  };

  return (
    <div className="space-y-2">
      {label && <p className="text-sm font-medium">{label}</p>}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between"
            type="button"
          >
            <div className="flex items-center gap-2">
              <div
                className="h-4 w-4 rounded-sm border"
                style={{ backgroundColor: color }}
              />
              <span>{color.toUpperCase()}</span>
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1">
              {presetColors.map((presetColor) => (
                <Button
                  key={presetColor}
                  variant="outline"
                  className={cn(
                    "h-6 w-6 p-0 flex items-center justify-center",
                    color.toLowerCase() === presetColor.toLowerCase() &&
                      "border-2 border-primary"
                  )}
                  style={{ backgroundColor: presetColor }}
                  onClick={() => handleChange(presetColor)}
                  type="button"
                >
                  {color.toLowerCase() === presetColor.toLowerCase() && (
                    <Check className="h-3 w-3 text-white" />
                  )}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="color"
                value={color}
                onChange={handleInputChange}
                className="sr-only"
                id="color-picker"
              />
              <label
                htmlFor="color-picker"
                className="h-8 w-8 rounded-md border cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => inputRef.current?.click()}
              />
              <input
                type="text"
                value={color}
                onChange={handleInputChange}
                className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
