import { useState } from "react";
import { OGImageConfig } from "@/types";
import { Button } from "@/components/ui/button";
import { Loader2, Download } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas-pro";

interface ExportPanelProps {
  config: OGImageConfig;
}

export function ExportPanel({ config }: ExportPanelProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);

    try {
      // Small delay to ensure toast is shown
      await new Promise((resolve) => setTimeout(resolve, 100));

      const canvas = document.getElementById("og-canvas");
      if (!canvas) {
        throw new Error("Canvas element not found");
      }

      const result = await html2canvas(canvas, {
        scale: 2, // Higher scale for better quality
        allowTaint: true,
        useCORS: true,
      });

      // Convert to blob and download
      result.toBlob((blob) => {
        if (!blob) {
          throw new Error("Failed to create image blob");
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        const fileName = (config.title || "og-image")
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "-")
          .replace(/-+/g, "-")
          .substring(0, 30);

        link.download = `${fileName}.png`;
        link.href = url;
        link.click();

        // Clean up
        URL.revokeObjectURL(url);
        toast.success("OG Image exported successfully!");
      }, "image/png");
    } catch (error) {
      console.error("Export error:", error);
      toast.error("Failed to export image. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Button
        size="lg"
        onClick={handleExport}
        disabled={isExporting}
        className="gap-2"
      >
        {isExporting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Exporting...
          </>
        ) : (
          <>
            <Download className="h-4 w-4" />
            Export as PNG
          </>
        )}
      </Button>
    </div>
  );
}
