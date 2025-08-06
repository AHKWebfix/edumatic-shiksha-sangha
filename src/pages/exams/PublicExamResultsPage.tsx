
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
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">২০২৪ সালের অর্জন</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-green-200 bg-green-50">
              <CardHeader className="pb-2">
                <div className="flex justify-center text-green-600 mb-2">
                  <Trophy className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-700">{sscResults.gpaFive + jscResults.gpaFive}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 font-medium">মোট GPA-5 প্রাপ্ত</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-blue-200 bg-blue-50">
              <CardHeader className="pb-2">
                <div className="flex justify-center text-blue-600 mb-2">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-blue-700">{sscResults.totalStudents + jscResults.totalStudents}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 font-medium">মোট পরীক্ষার্থী</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-purple-200 bg-purple-50">
              <CardHeader className="pb-2">
                <div className="flex justify-center text-purple-600 mb-2">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700">৯৯.৭%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-600 font-medium">গড় পাসের হার</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg hover:shadow-xl transition-shadow border-orange-200 bg-orange-50">
              <CardHeader className="pb-2">
                <div className="flex justify-center text-orange-600 mb-2">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl font-bold text-orange-700">৪.৩০</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600 font-medium">গড় GPA</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="current">২০২ৄ ফলাফল</TabsTrigger>
                <TabsTrigger value="achievers">মেধাবীরা</TabsTrigger>
                <TabsTrigger value="comparison">তুলনামূলক চিত্র</TabsTrigger>
                <TabsTrigger value="subjects">বিষয়ভিত্তিক</TabsTrigger>
              </TabsList>

              <TabsContent value="current" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* SSC Results */}
                  <Card className="shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      <CardTitle className="flex items-center">
                        <GraduationCap className="h-6 w-6 mr-2" />
                        SSC পরীক্ষা {sscResults.year}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">মোট পরীক্ষার্থী</span>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            {sscResults.totalStudents} জন
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">পাসের হার</span>
                          <Badge className="bg-green-500">
                            {sscResults.passRate}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">GPA-5 প্রাপ্ত</span>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                            {sscResults.gpaFive} জন
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">গড় GPA</span>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700">
                            {sscResults.averageGpa}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* JSC Results */}
                  <Card className="shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                      <CardTitle className="flex items-center">
                        <Trophy className="h-6 w-6 mr-2" />
                        JSC পরীক্ষা {jscResults.year}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">মোট পরীক্ষার্থী</span>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            {jscResults.totalStudents} জন
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">পাসের হার</span>
                          <Badge className="bg-green-500">
                            {jscResults.passRate}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">GPA-5 প্রাপ্ত</span>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                            {jscResults.gpaFive} জন
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <span className="font-medium">গড় GPA</span>
                          <Badge variant="outline" className="bg-purple-50 text-purple-700">
                            {jscResults.averageGpa}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="achievers" className="mt-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center">
                        <Star className="h-6 w-6 mr-2" />
                        উজ্জ্বল মেধাবীরা
                      </CardTitle>
                      <Badge className="bg-yellow-500">GPA-5 প্রাপ্ত</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topAchievers.map((achiever, index) => (
                        <Card key={index} className="border border-yellow-200 bg-yellow-50">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-primary">{achiever.name}</h3>
                                <p className="text-sm text-muted-foreground">{achiever.exam} • {achiever.group}</p>
                              </div>
                              <Badge className="bg-yellow-500">{achiever.gpa}</Badge>
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm font-medium">বিশেষ অর্জন:</p>
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

              <TabsContent value="comparison" className="mt-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="h-6 w-6 mr-2" />
                      বিগত বছরের তুলনামূলক ফলাফল
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {yearlyComparison.map((year, index) => (
                        <div key={index} className="p-6 border rounded-lg hover:bg-accent/10 transition-colors">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-primary">{year.year} সাল</h3>
                            <Badge variant="outline">
                              {index === 0 ? 'সর্বশেষ' : `${index + 1} বছর আগে`}
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-4 gap-4">
                            <div className="text-center p-3 bg-blue-50 rounded">
                              <div className="text-lg font-bold text-blue-700">{year.sscPass}</div>
                              <div className="text-sm text-blue-600">SSC পাস</div>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded">
                              <div className="text-lg font-bold text-green-700">{year.jscPass}</div>
                              <div className="text-sm text-green-600">JSC পাস</div>
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded">
                              <div className="text-lg font-bold text-yellow-700">{year.sscGpaFive}</div>
                              <div className="text-sm text-yellow-600">SSC GPA-5</div>
                            </div>
                            <div className="text-center p-3 bg-purple-50 rounded">
                              <div className="text-lg font-bold text-purple-700">{year.jscGpaFive}</div>
                              <div className="text-sm text-purple-600">JSC GPA-5</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="subjects" className="mt-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-6 w-6 mr-2" />
                      বিষয়ভিত্তিক ফলাফল - SSC 2024
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {subjectWiseResults.map((subject, index) => (
                        <Card key={index} className="border border-accent/20">
                          <CardContent className="p-4">
                            <h3 className="font-semibold text-primary mb-3">{subject.subject}</h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>A+ প্রাপ্ত:</span>
                                <Badge variant="outline" className="bg-green-50 text-green-700">
                                  {subject.aPlus} জন
                                </Badge>
                              </div>
                              <div className="flex justify-between">
                                <span>A প্রাপ্ত:</span>
                                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                                  {subject.aGrade} জন
                                </Badge>
                              </div>
                              <div className="flex justify-between">
                                <span>পাসের হার:</span>
                                <Badge className="bg-primary">
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
