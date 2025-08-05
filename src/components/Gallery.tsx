
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Play, Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
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
      type: "image",
      title: "প্রশাসনিক ভবন",
      date: "২০২৪",
      category: "প্রাতিষ্ঠানিক",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/8-min.png",
      description: "আধুনিক প্রশাসনিক কার্যক্রমের কেন্দ্র"
    },
    {
      id: 4,
      type: "image",
      title: "শিক্ষার্থীদের কার্যক্রম",
      date: "২০২৪",
      category: "শিক্ষা",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/1-min.png",
      description: "শিক্ষার্থীদের বিভিন্ন শিক্ষামূলক কার্যক্রম"
    },
    {
      id: 5,
      type: "image",
      title: "ক্রীড়া ও বিনোদন এলাকা",
      date: "২০২৪",
      category: "ক্রীড়া",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/7-min.png",
      description: "শিক্ষার্থীদের খেলাধুলা ও বিনোদনের জন্য আলাদা এলাকা"
    },
    {
      id: 6,
      type: "image",
      title: "লাইব্রেরি ও পাঠাগার",
      date: "২০২৪",
      category: "শিক্ষা",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/6-min.png",
      description: "সমৃদ্ধ গ্রন্থাগার ও অধ্যয়ন কক্ষ"
    },
    {
      id: 7,
      type: "image",
      title: "বিজ্ঞান গবেষণাগার",
      date: "২০২৪",
      category: "বিজ্ঞান",
      thumbnail: "https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/11-min.png",
      description: "আধুনিক বিজ্ঞান গবেষণাগার ও ল্যাব সুবিধা"
    }
  ];

  const categories = ["সকল", "প্রাতিষ্ঠানিক", "ক্যাম্পাস", "শিক্ষা", "ক্রীড়া", "বিজ্ঞান"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ক্রীড়া": return "bg-blue-100 text-blue-700";
      case "ক্যাম্পাস": return "bg-green-100 text-green-700";
      case "শিক্ষা": return "bg-purple-100 text-purple-700";
      case "বিজ্ঞান": return "bg-orange-100 text-orange-700";
      case "প্রাতিষ্ঠানিক": return "bg-gray-100 text-gray-700";
      default: return "bg-primary/10 text-primary";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              গ্যালারি
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমাদের প্রতিষ্ঠানের বিভিন্ন কার্যক্রম ও অনুষ্ঠানের ছবি ও ভিডিও
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "সকল" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <Card key={item.id} className="group bg-white shadow-lg border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative">
                <img 
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button 
                      size="sm" 
                      className="w-full bg-white/90 text-primary hover:bg-white"
                    >
                      <Camera className="h-4 w-4 mr-2" />
                      বিস্তারিত দেখুন
                    </Button>
                  </div>
                </div>
                
                {/* Type Badge */}
                <Badge 
                  className="absolute top-4 right-4 bg-primary text-white"
                >
                  ছবি
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                
                <h3 className="font-bold text-primary text-lg mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            আরও দেখুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
