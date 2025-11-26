import { useState } from "react";
import { useLocation } from "wouter";
import { AuthGuard } from "@/components/AuthGuard";
import { HeritageBackground } from "@/components/HeritageBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Upload, Grid3x3, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import kolam1 from "@assets/generated_images/kolam_gallery_1.png";
import kolam2 from "@assets/generated_images/kolam_gallery_2.png";
import kolam3 from "@assets/generated_images/kolam_gallery_3.png";
import kolam4 from "@assets/generated_images/kolam_gallery_4.png";
import kolam5 from "@assets/generated_images/kolam_gallery_5.png";
import kolam6 from "@assets/generated_images/kolam_gallery_6.png";
import kolam7 from "@assets/generated_images/kolam_gallery_7.png";
import kolam8 from "@assets/generated_images/kolam_gallery_8.png";

export default function Generator() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [gridSize, setGridSize] = useState([8]);
  const [symmetry, setSymmetry] = useState("vertical");
  const [showResults, setShowResults] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const relatedKolams = [kolam1, kolam2, kolam3, kolam4, kolam5, kolam6, kolam7, kolam8];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "Image Uploaded",
        description: "Generating related Kolam designs...",
      });
      setTimeout(() => setShowResults(true), 1500);
    }
  };

  const handleSelectKolam = () => {
    toast({
      title: "Design Selected",
      description: "Opening color editor...",
    });
    setTimeout(() => setLocation("/editor"), 500);
  };

  const handleContinueToEditor = () => {
    toast({
      title: "Grid Created",
      description: "Opening color editor...",
    });
    setTimeout(() => setLocation("/editor"), 500);
  };

  return (
    <AuthGuard>
      <HeritageBackground className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Create Your Kolam"
            subtitle="Choose your creation method and bring your artistic vision to life"
            centered
          />

          <Tabs defaultValue="upload" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upload" className="font-medium" data-testid="tab-upload">
                <Upload className="w-4 h-4 mr-2" />
                Upload Image
              </TabsTrigger>
              <TabsTrigger value="grid" className="font-medium" data-testid="tab-grid">
                <Grid3x3 className="w-4 h-4 mr-2" />
                Grid & Symmetry
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upload">
              <Card className="border-2 border-kolam-gold/50">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-kolam-maroon">
                    Generate from Image
                  </CardTitle>
                  <CardDescription>
                    Upload a photo and we'll suggest related Kolam designs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div
                      className="border-2 border-dashed border-kolam-gold rounded-xl p-12 text-center hover-elevate active-elevate-2 transition-all cursor-pointer bg-kolam-ivory/30"
                      onClick={() => document.getElementById("file-upload")?.click()}
                      data-testid="upload-area"
                    >
                      <Upload className="w-16 h-16 mx-auto mb-4 text-kolam-maroon" />
                      <h3 className="font-playfair text-xl font-semibold text-kolam-maroon mb-2">
                        Upload Your Image
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {uploadedFile ? uploadedFile.name : "Click to browse or drag and drop"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Supports JPG, PNG (Max 10MB)
                      </p>
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/jpeg,image/png"
                        onChange={handleFileUpload}
                        className="hidden"
                        data-testid="input-file"
                      />
                    </div>

                    {showResults && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h3 className="font-playfair text-2xl font-semibold text-kolam-maroon text-center">
                          Related Kolam Designs
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {relatedKolams.map((kolam, index) => (
                            <div
                              key={index}
                              className="group cursor-pointer hover-elevate active-elevate-2 rounded-lg overflow-hidden border-2 border-kolam-gold/50 transition-all"
                              onClick={handleSelectKolam}
                              data-testid={`kolam-result-${index}`}
                            >
                              <img
                                src={kolam}
                                alt={`Related Kolam ${index + 1}`}
                                className="w-full h-48 object-cover"
                              />
                              <div className="p-2 bg-card text-center">
                                <p className="text-sm font-medium text-kolam-maroon">
                                  Design {index + 1}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="grid">
              <Card className="border-2 border-kolam-gold/50">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-kolam-maroon">
                    Grid-Based Creation
                  </CardTitle>
                  <CardDescription>
                    Design your Kolam using our symmetry tools and grid system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="text-base font-medium">
                          Grid Size: {gridSize[0]} × {gridSize[0]}
                        </Label>
                        <Slider
                          value={gridSize}
                          onValueChange={setGridSize}
                          min={3}
                          max={20}
                          step={1}
                          className="w-full"
                          data-testid="slider-grid-size"
                        />
                        <p className="text-sm text-muted-foreground">
                          Adjust the number of dots in your grid
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-base font-medium">Symmetry Options</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { value: "vertical", label: "Vertical" },
                            { value: "horizontal", label: "Horizontal" },
                            { value: "radial", label: "Radial" },
                            { value: "4-way", label: "4-Way" },
                          ].map((option) => (
                            <Button
                              key={option.value}
                              variant={symmetry === option.value ? "default" : "outline"}
                              className={
                                symmetry === option.value
                                  ? "bg-kolam-maroon text-kolam-ivory"
                                  : "border-kolam-gold/50 text-kolam-maroon hover:bg-kolam-maroon hover:text-kolam-ivory"
                              }
                              onClick={() => setSymmetry(option.value)}
                              data-testid={`button-symmetry-${option.value}`}
                            >
                              {option.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Button
                        size="lg"
                        className="w-full bg-kolam-maroon hover:bg-kolam-maroon/90 text-kolam-ivory"
                        onClick={handleContinueToEditor}
                        data-testid="button-continue-editor"
                      >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Continue to Color Editor
                      </Button>
                    </div>

                    <div className="bg-kolam-ivory/50 rounded-xl border-2 border-kolam-gold/50 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className="grid gap-2 mx-auto mb-4"
                          style={{
                            gridTemplateColumns: `repeat(${gridSize[0]}, 1fr)`,
                            maxWidth: "300px",
                          }}
                        >
                          {Array.from({ length: gridSize[0] * gridSize[0] }).map((_, i) => (
                            <div
                              key={i}
                              className="w-3 h-3 rounded-full bg-kolam-maroon/40"
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Grid Preview ({gridSize[0]}×{gridSize[0]})
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </HeritageBackground>
    </AuthGuard>
  );
}
