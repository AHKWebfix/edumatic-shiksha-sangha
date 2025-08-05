
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, DollarSign, Download, FileText, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ExamFeesRoutinePage = () => {
  const examFees = [
    {
      class: "ষষ্ঠ শ্রেণি",
      testExam: "২০০ টাকা",
      halfYearly: "৮০০ টাকা",
      annual: "১২০০ টাকা"
    },
    {
      class: "সপ্তম শ্রেণি",
      testExam: "২৫০ টাকা",
      halfYearly: "৯০০ টাকা",
      annual: "১৩০০ টাকা"
    },
    {
      class: "অষ্টম শ্রেণি",
      testExam: "৩০০ টাকা",
      halfYearly: "১০০০ টাকা",
      annual: "১৪০০ টাকা"
    },
    {
      class: "নবম শ্রেণি",
      testExam: "৪০০ টাকা",
      halfYearly: "১২০০ টাকা",
      annual: "১৮০০ টাকা"
    },
    {
      class: "দশম শ্রেণি",
      testExam: "৫০০ টাকা",
      halfYearly: "১৫০০ টাকা",
      annual: "২০০০ টাকা"
    }
  ];

  const examRoutines = [
    {
      class: "দশম শ্রেণি",
      exam: "বার্ষিক পরীক্ষা ২০২৪",
      startDate: "২৫ নভেম্বর ২০২৪",
      endDate: "১৫ ডিসেম্বর ২০২৪",
      time: "সকাল ১০:০০ - দুপুর ১:০০",
      status: "চলমান"
    },
    {
      class: "নবম শ্রেণি",
      exam: "বার্ষিক পরীক্ষা ২০২৪",
      startDate: "২৮ নভেম্বর ২০২৪",
      endDate: "১৮ ডিসেম্বর ২০২৪",
      time: "সকাল ১০:০০ - দুপুর ১:০০",
      status: "আসছে"
    },
    {
      class: "অষ্টম শ্রেণি",
      exam: "অর্ধবার্ষিক পরীক্ষা ২০২৪",
      startDate: "০১ ডিসেম্বর ২০২৪",
      endDate: "২০ ডিসেম্বর ২০২৪",
      time: "সকাল ১০:০০ - দুপুর ১২:৩০",
      status: "আসছে"
    }
  ];

  const examSchedule = [
    { date: "২৫ নভেম্বর", day: "সোমবার", subject: "বাংলা", time: "১০:০০-১:০০", class: "দশম" },
    { date: "২৬ নভেম্বর", day: "মঙ্গলবার", subject: "ইংরেজি", time: "১০:০০-১:০০", class: "দশম" },
    { date: "২৭ নভেম্বর", day: "বুধবার", subject: "গণিত", time: "১০:০০-১:০০", class: "দশম" },
    { date: "২৮ নভেম্বর", day: "বৃহস্পতিবার", subject: "বিজ্ঞান", time: "১০:০০-১:০০", class: "দশম" },
    { date: "২৯ নভেম্বর", day: "শুক্রবার", subject: "সামাজিক বিজ্ঞান", time: "১০:০০-১:০০", class: "দশম" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "চলমান": return "bg-green-500";
      case "আসছে": return "bg-blue-500";
      default: return "bg-gray-500";
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
              <FileText className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                পরীক্ষার ফি ও রুটিন
              </h1>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              সকল পরীক্ষার ফি, সময়সূচি এবং রুটিন সম্পর্কিত তথ্য
            </p>
          </div>

          <Tabs defaultValue="fees" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="fees" className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>পরীক্ষার ফি</span>
              </TabsTrigger>
              <TabsTrigger value="routine" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>পরীক্ষার রুটিন</span>
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>পরীক্ষার সময়সূচি</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fees" className="space-y-6">
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2" />
                    পরীক্ষার ফি তালিকা
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-accent/20">
                        <tr>
                          <th className="text-left p-4 font-semibold">শ্রেণি</th>
                          <th className="text-left p-4 font-semibold">সাময়িক পরীক্ষা</th>
                          <th className="text-left p-4 font-semibold">অর্ধবার্ষিক পরীক্ষা</th>
                          <th className="text-left p-4 font-semibold">বার্ষিক পরীক্ষা</th>
                        </tr>
                      </thead>
                      <tbody>
                        {examFees.map((fee, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-accent/5" : "bg-white"}>
                            <td className="p-4 font-medium text-primary">{fee.class}</td>
                            <td className="p-4 text-foreground">{fee.testExam}</td>
                            <td className="p-4 text-foreground">{fee.halfYearly}</td>
                            <td className="p-4 text-foreground">{fee.annual}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">পরীক্ষার ফি প্রদানের নিয়মাবলী</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">পরীক্ষার ৭ দিন পূর্বে ফি জমা দিতে হবে।</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">ফি প্রদানের সময় অবশ্যই রসিদ সংগ্রহ করতে হবে।</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">বিলম্বে ফি প্রদানের ক্ষেত্রে অতিরিক্ত ৫০ টাকা জরিমানা প্রযোজ্য।</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-muted-foreground">ফি প্রদানের সময়: সকাল ৯:০০ থেকে দুপুর ২:০০ পর্যন্ত।</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="routine" className="space-y-6">
              <div className="grid gap-6">
                {examRoutines.map((routine, index) => (
                  <Card key={index} className="shadow-lg border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-primary">{routine.exam}</CardTitle>
                          <p className="text-muted-foreground mt-1">{routine.class}</p>
                        </div>
                        <Badge className={`${getStatusColor(routine.status)} text-white`}>
                          {routine.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">শুরুর তারিখ</p>
                            <p className="font-semibold">{routine.startDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">শেষ তারিখ</p>
                            <p className="font-semibold">{routine.endDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">সময়</p>
                            <p className="font-semibold">{routine.time}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" className="flex items-center space-x-2">
                          <Download className="h-4 w-4" />
                          <span>রুটিন ডাউনলোড</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <Card className="shadow-lg border-primary/20">
                <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    দশম শ্রেণির বার্ষিক পরীক্ষার সময়সূচি
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-accent/20">
                        <tr>
                          <th className="text-left p-4 font-semibold">তারিখ</th>
                          <th className="text-left p-4 font-semibold">দিন</th>
                          <th className="text-left p-4 font-semibold">বিষয়</th>
                          <th className="text-left p-4 font-semibold">সময়</th>
                          <th className="text-left p-4 font-semibold">শ্রেণি</th>
                        </tr>
                      </thead>
                      <tbody>
                        {examSchedule.map((schedule, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-accent/5" : "bg-white"}>
                            <td className="p-4 font-medium text-primary">{schedule.date}</td>
                            <td className="p-4 text-foreground">{schedule.day}</td>
                            <td className="p-4 text-foreground">{schedule.subject}</td>
                            <td className="p-4 text-foreground">{schedule.time}</td>
                            <td className="p-4 text-foreground">{schedule.class}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">পরীক্ষার নিয়মাবলী</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">পরীক্ষার হলে প্রবেশের নিয়ম:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                          <span>পরীক্ষা শুরুর ৩০ মিনিট পূর্বে উপস্থিত হতে হবে</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                          <span>পরীক্ষার প্রবেশপত্র অবশ্যই সাথে রাখতে হবে</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2"></div>
                          <span>নির্ধারিত পোশাক পরিধান করতে হবে</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">নিষিদ্ধ বস্তুসমূহ:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-2"></div>
                          <span>মোবাইল ফোন বা অন্য কোনো ইলেকট্রনিক্স ডিভাইস</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-2"></div>
                          <span>বই, নোট বা কোনো সহায়ক উপকরণ</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-red-500 rounded-full mt-2"></div>
                          <span>কোনো প্রকার চিট বা নকল</span>
                        </li>
                      </ul>
                    </div>
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

export default ExamFeesRoutinePage;
