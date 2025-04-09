
import { useState } from "react";
import { OGImageConfig, GradientPreset } from "@/types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/components/ImageUploader";
import { ColorPicker } from "@/components/ColorPicker";
import { GRADIENT_PRESETS } from "@/constants/presets";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BackgroundEditorProps {
  config: OGImageConfig;
  updateConfig: (updates: Partial<OGImageConfig>) => void;
}

export function BackgroundEditor({ config, updateConfig }: BackgroundEditorProps) {
  const [activeTab, setActiveTab] = useState(config.background.type);

  const handleBackgroundTypeChange = (type: string) => {
    setActiveTab(type as "color" | "gradient" | "image");
    
    let updatedBackground = { ...config.background, type: type as "color" | "gradient" | "image" };
    
    if (type === "color" && config.background.type !== "color") {
      updatedBackground.value = "#FFFFFF";
    } else if (type === "gradient" && config.background.type !== "gradient") {
      updatedBackground = {
        ...updatedBackground,
        value: "",
        gradient: {
          from: "#6366F1",
          to: "#8B5CF6",
          direction: "to-r",
        },
      };
    } else if (type === "image" && config.background.type !== "image") {
      updatedBackground.value = "";
    }
    
    updateConfig({ background: updatedBackground });
  };

  const handleGradientPresetSelect = (preset: GradientPreset) => {
    updateConfig({
      background: {
        ...config.background,
        type: "gradient",
        gradient: {
          from: preset.from,
          to: preset.to,
          direction: preset.direction,
        },
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Background Type</h3>
        
        <RadioGroup 
          value={config.background.type} 
          onValueChange={handleBackgroundTypeChange}
          className="flex space-x-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="color" id="bg-type-color" />
            <Label htmlFor="bg-type-color">Solid Color</Label>
          </div>
          {/* <div className="flex items-center space-x-2">
            <RadioGroupItem value="gradient" id="bg-type-gradient" />
            <Label htmlFor="bg-type-gradient">Gradient</Label>
          </div> */}
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="image" id="bg-type-image" />
            <Label htmlFor="bg-type-image">Image</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-4">
        <Tabs value={activeTab} onValueChange={handleBackgroundTypeChange}>
          <TabsContent value="color" className="space-y-4">
            <ColorPicker 
              label="Background Color"
              value={config.background.type === "color" ? config.background.value : "#FFFFFF"}
              onChange={(value) => 
                updateConfig({
                  background: {
                    ...config.background,
                    type: "color",
                    value,
                  },
                })
              }
            />
          </TabsContent>
          
          <TabsContent value="gradient" className="space-y-4">
            <div className="space-y-4">
              <Label>Gradient Presets</Label>
              <ScrollArea className="h-48 w-full rounded-md border">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {GRADIENT_PRESETS.map((preset, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-16 w-full p-0 overflow-hidden"
                      onClick={() => handleGradientPresetSelect(preset)}
                    >
                      <div 
                        className="h-full w-full flex items-center justify-center"
                        style={{
                          backgroundImage: `linear-gradient(${preset.direction}, ${preset.from}, ${preset.to})`,
                        }}
                      >
                        <span className="text-xs text-white drop-shadow-md font-medium p-2 text-center">
                          {preset.name}
                        </span>
                      </div>
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            <div className="space-y-2 grid grid-cols-2 gap-4">
              <ColorPicker 
                label="Start Color"
                value={config.background.gradient?.from || "#6366F1"}
                onChange={(value) => 
                  updateConfig({
                    background: {
                      ...config.background,
                      type: "gradient",
                      gradient: {
                        ...config.background.gradient!,
                        from: value,
                      },
                    },
                  })
                }
              />
              
              <ColorPicker 
                label="End Color"
                value={config.background.gradient?.to || "#8B5CF6"}
                onChange={(value) => 
                  updateConfig({
                    background: {
                      ...config.background,
                      type: "gradient",
                      gradient: {
                        ...config.background.gradient!,
                        to: value,
                      },
                    },
                  })
                }
              />
            </div>
            
            <div className="space-y-2">
              <Label>Direction</Label>
              <RadioGroup 
                value={config.background.gradient?.direction || "to-r"} 
                onValueChange={(value) => 
                  updateConfig({
                    background: {
                      ...config.background,
                      type: "gradient",
                      gradient: {
                        ...config.background.gradient!,
                        direction: value,
                      },
                    },
                  })
                }
                className="grid grid-cols-2 gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="to-r" id="direction-right" />
                  <Label htmlFor="direction-right">Left to Right</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="to-l" id="direction-left" />
                  <Label htmlFor="direction-left">Right to Left</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="to-b" id="direction-bottom" />
                  <Label htmlFor="direction-bottom">Top to Bottom</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="to-t" id="direction-top" />
                  <Label htmlFor="direction-top">Bottom to Top</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="to-br" id="direction-bottom-right" />
                  <Label htmlFor="direction-bottom-right">Diagonal ↘</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="to-bl" id="direction-bottom-left" />
                  <Label htmlFor="direction-bottom-left">Diagonal ↙</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="to-tr" id="direction-top-right" />
                  <Label htmlFor="direction-top-right">Diagonal ↗</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="to-tl" id="direction-top-left" />
                  <Label htmlFor="direction-top-left">Diagonal ↖</Label>
                </div>
              </RadioGroup>
            </div>
          </TabsContent>
          
          <TabsContent value="image" className="space-y-4">
            <ImageUploader
              label="Background Image"
              onImageChange={(imageUrl) => 
                updateConfig({
                  background: {
                    ...config.background,
                    type: "image",
                    value: imageUrl || "",
                  },
                })
              }
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
