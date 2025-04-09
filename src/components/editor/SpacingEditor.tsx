
import { OGImageConfig } from "@/types";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SpacingEditorProps {
  config: OGImageConfig;
  updateConfig: (updates: Partial<OGImageConfig>) => void;
}

export function SpacingEditor({ config, updateConfig }: SpacingEditorProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Layout & Spacing</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Padding: {config.spacing.padding}px</Label>
            </div>
            <Slider 
              value={[config.spacing.padding]} 
              min={0} 
              max={120} 
              step={4}
              onValueChange={(value) => 
                updateConfig({
                  spacing: {
                    ...config.spacing,
                    padding: value[0],
                  },
                })
              }
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Element Gap: {config.spacing.gap}px</Label>
            </div>
            <Slider 
              value={[config.spacing.gap]} 
              min={0} 
              max={60} 
              step={2}
              onValueChange={(value) => 
                updateConfig({
                  spacing: {
                    ...config.spacing,
                    gap: value[0],
                  },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
