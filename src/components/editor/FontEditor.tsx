
import { OGImageConfig, FontOption } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const FONT_OPTIONS: FontOption[] = [
  { name: "Default", value: "inherit" },
  { name: "Playfair Display", value: "'Playfair Display', serif" },
  { name: "Montserrat", value: "'Montserrat', sans-serif" },
  { name: "Roboto", value: "'Roboto', sans-serif" },
  { name: "Open Sans", value: "'Open Sans', sans-serif" },
  { name: "Lato", value: "'Lato', sans-serif" },
  { name: "Poppins", value: "'Poppins', sans-serif" },
];

interface FontEditorProps {
  config: OGImageConfig;
  updateConfig: (updates: Partial<OGImageConfig>) => void;
}

export function FontEditor({ config, updateConfig }: FontEditorProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Font Options</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Font Family</Label>
            <Select
              value={config.fontFamily || "inherit"}
              onValueChange={(value) => updateConfig({ fontFamily: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                {FONT_OPTIONS.map((font) => (
                  <SelectItem key={font.value} value={font.value}>
                    {font.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
