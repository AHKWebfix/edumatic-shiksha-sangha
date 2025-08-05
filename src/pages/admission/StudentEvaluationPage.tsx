
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Trophy, Target, BarChart3, Star, Award, Users, TrendingUp } from "lucide-react";

const StudentEvaluationPage = () => {
  const gradingSystems = [
    { grade: "A+", points: "৫.০০", percentage: "৮০-১০০%", description: "অসাধারণ" },
    { grade: "A", points: "৪.০০", percentage: "৭০-৭৯%", description: "উৎকৃষ্ট" },
    { grade: "A-", points: "৩.৫০", percentage: "৬৫-৬৯%", description: "ভাল" },
    { grade: "B", points: "৩.০০", percentage: "৬০-৬৪%", description: "মোটামুটি ভাল" },
    { grade: "C", points: "২.০০", percentage: "৫৫-৫৯%", description: "গড়" },
    { grade: "D", points: "১.০০", percentage: "৩৩-৫৪%", description: "পাস" },
    { grade: "F", points: "০.০০", percentage: "০-৩২%", description: "অকৃতকার্য" }
  ];

  const evaluationAreas = [
    { area: "একাডেমিক পারফরম্যান্স", weight: "৭০%", description: "পরীক্ষা ও অ্যাসাইনমেন্ট", icon: BookOpen },
    { area: "ক্লাস পারটিসিপেশন", weight: "১৫%", description: "শ্রেণিকক্ষে অংশগ্রহণ", icon: Users },
    { area: "হোমওয়ার্ক ও প্রজেক্ট", weight: "১০%", description: "বাড়ির কাজ ও প্রকল্প", icon: Target },
    { area: "আচরণ ও উপস্থিতি", weight: "৫%", description: "শৃঙ্খলা ও হাজিরা", icon: Award }
  ];

  const assessmentTypes = [
    { type: "শ্রেণি পরীক্ষা", frequency: "মাসিক", marks: "২০", description: "নিয়মিত মূল্যায়ন" },
    { type: "মধ্য পরীক্ষা", frequency: "ছয় মাস পর পর", marks: "৩০", description: "মধ্যবর্তী মূল্যায়ন" },
    { type: "বার্ষিক পরীক্ষা", frequency: "বছরে একবার", marks: "৫০", description: "চূড়ান্ত মূল্যায়ন" }
  ];

  const performanceIndicators = [
    { indicator: "উপস্থিতি", target: "৯০%", current: "৯২%", status: "excellent" },
    { indicator: "অ্যাসাইনমেন্ট জমা", target: "৯৫%", current: "৮৮%", status: "good" },
    { indicator: "ক্লাস পার্টিসিপেশন", target: "৮৫%", current: "৭৮%", status: "average" },
    { indicator: "পরীক্ষার ফলাফল", target: "৮০%", current: "৮৫%", status: "excellent" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600 bg-green-50 border-green-200';
      case 'good': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'average': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getProgressValue = (current: string) => {
    return parseInt(current.replace('%', ''));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            শিক্ষার্থীর মূল্যায়ন
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            এডুমেটিক স্কুল অ্যান্ড কলেজের শিক্ষার্থী মূল্যায়ন পদ্ধতি ও গ্রেডিং সিস্টেম
          </p>
        </div>

        {/* Grading System */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Star className="mr-3 h-6 w-6" />
                গ্রেডিং সিস্টেম
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">গ্রেড</th>
                      <th className="text-center p-3 font-semibold">গ্রেড পয়েন্ট</th>
                      <th className="text-center p-3 font-semibold">শতাংশ</th>
                      <th className="text-left p-3 font-semibold">বর্ণনা</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradingSystems.map((grade, index) => (
                      <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-muted/50' : ''}`}>
                        <td className="p-3">
                          <Badge variant={grade.grade === 'F' ? 'destructive' : 'default'} className="text-lg font-bold">
                            {grade.grade}
                          </Badge>
                        </td>
                        <td className="p-3 text-center font-semibold">{grade.points}</td>
                        <td className="p-3 text-center">{grade.percentage}</td>
                        <td className="p-3">{grade.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Evaluation Areas */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">মূল্যায়নের ক্ষেত্রসমূহ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {evaluationAreas.map((area, index) => {
                  const IconComponent = area.icon;
                  return (
                    <div key={index} className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-2">{area.area}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{area.description}</p>
                          <Badge variant="outline" className="font-semibold">{area.weight}</Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Assessment Types */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <BarChart3 className="mr-3 h-6 w-6" />
                পরীক্ষার ধরন
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {assessmentTypes.map((assessment, index) => (
                  <div key={index} className="text-center p-6 rounded-lg border bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-xl mb-2 text-primary">{assessment.type}</h4>
                    <div className="text-3xl font-bold text-primary mb-2">{assessment.marks}</div>
                    <p className="text-sm text-muted-foreground mb-3">{assessment.frequency}</p>
                    <Badge variant="secondary">{assessment.description}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Indicators */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <TrendingUp className="mr-3 h-6 w-6" />
                কর্মক্ষমতার সূচক
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {performanceIndicators.map((indicator, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${getStatusColor(indicator.status)}`}>
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-lg">{indicator.indicator}</h4>
                      <div className="flex space-x-2">
                        <Badge variant="outline">লক্ষ্য: {indicator.target}</Badge>
                        <Badge variant="secondary">বর্তমান: {indicator.current}</Badge>
                      </div>
                    </div>
                    <Progress value={getProgressValue(indicator.current)} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Evaluation Process */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Trophy className="mr-3 h-6 w-6" />
                মূল্যায়ন প্রক্রিয়া
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                  <h4 className="font-semibold mb-2">ধারাবাহিক মূল্যায়ন</h4>
                  <p className="text-sm text-muted-foreground">প্রতিদিনের কার্যক্রম পর্যবেক্ষণ</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                  <h4 className="font-semibold mb-2">পারফরমেন্স ট্র্যাকিং</h4>
                  <p className="text-sm text-muted-foreground">নিয়মিত অগ্রগতি পর্যালোচনা</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                  <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                  <h4 className="font-semibold mb-2">ফিডব্যাক প্রদান</h4>
                  <p className="text-sm text-muted-foreground">শিক্ষার্থী ও অভিভাবকদের জানানো</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-purple-50 border border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">4</div>
                  <h4 className="font-semibold mb-2">উন্নতির পরিকল্পনা</h4>
                  <p className="text-sm text-muted-foreground">ব্যক্তিগত উন্নয়ন কৌশল</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <div className="mb-12">
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800">মূল্যায়ন নীতিমালা</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-amber-800">
                <li>• সকল মূল্যায়ন স্বচ্ছ ও ন্যায্য পদ্ধতিতে সম্পন্ন হয়</li>
                <li>• শিক্ষার্থীদের সার্বিক বিকাশে গুরুত্ব দেওয়া হয়</li>
                <li>• নিয়মিত অভিভাবক-শিক্ষক সভার মাধ্যমে অগ্রগতি জানানো হয়</li>
                <li>• প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত উন্নয়ন পরিকল্পনা প্রণয়ন</li>
                <li>• দুর্বল শিক্ষার্থীদের জন্য বিশেষ সহায়তার ব্যবস্থা</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentEvaluationPage;
