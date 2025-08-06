
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, FileText, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const SyllabusPage = () => {
  const subjects = {
    "6": [
      { name: "বাংলা", code: "101", chapters: 12, marks: 100 },
      { name: "ইংরেজি", code: "107", chapters: 10, marks: 100 },
      { name: "গণিত", code: "109", chapters: 8, marks: 100 },
      { name: "বিজ্ঞান", code: "127", chapters: 15, marks: 100 },
      { name: "ইসলাম ও নৈতিক শিক্ষা", code: "111", chapters: 10, marks: 100 },
      { name: "চারু ও কারুকলা", code: "142", chapters: 8, marks: 100 }
    ],
    "7": [
      { name: "বাংলা", code: "101", chapters: 14, marks: 100 },
      { name: "ইংরেজি", code: "107", chapters: 12, marks: 100 },
      { name: "গণিত", code: "109", chapters: 10, marks: 100 },
      { name: "বিজ্ঞান", code: "127", chapters: 16, marks: 100 },
      { name: "ইতিহাস ও সামাজিক বিজ্ঞান", code: "153", chapters: 12, marks: 100 },
      { name: "ইসলাম ও নৈতিক শিক্ষা", code: "111", chapters: 11, marks: 100 }
    ],
    "8": [
      { name: "বাংলা", code: "101", chapters: 16, marks: 100 },
      { name: "ইংরেজি", code: "107", chapters: 14, marks: 100 },
      { name: "গণিত", code: "109", chapters: 12, marks: 100 },
      { name: "বিজ্ঞান", code: "127", chapters: 18, marks: 100 },
      { name: "বাংলাদেশ ও বিশ্বপরিচয়", code: "150", chapters: 15, marks: 100 },
      { name: "ইসলাম ও নৈতিক শিক্ষা", code: "111", chapters: 12, marks: 100 }
    ],
    "9-10": [
      { name: "বাংলা ১ম পত্র", code: "101", chapters: 20, marks: 100 },
      { name: "বাংলা ২য় পত্র", code: "102", chapters: 8, marks: 100 },
      { name: "ইংরেজি ১ম পত্র", code: "107", chapters: 16, marks: 100 },
      { name: "ইংরেজি ২য় পত্র", code: "108", chapters: 10, marks: 100 },
      { name: "গণিত", code: "109", chapters: 15, marks: 100 },
      { name: "পদার্থবিজ্ঞান", code: "136", chapters: 12, marks: 100 }
    ]
  };

  const curriculumFeatures = [
    {
      title: "জাতীয় শিক্ষাক্রম",
      description: "NCTB অনুমোদিত সিলেবাস অনুসরণ",
      icon: <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      title: "আধুনিক শিক্ষা পদ্ধতি",
      description: "ইন্টারঅ্যাকটিভ ও প্রযুক্তিনির্ভর শিক্ষা",
      icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      title: "ব্যবহারিক শিক্ষা",
      description: "তত্ত্বের সাথে ব্যবহারিক জ্ঞানের সমন্বয়",
      icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="সিলেবাস ও কারিকুলাম"
        subtitle="একাডেমিক"
        description="আধুনিক ও মানসম্মত শিক্ষাক্রম এবং বিস্তারিত সিলেবাস"
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "একাডেমিক" },
          { label: "সিলেবাস ও কারিকুলাম" }
        ]}
        icon={<BookOpen />}
      />

      {/* Curriculum Features */}
      <section className="py-8 sm:py-12 lg:py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-primary mb-6 sm:mb-8 lg:mb-12">
            আমাদের শিক্ষাক্রমের বৈশিষ্ট্য
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {curriculumFeatures.map((feature, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex justify-center text-primary mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-primary text-base sm:text-lg lg:text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Details */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-primary mb-6 sm:mb-8 lg:mb-12">
              শ্রেণিভিত্তিক সিলেবাস
            </h2>
            
            <Tabs defaultValue="6" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto gap-1 sm:gap-0 p-1">
                <TabsTrigger 
                  value="6" 
                  className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2 data-[state=active]:text-xs sm:data-[state=active]:text-sm"
                >
                  ষষ্ঠ শ্রেণি
                </TabsTrigger>
                <TabsTrigger 
                  value="7" 
                  className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2 data-[state=active]:text-xs sm:data-[state=active]:text-sm"
                >
                  সপ্তম শ্রেণি
                </TabsTrigger>
                <TabsTrigger 
                  value="8" 
                  className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2 data-[state=active]:text-xs sm:data-[state=active]:text-sm"
                >
                  অষ্টম শ্রেণি
                </TabsTrigger>
                <TabsTrigger 
                  value="9-10" 
                  className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-2 data-[state=active]:text-xs sm:data-[state=active]:text-sm"
                >
                  নবম-দশম শ্রেণি
                </TabsTrigger>
              </TabsList>

              {Object.entries(subjects).map(([grade, subjectList]) => (
                <TabsContent key={grade} value={grade} className="mt-4 sm:mt-6">
                  <Card className="shadow-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                        <span className="flex items-center text-base sm:text-lg lg:text-xl">
                          <FileText className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                          {grade === "6" && "ষষ্ঠ শ্রেণির বিষয়সমূহ"}
                          {grade === "7" && "সপ্তম শ্রেণির বিষয়সমূহ"}
                          {grade === "8" && "অষ্টম শ্রেণির বিষয়সমূহ"}
                          {grade === "9-10" && "নবম-দশম শ্রেণির বিষয়সমূহ"}
                        </span>
                        <Button size="sm" className="flex items-center space-x-2 text-xs sm:text-sm w-full sm:w-auto justify-center">
                          <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>সকল সিলেবাস</span>
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {subjectList.map((subject, index) => (
                          <Card key={index} className="border border-accent/20 hover:border-primary/30 transition-colors">
                            <CardContent className="p-3 sm:p-4">
                              <h3 className="font-semibold text-primary mb-2 text-sm sm:text-base">
                                {subject.name}
                              </h3>
                              <div className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                                <p>বিষয় কোড: {subject.code}</p>
                                <p>অধ্যায় সংখ্যা: {subject.chapters}</p>
                                <p>পূর্ণমান: {subject.marks}</p>
                              </div>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full mt-3 flex items-center justify-center space-x-2 text-xs sm:text-sm h-8 sm:h-9"
                              >
                                <Download className="h-3 w-3" />
                                <span>ডাউনলোড</span>
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-8 sm:py-12 lg:py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-primary mb-6 sm:mb-8 lg:mb-12">
            অতিরিক্ত সহায়ক উপকরণ
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <Download className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              <span>মডেল প্রশ্ন</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <Download className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              <span>অনুশীলনী</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <Download className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              <span>বই তালিকা</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <Download className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              <span>শিক্ষা নির্দেশনা</span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SyllabusPage;
