
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
    <section className="py-16 bg-gradient-to-br from-accent/20 to-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              আমাদের ইতিহাস
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            শিক্ষার ক্ষেত্রে আমাদের গৌরবময় অতীত ও উজ্জ্বল ভবিষ্যতের পথে এগিয়ে চলা
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* History Content */}
          <div className="space-y-8">
            <Card className="bg-white/80 border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Star className="h-6 w-6 mr-2" />
                  আমাদের গল্প
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  ২০০৫ সালে একটি ছোট্ট স্বপ্ন নিয়ে শুরু হয়েছিল এডুমেটিক স্কুল অ্যান্ড কলেজের যাত্রা। 
                  আজ আমরা গর্বিত যে, আমাদের এই প্রতিষ্ঠান থেকে হাজারো শিক্ষার্থী সফল ভবিষ্যৎ গড়ছে।
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  আমাদের মূল লক্ষ্য হলো প্রতিটি শিক্ষার্থীর সুপ্ত প্রতিভা বিকাশ ও চরিত্র গঠনে সহায়তা করা। 
                  আধুনিক শিক্ষা পদ্ধতি ও ঐতিহ্যবাহী মূল্যবোধের সমন্বয়ে আমরা তৈরি করছি আগামী দিনের নেতৃত্ব।
                </p>
              </CardContent>
            </Card>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-primary text-white">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">২০০০+</div>
                  <div className="text-sm opacity-90">স্নাতক</div>
                </CardContent>
              </Card>
              
              <Card className="bg-primary text-white">
                <CardContent className="p-4 text-center">
                  <Trophy className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">৫০+</div>
                  <div className="text-sm opacity-90">পুরস্কার</div>
                </CardContent>
              </Card>
              
              <Card className="bg-primary text-white">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">১৯</div>
                  <div className="text-sm opacity-90">বছর অভিজ্ঞতা</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">গুরুত্বপূর্ণ মাইলফলক</h3>
            {milestones.map((milestone, index) => (
              <Card key={index} className="bg-white/90 border-primary/30 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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
