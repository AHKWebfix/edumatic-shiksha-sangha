
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building, 
  Wifi, 
  Car, 
  Utensils, 
  Heart, 
  FlaskConical, 
  Monitor, 
  BookOpen,
  Users,
  Zap
} from "lucide-react";

const Infrastructure = () => {
  const facilities = [
    {
      icon: Building,
      title: "আধুনিক ভবন",
      description: "৫ তলা বিশিষ্ট আধুনিক শিক্ষা ভবন",
      details: "৫০টি সুসজ্জিত শ্রেণিকক্ষ সহ"
    },
    {
      icon: BookOpen,
      title: "সমৃদ্ধ পাঠাগার",
      description: "১০,০০০+ বই সংবলিত পাঠাগার",
      details: "ডিজিটাল লাইব্রেরি সুবিধাসহ"
    },
    {
      icon: FlaskConical,
      title: "বিজ্ঞান গবেষণাগার",
      description: "পদার্থ, রসায়ন ও জীববিজ্ঞান ল্যাব",
      details: "আধুনিক যন্ত্রপাতি ও সরঞ্জাম সহ"
    },
    {
      icon: Monitor,
      title: "কম্পিউটার ল্যাব",
      description: "৫০+ কম্পিউটার সহ আইসিটি ল্যাব",
      details: "হাই স্পিড ইন্টারনেট সংযোগ"
    },
    {
      icon: Users,
      title: "মাল্টিমিডিয়া ক্লাসরুম",
      description: "প্রজেক্টর ও স্মার্ট বোর্ড সহ",
      details: "ইন্টারঅ্যাক্টিভ শিক্ষা পদ্ধতি"
    },
    {
      icon: Heart,
      title: "স্বাস্থ্য সেবা",
      description: "প্রাথমিক চিকিৎসা কেন্দ্র",
      details: "অভিজ্ঞ নার্স ও ডাক্তার সহ"
    },
    {
      icon: Utensils,
      title: "ক্যান্টিন সুবিধা",
      description: "স্বাস্থ্যকর খাবার পরিবেশন",
      details: "পুষ্টিকর টিফিন ও দুপুরের খাবার"
    },
    {
      icon: Car,
      title: "পরিবহন সুবিধা",
      description: "নিরাপদ স্কুল বাস সার্ভিস",
      details: "সিটি এলাকার বিভিন্ন রুট"
    },
    {
      icon: Wifi,
      title: "ওয়াই-ফাই সুবিধা",
      description: "সম্পূর্ণ ক্যাম্পাসে ফ্রি ইন্টারনেট",
      details: "শিক্ষার্থী ও শিক্ষকদের জন্য"
    },
    {
      icon: Zap,
      title: "বিদ্যুৎ ও জেনারেটর",
      description: "নিরবচ্ছিন্ন বিদ্যুৎ সরবরাহ",
      details: "ব্যাকআপ জেনারেটর সহ"
    }
  ];

  const specialFacilities = [
    {
      title: "খেলার মাঠ",
      description: "ফুটবল, ক্রিকেট ও অন্যান্য খেলার জন্য বিশাল মাঠ"
    },
    {
      title: "অডিটোরিয়াম",
      description: "৫০০ আসন বিশিষ্ট আধুনিক অডিটোরিয়াম"
    },
    {
      title: "প্রার্থনা কক্ষ",
      description: "সকল ধর্মের জন্য আলাদা প্রার্থনা কক্ষ"
    },
    {
      title: "নিরাপত্তা ব্যবস্থা",
      description: "২৪/৭ নিরাপত্তা প্রহরী ও সিসিটিভি মনিটরিং"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      <main className="pt-8 pb-16">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              অবকাঠামো ও সুযোগ-সুবিধা
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              আমাদের প্রতিষ্ঠানের আধুনিক অবকাঠামো ও শিক্ষার্থীদের জন্য বিভিন্ন সুবিধাসমূহ
            </p>
          </div>

          {/* Main Facilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              প্রধান সুবিধাসমূহ
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="bg-white/80 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <facility.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg text-primary">{facility.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">{facility.description}</p>
                    <p className="text-xs text-primary font-medium">{facility.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Special Facilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              বিশেষ সুবিধাসমূহ
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {specialFacilities.map((item, index) => (
                <Card key={index} className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Campus Overview */}
          <div className="bg-primary text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">ক্যাম্পাস সংক্ষিপ্ত বিবরণ</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">৫</div>
                <div className="text-lg opacity-90">তলা ভবন</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">৫০+</div>
                <div className="text-lg opacity-90">শ্রেণিকক্ষ</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">১০+</div>
                <div className="text-lg opacity-90">বিশেষ কক্ষ</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">২৪/৭</div>
                <div className="text-lg opacity-90">নিরাপত্তা</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
