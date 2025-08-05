
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Play, Calendar, Users, Download, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GalleryPage = () => {
  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "প্রতিষ্ঠানের মূল ভবন",
      date: "২০২৪",
      category: "প্রাতিষ্ঠানিক",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/4-min.png",
      description: "আমাদের শিক্ষা প্রতিষ্ঠানের মূল একাডেমিক ভবন"
    },
    {
      id: 2,
      type: "image",
      title: "ক্যাম্পাসের প্রাকৃতিক দৃশ্য",
      date: "২০২৪",
      category: "ক্যাম্পাস",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/3-min.png",
      description: "সবুজে ঘেরা আমাদের সুন্দর ক্যাম্পাস"
    },
    {
      id: 3,
      type: "video",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
      date: "২০২৪",
      category: "ক্রীড়া",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/7-min.png",
      description: "শিক্ষার্থীদের বার্ষিক ক্রীড়া প্রতিযোগিতার হাইলাইটস"
    },
    {
      id: 4,
      type: "image",
      title: "বিজ্ঞান মেলা ২০২৪",
      date: "২০২৪",
      category: "অনুষ্ঠান",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/11-min.png",
      description: "বার্ষিক বিজ্ঞান মেলার আয়োজন"
    },
    {
      id: 5,
      type: "image",
      title: "সাংস্কৃতিক অনুষ্ঠান",
      date: "২০২৩",
      category: "অনুষ্ঠান",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/1-min.png",
      description: "শিক্ষার্থীদের সাংস্কৃতিক প্রতিভা প্রদর্শন"
    },
    {
      id: 6,
      type: "image",
      title: "লাইব্রেরি ও পাঠাগার",
      date: "২০২৪",
      category: "সুবিধা",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/6-min.png",
      description: "আধুনিক লাইব্রেরি ও অধ্যয়ন পরিবেশ"
    }
  ];

  const categories = ["সকল", "প্রাতিষ্ঠানিক", "ক্যাম্পাস", "অনুষ্ঠান", "ক্রীড়া", "সুবিধা"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ক্রীড়া": return "bg-blue-100 text-blue-700";
      case "ক্যাম্পাস": return "bg-green-100 text-green-700";
      case "অনুষ্ঠান": return "bg-purple-100 text-purple-700";
      case "সুবিধা": return "bg-orange-100 text-orange-700";
      case "প্রাতিষ্ঠানিক": return "bg-gray-100 text-gray-700";
      default: return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            <Camera className="inline h-8 w-8 mr-3" />
            গ্যালারি
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমাদের প্রতিষ্ঠানের বিভিন্ন কার্যক্রম, অনুষ্ঠান ও সুযোগ-সুবিধার ছবি ও ভিডিও
          </p>
        </div>

        <Tabs defaultValue="সকল" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="সকল">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <Card key={item.id} className="group overflow-hidden">
                  <div className="relative">
                    <img 
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <Button size="sm" className="flex-1">
                          {item.type === "video" ? <Play className="h-4 w-4 mr-1" /> : <Camera className="h-4 w-4 mr-1" />}
                          দেখুন
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <Badge className="absolute top-4 right-4 bg-primary text-white">
                      {item.type === "video" ? "ভিডিও" : "ছবি"}
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-primary mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems
                  .filter(item => item.category === category)
                  .map((item) => (
                    <Card key={item.id} className="group overflow-hidden">
                      <div className="relative">
                        <img 
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                            <Button size="sm" className="flex-1">
                              {item.type === "video" ? <Play className="h-4 w-4 mr-1" /> : <Camera className="h-4 w-4 mr-1" />}
                              দেখুন
                            </Button>
                            <Button size="sm" variant="secondary">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="secondary">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <Badge className="absolute top-4 right-4 bg-primary text-white">
                          {item.type === "video" ? "ভিডিও" : "ছবি"}
                        </Badge>
                      </div>

                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getCategoryColor(item.category)}>
                            {item.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.date}
                          </div>
                        </div>
                        
                        <h3 className="font-bold text-primary mb-2 line-clamp-1">
                          {item.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
