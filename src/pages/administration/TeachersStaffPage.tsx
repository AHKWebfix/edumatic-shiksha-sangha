
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Award, Phone, Mail, BookOpen } from "lucide-react";

const TeachersStaffPage = () => {
  const teachers = [
    {
      name: "মোঃ আবুল কালাম আজাদ",
      position: "উপাধ্যক্ষ",
      subject: "গণিত",
      qualification: "এমএসসি ইন ম্যাথেমেটিক্স",
      experience: "২০+ বছর",
      phone: "০১৭৮৮-৯৯৮৮৭৯",
      email: "akalam@edumatic.edu.bd"
    },
    {
      name: "ড. ফাতেমা খাতুন",
      position: "বিভাগীয় প্রধান (বিজ্ঞান)",
      subject: "পদার্থবিজ্ঞান",
      qualification: "পিএইচডি ইন ফিজিক্স",
      experience: "১৮+ বছর",
      phone: "০১৭৮৮-৯৯৮৮৮০",
      email: "fkhatun@edumatic.edu.bd"
    },
    {
      name: "মোঃ নজরুল ইসলাম",
      position: "বিভাগীয় প্রধান (মানবিক)",
      subject: "বাংলা সাহিত্য",
      qualification: "এমএ ইন বাংলা",
      experience: "১৫+ বছর",
      phone: "০১৭৮৮-৯৯৮৮৮১",
      email: "nislam@edumatic.edu.bd"
    },
    {
      name: "নার্গিস আক্তার",
      position: "সহকারী শিক্ষক",
      subject: "ইংরেজি",
      qualification: "এমএ ইন ইংলিশ",
      experience: "১২+ বছর",
      phone: "০১৭৮৮-৯৯৮৮৮২",
      email: "nakter@edumatic.edu.bd"
    },
    {
      name: "মোঃ রাহুল আমিন",
      position: "সহকারী শিক্ষক",
      subject: "রসায়ন",
      qualification: "এমএসসি ইন কেমিস্ট্রি",
      experience: "১০+ বছর",
      phone: "০১৭৮৮-৯৯৮৮৮৩",
      email: "ramin@edumatic.edu.bd"
    },
    {
      name: "সালমা খাতুন",
      position: "সহকারী শিক্ষক",
      subject: "জীববিজ্ঞান",
      qualification: "এমএসসি ইন বায়োলজি",
      experience: "৮+ বছর",
      phone: "০১৭৮৮-৯৯৮৮৮৪",
      email: "skhatun@edumatic.edu.bd"
    }
  ];

  const supportStaff = [
    {
      name: "মোঃ আলমগীর হোসেন",
      position: "প্রধান কেরানি",
      department: "প্রশাসন",
      experience: "১৫+ বছর"
    },
    {
      name: "শাহিনা বেগম",
      position: "লাইব্রেরিয়ান",
      department: "গ্রন্থাগার",
      experience: "১০+ বছর"
    },
    {
      name: "কামাল উদ্দিন",
      position: "ল্যাব সহায়ক",
      department: "বিজ্ঞান ল্যাব",
      experience: "১২+ বছর"
    },
    {
      name: "রহিমা খাতুন",
      position: "সহায়ক",
      department: "পরিচ্ছন্নতা",
      experience: "৮+ বছর"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      
      <PageHeader
        title="শিক্ষক ও স্টাফবৃন্দ"
        subtitle="শিক্ষার সহায়তাকারী"
        description="আমাদের অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী যারা শিক্ষার্থীদের উন্নত ভবিষ্যৎ গড়তে নিরলসভাবে কাজ করে যাচ্ছেন"
        icon={<GraduationCap />}
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "প্রশাসন", href: "/administration" },
          { label: "শিক্ষক ও স্টাফবৃন্দ" }
        ]}
      />
      
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-white/90 shadow-lg text-center">
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">৩৫</div>
                <div className="text-sm text-muted-foreground">মোট শিক্ষক</div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 shadow-lg text-center">
              <CardContent className="p-6">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">২৮</div>
                <div className="text-sm text-muted-foreground">স্নাতকোত্তর</div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 shadow-lg text-center">
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">৫</div>
                <div className="text-sm text-muted-foreground">পিএইচডি</div>
              </CardContent>
            </Card>
            <Card className="bg-white/90 shadow-lg text-center">
              <CardContent className="p-6">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">১৫+</div>
                <div className="text-sm text-muted-foreground">গড় অভিজ্ঞতা</div>
              </CardContent>
            </Card>
          </div>

          {/* Teaching Staff */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">শিক্ষকবৃন্দ</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher, index) => (
                <Card key={index} className="bg-white/90 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                    <CardTitle className="text-lg">{teacher.name}</CardTitle>
                    <p className="text-primary-foreground/80">{teacher.position}</p>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">{teacher.subject}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span className="text-sm">{teacher.qualification}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {teacher.experience}
                    </Badge>
                    <div className="pt-2 space-y-1">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3 text-primary" />
                        <span className="text-xs">{teacher.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3 text-primary" />
                        <span className="text-xs">{teacher.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Support Staff */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">সহায়ক কর্মচারীবৃন্দ</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportStaff.map((staff, index) => (
                <Card key={index} className="bg-white/90 shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-primary mb-1">{staff.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{staff.position}</p>
                    <p className="text-xs text-muted-foreground mb-2">{staff.department}</p>
                    <Badge variant="outline">{staff.experience}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeachersStaffPage;
