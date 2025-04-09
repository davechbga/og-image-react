import { OGImageConfig } from "@/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ColorPicker } from "@/components/ColorPicker";
import { ImageUploader } from "@/components/ImageUploader";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FONT_OPTIONS } from "@/constants/presets";

interface TextEditorProps {
  config: OGImageConfig;
  updateConfig: (updates: Partial<OGImageConfig>) => void;
}

export function TextEditor({ config, updateConfig }: TextEditorProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Content</h3>

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
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={config.title}
              onChange={(e) => updateConfig({ title: e.target.value })}
              placeholder="Your title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={config.description}
              onChange={(e) => updateConfig({ description: e.target.value })}
              placeholder="Your description"
              rows={3}
            />
          </div>

          <ImageUploader
            label="Logo (Optional)"
            onImageChange={(imageUrl) => updateConfig({ logo: imageUrl })}
          />
        </div>
      </div>

      <div className="space-y-4 border-t pt-4">
        <h3 className="text-lg font-medium">Title Style</h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Font Size: {config.titleOptions.fontSize}px</Label>
            </div>
            <Slider
              value={[config.titleOptions.fontSize]}
              min={24}
              max={96}
              step={1}
              onValueChange={(value) =>
                updateConfig({
                  titleOptions: {
                    ...config.titleOptions,
                    fontSize: value[0],
                  },
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Font Weight</Label>
            <RadioGroup
              value={config.titleOptions.fontWeight}
              onValueChange={(value) =>
                updateConfig({
                  titleOptions: {
                    ...config.titleOptions,
                    fontWeight: value,
                  },
                })
              }
              className="flex space-x-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="normal" id="title-weight-normal" />
                <Label htmlFor="title-weight-normal">Normal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bold" id="title-weight-bold" />
                <Label htmlFor="title-weight-bold">Bold</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Alignment</Label>
            <ToggleGroup
              type="single"
              value={config.titleOptions.alignment}
              onValueChange={(value) =>
                value &&
                updateConfig({
                  titleOptions: {
                    ...config.titleOptions,
                    alignment: value as "left" | "center" | "right",
                  },
                })
              }
              className="justify-start"
            >
              <ToggleGroupItem value="left" aria-label="Left align">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Center align">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Right align">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <ColorPicker
            label="Text Color"
            value={config.titleOptions.color}
            onChange={(value) =>
              updateConfig({
                titleOptions: {
                  ...config.titleOptions,
                  color: value,
                },
              })
            }
          />
        </div>
      </div>

      <div className="space-y-4 border-t pt-4">
        <h3 className="text-lg font-medium">Description Style</h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Font Size: {config.descriptionOptions.fontSize}px</Label>
            </div>
            <Slider
              value={[config.descriptionOptions.fontSize]}
              min={12}
              max={48}
              step={1}
              onValueChange={(value) =>
                updateConfig({
                  descriptionOptions: {
                    ...config.descriptionOptions,
                    fontSize: value[0],
                  },
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Font Weight</Label>
            <RadioGroup
              value={config.descriptionOptions.fontWeight}
              onValueChange={(value) =>
                updateConfig({
                  descriptionOptions: {
                    ...config.descriptionOptions,
                    fontWeight: value,
                  },
                })
              }
              className="flex space-x-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="normal" id="desc-weight-normal" />
                <Label htmlFor="desc-weight-normal">Normal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bold" id="desc-weight-bold" />
                <Label htmlFor="desc-weight-bold">Bold</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Alignment</Label>
            <ToggleGroup
              type="single"
              value={config.descriptionOptions.alignment}
              onValueChange={(value) =>
                value &&
                updateConfig({
                  descriptionOptions: {
                    ...config.descriptionOptions,
                    alignment: value as "left" | "center" | "right",
                  },
                })
              }
              className="justify-start"
            >
              <ToggleGroupItem value="left" aria-label="Left align">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Center align">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Right align">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <ColorPicker
            label="Text Color"
            value={config.descriptionOptions.color}
            onChange={(value) =>
              updateConfig({
                descriptionOptions: {
                  ...config.descriptionOptions,
                  color: value,
                },
              })
            }
          />
        </div>
      </div>
    </div>
  );
}
