
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Star } from "lucide-react";

const InstituteHistory = () => {
  const milestones = [
    {
      year: "২০০৫",
      title: "প্রতিষ্ঠা",
      description: "ছোট্ট একটি স্বপ্ন নিয়ে শুরু হয় আমাদের যাত্রা"
    },
    {
      year: "২০০৮",
      title: "প্রথম ব্যাচ স্নাতক",
      description: "প্রথম ব্যাচের শিক্ষার্থীরা সফলতার সাথে এসএসসি পাস করে"
    },
    {
      year: "২০১২",
      title: "কলেজ শাখা চালু",
      description: "উচ্চ মাধ্যমিক শিক্ষার জন্য কলেজ শাখা চালু করা হয়"
    },
    {
      year: "২০২০",
      title: "ডিজিটাল ক্লাসরুম",
      description: "আধুনিক প্রযুক্তি সংযোজন ও অনলাইন শিক্ষা চালু"
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-br from-accent/20 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              আমাদের ইতিহাস
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-8">
            শিক্ষার ক্ষেত্রে আমাদের গৌরবময় অতীত ও উজ্জ্বল ভবিষ্যতের পথে এগিয়ে চলা
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* History Content */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-white/80 border-primary/20 shadow-lg">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-primary flex items-center">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  আমাদের গল্প
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  ২০০৫ সালে একটি ছোট্ট স্বপ্ন নিয়ে শুরু হয়েছিল এডুমেটিক স্কুল অ্যান্ড কলেজের যাত্রা। 
                  আজ আমরা গর্বিত যে, আমাদের এই প্রতিষ্ঠান থেকে হাজারো শিক্ষার্থী সফল ভবিষ্যৎ গড়ছে।
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  আমাদের মূল লক্ষ্য হলো প্রতিটি শিক্ষার্থীর সুপ্ত প্রতিভা বিকাশ ও চরিত্র গঠনে সহায়তা করা। 
                  আধুনিক শিক্ষা পদ্ধতি ও ঐতিহ্যবাহী মূল্যবোধের সমন্বয়ে আমরা তৈরি করছি আগামী দিনের নেতৃত্ব।
                </p>
              </CardContent>
            </Card>

            {/* Achievement Stats - Made fully responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <Card className="bg-primary text-white">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold">২০০০+</div>
                  <div className="text-xs sm:text-sm opacity-90">স্নাতক</div>
                </CardContent>
              </Card>
              
              <Card className="bg-primary text-white">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Trophy className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold">৫০+</div>
                  <div className="text-xs sm:text-sm opacity-90">পুরস্কার</div>
                </CardContent>
              </Card>
              
              <Card className="bg-primary text-white">
                <CardContent className="p-3 sm:p-4 text-center">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold">১৯</div>
                  <div className="text-xs sm:text-sm opacity-90">বছর অভিজ্ঞতা</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6 sm:mb-8">গুরুত্বপূর্ণ মাইলফলক</h3>
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-white/90 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-primary text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteHistory;
