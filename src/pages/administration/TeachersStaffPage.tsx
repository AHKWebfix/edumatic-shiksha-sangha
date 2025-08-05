
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, BookOpen, Award } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TeachersStaffPage = () => {
  const teachers = [
    { name: "আলিমা খাতুন", subject: "বাংলা", qualification: "এম.এ, বি.এড", experience: "১৫ বছর" },
    { name: "রফিক উল্লাহ", subject: "ইংরেজি", qualification: "এম.এ, বি.এড", experience: "১২ বছর" },
    { name: "সালমা বেগম", subject: "গণিত", qualification: "এম.এস.সি, বি.এড", experience: "২০ বছর" },
    { name: "ড. আব্দুর রহমান", subject: "পদার্থবিজ্ঞান", qualification: "পিএইচডি", experience: "১৮ বছর" },
    { name: "নূরুল আমিন", subject: "রসায়ন", qualification: "এম.এস.সি, বি.এড", experience: "১৪ বছর" },
    { name: "ফাতেমা বেগম", subject: "জীববিজ্ঞান", qualification: "এম.এস.সি, বি.এড", experience: "১৬ বছর" },
    { name: "করিম উদ্দিন", subject: "ইতিহাস", qualification: "এম.এ, বি.এড", experience: "১০ বছর" },
    { name: "রোকেয়া খাতুন", subject: "ভূগোল", qualification: "এম.এ, বি.এড", experience: "১৩ বছর" },
  ];

  const staff = [
    { name: "মোহাম্মদ আলী", position: "লাইব্রেরিয়ান", qualification: "এম.এ" },
    { name: "সুমিয়া আক্তার", position: "অ্যাকাউন্টস অফিসার", qualification: "এম.কম" },
    { name: "জহিরুল ইসলাম", position: "অফিস সহায়ক", qualification: "এইচ.এস.সি" },
    { name: "রাশিদা বেগম", position: "পরিচ্ছন্নতা কর্মী", qualification: "এস.এস.সি" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 to-primary/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-2xl md:text-4xl font-bold text-primary">
              শিক্ষক ও স্টাফবৃন্দ
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            আমাদের দক্ষ ও অভিজ্ঞ শিক্ষক-শিক্ষিকা এবং কর্মকর্তা-কর্মচারীদের পরিচিতি
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto">
          <Card className="text-center p-4 md:p-6 shadow-lg border-primary/20">
            <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
            <div className="text-xl md:text-2xl font-bold text-primary">২৫</div>
            <div className="text-xs md:text-sm text-muted-foreground">মোট শিক্ষক</div>
          </Card>
          <Card className="text-center p-4 md:p-6 shadow-lg border-primary/20">
            <Users className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
            <div className="text-xl md:text-2xl font-bold text-primary">১২</div>
            <div className="text-xs md:text-sm text-muted-foreground">সহায়ক কর্মী</div>
          </Card>
          <Card className="text-center p-4 md:p-6 shadow-lg border-primary/20">
            <Award className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
            <div className="text-xl md:text-2xl font-bold text-primary">৮</div>
            <div className="text-xs md:text-sm text-muted-foreground">পিএইচডি ডিগ্রিধারী</div>
          </Card>
          <Card className="text-center p-4 md:p-6 shadow-lg border-primary/20">
            <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
            <div className="text-xl md:text-2xl font-bold text-primary">১৫+</div>
            <div className="text-xs md:text-sm text-muted-foreground">গড় অভিজ্ঞতা (বছর)</div>
          </Card>
        </div>

        {/* Teachers Section */}
        <div className="mb-8 md:mb-12">
          <Card className="shadow-xl border-primary/20 max-w-6xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="text-xl md:text-2xl flex items-center">
                <GraduationCap className="h-6 w-6 mr-3" />
                শিক্ষক-শিক্ষিকাবৃন্দ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {teachers.map((teacher, index) => (
                  <div 
                    key={index}
                    className={`p-4 md:p-6 border-b md:border-r last:border-b-0 md:odd:border-r-0 hover:bg-accent/10 transition-colors ${
                      index % 2 === 0 ? "bg-accent/5" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12 md:h-14 md:w-14">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm md:text-base">
                          {teacher.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                          {teacher.name}
                        </h3>
                        <p className="text-primary font-medium text-xs md:text-sm">{teacher.subject}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-1 text-xs text-muted-foreground">
                          <span>{teacher.qualification}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{teacher.experience}</span>
                        </div>
                      </div>
                      <Badge className="bg-green-500 text-white text-xs">শিক্ষক</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staff Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="bg-gradient-to-r from-accent to-accent/90 text-white">
              <CardTitle className="text-xl md:text-2xl flex items-center">
                <Users className="h-6 w-6 mr-3" />
                কর্মকর্তা ও কর্মচারীবৃন্দ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {staff.map((member, index) => (
                  <div 
                    key={index}
                    className={`p-4 md:p-6 border-b md:border-r last:border-b-0 md:odd:border-r-0 hover:bg-accent/10 transition-colors ${
                      index % 2 === 0 ? "bg-accent/5" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12 md:h-14 md:w-14">
                        <AvatarFallback className="bg-accent/20 text-accent font-semibold text-sm md:text-base">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                          {member.name}
                        </h3>
                        <p className="text-accent font-medium text-xs md:text-sm">{member.position}</p>
                        <p className="text-xs text-muted-foreground mt-1">{member.qualification}</p>
                      </div>
                      <Badge className="bg-blue-500 text-white text-xs">কর্মী</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeachersStaffPage;
