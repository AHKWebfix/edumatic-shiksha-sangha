
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Download, Search, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ResultCorner = () => {
  const recentResults = [
    {
      exam: "বার্ষিক পরীক্ষা ২০২৪",
      class: "দশম শ্রেণি",
      subject: "বিজ্ঞান",
      publishDate: "১৫ ডিসেম্বর ২০২৪",
      status: "published"
    },
    {
      exam: "অর্ধবার্ষিক পরীক্ষা ২০২৪",
      class: "নবম শ্রেণি",
      subject: "সকল বিভাগ",
      publishDate: "১০ নভেম্বর ২০২৪",
      status: "published"
    },
    {
      exam: "তৃতীয় সাময়িক পরীক্ষা",
      class: "অষ্টম শ্রেণি",
      subject: "সকল বিষয়",
      publishDate: "২৮ অক্টোবর ২০২৪",
      status: "published"
    },
    {
      exam: "দ্বিতীয় সাময়িক পরীক্ষা",
      class: "সপ্তম শ্রেণি",
      subject: "সকল বিষয়",
      publishDate: "১৫ সেপ্টেম্বর ২০২৪",
      status: "published"
    }
  ];

  const toppers = [
    { name: "সাকিব হাসান", class: "দশম শ্রেণি", gpa: "৫.০০", position: 1 },
    { name: "তানিয়া আক্তার", class: "দশম শ্রেণি", gpa: "৪.৯৫", position: 2 },
    { name: "রাহুল দাস", class: "নবম শ্রেণি", gpa: "৪.৯০", position: 3 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              ফলাফল কর্নার
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            পরীক্ষার ফলাফল খোঁজ করুন এবং ডাউনলোড করুন
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Result Search */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-primary/20 mb-8">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  ফলাফল খোঁজ করুন
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
                  ফলাফল খোঁজ করুন
                </Button>
              </CardContent>
            </Card>

            {/* Recent Results */}
            <Card className="shadow-lg border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  সাম্প্রতিক ফলাফলসমূহ
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-0">
                  {recentResults.map((result, index) => (
                    <div 
                      key={index}
                      className={`p-6 border-b last:border-b-0 hover:bg-accent/20 transition-colors ${
                        index % 2 === 0 ? "bg-accent/5" : "bg-white"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary text-lg">
                            {result.exam}
                          </h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-muted-foreground text-sm">
                              {result.class} - {result.subject}
                            </span>
                            <Badge variant="secondary">
                              {result.publishDate}
                            </Badge>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>ডাউনলোড</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performers */}
          <div>
            <Card className="shadow-lg border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  সেরা ফলাফল
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {toppers.map((student, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-accent/20 rounded-lg"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? "bg-yellow-500" : 
                        index === 1 ? "bg-gray-400" : "bg-amber-600"
                      }`}>
                        {student.position}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">
                          {student.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {student.class}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-primary text-lg">
                          {student.gpa}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          GPA
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-6">
                  সকল মেধাবী দেখুন
                </Button>
              </CardContent>
            </Card>

            {/* Quick Download Links */}
            <Card className="shadow-lg border-primary/20 mt-6">
              <CardHeader className="bg-accent/20">
                <CardTitle className="text-primary text-lg">দ্রুত ডাউনলোড</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    SSC পরীক্ষা ২০২৪
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    JSC পরীক্ষা ২০২৪
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-sm">
                    <Download className="h-4 w-4 mr-2" />
                    বৃত্তি পরীক্ষার ফল
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultCorner;
