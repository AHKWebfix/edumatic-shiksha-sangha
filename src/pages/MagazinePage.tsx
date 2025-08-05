
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Eye, Calendar, Users, FileText, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MagazinePage = () => {
  const magazines = [
    {
      id: 1,
      title: "এডুমেটিক বার্ষিকী ২০২৪",
      year: "২০২৪",
      edition: "১৫তম সংস্করণ",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      pages: 120,
      articles: 45,
      description: "এ বছরের বার্ষিকীতে রয়েছে শিক্ষার্থীদের সৃজনশীল লেখা, কবিতা, ছবি ও বিভিন্ন সাংস্কৃতিক কার্যক্রমের বিবরণ।",
      featured: true,
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      id: 2,
      title: "শিক্ষা ও সংস্কৃতি ২০২৩",
      year: "২০২৩",
      edition: "১৪তম সংস্করণ",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      pages: 108,
      articles: 42,
      description: "শিক্ষা ও সংস্কৃতির নানা দিক নিয়ে শিক্ষার্থী ও শিক্ষকদের মনোজ্ঞ রচনার সংকলন।",
      featured: false,
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      id: 3,
      title: "স্বপ্নের এডুমেটিক ২০২২",
      year: "২০২২",
      edition: "১৩তম সংস্করণ",
      thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
      pages: 95,
      articles: 38,
      description: "করোনা পরবর্তী শিক্ষা কার্যক্রম ও শিক্ষার্থীদের অভিজ্ঞতার বিশেষ সংকলন।",
      featured: false,
      downloadUrl: "#",
      viewUrl: "#"
    }
  ];

  const categories = [
    { name: "কবিতা", count: 25, icon: BookOpen },
    { name: "গল্প", count: 18, icon: FileText },
    { name: "প্রবন্ধ", count: 15, icon: Users },
    { name: "ছবি", count: 35, icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            <BookOpen className="inline h-8 w-8 mr-3" />
            প্রতিষ্ঠান স্মরণিকা
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমাদের প্রতিষ্ঠানের বার্ষিক ম্যাগাজিন ও স্মরণিকা, যেখানে রয়েছে শিক্ষার্থী ও শিক্ষকদের সৃজনশীল রচনা
          </p>
        </div>

        {/* Featured Magazine */}
        {magazines.filter(m => m.featured).map(magazine => (
          <Card key={magazine.id} className="mb-8 border-primary/30 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Badge variant="secondary">বিশেষ সংস্করণ</Badge>
              </div>
              <CardTitle className="text-2xl text-primary">বর্তমান সংস্করণ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <img 
                    src={magazine.thumbnail}
                    alt={magazine.title}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-primary mb-2">{magazine.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">{magazine.year}</Badge>
                    <Badge variant="outline">{magazine.edition}</Badge>
                    <Badge variant="outline">{magazine.pages} পৃষ্ঠা</Badge>
                    <Badge variant="outline">{magazine.articles} টি লেখা</Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{magazine.description}</p>
                  
                  <div className="flex gap-4">
                    <Button>
                      <Eye className="h-4 w-4 mr-2" />
                      অনলাইনে পড়ুন
                    </Button>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      ডাউনলোড করুন
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Content Categories */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {categories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <category.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                <h3 className="font-bold text-primary mb-1">{category.name}</h3>
                <p className="text-2xl font-bold text-muted-foreground">{category.count}</p>
                <p className="text-sm text-muted-foreground">টি রচনা</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Previous Editions */}
        <Card>
          <CardHeader>
            <CardTitle>পূর্বের সংস্করণসমূহ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {magazines.filter(m => !m.featured).map(magazine => (
                <Card key={magazine.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={magazine.thumbnail}
                      alt={magazine.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-white">
                      {magazine.year}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-bold text-primary mb-2 line-clamp-1">{magazine.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{magazine.edition}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <FileText className="h-3 w-3 mr-1" />
                        {magazine.pages} পৃষ্ঠা
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {magazine.articles} টি লেখা
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {magazine.description}
                    </p>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="h-3 w-3 mr-1" />
                        পড়ুন
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submission Guidelines */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>লেখা জমা দেওয়ার নিয়মাবলী</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">গ্রহণযোগ্য লেখার ধরন:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• কবিতা (সর্বোচ্চ ৫০ লাইন)</li>
                  <li>• ছোটগল্প (সর্বোচ্চ ১০০০ শব্দ)</li>
                  <li>• প্রবন্ধ (সর্বোচ্চ ১৫০০ শব্দ)</li>
                  <li>• ছবি ও চিত্রকর্ম</li>
                  <li>• বিজ্ঞান ও প্রযুক্তি বিষয়ক লেখা</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-primary mb-3">জমা দেওয়ার তারিখ:</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">শেষ তারিখ: ৩১ অক্টোবর, ২০২৪</span>
                  </div>
                  <Button className="w-full mt-4">
                    <FileText className="h-4 w-4 mr-2" />
                    লেখা জমা দিন
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default MagazinePage;
