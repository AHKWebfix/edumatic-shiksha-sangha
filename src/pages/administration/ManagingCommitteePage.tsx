
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, Building2, Phone, Mail, Briefcase } from "lucide-react";

const ManagingCommitteePage = () => {
  const committeeMembers = [
    {
      name: "জনাব আবুল কালাম আজাদ",
      position: "চেয়ারম্যান",
      designation: "ব্যবসায়ী ও সমাজসেবক",
      experience: "১৫+ বছর",
      phone: "০১৭১১-১২৩৪৫৬",
      email: "chairman@edumatic.edu.bd",
      icon: Crown
    },
    {
      name: "ডাঃ মরিয়ম খাতুন",
      position: "সহ-সভাপতি",
      designation: "চিকিৎসক ও সমাজকর্মী",
      experience: "১২+ বছর",
      phone: "০১৭১১-১২৩৪৫৭",
      email: "vicechair@edumatic.edu.bd",
      icon: Users
    },
    {
      name: "মোঃ রফিকুল ইসলাম",
      position: "সম্পাদক",
      designation: "অবসরপ্রাপ্ত সরকারি কর্মকর্তা",
      experience: "২০+ বছর",
      phone: "০১৭১১-১২৩৪৫৮",
      email: "secretary@edumatic.edu.bd",
      icon: Briefcase
    },
    {
      name: "জনাব হাসান আলী",
      position: "কোষাধ্যক্ষ",
      designation: "ব্যাংকার",
      experience: "১৮+ বছর",
      phone: "০১৭১১-১২৩৪৫৯",
      email: "treasurer@edumatic.edu.bd",
      icon: Building2
    },
    {
      name: "প্রফেসর ড. নাসির উদ্দিন",
      position: "সদস্য",
      designation: "বিশ্ববিদ্যালয়ের অধ্যাপক",
      experience: "২৫+ বছর",
      phone: "০১৭১১-১২৩৪৬০",
      email: "member1@edumatic.edu.bd",
      icon: Users
    },
    {
      name: "বেগম সালমা খাতুন",
      position: "সদস্য",
      designation: "শিক্ষাবিদ ও সমাজকর্মী",
      experience: "১০+ বছর",
      phone: "০১৭১১-১২৩৪৬১",
      email: "member2@edumatic.edu.bd",
      icon: Users
    },
    {
      name: "মোঃ জাহাঙ্গীর আলম",
      position: "সদস্য",
      designation: "আইনজীবী",
      experience: "১৫+ বছর",
      phone: "০১৭১১-১২৩৪৬২",
      email: "member3@edumatic.edu.bd",
      icon: Users
    },
    {
      name: "ইঞ্জিনিয়ার সাইদুল ইসলাম",
      position: "সদস্য",
      designation: "সিভিল ইঞ্জিনিয়ার",
      experience: "১২+ বছর",
      phone: "০১৭১১-১২৩৪৬৩",
      email: "member4@edumatic.edu.bd",
      icon: Users
    }
  ];

  const responsibilities = [
    {
      title: "নীতি নির্ধারণ",
      description: "প্রতিষ্ঠানের সামগ্রিক নীতি ও কৌশল নির্ধারণ"
    },
    {
      title: "বাজেট অনুমোদন",
      description: "বার্ষিক বাজেট প্রণয়ন ও অনুমোদন"
    },
    {
      title: "শিক্ষক নিয়োগ",
      description: "যোগ্য শিক্ষক নিয়োগ ও পদোন্নতি"
    },
    {
      title: "অবকাঠামো উন্নয়ন",
      description: "ভৌত অবকাঠামো ও সুবিধাদি উন্নয়ন"
    },
    {
      title: "শিক্ষার মান নিশ্চিতকরণ",
      description: "শিক্ষার গুণগত মান বজায় রাখা"
    },
    {
      title: "সামাজিক যোগাযোগ",
      description: "অভিভাবক ও সমাজের সাথে সুসম্পর্ক রক্ষা"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            পরিচালনা পর্ষদ
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            আমাদের প্রতিষ্ঠানের নীতি নির্ধারণ ও পরিচালনায় নিয়োজিত সম্মানিত সদস্যবৃন্দ
          </p>
        </div>

        {/* Committee Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/90 shadow-lg text-center">
            <CardContent className="p-6">
              <Crown className="h-12 w-12 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">৮</div>
              <div className="text-sm text-muted-foreground">সদস্য সংখ্যা</div>
            </CardContent>
          </Card>
          <Card className="bg-white/90 shadow-lg text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">১৫+</div>
              <div className="text-sm text-muted-foreground">গড় অভিজ্ঞতা</div>
            </CardContent>
          </Card>
          <Card className="bg-white/90 shadow-lg text-center">
            <CardContent className="p-6">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">২০১৫</div>
              <div className="text-sm text-muted-foreground">প্রতিষ্ঠাকাল</div>
            </CardContent>
          </Card>
        </div>

        {/* Committee Members */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">পরিচালনা পর্ষদের সদস্যবৃন্দ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committeeMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card key={index} className="bg-white/90 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                    <div className="flex items-center space-x-3">
                      <IconComponent className="h-6 w-6" />
                      <div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <p className="text-primary-foreground/80 text-sm">{member.position}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <p className="text-sm font-medium text-primary">{member.designation}</p>
                    <Badge variant="secondary" className="w-fit">
                      {member.experience}
                    </Badge>
                    <div className="pt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">{member.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm">{member.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">দায়িত্ব ও কর্মপরিধি</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responsibilities.map((item, index) => (
              <Card key={index} className="bg-white/90 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <Card className="bg-white/90 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">
              পরিচালনা পর্ষদের দৃষ্টিভঙ্গি
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center text-muted-foreground text-lg leading-relaxed">
            <p>
              আমাদের পরিচালনা পর্ষদ একটি আধুনিক, মানসম্পন্ন ও নৈতিক মূল্যবোধসম্পন্ন শিক্ষা প্রতিষ্ঠান 
              গড়ে তোলার জন্য প্রতিশ্রুতিবদ্ধ। আমরা বিশ্বাস করি যে, সুশিক্ষিত ও দক্ষ মানবসম্পদই 
              একটি জাতির উন্নতির মূল চালিকাশক্তি। এই লক্ষ্যে আমরা নিরলসভাবে কাজ করে যাচ্ছি।
            </p>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ManagingCommitteePage;
