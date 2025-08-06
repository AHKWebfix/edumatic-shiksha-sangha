
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Trophy, TrendingUp, Users, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const ExamResultsPage = () => {
  const resultStats = [
    { title: "মোট পরীক্ষার্থী", count: "৮৫০", icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" /> },
    { title: "A+ গ্রেড", count: "১২৫", icon: <Trophy className="h-5 w-5 sm:h-6 sm:w-6" /> },
    { title: "পাসের হার", count: "৯৮.৫%", icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" /> },
    { title: "সর্বোচ্চ GPA", count: "৫.০০", icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" /> }
  ];

  const topStudents = [
    { position: 1, name: "রাহুল আহমেদ", class: "দশম শ্রেণি", gpa: "৫.০০", section: "A" },
    { position: 2, name: "সারা খান", class: "দশম শ্রেণি", gpa: "৫.০০", section: "B" },
    { position: 3, name: "তানভীর হাসান", class: "নবম শ্রেণি", gpa: "৪.৯৫", section: "A" },
    { position: 4, name: "নুসরাত জাহান", class: "নবম শ্রেণি", gpa: "৪.৯২", section: "C" },
    { position: 5, name: "মাহমুদুল হক", class: "অষ্টম শ্রেণি", gpa: "৪.৯০", section: "B" }
  ];

  const gradeDistribution = [
    { grade: "A+", count: 125, percentage: "14.7%" },
    { grade: "A", count: 200, percentage: "23.5%" },
    { grade: "A-", count: 180, percentage: "21.2%" },
    { grade: "B", count: 150, percentage: "17.6%" },
    { grade: "C", count: 100, percentage: "11.8%" },
    { grade: "D", count: 80, percentage: "9.4%" },
    { grade: "F", count: 15, percentage: "1.8%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="পরীক্ষার ফলাফল"
        subtitle="পরীক্ষা"
        description="অভ্যন্তরীণ পরীক্ষার ফলাফল এবং পরিসংখ্যান"
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "পরীক্ষা" },
          { label: "পরীক্ষার ফলাফল" }
        ]}
        icon={<Trophy />}
      />

      {/* Result Statistics */}
      <section className="py-8 sm:py-12 lg:py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 sm:mb-12">ফলাফল পরিসংখ্যান</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {resultStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-2 p-3 sm:p-6">
                  <div className="flex justify-center text-primary mb-2">
                    {stat.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">{stat.count}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-6 pt-0">
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="search" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
                <TabsTrigger value="search" className="text-xs sm:text-sm py-2 sm:py-1.5 px-2 sm:px-3 data-[state=active]:text-xs sm:data-[state=active]:text-sm">
                  ফলাফল অনুসন্ধান
                </TabsTrigger>
                <TabsTrigger value="toppers" className="text-xs sm:text-sm py-2 sm:py-1.5 px-2 sm:px-3 data-[state=active]:text-xs sm:data-[state=active]:text-sm">
                  মেধাবী ছাত্র-ছাত্রী
                </TabsTrigger>
                <TabsTrigger value="statistics" className="text-xs sm:text-sm py-2 sm:py-1.5 px-2 sm:px-3 data-[state=active]:text-xs sm:data-[state=active]:text-sm">
                  গ্রেড বিতরণ
                </TabsTrigger>
              </TabsList>

              <TabsContent value="search" className="mt-4 sm:mt-6 lg:mt-8">
                <Card className="shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                      <Search className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                      ব্যক্তিগত ফলাফল অনুসন্ধান
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-medium">রোল নম্বর</label>
                        <Input placeholder="রোল নম্বর লিখুন" className="text-xs sm:text-sm" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-medium">শ্রেণি</label>
                        <Select>
                          <SelectTrigger className="text-xs sm:text-sm">
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
                      <div className="space-y-2">
                        <label className="text-xs sm:text-sm font-medium">পরীক্ষার ধরন</label>
                        <Select>
                          <SelectTrigger className="text-xs sm:text-sm">
                            <SelectValue placeholder="পরীক্ষা নির্বাচন করুন" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="half-yearly">ষাণ্মাসিক</SelectItem>
                            <SelectItem value="yearly">বার্ষিক</SelectItem>
                            <SelectItem value="test">টেস্ট পরীক্ষা</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-end">
                        <Button className="w-full flex items-center space-x-2 text-xs sm:text-sm py-2 h-auto sm:h-10">
                          <Search className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>ফলাফল খুঁজুন</span>
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 bg-gray-50 rounded-lg text-center">
                      <Search className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm sm:text-base text-gray-600">ফলাফল অনুসন্ধানের জন্য উপরের তথ্য পূরণ করুন</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="toppers" className="mt-4 sm:mt-6 lg:mt-8">
                <Card className="shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                        <Trophy className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                        মেধাতালিকা - বার্ষিক পরীক্ষা ২০২৪
                      </CardTitle>
                      <Button className="flex items-center space-x-2 text-xs sm:text-sm py-2 h-auto sm:h-10 w-full sm:w-auto">
                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>মেধাতালিকা ডাউনলোড</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-3 sm:space-y-4">
                      {topStudents.map((student, index) => (
                        <div key={index} className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-accent/10 transition-colors">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base ${
                              student.position === 1 ? 'bg-yellow-100 text-yellow-700' :
                              student.position === 2 ? 'bg-gray-100 text-gray-700' :
                              student.position === 3 ? 'bg-orange-100 text-orange-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {student.position}
                            </div>
                            <div>
                              <h3 className="font-semibold text-primary text-sm sm:text-base lg:text-lg">{student.name}</h3>
                              <p className="text-xs sm:text-sm text-muted-foreground">{student.class} - শাখা {student.section}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">{student.gpa}</div>
                            <Badge variant="outline" className="bg-green-50 text-green-700 text-xs">
                              GPA
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="statistics" className="mt-4 sm:mt-6 lg:mt-8">
                <Card className="shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                        <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2" />
                        গ্রেড বিতরণ - বার্ষিক পরীক্ষা ২০২৪
                      </CardTitle>
                      <Button className="flex items-center space-x-2 text-xs sm:text-sm py-2 h-auto sm:h-10 w-full sm:w-auto">
                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>পরিসংখ্যান ডাউনলোড</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-3 sm:space-y-4">
                        {gradeDistribution.map((grade, index) => (
                          <div key={index} className="flex items-center justify-between p-3 sm:p-4 border rounded-lg">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-bold text-white text-sm sm:text-base ${
                                grade.grade === 'A+' ? 'bg-green-500' :
                                grade.grade === 'A' ? 'bg-blue-500' :
                                grade.grade === 'A-' ? 'bg-indigo-500' :
                                grade.grade === 'B' ? 'bg-yellow-500' :
                                grade.grade === 'C' ? 'bg-orange-500' :
                                grade.grade === 'D' ? 'bg-red-400' :
                                'bg-red-600'
                              }`}>
                                {grade.grade}
                              </div>
                              <div>
                                <div className="text-base sm:text-lg font-semibold">{grade.count} জন</div>
                                <div className="text-xs sm:text-sm text-muted-foreground">{grade.percentage}</div>
                              </div>
                            </div>
                            <div className="w-16 sm:w-20 lg:w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  grade.grade === 'A+' ? 'bg-green-500' :
                                  grade.grade === 'A' ? 'bg-blue-500' :
                                  grade.grade === 'A-' ? 'bg-indigo-500' :
                                  grade.grade === 'B' ? 'bg-yellow-500' :
                                  grade.grade === 'C' ? 'bg-orange-500' :
                                  grade.grade === 'D' ? 'bg-red-400' :
                                  'bg-red-600'
                                }`}
                                style={{ width: grade.percentage }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-4 sm:space-y-6">
                        <Card className="border border-green-200 bg-green-50">
                          <CardContent className="p-4 sm:p-6">
                            <h4 className="font-semibold text-green-700 mb-2 text-sm sm:text-base">সফলতার হার</h4>
                            <div className="text-2xl sm:text-3xl font-bold text-green-600">৯৮.২%</div>
                            <p className="text-xs sm:text-sm text-green-600">মোট ৮৩৫ জন পরীক্ষায় উত্তীর্ণ</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="border border-blue-200 bg-blue-50">
                          <CardContent className="p-4 sm:p-6">
                            <h4 className="font-semibold text-blue-700 mb-2 text-sm sm:text-base">গড় GPA</h4>
                            <div className="text-2xl sm:text-3xl font-bold text-blue-600">৩.৮৫</div>
                            <p className="text-xs sm:text-sm text-blue-600">গতবারের চেয়ে ০.১৫ বেশি</p>
                          </CardContent>
                        </Card>

                        <Card className="border border-purple-200 bg-purple-50">
                          <CardContent className="p-4 sm:p-6">
                            <h4 className="font-semibold text-purple-700 mb-2 text-sm sm:text-base">শ্রেষ্ঠত্বের হার</h4>
                            <div className="text-2xl sm:text-3xl font-bold text-purple-600">৩৮.২%</div>
                            <p className="text-xs sm:text-sm text-purple-600">A- এর উপরে গ্রেড প্রাপ্ত</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExamResultsPage;
