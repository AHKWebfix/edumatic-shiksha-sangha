import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Star, Calendar, Award } from "lucide-react";
const InstituteHistoryPage = () => {
  const timeline = [{
    year: "২০০৫",
    title: "প্রতিষ্ঠালগ্ন",
    description: "মাত্র ৫০ জন শিক্ষার্থী ও ১০ জন শিক্ষক নিয়ে যাত্রা শুরু",
    details: "ছোট্ট একটি ভাড়া বাড়িতে প্রাথমিক পর্যায়ে শুরু"
  }, {
    year: "২০০৬",
    title: "সরকারি অনুমোদন",
    description: "শিক্ষা বোর্ড থেকে আনুষ্ঠানিক স্বীকৃতি প্রাপ্ত",
    details: "EIIN নম্বর ও সকল প্রয়োজনীয় লাইসেন্স প্রাপ্তি"
  }, {
    year: "২০০৮",
    title: "প্রথম ব্যাচ স্নাতক",
    description: "প্রথম ব্যাচের শিক্ষার্থীরা এসএসসি পাস",
    details: "৯৫% পাসের হার অর্জন ও উল্লেখযোগ্য ফলাফল"
  }, {
    year: "২০১০",
    title: "নিজস্ব ভবন",
    description: "৩ তলা নিজস্ว ভবনে স্থানান্তর",
    details: "আধুনিক সুবিধা সহ শ্রেণিকক্ষ ও পাঠাগার"
  }, {
    year: "২০১২",
    title: "কলেজ শাখা চালু",
    description: "উচ্চ মাধ্যমিক পর্যায়ে শিক্ষা কার্যক্রম",
    details: "বিজ্ঞান, ব্যবসায় ও মানবিক বিভাগ চালু"
  }, {
    year: "২০১৫",
    title: "ভবন সম্প্রসারণ",
    description: "৫ তলা বিশিষ্ট আধুনিক ভবন নির্মাণ",
    details: "বিজ্ঞানাগার, কম্পিউটার ল্যাব ও অডিটোরিয়াম সংযোজন"
  }, {
    year: "২০১৮",
    title: "শ্রেষ্ঠ প্রতিষ্ঠান",
    description: "জেলা পর্যায়ে শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠানের পুরস্কার",
    details: "শিক্ষার মান ও ফলাফলের জন্য স্বীকৃতি"
  }, {
    year: "২০২০",
    title: "ডিজিটাল শিক্ষা",
    description: "সম্পূর্ণ ডিজিটাল ক্লাসরুম ও অনলাইন শিক্ষা",
    details: "কোভিড-১৯ এর সময় নিরবচ্ছিন্ন শিক্ষা কার্যক্রম"
  }, {
    year: "২০২২",
    title: "স্মার্ট ক্যাম্পাস",
    description: "সম্পূর্ণ ক্যাম্পাসে ওয়াই-ফাই ও স্মার্ট বোর্ড",
    details: "আধুনিক প্রযুক্তি নির্ভর শিক্ষা পরিবেশ"
  }, {
    year: "২০২৪",
    title: "উৎকর্ষতার ১৯ বছর",
    description: "২০০০+ স্নাতক ও অব্যাহত সাফল্যের যাত্রা",
    details: "আগামীর জন্য নতুন পরিকল্পনা ও লক্ষ্য নির্ধারণ"
  }];
  const achievements = [{
    icon: Users,
    title: "২০০০+",
    subtitle: "সফল স্নাতক"
  }, {
    icon: Award,
    title: "৫০+",
    subtitle: "পুরস্কার ও সম্মাননা"
  }, {
    icon: Star,
    title: "৯৮%",
    subtitle: "গড় পাসের হার"
  }, {
    icon: Trophy,
    title: "১৯",
    subtitle: "বছরের অভিজ্ঞতা"
  }];
  return <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      <main className="pt-8 pb-16">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-primary mr-3" />
              <h1 className="text-4xl font-bold text-primary md:text-4xl">
                প্রতিষ্ঠানের ইতিহাস
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ২০০৫ সাল থেকে আজ পর্যন্ত আমাদের গৌরবময় যাত্রাপথ ও অর্জনের ইতিহাস
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => <Card key={index} className="bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="h-12 w-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">{achievement.title}</div>
                    <div className="text-sm opacity-90">{achievement.subtitle}</div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              আমাদের যাত্রাপথ
            </h2>
            <div className="space-y-8">
              {timeline.map((event, index) => <div key={index} className="relative">
                  {/* Timeline Line */}
                  {index !== timeline.length - 1 && <div className="absolute left-6 top-20 w-0.5 h-16 bg-primary/30 md:left-1/2 md:transform md:-translate-x-px"></div>}
                  
                  <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Year Badge */}
                    <div className="flex-shrink-0 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {event.year}
                    </div>
                    
                    {/* Content Card */}
                    <div className="flex-1 md:max-w-md">
                      <Card className="bg-white/90 border-primary/30 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <CardTitle className="text-xl text-primary">
                              {event.title}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-3 leading-relaxed">
                            {event.description}
                          </p>
                          <p className="text-sm text-primary/80 font-medium">
                            {event.details}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-shrink-0 w-24"></div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Future Vision */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 text-white rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">ভবিষ্যতের স্বপ্ন</h2>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                আমাদের লক্ষ্য হলো আগামী ১০ বছরে দেশের অন্যতম সেরা শিক্ষা প্রতিষ্ঠান হিসেবে 
                প্রতিষ্ঠিত হওয়া এবং আন্তর্জাতিক মানের শিক্ষা প্রদান করা। আমরা প্রতিটি শিক্ষার্থীকে 
                গ্লোবাল সিটিজেন হিসেবে গড়ে তুলতে চাই।
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default InstituteHistoryPage;