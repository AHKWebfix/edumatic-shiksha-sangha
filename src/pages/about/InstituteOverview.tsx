import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Users, BookOpen, Award, Target, Heart } from "lucide-react";
const InstituteOverview = () => {
  const highlights = [{
    icon: School,
    title: "শিক্ষার মান",
    description: "উন্নত শিক্ষা পদ্ধতি ও আধুনিক কারিকুলাম"
  }, {
    icon: Users,
    title: "অভিজ্ঞ শিক্ষকমণ্ডলী",
    description: "দক্ষ ও অভিজ্ঞ শিক্ষকদের নিয়ে গঠিত টিম"
  }, {
    icon: BookOpen,
    title: "সমৃদ্ধ পাঠাগার",
    description: "বিস্তৃত বই সংগ্রহ ও গবেষণার সুবিধা"
  }, {
    icon: Award,
    title: "পুরস্কার প্রাপ্ত",
    description: "শিক্ষার ক্ষেত্রে বিভিন্ন স্বীকৃতি ও পুরস্কার"
  }];
  const visionMission = [{
    icon: Target,
    title: "আমাদের লক্ষ্য",
    description: "প্রতিটি শিক্ষার্থীর সুপ্ত প্রতিভা বিকাশে সহায়তা করা এবং তাদের চরিত্র গঠনে ভূমিকা রাখা।"
  }, {
    icon: Heart,
    title: "আমাদের দৃষ্টিভঙ্গি",
    description: "আধুনিক শিক্ষা ব্যবস্থা ও নৈতিক মূল্যবোধের সমন্বয়ে একটি আদর্শ শিক্ষা প্রতিষ্ঠান গড়ে তোলা।"
  }];
  return <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      <main className="pt-8 pb-16">
        <div className="container mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4 md:text-4xl">
              এক নজরে আমাদের প্রতিষ্ঠান
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              এডুমেটিক স্কুল অ্যান্ড কলেজ - একটি আধুনিক ও প্রগতিশীল শিক্ষা প্রতিষ্ঠান
            </p>
          </div>

          {/* Institution Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              আমাদের বৈশিষ্ট্য
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => <Card key={index} className="bg-white/80 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              আমাদের লক্ষ্য ও উদ্দেশ্য
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {visionMission.map((item, index) => <Card key={index} className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 shadow-lg">
                  <CardHeader className="text-center">
                    <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Key Statistics */}
          <div className="bg-primary text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">গুরুত্বপূর্ণ পরিসংখ্যান</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">২০০০+</div>
                <div className="text-lg opacity-90">মোট শিক্ষার্থী</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">৫০+</div>
                <div className="text-lg opacity-90">শিক্ষক ও কর্মচারী</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">৯৮%</div>
                <div className="text-lg opacity-90">পাস রেট</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">১৯</div>
                <div className="text-lg opacity-90">বছর অভিজ্ঞতা</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default InstituteOverview;