
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Play, Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৪",
      date: "১৫ ডিসেম্বর ২০২৪",
      category: "ক্রীড়া",
      thumbnail: "/placeholder.svg",
      description: "আমাদের প্রতিষ্ঠানের বার্ষিক ক্রীড়া প্রতিযোগিতার মুহূর্তগুলো"
    },
    {
      id: 2,
      type: "image",
      title: "সাংস্কৃতিক অনুষ্ঠান ২০২৪",
      date: "১০ নভেম্বর ২০২৪",
      category: "সংস্কৃতি",
      thumbnail: "/placeholder.svg",
      description: "বার্ষিক সাংস্কৃতিক অনুষ্ঠানের বর্ণিল আয়োজন"
    },
    {
      id: 3,
      type: "video",
      title: "প্রতিষ্ঠানের পরিচিতি ভিডিও",
      date: "০৫ নভেম্বর ২০২৪",
      category: "প্রাতিষ্ঠানিক",
      thumbnail: "/placeholder.svg",
      description: "আমাদের শিক্ষা প্রতিষ্ঠানের সামগ্রিক পরিচিতি"
    },
    {
      id: 4,
      type: "image",
      title: "বিজ্ঞান মেলা ২০২৪",
      date: "২৮ অক্টোবর ২০২৪",
      category: "শিক্ষা",
      thumbnail: "/placeholder.svg",
      description: "শিক্ষার্থীদের বিজ্ঞান প্রজেক্ট ও উদ্ভাবনী কাজ"
    },
    {
      id: 5,
      type: "image",
      title: "পুরস্কার বিতরণী অনুষ্ঠান",
      date: "২০ অক্টোবর ২০২৪",
      category: "পুরস্কার",
      thumbnail: "/placeholder.svg",
      description: "মেধাবী শিক্ষার্থীদের পুরস্কার প্রদান অনুষ্ঠান"
    },
    {
      id: 6,
      type: "image",
      title: "নতুন ভবনের উদ্বোধন",
      date: "১৫ সেপ্টেম্বর ২০২৪",
      category: "প্রাতিষ্ঠানিক",
      thumbnail: "/placeholder.svg",
      description: "প্রতিষ্ঠানের নতুন একাডেমিক ভবনের উদ্বোধনী অনুষ্ঠান"
    }
  ];

  const categories = ["সকল", "ক্রীড়া", "সংস্কৃতি", "শিক্ষা", "প্রাতিষ্ঠানিক", "পুরস্কার"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ক্রীড়া": return "bg-blue-100 text-blue-700";
      case "সংস্কৃতি": return "bg-purple-100 text-purple-700";
      case "শিক্ষা": return "bg-green-100 text-green-700";
      case "পুরস্কার": return "bg-yellow-100 text-yellow-700";
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
                      {item.type === "video" ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          ভিডিও দেখুন
                        </>
                      ) : (
                        <>
                          <Camera className="h-4 w-4 mr-2" />
                          বিস্তারিত দেখুন
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                {/* Type Badge */}
                <Badge 
                  className={`absolute top-4 right-4 ${
                    item.type === "video" ? "bg-red-500" : "bg-primary"
                  } text-white`}
                >
                  {item.type === "video" ? "ভিডিও" : "ছবি"}
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
