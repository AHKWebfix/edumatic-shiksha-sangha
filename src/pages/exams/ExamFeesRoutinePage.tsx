
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Calculator, Clock, AlertCircle, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const ExamFeesRoutinePage = () => {
  const examFees = [
    { class: "ষষ্ঠ শ্রেণি", halfYearly: 500, yearly: 800, testExam: 300 },
    { class: "সপ্তম শ্রেণি", halfYearly: 600, yearly: 900, testExam: 350 },
    { class: "অষ্টম শ্রেণি", halfYearly: 700, yearly: 1000, testExam: 400 },
    { class: "নবম শ্রেণি", halfYearly: 800, yearly: 1200, testExam: 450 },
    { class: "দশম শ্রেণি", halfYearly: 1000, yearly: 1500, testExam: 500 }
  ];

  const examRoutine = [
    { date: "১৫ জানুয়ারি", day: "সোমবার", time: "সকাল ১০:০০", subject: "বাংলা ১ম পত্র", duration: "৩ ঘণ্টা" },
    { date: "১৭ জানুয়ারি", day: "বুধবার", time: "সকাল ১০:০০", subject: "ইংরেজি ১ম পত্র", duration: "৩ ঘণ্টা" },
    { date: "২০ জানুয়ারি", day: "শনিবার", time: "সকাল ১০:০০", subject: "গণিত", duration: "৩ ঘণ্টা" },
    { date: "২২ জানুয়ারি", day: "সোমবার", time: "সকাল ১০:০০", subject: "বিজ্ঞান", duration: "৩ ঘণ্টা" },
    { date: "২৪ জানুয়ারি", day: "বুধবার", time: "সকাল ১০:০০", subject: "সমাজ বিজ্ঞান", duration: "৩ ঘণ্টা" },
    { date: "২৬ জানুয়ারি", day: "শুক্রবার", time: "সকাল ১০:০০", subject: "ধর্ম ও নৈতিক শিক্ষা", duration: "২ ঘণ্টা" }
  ];

  const paymentMethods = [
    {
      title: "নগদ পেমেন্ট",
      description: "স্কুল অফিসে সরাসরি পেমেন্ট",
      icon: <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
      title: "ব্যাংক ট্রান্সফার",
      description: "নির্ধারিত ব্যাংক অ্যাকাউন্টে স্থানান্তর",
      icon: <Calculator className="h-5 w-5 sm:h-6 sm:w-6" />
    },
    {
      title: "মোবাইল ব্যাংকিং",
      description: "বিকাশ/নগদ/রকেট এর মাধ্যমে",
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="পরীক্ষার ফি ও রুটিন"
        subtitle="পরীক্ষা"
        description="পরীক্ষার ফি কাঠামো এবং পরীক্ষার রুটিন ও তারিখ"
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "পরীক্ষা" },
          { label: "পরীক্ষার ফি ও রুটিন" }
        ]}
        icon={<Calculator />}
      />

      {/* Payment Methods */}
      <section className="py-8 sm:py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-8 sm:mb-12">পেমেন্ট পদ্ধতি</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-center text-primary mb-2 sm:mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-base sm:text-lg text-primary">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="fees" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 h-auto">
                <TabsTrigger value="fees" className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5">
                  পরীক্ষার ফি
                </TabsTrigger>
                <TabsTrigger value="routine" className="text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5">
                  পরীক্ষার রুটিন
                </TabsTrigger>
              </TabsList>

              <TabsContent value="fees" className="mt-6 sm:mt-8">
                <Card className="shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <CardTitle className="flex items-center text-lg sm:text-xl">
                        <Calculator className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        শ্রেণিভিত্তিক পরীক্ষার ফি
                      </CardTitle>
                      <Button className="flex items-center space-x-2 text-xs sm:text-sm px-3 sm:px-4 py-2 h-auto">
                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>ফি তালিকা ডাউনলোড</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary/10">
                            <TableHead className="font-semibold text-xs sm:text-sm">শ্রেণি</TableHead>
                            <TableHead className="font-semibold text-xs sm:text-sm">ষাণ্মাসিক</TableHead>
                            <TableHead className="font-semibold text-xs sm:text-sm">বার্ষিক</TableHead>
                            <TableHead className="font-semibold text-xs sm:text-sm">টেস্ট</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {examFees.map((fee, index) => (
                            <TableRow key={index} className="hover:bg-accent/10">
                              <TableCell className="font-medium text-primary text-xs sm:text-sm">{fee.class}</TableCell>
                              <TableCell className="text-xs sm:text-sm">৳{fee.halfYearly}</TableCell>
                              <TableCell className="text-xs sm:text-sm">৳{fee.yearly}</TableCell>
                              <TableCell className="text-xs sm:text-sm">৳{fee.testExam}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-orange-800 mb-2 text-sm sm:text-base">গুরুত্বপূর্ণ নিয়মাবলী:</h4>
                          <ul className="text-xs sm:text-sm text-orange-700 space-y-1">
                            <li>• পরীক্ষার ফি যথা সময়ে পরিশোধ করতে হবে</li>
                            <li>• পরীক্ষার ৭ দিন পূর্বে ফি পরিশোধ করতে হবে</li>
                            <li>• ফি পরিশোধের রসিদ অবশ্যই সংরক্ষণ করতে হবে</li>
                            <li>• দেরিতে ফি পরিশোধে জরিমানা প্রযোজ্য</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="routine" className="mt-6 sm:mt-8">
                <Card className="shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <CardTitle className="flex items-center text-lg sm:text-xl">
                        <Clock className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                        ষাণ্মাসিক পরীক্ষার রুটিন ২০২৪
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <Badge variant="outline" className="bg-green-50 text-green-700 text-xs">
                          চলমান
                        </Badge>
                        <Button className="flex items-center space-x-2 text-xs sm:text-sm px-3 sm:px-4 py-2 h-auto">
                          <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>রুটিন ডাউনলোড</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary/10">
                            <TableHead className="font-semibold text-xs sm:text-sm">তারিখ</TableHead>
                            <TableHead className="font-semibold text-xs sm:text-sm">দিন</TableHead>
                            <TableHead className="font-semibold text-xs sm:text-sm">সময়</TableHead>
                            <TableHead className="font-semibold text-xs sm:text-sm">বিষয়</TableHead>
                            <TableHead className="font-semibold text-xs sm:text-sm">সময়কাল</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {examRoutine.map((exam, index) => (
                            <TableRow key={index} className="hover:bg-accent/10">
                              <TableCell className="font-medium text-primary text-xs sm:text-sm">{exam.date}</TableCell>
                              <TableCell className="text-xs sm:text-sm">{exam.day}</TableCell>
                              <TableCell className="text-xs sm:text-sm">{exam.time}</TableCell>
                              <TableCell className="font-medium text-xs sm:text-sm">{exam.subject}</TableCell>
                              <TableCell className="text-xs sm:text-sm">{exam.duration}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <Card className="border border-blue-200 bg-blue-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center text-blue-700 text-sm sm:text-base">
                            <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                            পরীক্ষার নিয়মাবলী
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-blue-700 pt-0">
                          <p>• পরীক্ষার ৩০ মিনিট পূর্বে হলে উপস্থিত হতে হবে</p>
                          <p>• পরীক্ষার হলে মোবাইল ফোন নিষিদ্ধ</p>
                          <p>• প্রয়োজনীয় স্টেশনারি সাথে আনতে হবে</p>
                          <p>• পরীক্ষা চলাকালীন নিরবতা বজায় রাখতে হবে</p>
                        </CardContent>
                      </Card>

                      <Card className="border border-green-200 bg-green-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="flex items-center text-green-700 text-sm sm:text-base">
                            <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                            প্রয়োজনীয় কাগজপত্র
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-green-700 pt-0">
                          <p>• প্রবেশপত্র অবশ্যই সাথে আনতে হবে</p>
                          <p>• ছাত্র পরিচয়পত্র বাধ্যতামূলক</p>
                          <p>• ফি পরিশোধের রসিদ</p>
                          <p>• প্রয়োজনে অভিভাবকের পরিচয়পত্র</p>
                        </CardContent>
                      </Card>
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

export default ExamFeesRoutinePage;
