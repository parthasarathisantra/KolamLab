import { useState } from "react";
import { AuthGuard } from "@/components/AuthGuard";
import { HeritageBackground } from "@/components/HeritageBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { Paintbrush, Eraser, Undo, RotateCcw, Download, ArrowLeft, FileImage } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import kolam1 from "@assets/generated_images/kolam_gallery_1.png";

export default function Editor() {
  const { toast } = useToast();
  const [selectedTool, setSelectedTool] = useState<"fill" | "erase">("fill");
  const [selectedColor, setSelectedColor] = useState("#8c2f0c");

  const colors = [
    { name: "Maroon", value: "#8c2f0c" },
    { name: "Gold", value: "#d8b98a" },
    { name: "Sand", value: "#b57a50" },
    { name: "Deep Red", value: "#a0190c" },
    { name: "Orange", value: "#e67e22" },
    { name: "Yellow", value: "#f39c12" },
    { name: "Green", value: "#27ae60" },
    { name: "Blue", value: "#2980b9" },
    { name: "Purple", value: "#8e44ad" },
    { name: "Pink", value: "#e91e63" },
    { name: "Teal", value: "#16a085" },
    { name: "Brown", value: "#795548" },
    { name: "Black", value: "#2c3e50" },
    { name: "White", value: "#ecf0f1" },
    { name: "Cream", value: "#fef5e7" },
  ];

  const handleDownload = (format: "png" | "svg") => {
    toast({
      title: "Download Started",
      description: `Your Kolam is being exported as ${format.toUpperCase()}...`,
    });
  };

  const handleUndo = () => {
    toast({
      title: "Undo",
      description: "Last action undone",
    });
  };

  const handleReset = () => {
    toast({
      title: "Canvas Reset",
      description: "Your canvas has been cleared",
    });
  };

  return (
    <AuthGuard>
      <HeritageBackground className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/generate">
              <Button variant="ghost" className="mb-4" data-testid="button-back">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Generator
              </Button>
            </Link>
            <SectionHeader
              title="Color Your Kolam"
              subtitle="Bring your design to life with beautiful colors"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3">
              <Card className="p-6 border-2 border-kolam-gold/50 sticky top-20">
                <h3 className="font-playfair text-xl font-semibold text-kolam-maroon mb-4">
                  Tools
                </h3>
                
                <div className="space-y-3 mb-6">
                  <Button
                    variant={selectedTool === "fill" ? "default" : "outline"}
                    className={`w-full justify-start ${
                      selectedTool === "fill"
                        ? "bg-kolam-maroon text-kolam-ivory"
                        : "border-kolam-gold/50 hover:bg-kolam-maroon hover:text-kolam-ivory"
                    }`}
                    onClick={() => setSelectedTool("fill")}
                    data-testid="tool-fill"
                  >
                    <Paintbrush className="w-4 h-4 mr-2" />
                    Fill Color
                  </Button>
                  
                  <Button
                    variant={selectedTool === "erase" ? "default" : "outline"}
                    className={`w-full justify-start ${
                      selectedTool === "erase"
                        ? "bg-kolam-maroon text-kolam-ivory"
                        : "border-kolam-gold/50 hover:bg-kolam-maroon hover:text-kolam-ivory"
                    }`}
                    onClick={() => setSelectedTool("erase")}
                    data-testid="tool-erase"
                  >
                    <Eraser className="w-4 h-4 mr-2" />
                    Erase
                  </Button>
                </div>

                <Separator className="my-4" />

                <h4 className="font-medium text-foreground mb-3">Color Palette</h4>
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      className={`w-10 h-10 rounded-md border-2 transition-all hover:scale-110 ${
                        selectedColor === color.value
                          ? "border-kolam-maroon ring-2 ring-kolam-maroon ring-offset-2"
                          : "border-kolam-gold/30"
                      }`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setSelectedColor(color.value)}
                      title={color.name}
                      data-testid={`color-${color.name.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-kolam-gold/50"
                    onClick={handleUndo}
                    data-testid="button-undo"
                  >
                    <Undo className="w-4 h-4 mr-2" />
                    Undo
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start border-kolam-gold/50"
                    onClick={handleReset}
                    data-testid="button-reset"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset Canvas
                  </Button>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-6">
              <Card className="p-6 border-2 border-kolam-gold/50 bg-kolam-ivory/50">
                <div className="aspect-square bg-background rounded-lg border-4 border-kolam-gold/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={kolam1}
                    alt="Kolam Canvas"
                    className="w-full h-full object-contain p-4"
                    data-testid="canvas-preview"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Canvas Preview - Click on areas to fill with selected color
                </p>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Card className="p-6 border-2 border-kolam-gold/50 sticky top-20">
                <h3 className="font-playfair text-xl font-semibold text-kolam-maroon mb-4">
                  Export
                </h3>
                
                <div className="space-y-3">
                  <Button
                    className="w-full bg-kolam-maroon hover:bg-kolam-maroon/90 text-kolam-ivory"
                    onClick={() => handleDownload("png")}
                    data-testid="button-download-png"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PNG
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full border-kolam-gold/50"
                    onClick={() => handleDownload("svg")}
                    data-testid="button-download-svg"
                  >
                    <FileImage className="w-4 h-4 mr-2" />
                    Download SVG
                  </Button>
                </div>

                <Separator className="my-6" />

                <div className="bg-kolam-ivory/50 rounded-lg p-4 border border-kolam-gold/30">
                  <h4 className="font-medium text-sm text-kolam-maroon mb-2">
                    Current Selection
                  </h4>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 rounded-md border-2 border-kolam-gold"
                      style={{ backgroundColor: selectedColor }}
                    />
                    <span className="text-sm text-foreground/70">
                      {colors.find((c) => c.value === selectedColor)?.name}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Tool: {selectedTool === "fill" ? "Fill Color" : "Erase"}
                  </p>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-br from-kolam-maroon/10 to-kolam-gold/10 rounded-lg border border-kolam-gold/30">
                  <p className="text-sm text-foreground/70 leading-relaxed italic">
                    "In every stroke lies the wisdom of generations, in every color
                    blooms the joy of creation."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </HeritageBackground>
    </AuthGuard>
  );
}
