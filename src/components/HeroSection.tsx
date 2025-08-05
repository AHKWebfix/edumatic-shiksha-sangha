
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, GraduationCap, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="relative">
            <img 
              src="https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/4-min.png"
              alt="এডুমেটিক স্কুল ক্যাম্পাস"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Hero Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                স্বাগতম
                <span className="block text-3xl md:text-4xl text-foreground">
                  এডুমেটিক স্কুল অ্যান্ড কলেজে
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                আধুনিক শিক্ষা ব্যবস্থা ও ঐতিহ্যবাহী মূল্যবোধের সমন্বয়ে গড়ে উঠেছে আমাদের 
                প্রতিষ্ঠান। এখানে প্রতিটি শিক্ষার্থীর সুপ্ত প্রতিভা বিকাশে আমরা প্রতিশ্রুতিবদ্ধ।
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-white/50 border-primary/20">
                <CardContent className="p-4 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">২০০৫</div>
                  <div className="text-sm text-muted-foreground">প্রতিষ্ঠিত</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 border-primary/20">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">১২০০+</div>
                  <div className="text-sm text-muted-foreground">শিক্ষার্থী</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 border-primary/20">
                <CardContent className="p-4 text-center">
                  <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">৬০+</div>
                  <div className="text-sm text-muted-foreground">শিক্ষক</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 border-primary/20">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">৯৮%</div>
                  <div className="text-sm text-muted-foreground">পাসের হার</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
