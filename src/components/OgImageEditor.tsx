import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OGImageConfig } from "@/types";
import { DEFAULT_CONFIG } from "@/constants/presets";
import { OGPreview } from "./OGPreview";
import { TextEditor } from "./editor/TextEditor";
import { BackgroundEditor } from "./editor/BackgroundEditor";
import { SpacingEditor } from "./editor/SpacingEditor";
import { ThemeSelector } from "./editor/ThemeSelector";
import { ExportPanel } from "./editor/ExportPanel";
import { DecoratorEditor } from "./editor/DecoratorEditor";

export function OgImageEditor() {
  const [config, setConfig] = useState<OGImageConfig>({
    ...(DEFAULT_CONFIG.config as OGImageConfig),
  });

  const updateConfig = (updates: Partial<OGImageConfig>) => {
    setConfig((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  // Add Google Fonts link
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@400;700&family=Roboto:wght@400;700&family=Open+Sans:wght@400;700&family=Lato:wght@400;700&family=Poppins:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="container py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 space-y-6">
        <OGPreview config={config} />
        <ExportPanel config={config} />
      </div>

      <div className="lg:col-span-4">
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="flex flex-wrap justify-between mb-4 gap-6">
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="spacing">Layout</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="space-y-4">
            <TextEditor config={config} updateConfig={updateConfig} />
          </TabsContent>

          <TabsContent value="background" className="space-y-4">
            <BackgroundEditor config={config} updateConfig={updateConfig} />
            <DecoratorEditor config={config} updateConfig={updateConfig} />
          </TabsContent>

          <TabsContent value="spacing" className="space-y-4">
            <SpacingEditor config={config} updateConfig={updateConfig} />
          </TabsContent>

          <TabsContent value="themes" className="space-y-4">
            <ThemeSelector config={config} updateConfig={updateConfig} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
