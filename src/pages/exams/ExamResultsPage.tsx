
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Search, Download, FileText, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ExamResultsPage = () => {
  const recentResults = [
    {
      exam: "বার্ষিক পরীক্ষা ২০২৪",
      class: "দশম শ্রেণি",
      section: "বিজ্ঞান বিভাগ",
      publishDate: "১৫ ডিসেম্বর ২০২ৄ",
      totalStudents: 120,
      passRate: "৯৫%",
      status: "প্রকাশিত"
    },
    {
      exam: "অর্ধবার্ষিক পরীক্ষা ২০২ৄ",
      class: "নবম শ্রেণি",
      section: "সকল বিভাগ",
      publishDate: "১০ নভেম্বর ২০২৪",
      totalStudents: 95,
      passRate: "৯২%",
      status: "প্রকাশিত"
    },
    {
      exam: "তৃতীয় সাময়িক পরীক্ষা",
      class: "অষ্টম শ্রেণি",
      section: "সকল বিষয়",
      publishDate: "২৮ অক্টোবর ২০২৪",
      totalStudents: 87,
      passRate: "৮৮%",
      status: "প্রকাশিত"
    }
  ];

  const topPerformers = [
    {
      name: "সাকিব হাসান",
      roll: "০১",
      class: "দশম শ্রেণি",
      gpa: "৫.০০",
      position: 1,
      subjects: {
        bangla: "৮০",
        english: "৭৮",
        math: "৮০",
        science: "৭৯",
        social: "৮০"
      }
    },
    {
      name: "তানিয়া আক্তার",
      roll: "০৫",
      class: "দশম শ্রেণি",
      gpa: "ৄ.৯৫",
      position: 2,
      subjects: {
        bangla: "৭৯",
        english: "৭৭",
        math: "৮০",
        science: "৭৮",
        social: "৭৯"
      }
    },
    {
      name: "রাহুল দাস",
      roll: "১২",
      class: "নবম শ্রেণি",
      gpa: "৪.৯০",
      position: 3,
      subjects: {
        bangla: "৭৮",
        english: "৭৬",
        math: "৭৯",
        science: "৭৭",
        social: "৭৮"
      }
    }
  ];

  const classWiseResults = [
    { class: "দশম শ্রেণি", totalStudents: 120, passed: 114, failed: 6, passRate: "৯৫%" },
    { class: "নবম শ্রেণি", totalStudents: 95, passed: 87, failed: 8, passRate: "৯২%" },
    { class: "অষ্টম শ্রেণি", totalStudents: 87, passed: 76, failed: 11, passRate: "৮৭%" },
    { class: "সপ্তম শ্রেণি", totalStudents: 92, passed: 85, failed: 7, passRate: "৯২%" },
    { class: "ষষ্ঠ শ্রেণি", totalStudents: 78, passed: 73, failed: 5, passRate: "৯৪%" }
  ];

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1: return "bg-yellow-500";
      case 2: return "bg-gray-400";
      case 3: return "bg-amber-600";
      default: return "bg-primary";
    }
  };

  return (
    <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                পরীক্ষার ফলাফল
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              সকল পরীক্ষার ফলাফল এবং পারফরমেন্স বিশ্লেষণ
            </p>
          </div>

          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="search" className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>ফলাফল খোঁজ</span>
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>সাম্প্রতিক ফলাফল</span>
              </TabsTrigger>
              <TabsTrigger value="toppers" className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>সেরা ফলাফল</span>
              </TabsTrigger>
              <TabsTrigger value="statistics" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>পরিসংখ্যান</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="space-y-6">
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                  <CardTitle className="flex items-center">
                    <Search className="h-5 w-5 mr-2" />
                    ব্যক্তিগত ফলাফল খোঁজ করুন
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        শ্রেণি নির্বাচন করুন
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="শ্রেণি নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">ষষ্ঠ শ্রেণি</SelectItem>
                          <SelectItem value="7">সপ্তম শ্রেণি</SelectItem>
                          <SelectItem value="8">অষ্টম শ্রেণি</SelectItem>
                          <SelectItem value="9">নবম শ্রেণি</SelectItem>
                          <SelectItem value="10">দশম শ্রেণি</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        পরীক্ষা নির্বাচন করুন
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="পরীক্ষা নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="annual">বার্ষিক পরীক্ষা</SelectItem>
                          <SelectItem value="half-yearly">অর্ধবার্ষিক পরীক্ষা</SelectItem>
                          <SelectItem value="test3">তৃতীয় সাময়িক</SelectItem>
                          <SelectItem value="test2">দ্বিতীয় সাময়িক</SelectItem>
                          <SelectItem value="test1">প্রথম সাময়িক</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        রোল নম্বর
                      </label>
                      <Input 
                        placeholder="রোল নম্বর লিখুন" 
                        type="number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        সেশন
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="সেশন নির্বাচন করুন" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">২০২৪</SelectItem>
                          <SelectItem value="2023">২০২৩</SelectItem>
                          <SelectItem value="2022">২০২২</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Search className="h-4 w-4 mr-2" />
                    ফলাফল দেখুন
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recent" className="space-y-6">
              <div className="grid gap-6">
                {recentResults.map((result, index) => (
                  <Card key={index} className="shadow-lg border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-primary text-xl">{result.exam}</CardTitle>
                          <p className="text-muted-foreground mt-1">
                            {result.class} - {result.section}
                          </p>
                        </div>
                        <Badge className="bg-green-500 text-white">
                          {result.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center p-4 bg-accent/10 rounded-lg">
                          <p className="text-2xl font-bold text-primary">{result.totalStudents}</p>
                          <p className="text-sm text-muted-foreground">মোট শিক্ষার্থী</p>
                        </div>
                        <div className="text-center p-4 bg-accent/10 rounded-lg">
                          <p className="text-2xl font-bold text-green-600">{result.passRate}</p>
                          <p className="text-sm text-muted-foreground">পাশের হার</p>
                        </div>
                        <div className="text-center p-4 bg-accent/10 rounded-lg">
                          <p className="text-2xl font-bold text-blue-600">{result.publishDate}</p>
                          <p className="text-sm text-muted-foreground">প্রকাশের তারিখ</p>
                        </div>
                        <div className="text-center p-4 bg-accent/10 rounded-lg">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            ডাউনলোড
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="toppers" className="space-y-6">
              <div className="grid gap-6">
                {topPerformers.map((student, index) => (
                  <Card key={index} className="shadow-lg border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${getPositionColor(student.position)}`}>
                            {student.position}
                          </div>
                          <div>
                            <CardTitle className="text-primary">{student.name}</CardTitle>
                            <p className="text-muted-foreground">
                              রোল: {student.roll} | {student.class}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">{student.gpa}</div>
                          <div className="text-sm text-muted-foreground">GPA</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-5 gap-4">
                        <div className="text-center p-3 bg-accent/10 rounded">
                          <p className="font-semibold text-primary">{student.subjects.bangla}</p>
                          <p className="text-xs text-muted-foreground">বাংলা</p>
                        </div>
                        <div className="text-center p-3 bg-accent/10 rounded">
                          <p className="font-semibold text-primary">{student.subjects.english}</p>
                          <p className="text-xs text-muted-foreground">ইংরেজি</p>
                        </div>
                        <div className="text-center p-3 bg-accent/10 rounded">
                          <p className="font-semibold text-primary">{student.subjects.math}</p>
                          <p className="text-xs text-muted-foreground">গণিত</p>
                        </div>
                        <div className="text-center p-3 bg-accent/10 rounded">
                          <p className="font-semibold text-primary">{student.subjects.science}</p>
                          <p className="text-xs text-muted-foreground">বিজ্ঞান</p>
                        </div>
                        <div className="text-center p-3 bg-accent/10 rounded">
                          <p className="font-semibold text-primary">{student.subjects.social}</p>
                          <p className="text-xs text-muted-foreground">সামাজিক</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="statistics" className="space-y-6">
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    শ্রেণিভিত্তিক ফলাফলের পরিসংখ্যান
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-accent/20">
                        <tr>
                          <th className="text-left p-4 font-semibold">শ্রেণি</th>
                          <th className="text-left p-4 font-semibold">মোট শিক্ষার্থী</th>
                          <th className="text-left p-4 font-semibold">পাশ</th>
                          <th className="text-left p-4 font-semibold">ফেইল</th>
                          <th className="text-left p-4 font-semibold">পাশের হার</th>
                        </tr>
                      </thead>
                      <tbody>
                        {classWiseResults.map((result, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-accent/5" : "bg-white"}>
                            <td className="p-4 font-medium text-primary">{result.class}</td>
                            <td className="p-4 text-foreground">{result.totalStudents}</td>
                            <td className="p-4 text-green-600 font-semibold">{result.passed}</td>
                            <td className="p-4 text-red-600 font-semibold">{result.failed}</td>
                            <td className="p-4">
                              <Badge className="bg-primary text-white">
                                {result.passRate}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExamResultsPage;
