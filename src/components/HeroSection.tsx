
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, GraduationCap, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Image */}
          <div className="relative order-2 lg:order-1">
            <img 
              src="https://mlafpij6mnr2.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://cdhddm.edu.bd/wp-content/uploads/2023/09/4-min.png"
              alt="এডুমেটিক স্কুল ক্যাম্পাস"
              className="rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl lg:rounded-2xl"></div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 lg:mb-4 leading-[1.2] sm:leading-tight">
                স্বাগতম
                <span className="block text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-foreground mt-1 leading-[1.2] sm:leading-tight">
                  এডুমেটিক স্কুল অ্যান্ড কলেজে
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-[1.5] sm:leading-relaxed">
                আধুনিক শিক্ষা ব্যবস্থা ও ঐতিহ্যবাহী মূল্যবোধের সমন্বয়ে গড়ে উঠেছে আমাদের 
                প্রতিষ্ঠান। এখানে প্রতিটি শিক্ষার্থীর সুপ্ত প্রতিভা বিকাশে আমরা প্রতিশ্রুতিবদ্ধ।
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              <Card className="bg-white/50 border-primary/20">
                <CardContent className="p-3 lg:p-4 text-center">
                  <Calendar className="h-6 w-6 lg:h-8 lg:w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg lg:text-2xl font-bold text-primary leading-tight">২০০৫</div>
                  <div className="text-xs lg:text-sm text-muted-foreground leading-tight">প্রতিষ্ঠিত</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 border-primary/20">
                <CardContent className="p-3 lg:p-4 text-center">
                  <Users className="h-6 w-6 lg:h-8 lg:w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg lg:text-2xl font-bold text-primary leading-tight">১২০০+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground leading-tight">শিক্ষার্থী</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 border-primary/20">
                <CardContent className="p-3 lg:p-4 text-center">
                  <GraduationCap className="h-6 w-6 lg:h-8 lg:w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg lg:text-2xl font-bold text-primary leading-tight">৬০+</div>
                  <div className="text-xs lg:text-sm text-muted-foreground leading-tight">শিক্ষক</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 border-primary/20">
                <CardContent className="p-3 lg:p-4 text-center">
                  <Award className="h-6 w-6 lg:h-8 lg:w-8 text-primary mx-auto mb-2" />
                  <div className="text-lg lg:text-2xl font-bold text-primary leading-tight">৯৮%</div>
                  <div className="text-xs lg:text-sm text-muted-foreground leading-tight">পাসের হার</div>
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
