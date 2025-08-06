
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Users, Award, GraduationCap, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const PublicExamResultsPage = () => {
  const sscResults = {
    year: "২০২৪",
    totalStudents: 180,
    passRate: "৯৯.৪%",
    gpaFive: 45,
    averageGpa: "4.25"
  };

  const jscResults = {
    year: "২০২৪", 
    totalStudents: 200,
    passRate: "১০০%",
    gpaFive: 55,
    averageGpa: "4.35"
  };

  const topAchievers = [
    {
      name: "তানিয়া আক্তার",
      exam: "SSC 2024",
      gpa: "5.00",
      group: "বিজ্ঞান",
      subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "গণিত"]
    },
    {
      name: "আব্দুর রহমান",
      exam: "SSC 2024", 
      gpa: "5.00",
      group: "বিজ্ঞান",
      subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "উচ্চতর গণিত"]
    },
    {
      name: "ফাতেমা খান",
      exam: "JSC 2024",
      gpa: "5.00", 
      group: "সাধারণ",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান"]
    },
    {
      name: "মোহাম্মদ হাসান",
      exam: "JSC 2024",
      gpa: "5.00",
      group: "সাধারণ", 
      subjects: ["সকল বিষয়ে A+"]
    }
  ];

  const yearlyComparison = [
    { year: "২০২৪", sscPass: "৯৯.৪%", jscPass: "১০০%", sscGpaFive: 45, jscGpaFive: 55 },
    { year: "২০২৩", sscPass: "৯৮.৮%", jscPass: "৯৯.৫%", sscGpaFive: 40, jscGpaFive: 48 },
    { year: "২০২২", sscPass: "৯৮.২%", jscPass: "৯৯.০%", sscGpaFive: 35, jscGpaFive: 42 },
    { year: "২০২১", sscPass: "৯৭.৫%", jscPass: "৯৮.৫%", sscGpaFive: 32, jscGpaFive: 38 }
  ];

  const subjectWiseResults = [
    { subject: "বাংলা", aPlus: 85, aGrade: 75, pass: "৯৮%" },
    { subject: "ইংরেজি", aPlus: 70, aGrade: 85, pass: "৯৬%" },
    { subject: "গণিত", aPlus: 65, aGrade: 80, pass: "৯৪%" },
    { subject: "পদার্থবিজ্ঞান", aPlus: 55, aGrade: 70, pass: "৯২%" },
    { subject: "রসায়ন", aPlus: 60, aGrade: 75, pass: "৯৩%" },
    { subject: "জীববিজ্ঞান", aPlus: 75, aGrade: 85, pass: "৯৭%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="পাবলিক পরীক্ষার ফলাফল"
        subtitle="পরীক্ষা"
        description="SSC ও JSC পরীক্ষার ফলাফল এবং অর্জনসমূহ"
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "পরীক্ষা" },
          { label: "পাবলিক পরীক্ষার ফলাফল" }
        ]}
        icon={<GraduationCap />}
      />

      {/* Quick Stats */}
      <section className="py-8 sm:py-12 lg:py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 sm:mb-12">২০২৪ সালের অর্জন</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-green-200 bg-green-50">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <div className="flex justify-center text-green-600 mb-2">
                  <Trophy className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                </div>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700">{sscResults.gpaFive + jscResults.gpaFive}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm lg:text-base text-green-600 font-medium">মোট GPA-5 প্রাপ্ত</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-blue-200 bg-blue-50">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <div className="flex justify-center text-blue-600 mb-2">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                </div>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-700">{sscResults.totalStudents + jscResults.totalStudents}</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm lg:text-base text-blue-600 font-medium">মোট পরীক্ষার্থী</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-purple-200 bg-purple-50">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <div className="flex justify-center text-purple-600 mb-2">
                  <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                </div>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-700">৯৯.৭%</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm lg:text-base text-purple-600 font-medium">গড় পাসের হার</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-orange-200 bg-orange-50">
              <CardHeader className="pb-2 p-3 sm:p-6">
                <div className="flex justify-center text-orange-600 mb-2">
                  <Award className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                </div>
                <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-700">৪.৩০</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm lg:text-base text-orange-600 font-medium">গড় GPA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto sm:h-10 gap-1 sm:gap-0">
                <TabsTrigger value="current" className="text-xs sm:text-sm py-2 sm:py-1.5 px-1 sm:px-3 data-[state=active]:text-xs sm:data-[state=active]:text-sm">
                  ২০২৪ ফলাফল
                </TabsTrigger>
                <TabsTrigger value="achievers" className="text-xs sm:text-sm py-2 sm:py-1.5 px-1 sm:px-3 data-[state=active]:text-xs sm:data-[state=active]:text-sm">
                  মেধাবীরা
                </TabsTrigger>
                <TabsTrigger value="comparison" className="text-xs sm:text-sm py-2 sm:py-1.5 px-1 sm:px-3 data-[state=active]:text-xs sm:data-[state=active]:text-sm">
                  তুলনামূলক চিত্র
                </TabsTrigger>
                <TabsTrigger value="subjects" className="text-xs sm:text-sm py-2 sm:py-1.5 px-1 sm:px-3 data-[state=active]:text-xs sm:data-[state=active]:text-sm">
                  বিষয়ভিত্তিক
                </TabsTrigger>
              </TabsList>

              <TabsContent value="current" className="mt-4 sm:mt-6 lg:mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {/* SSC Results */}
                  <Card className="shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 sm:p-6">
                      <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        SSC পরীক্ষা {sscResults.year}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded gap-2 sm:gap-0">
                          <span className="font-medium text-sm sm:text-base">মোট পরীক্ষার্থী</span>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 text-xs sm:text-sm w-fit">
                            {sscResults.totalStudents} জন
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded gap-2 sm:gap-0">
                          <span className="font-medium text-sm sm:text-base">পাসের হার</span>
                          <Badge className="bg-green-500 text-xs sm:text-sm w-fit">
                            {sscResults.passRate}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded gap-2 sm:gap-0">
                          <span className="font-medium text-sm sm:text-base">GPA-5 প্রাপ্ত</span>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 text-xs sm:text-sm w-fit">
                            {sscResults.gpaFive} জন
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded gap-2 sm:gap-0">
                          <span className="font-medium text-sm sm:text-base">গড় GPA</span>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 text-xs sm:text-sm w-fit">
                            {sscResults.averageGpa}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* JSC Results */}
                  <Card className="shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 sm:p-6">
                      <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                        <Trophy className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        JSC পরীক্ষা {jscResults.year}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded gap-2 sm:gap-0">
                          <span className="font-medium text-sm sm:text-base">মোট পরীক্ষার্থী</span>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 text-xs sm:text-sm w-fit">
                            {jscResults.totalStudents} জন
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded gap-2 sm:gap-0">
                          <span className="font-medium text-sm sm:text-base">পাসের হার</span>
                          <Badge className="bg-green-500 text-xs sm:text-sm w-fit">
                            {jscResults.passRate}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded gap-2 sm:gap-0">
                          <span className="font-medium text-sm sm:text-base">GPA-5 প্রাপ্ত</span>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 text-xs sm:text-sm w-fit">
                            {jscResults.gpaFive} জন
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-gray-50 rounded gap-2 sm:gap-0">
                          <span className="font-medium text-sm sm:text-base">গড় GPA</span>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 text-xs sm:text-sm w-fit">
                            {jscResults.averageGpa}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="achievers" className="mt-4 sm:mt-6 lg:mt-8">
                <Card className="shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                        <Star className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        উজ্জ্বল মেধাবীরা
                      </CardTitle>
                      <Badge className="bg-yellow-500 text-xs sm:text-sm w-fit">GPA-5 প্রাপ্ত</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      {topAchievers.map((achiever, index) => (
                        <Card key={index} className="border border-yellow-200 bg-yellow-50">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2 sm:gap-0">
                              <div>
                                <h3 className="text-lg sm:text-xl font-bold text-primary">{achiever.name}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">{achiever.exam} • {achiever.group}</p>
                              </div>
                              <Badge className="bg-yellow-500 text-xs sm:text-sm w-fit">{achiever.gpa}</Badge>
                            </div>
                            <div className="space-y-2">
                              <p className="text-xs sm:text-sm font-medium">বিশেষ অর্জন:</p>
                              <div className="flex flex-wrap gap-1">
                                {achiever.subjects.map((subject, subIndex) => (
                                  <Badge key={subIndex} variant="outline" className="text-xs">
                                    {subject}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comparison" className="mt-4 sm:mt-6 lg:mt-8">
                <Card className="shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                      বিগত বছরের তুলনামূলক ফলাফল
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4 sm:space-y-6">
                      {yearlyComparison.map((year, index) => (
                        <div key={index} className="p-4 sm:p-6 border rounded-lg hover:bg-accent/10 transition-colors">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2 sm:gap-0">
                            <h3 className="text-lg sm:text-xl font-bold text-primary">{year.year} সাল</h3>
                            <Badge variant="outline" className="text-xs sm:text-sm w-fit">
                              {index === 0 ? 'সর্বশেষ' : `${index + 1} বছর আগে`}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                            <div className="text-center p-3 bg-blue-50 rounded">
                              <div className="text-base sm:text-lg font-bold text-blue-700">{year.sscPass}</div>
                              <div className="text-xs sm:text-sm text-blue-600">SSC পাস</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded">
                              <div className="text-base sm:text-lg font-bold text-green-700">{year.jscPass}</div>
                              <div className="text-xs sm:text-sm text-green-600">JSC পাস</div>
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded">
                              <div className="text-base sm:text-lg font-bold text-yellow-700">{year.sscGpaFive}</div>
                              <div className="text-xs sm:text-sm text-yellow-600">SSC GPA-5</div>
                            </div>
                            <div className="text-center p-3 bg-purple-50 rounded">
                              <div className="text-base sm:text-lg font-bold text-purple-700">{year.jscGpaFive}</div>
                              <div className="text-xs sm:text-sm text-purple-600">JSC GPA-5</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="subjects" className="mt-4 sm:mt-6 lg:mt-8">
                <Card className="shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center text-lg sm:text-xl lg:text-2xl">
                      <Award className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                      বিষয়ভিত্তিক ফলাফল - SSC 2024
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {subjectWiseResults.map((subject, index) => (
                        <Card key={index} className="border border-accent/20">
                          <CardContent className="p-3 sm:p-4">
                            <h3 className="font-semibold text-primary mb-3 text-sm sm:text-base">{subject.subject}</h3>
                            <div className="space-y-2 text-xs sm:text-sm">
                              <div className="flex justify-between items-center">
                                <span>A+ প্রাপ্ত:</span>
                                <Badge variant="outline" className="bg-green-50 text-green-700 text-xs">
                                  {subject.aPlus} জন
                                </Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>A প্রাপ্ত:</span>
                                <Badge variant="outline" className="bg-blue-50 text-blue-700 text-xs">
                                  {subject.aGrade} জন
                                </Badge>
                              </div>
                              <div className="flex justify-between items-center">
                                <span>পাসের হার:</span>
                                <Badge className="bg-primary text-xs">
                                  {subject.pass}
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
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

export default PublicExamResultsPage;
