
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, Calendar, AlertCircle, CheckCircle, Users } from "lucide-react";

const AdmissionFormPage = () => {
  const admissionSteps = [
    {
      step: "১",
      title: "আবেদনপত্র সংগ্রহ",
      description: "প্রতিষ্ঠানের অফিস থেকে বা অনলাইনে আবেদনপত্র সংগ্রহ করুন",
      icon: FileText
    },
    {
      step: "২", 
      title: "প্রয়োজনীয় কাগজপত্র প্রস্তুতি",
      description: "সকল প্রয়োজনীয় নথিপত্র যথাযথভাবে প্রস্তুত করুন",
      icon: CheckCircle
    },
    {
      step: "৩",
      title: "আবেদনপত্র জমা",
      description: "নির্ধারিত সময়ের মধ্যে সম্পূর্ণ আবেদনপত্র জমা দিন",
      icon: Calendar
    },
    {
      step: "৪",
      title: "ভর্তি পরীক্ষা",
      description: "নির্ধারিত তারিখে ভর্তি পরীক্ষায় অংশগ্রহণ করুন",
      icon: Users
    }
  ];

  const requiredDocuments = [
    "জন্ম নিবন্ধনপত্রের সত্যায়িত ফটোকপি",
    "পূর্ববর্তী শ্রেণির মার্কশিট ও সার্টিফিকেট",
    "অভিভাবকের জাতীয় পরিচয়পত্রের ফটোকপি", 
    "ছাত্র/ছাত্রীর সাম্প্রতিক পাসপোর্ট সাইজ ছবি ৪ কপি",
    "চারিত্রিক সনদপত্র (প্রযোজ্য ক্ষেত্রে)",
    "স্থানান্তর সনদ (প্রযোজ্য ক্ষেত্রে)"
  ];

  const importantDates = [
    { event: "আবেদনপত্র বিতরণ শুরু", date: "০১ জানুয়ারি" },
    { event: "আবেদনপত্র জমা শেষ", date: "১৫ ফেব্রুয়ারি" },
    { event: "ভর্তি পরীক্ষা", date: "২৫ ফেব্রুয়ারি" },
    { event: "ফলাফল প্রকাশ", date: "০৫ মার্চ" },
    { event: "ভর্তি নিশ্চিতকরণ", date: "১৫ মার্চ" }
  ];

  const guidelines = [
    "আবেদনপত্র সঠিকভাবে পূরণ করুন এবং সকল তথ্য যাচাই করুন",
    "নির্ধারিত সময়ের মধ্যে সকল কাগজপত্রসহ আবেদন জমা দিন",
    "ভর্তি পরীক্ষার দিন সময়মতো উপস্থিত হোন",
    "পরীক্ষার হলে মোবাইল ফোন বা ইলেকট্রনিক ডিভাইস নিয়ে যাওয়া নিষিদ্ধ",
    "ভর্তির জন্য নির্বাচিত হলে নির্ধারিত সময়ের মধ্যে ফি পরিশোধ করুন"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ভর্তি ফর্ম ও নিয়মাবলী
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            এডুমেটিক স্কুল অ্যান্ড কলেজে ভর্তির জন্য প্রয়োজনীয় সকল তথ্য ও নির্দেশনা
          </p>
        </div>

        {/* Admission Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">ভর্তির ধাপসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="default" className="mx-auto w-fit text-lg font-bold">
                      ধাপ {step.step}
                    </Badge>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <FileText className="mr-3 h-6 w-6" />
                প্রয়োজনীয় কাগজপত্র
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{document}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Dates */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Calendar className="mr-3 h-6 w-6" />
                গুরুত্বপূর্ণ তারিখসমূহ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg border-l-4 border-primary bg-primary/5">
                    <span className="font-medium">{item.event}</span>
                    <Badge variant="secondary" className="font-semibold">{item.date}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guidelines */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <AlertCircle className="mr-3 h-6 w-6" />
                ভর্তির নির্দেশনা
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-amber-50 border border-amber-200">
                    <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-amber-800">{guideline}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Section */}
        <div className="text-center mb-12">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">আবেদনপত্র ডাউনলোড</CardTitle>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full">
                <Download className="mr-2 h-5 w-5" />
                আবেদনপত্র ডাউনলোড করুন
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                PDF ফরম্যাটে উপলব্ধ
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdmissionFormPage;
