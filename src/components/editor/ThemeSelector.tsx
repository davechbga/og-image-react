
import { OGImageConfig, ThemePreset } from "@/types";
import { THEME_PRESETS } from "@/constants/presets";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check } from "lucide-react";

interface ThemeSelectorProps {
  config: OGImageConfig;
  updateConfig: (updates: Partial<OGImageConfig>) => void;
}

export function ThemeSelector({ config, updateConfig }: ThemeSelectorProps) {
  const handleThemeSelect = (theme: ThemePreset) => {
    // Preserve content fields when changing themes
    const { title, description, logo } = config;
    
    updateConfig({
      ...theme.config,
      title,
      description,
      logo,
      theme: theme.id,
    } as OGImageConfig);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Theme Presets</h3>
        <p className="text-sm text-muted-foreground">Select a preset to quickly change the style of your OG image.</p>
        
        <ScrollArea className="h-[400px]">
          <div className="grid grid-cols-1 gap-4 pr-4">
            {THEME_PRESETS.map((theme) => (
              <Button
                key={theme.id}
                variant="outline"
                className="h-24 w-full justify-between p-4 relative"
                onClick={() => handleThemeSelect(theme)}
              >
                <div className="flex flex-col items-start">
                  <span className="font-medium">{theme.name}</span>
                </div>
                {config.theme === theme.id && (
                  <Check className="h-5 w-5 absolute top-2 right-2 text-primary" />
                )}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
