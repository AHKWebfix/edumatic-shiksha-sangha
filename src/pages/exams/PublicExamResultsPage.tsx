
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, TrendingUp, Download, Users, Trophy, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PublicExamResultsPage = () => {
  const sscResults = [
    {
      year: "২০২৪",
      totalStudents: 85,
      passed: 82,
      gpa5: 28,
      gpa4: 31,
      gpa3: 15,
      gpa2: 8,
      failed: 3,
      passRate: "৯৬.৫%"
    },
    {
      year: "২০২৩",
      totalStudents: 92,
      passed: 87,
      gpa5: 32,
      gpa4: 29,
      gpa3: 18,
      gpa2: 8,
      failed: 5,
      passRate: "৯৪.৬%"
    },
    {
      year: "২০২২",
      totalStudents: 78,
      passed: 74,
      gpa5: 25,
      gpa4: 27,
      gpa3: 14,
      gpa2: 8,
      failed: 4,
      passRate: "৯৪.৯%"
    }
  ];

  const jscResults = [
    {
      year: "২০২৪",
      totalStudents: 95,
      passed: 92,
      gpa5: 35,
      gpa4: 33,
      gpa3: 16,
      gpa2: 8,
      failed: 3,
      passRate: "৯৬.৮%"
    },
    {
      year: "২০২৩",
      totalStudents: 88,
      passed: 84,
      gpa5: 30,
      gpa4: 28,
      gpa3: 18,
      gpa2: 8,
      failed: 4,
      passRate: "৯৫.৫%"
    }
  ];

  const topAchievers = [
    {
      name: "মারিয়া আক্তার",
      exam: "SSC 2024",
      gpa: "৫.০০",
      board: "ঢাকা বোর্ড",
      group: "বিজ্ঞান",
      achievements: ["বোর্ড স্ট্যান্ড", "স্কলারশিপ প্রাপ্ত"]
    },
    {
      name: "আব্দুল করিম",
      exam: "SSC 2024",
      gpa: "৫.০০",
      board: "ঢাকা বোর্ড",
      group: "বিজ্ঞান",
      achievements: ["গোল্ডেন জিপিএ-৫"]
    },
    {
      name: "সাবিনা খাতুন",
      exam: "JSC 2024",
      gpa: "৫.০০",
      board: "ঢাকা বোর্ড",
      group: "সাধারণ",
      achievements: ["বৃত্তি প্রাপ্ত"]
    }
  ];

  const boardPositions = [
    {
      student: "মারিয়া আক্তার",
      position: "৭ম",
      board: "ঢাকা বোর্ড",
      exam: "SSC 2024",
      subject: "বিজ্ঞান"
    },
    {
      student: "রাহুল হাসান",
      position: "১২তম",
      board: "ঢাকা বোর্ড",
      exam: "SSC 2024",
      subject: "মানবিক"
    }
  ];

  const instituteRanking = [
    {
      category: "পাশের হার",
      rank: "৫ম",
      district: "ঢাকা জেলায়",
      percentage: "৯৬.৫%"
    },
    {
      category: "জিপিএ-৫ প্রাপ্তি",
      rank: "৮ম",
      district: "ঢাকা জেলায়",
      percentage: "৩৩%"
    },
    {
      category: "সার্বিক ফলাফল",
      rank: "৬ষ্ঠ",
      district: "উপজেলায়",
      percentage: "৯৫%"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                পাবলিক পরীক্ষার ফলাফল
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              SSC, JSC এবং অন্যান্য পাবলিক পরীক্ষার ফলাফল ও অর্জন
            </p>
          </div>

          <Tabs defaultValue="ssc" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="ssc" className="flex items-center space-x-2">
                <Trophy className="h-4 w-4" />
                <span>SSC ফলাফল</span>
              </TabsTrigger>
              <TabsTrigger value="jsc" className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>JSC ফলাফল</span>
              </TabsTrigger>
              <TabsTrigger value="achievers" className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>কৃতী শিক্ষার্থী</span>
              </TabsTrigger>
              <TabsTrigger value="ranking" className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>প্রতিষ্ঠানের র‌্যাংকিং</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ssc" className="space-y-6">
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    SSC পরীক্ষার ফলাফল (সাম্প্রতিক বছরসমূহ)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-accent/20">
                        <tr>
                          <th className="text-left p-4 font-semibold">সাল</th>
                          <th className="text-left p-4 font-semibold">মোট পরীক্ষার্থী</th>
                          <th className="text-left p-4 font-semibold">পাশ</th>
                          <th className="text-left p-4 font-semibold">জিপিএ-৫</th>
                          <th className="text-left p-4 font-semibold">জিপিএ-৪</th>
                          <th className="text-left p-4 font-semibold">জিপিএ-৩</th>
                          <th className="text-left p-4 font-semibold">পাশের হার</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sscResults.map((result, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-accent/5" : "bg-white"}>
                            <td className="p-4 font-medium text-primary">{result.year}</td>
                            <td className="p-4 text-foreground">{result.totalStudents}</td>
                            <td className="p-4 text-green-600 font-semibold">{result.passed}</td>
                            <td className="p-4 text-yellow-600 font-semibold">{result.gpa5}</td>
                            <td className="p-4 text-blue-600 font-semibold">{result.gpa4}</td>
                            <td className="p-4 text-purple-600 font-semibold">{result.gpa3}</td>
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

              {/* SSC Statistics Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="text-center shadow-lg border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">৯৬.৫%</div>
                    <div className="text-muted-foreground">সর্বোচ্চ পাশের হার</div>
                    <div className="text-sm text-green-600 mt-1">SSC 2024</div>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">৩২</div>
                    <div className="text-muted-foreground">সর্বোচ্চ জিপিএ-৫</div>
                    <div className="text-sm text-green-600 mt-1">SSC 2023</div>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">২৫৫</div>
                    <div className="text-muted-foreground">মোট পরীক্ষার্থী</div>
                    <div className="text-sm text-green-600 mt-1">গত ৩ বছরে</div>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg border-primary/20">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">২৪৩</div>
                    <div className="text-muted-foreground">মোট পাশ</div>
                    <div className="text-sm text-green-600 mt-1">গত ৩ বছরে</div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="jsc" className="space-y-6">
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    JSC পরীক্ষার ফলাফল
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-accent/20">
                        <tr>
                          <th className="text-left p-4 font-semibold">সাল</th>
                          <th className="text-left p-4 font-semibold">মোট পরীক্ষার্থী</th>
                          <th className="text-left p-4 font-semibold">পাশ</th>
                          <th className="text-left p-4 font-semibold">জিপিএ-৫</th>
                          <th className="text-left p-4 font-semibold">জিপিএ-৪</th>
                          <th className="text-left p-4 font-semibold">পাশের হার</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jscResults.map((result, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-accent/5" : "bg-white"}>
                            <td className="p-4 font-medium text-primary">{result.year}</td>
                            <td className="p-4 text-foreground">{result.totalStudents}</td>
                            <td className="p-4 text-green-600 font-semibold">{result.passed}</td>
                            <td className="p-4 text-yellow-600 font-semibold">{result.gpa5}</td>
                            <td className="p-4 text-blue-600 font-semibold">{result.gpa4}</td>
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

            <TabsContent value="achievers" className="space-y-6">
              <div className="grid gap-6">
                {topAchievers.map((achiever, index) => (
                  <Card key={index} className="shadow-lg border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-primary text-xl">{achiever.name}</CardTitle>
                          <p className="text-muted-foreground">
                            {achiever.exam} | {achiever.group} | {achiever.board}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-yellow-600">{achiever.gpa}</div>
                          <div className="text-sm text-muted-foreground">GPA</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {achiever.achievements.map((achievement, idx) => (
                          <Badge key={idx} className="bg-green-500 text-white">
                            <Star className="h-3 w-3 mr-1" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Board Positions */}
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                  <CardTitle>বোর্ডে অবস্থান</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {boardPositions.map((position, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-primary">{position.student}</h4>
                          <p className="text-sm text-muted-foreground">
                            {position.exam} - {position.subject}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-yellow-600">{position.position}</div>
                          <div className="text-xs text-muted-foreground">{position.board}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ranking" className="space-y-6">
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    প্রতিষ্ঠানের র‌্যাংকিং ও অর্জন
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6">
                    {instituteRanking.map((rank, index) => (
                      <div key={index} className="p-6 border border-primary/20 rounded-lg hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-primary mb-2">
                              {rank.category}
                            </h3>
                            <p className="text-muted-foreground">
                              {rank.district} {rank.rank} অবস্থান
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-primary">{rank.rank}</div>
                            <div className="text-sm text-green-600">{rank.percentage}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievement Summary */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-lg border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">বিশেষ অর্জনসমূহ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-yellow-600" />
                        <span className="text-muted-foreground">জেলার সেরা ১০ স্কুলের মধ্যে অন্তর্ভুক্ত</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-600" />
                        <span className="text-muted-foreground">শিক্ষা মন্ত্রণালয় কর্তৃক পুরস্কৃত</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-yellow-600" />
                        <span className="text-muted-foreground">সেরা ফলাফলের জন্য বিশেষ স্বীকৃতি</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">ডাউনলোড সেকশন</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        SSC 2024 ফলাফল বিস্তারিত
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        JSC 2024 ফলাফল বিস্তারিত
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        কৃতী শিক্ষার্থীদের তালিকা
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PublicExamResultsPage;
