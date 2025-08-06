
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, GraduationCap, Building, Heart, Users } from "lucide-react";

const AlumniPage = () => {
  const notableAlumni = [
    {
      name: "ড. আহমেদ রাজা",
      batch: "১৯৯৮",
      achievement: "কার্ডিওভাসকুলার সার্জন",
      currentPosition: "ঢাকা মেডিকেল কলেজ হাসপাতাল",
      description: "আন্তর্জাতিক খ্যাতিসম্পন্ন হৃদরোগ বিশেষজ্ঞ",
      icon: Heart
    },
    {
      name: "ইঞ্জি. সারা খাতুন",
      batch: "২০০২",
      achievement: "সফটওয়্যার ইঞ্জিনিয়ার",
      currentPosition: "গুগল, ক্যালিফোর্নিয়া",
      description: "আর্টিফিশিয়াল ইন্টেলিজেন্স গবেষক",
      icon: Building
    },
    {
      name: "প্রফেসর মোঃ করিম",
      batch: "১৯৯৫",
      achievement: "পদার্থবিজ্ঞানী",
      currentPosition: "ঢাকা বিশ্ববিদ্যালয়",
      description: "নোবেল পুরস্কার মনোনীত গবেষক",
      icon: Star
    },
    {
      name: "জনাব তানিয়া আক্তার",
      batch: "২০০৫",
      achievement: "উদ্যোক্তা",
      currentPosition: "টেক স্টার্টআপ সিইও",
      description: "টেকনোলজি খাতে সফল নারী উদ্যোক্তা",
      icon: Trophy
    },
    {
      name: "ড. রশিদ হাসান",
      batch: "২০০০",
      achievement: "গবেষক",
      currentPosition: "এমআইটি, যুক্তরাষ্ট্র",
      description: "বায়োমেডিকেল ইঞ্জিনিয়ারিং গবেষক",
      icon: GraduationCap
    },
    {
      name: "মিসেস নাসরিন জাহান",
      batch: "২০০৩",
      achievement: "সমাজকর্মী",
      currentPosition: "জাতিসংঘ, নিউইয়র্ক",
      description: "মানবাধিকার কর্মী ও সমাজসেবক",
      icon: Users
    }
  ];

  const achievements = [
    {
      title: "২,৫০০+",
      subtitle: "মোট শিক্ষার্থী",
      description: "১৯৮৫ সাল থেকে আজ পর্যন্ত"
    },
    {
      title: "৯৫%",
      subtitle: "সফলতার হার",
      description: "উচ্চ শিক্ষায় ভর্তি ও কর্মক্ষেত্রে"
    },
    {
      title: "৫০+",
      subtitle: "দেশ-বিদেশে",
      description: "কর্মরত আমাদের প্রাক্তন শিক্ষার্থীরা"
    },
    {
      title: "১৫+",
      subtitle: "পুরস্কারপ্রাপ্ত",
      description: "জাতীয় ও আন্তর্জাতিক পর্যায়ে"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      
      <PageHeader
        title="কৃতি শিক্ষার্থী"
        subtitle="আমাদের গর্ব"
        description="আমাদের গর্ব আমাদের প্রাক্তন শিক্ষার্থীরা যারা দেশ-বিদেশে নিজেদের মেধা ও যোগ্যতার স্বাক্ষর রেখে চলেছেন"
        icon={<Trophy />}
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "প্রশাসন", href: "/administration" },
          { label: "কৃতি শিক্ষার্থী" }
        ]}
      />
      
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Achievement Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {achievements.map((stat, index) => (
              <Card key={index} className="bg-white/90 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.title}</div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">{stat.subtitle}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Notable Alumni */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">বিশিষ্ট প্রাক্তন শিক্ষার্থীবৃন্দ</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notableAlumni.map((alumnus, index) => {
                const IconComponent = alumnus.icon;
                return (
                  <Card key={index} className="bg-white/90 shadow-xl hover:shadow-2xl transition-shadow">
                    <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-6 w-6" />
                        <div>
                          <CardTitle className="text-lg">{alumnus.name}</CardTitle>
                          <p className="text-primary-foreground/80 text-sm">ব্যাচ: {alumnus.batch}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-3">
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{alumnus.achievement}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{alumnus.currentPosition}</p>
                      </div>
                      <p className="text-sm leading-relaxed">{alumnus.description}</p>
                      <Badge variant="secondary" className="w-fit">
                        কৃতি শিক্ষার্থী
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">সাফল্যের গল্প</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/90 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Trophy className="h-6 w-6 mr-3 text-primary" />
                    শিক্ষাক্ষেত্রে অবদান
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    আমাদের প্রাক্তন শিক্ষার্থীরা দেশের বিভিন্ন বিশ্ববিদ্যালয়ে অধ্যাপনা করছেন। 
                    তাদের মধ্যে অনেকেই আন্তর্জাতিক জার্নালে গবেষণাপত্র প্রকাশ করেছেন এবং 
                    বিভিন্ন পুরস্কার লাভ করেছেন।
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/90 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Building className="h-6 w-6 mr-3 text-primary" />
                    ব্যবসা ও উদ্যোক্তা
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    অনেক প্রাক্তন শিক্ষার্থী সফল উদ্যোক্তা হিসেবে প্রতিষ্ঠিত হয়েছেন। 
                    তারা বিভিন্ন খাতে ব্যবসা প্রতিষ্ঠান গড়ে তুলেছেন এবং দেশের 
                    অর্থনৈতিক উন্নয়নে অবদান রাখছেন।
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Alumni Association */}
          <Card className="bg-white/90 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                প্রাক্তন শিক্ষার্থী সংগঠন
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                আমাদের প্রাক্তন শিক্ষার্থীদের নিয়ে গঠিত একটি সক্রিয় সংগঠন রয়েছে যা প্রতিষ্ঠানের 
                উন্নয়নে নিয়মিত অবদান রাখে। তারা বর্তমান শিক্ষার্থীদের ক্যারিয়ার গাইড্যান্স, 
                বৃত্তি প্রদান এবং বিভিন্ন সামাজিক কর্মকাণ্ডে সহায়তা করে থাকে।
              </p>
              <div className="flex justify-center space-x-4 pt-4">
                <Badge variant="outline" className="text-primary">বার্ষিক পুনর্মিলনী</Badge>
                <Badge variant="outline" className="text-primary">বৃত্তি কর্মসূচি</Badge>
                <Badge variant="outline" className="text-primary">ক্যারিয়ার গাইড্যান্স</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlumniPage;
