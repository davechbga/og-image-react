
import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";

interface ImageUploaderProps {
  onImageChange: (imageUrl: string | null) => void;
  label: string;
}

export function ImageUploader({ onImageChange, label }: ImageUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreviewUrl(result);
      onImageChange(result);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setPreviewUrl(null);
    onImageChange(null);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium">{label}</p>
        {previewUrl && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearImage}
            className="h-6 w-6"
            type="button"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {previewUrl ? (
        <div className="relative rounded-md overflow-hidden h-20 border">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-20 border border-dashed rounded-md cursor-pointer bg-secondary/50 hover:bg-secondary transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-6 h-6 mb-1 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Click to upload</p>
          </div>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
        </label>
      )}
    </div>
  );
}
