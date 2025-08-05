
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy, Star, Briefcase, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AlumniPage = () => {
  const notableAlumni = [
    {
      name: "ড. সামিনা আহমেদ",
      batch: "২০০৫",
      profession: "চিকিৎসক",
      achievement: "জাতীয় পুরস্কারপ্রাপ্ত হৃদরোগ বিশেষজ্ঞ",
      currentPosition: "ঢাকা মেডিকেল কলেজের অধ্যাপক",
      category: "medical"
    },
    {
      name: "ইঞ্জিনিয়ার রফিকুল ইসলাম",
      batch: "২০০৮",
      profession: "প্রকৌশলী",
      achievement: "আন্তর্জাতিক প্রকৌশল পুরস্কার বিজয়ী",
      currentPosition: "গুগল বাংলাদেশের প্রধান প্রকৌশলী",
      category: "engineering"
    },
    {
      name: "অ্যাডভোকেট নূরুন নাহার",
      batch: "২০০৩",
      profession: "আইনজীবী",
      achievement: "মানবাধিকার রক্ষায় বিশেষ অবদান",
      currentPosition: "সুপ্রিম কোর্টের আইনজীবী",
      category: "law"
    },
    {
      name: "প্রফেসর আব্দুর রহমান",
      batch: "২০০১",
      profession: "শিক্ষাবিদ",
      achievement: "শিক্ষায় জাতীয় পুরস্কার প্রাপ্ত",
      currentPosition: "ঢাকা বিশ্ববিদ্যালয়ের অধ্যাপক",
      category: "education"
    },
    {
      name: "মোহাম্মদ হাসান",
      batch: "২০১০",
      profession: "উদ্যোক্তা",
      achievement: "দেশের শীর্ষ ১০ তরুণ উদ্যোক্তা",
      currentPosition: "টেক স্টার্টআপের প্রতিষ্ঠাতা ও CEO",
      category: "business"
    },
    {
      name: "ফারিয়া খান",
      batch: "২০১২",
      profession: "সাংবাদিক",
      achievement: "সেরা অনুসন্ধানী সাংবাদিক পুরস্কার",
      currentPosition: "বিবিসি বাংলার সিনিয়র রিপোর্টার",
      category: "media"
    }
  ];

  const achievements = [
    { year: "২০২৩", achievement: "৯৫% শিক্ষার্থী বিশ্ববিদ্যালয়ে ভর্তি", icon: Trophy },
    { year: "২০২২", achievement: "১০০+ শিক্ষার্থী সরকারি চাকরি পেয়েছেন", icon: Award },
    { year: "২০২১", achievement: "৫০+ শিক্ষার্থী বিদেশে উচ্চশিক্ষা নিয়েছেন", icon: Star },
    { year: "২০২০", achievement: "৮০+ শিক্ষার্থী নিজস্ব ব্যবসা শুরু করেছেন", icon: Briefcase },
  ];

  const getCategoryBadge = (category: string) => {
    const badges = {
      medical: { color: "bg-red-500", text: "চিকিৎসা" },
      engineering: { color: "bg-blue-500", text: "প্রকৌশল" },
      law: { color: "bg-purple-500", text: "আইন" },
      education: { color: "bg-green-500", text: "শিক্ষা" },
      business: { color: "bg-orange-500", text: "ব্যবসা" },
      media: { color: "bg-pink-500", text: "গণমাধ্যম" },
    };
    const badge = badges[category as keyof typeof badges] || badges.education;
    return <Badge className={`${badge.color} text-white`}>{badge.text}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 to-primary/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-2xl md:text-4xl font-bold text-primary">
              কৃতি শিক্ষার্থী
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            আমাদের গর্বের সন্তান - যারা দেশ ও বিদেশে সুনাম অর্জন করেছেন
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto">
          <Card className="text-center p-4 md:p-6 shadow-lg border-primary/20">
            <Users className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
            <div className="text-xl md:text-2xl font-bold text-primary">২০০০+</div>
            <div className="text-xs md:text-sm text-muted-foreground">মোট শিক্ষার্থী</div>
          </Card>
          <Card className="text-center p-4 md:p-6 shadow-lg border-primary/20">
            <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
            <div className="text-xl md:text-2xl font-bold text-primary">৯৮%</div>
            <div className="text-xs md:text-sm text-muted-foreground">কর্মসংস্থান</div>
          </Card>
          <Card className="text-center p-4 md:p-6 shadow-lg border-primary/20">
            <Award className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
            <div className="text-xl md:text-2xl font-bold text-primary">৫০+</div>
            <div className="text-xs md:text-sm text-muted-foreground">জাতীয় পুরস্কার</div>
          </Card>
          <Card className="text-center p-4 md:p-6 shadow-lg border-primary/20">
            <Trophy className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
            <div className="text-xl md:text-2xl font-bold text-primary">২০+</div>
            <div className="text-xs md:text-sm text-muted-foreground">আন্তর্জাতিক স্বীকৃতি</div>
          </Card>
        </div>

        {/* Notable Alumni */}
        <div className="mb-8 md:mb-12">
          <Card className="shadow-xl border-primary/20 max-w-6xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="text-xl md:text-2xl flex items-center">
                <Star className="h-6 w-6 mr-3" />
                উল্লেখযোগ্য কৃতি শিক্ষার্থী
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {notableAlumni.map((alumni, index) => (
                  <div 
                    key={index}
                    className={`p-4 md:p-6 border-b lg:border-r last:border-b-0 lg:odd:border-r-0 hover:bg-accent/10 transition-colors ${
                      index % 2 === 0 ? "bg-accent/5" : "bg-white"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16 md:h-20 md:w-20">
                        <AvatarFallback className="bg-primary/10 text-primary text-lg md:text-xl font-bold">
                          {alumni.name.split(' ')[0]?.charAt(0)}{alumni.name.split(' ')[1]?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                          <h3 className="font-bold text-foreground text-base md:text-lg">
                            {alumni.name}
                          </h3>
                          <Badge variant="outline" className="text-xs mt-1 sm:mt-0">
                            ব্যাচ: {alumni.batch}
                          </Badge>
                        </div>
                        <p className="text-primary font-semibold text-sm md:text-base mb-1">
                          {alumni.profession}
                        </p>
                        <p className="text-muted-foreground text-xs md:text-sm mb-2 leading-relaxed">
                          {alumni.achievement}
                        </p>
                        <p className="text-muted-foreground text-xs md:text-sm mb-3 font-medium">
                          বর্তমান: {alumni.currentPosition}
                        </p>
                        <div className="mt-2">
                          {getCategoryBadge(alumni.category)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="bg-gradient-to-r from-accent to-accent/90 text-white">
              <CardTitle className="text-xl md:text-2xl flex items-center">
                <Trophy className="h-6 w-6 mr-3" />
                সাম্প্রতিক অর্জনসমূহ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary mb-1">{item.year}</div>
                        <p className="text-muted-foreground text-sm md:text-base">{item.achievement}</p>
                      </div>
                    </div>
                  );
                })}
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
