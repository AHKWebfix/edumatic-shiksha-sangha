
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User, Heart } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ParentTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "জনাব আবুল কালাম",
      relation: "সাকিব হাসানের পিতা",
      studentClass: "দশম শ্রেণি",
      rating: 5,
      text: "এডুমেটিক স্কুল অ্যান্ড কলেজের শিক্ষার মান অত্যন্ত উন্নত। এখানকার শিক্ষকগণ খুবই যত্নশীল এবং প্রতিটি শিক্ষার্থীর প্রতি বিশেষ নজর রাখেন।"
    },
    {
      id: 2,
      name: "মিসেস রোকেয়া খাতুন",
      relation: "তানিয়া আক্তারের মাতা",
      studentClass: "নবম শ্রেণি",
      rating: 5,
      text: "আমার মেয়ে এই স্কুলে ভর্তি হওয়ার পর থেকে তার পড়াশোনায় বিশাল উন্নতি হয়েছে। এখানকার পরিবেশ খুবই ভালো।"
    },
    {
      id: 3,
      name: "জনাব মোহাম্মদ রহিম",
      relation: "রাহুল দাসের অভিভাবক",
      studentClass: "অষ্টম শ্রেণি",
      rating: 5,
      text: "এডুমেটিক স্কুলের সবচেয়ে বড় বিশেষত্ব হলো এখানে সামগ্রিক শিক্ষায় গুরুত্ব দেওয়া হয়। নৈতিক মূল্যবোধের বিকাশে গুরুত্বপূর্ণ ভূমিকা পালন করছে।"
    },
    {
      id: 4,
      name: "মিসেস সালমা বেগম",
      relation: "নুসরাত জাহানের মাতা",
      studentClass: "সপ্তম শ্রেণি",
      rating: 5,
      text: "এই স্কুলের শৃঙ্খলা ও নিয়মানুবর্তিতা প্রশংসনীয়। শিক্ষার্থীদের সাথে শিক্ষকদের আচরণ অত্যন্ত ভালো।"
    },
    {
      id: 5,
      name: "জনাব আহমেদ হোসেন",
      relation: "ইমরান হাসানের পিতা",
      studentClass: "ষষ্ঠ শ্রেণি",
      rating: 5,
      text: "আমার ছেলে এই স্কুলের পরিবেশে আত্মবিশ্বাসী হয়ে উঠেছে। সহপাঠী কার্যক্রম ও খেলাধুলার সুবিধা চমৎকার।"
    },
    {
      id: 6,
      name: "মিসেস ফরিদা খাতুন",
      relation: "রায়হান আহমেদের মাতা",
      studentClass: "দশম শ্রেণি",
      rating: 5,
      text: "এডুমেটিক স্কুলে আমার সন্তানের শিক্ষাজীবন অত্যন্ত সফল হয়েছে। আধুনিক শিক্ষাপদ্ধতি ও প্রযুক্তির ব্যবহার যুগোপযোগী।"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index}
            className={`h-5 w-5 ${
              index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-primary to-primary/80 p-4 rounded-full shadow-lg">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            অভিভাবকদের মতামত
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            আমাদের প্রতিষ্ঠান সম্পর্কে অভিভাবকদের প্রতিক্রিয়া ও অভিজ্ঞতা যা আমাদের 
            শিক্ষার মানের প্রমাণ বহন করে
          </p>
        </div>

        {/* Testimonials Grid - Enhanced Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform relative overflow-hidden group ${
                index % 2 === 0 ? "md:translate-y-4" : ""
              }`}
            >
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
              
              <CardContent className="p-8">
                {/* Quote decoration */}
                <div className="flex justify-center mb-6 relative">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full p-4 relative">
                    <Quote className="h-8 w-8 text-primary" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                </div>

                {/* Enhanced Rating */}
                {renderStars(testimonial.rating)}

                {/* Testimonial Text with better typography */}
                <blockquote className="text-muted-foreground leading-relaxed mb-8 text-center italic font-medium text-lg relative">
                  <span className="text-primary text-6xl absolute -top-4 -left-2 opacity-20 font-serif">"</span>
                  {testimonial.text}
                  <span className="text-primary text-6xl absolute -bottom-8 -right-2 opacity-20 font-serif">"</span>
                </blockquote>

                {/* Enhanced Author Info */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <Avatar className="h-20 w-20 mx-auto ring-4 ring-primary/20 shadow-lg">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white font-bold text-xl">
                        {testimonial.name.split(' ')[1]?.charAt(0) || testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-primary text-xl mb-2">
                    {testimonial.name}
                  </h4>
                  
                  <p className="text-muted-foreground text-base mb-3 font-medium">
                    {testimonial.relation}
                  </p>
                  
                  <div className="bg-gradient-to-r from-accent/20 to-primary/10 px-4 py-2 rounded-full inline-block">
                    <span className="text-primary text-base font-bold">
                      {testimonial.studentClass}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white max-w-4xl mx-auto shadow-2xl border-0 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <User className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                আপনিও আপনার মতামত জানান
              </h3>
              
              <p className="mb-8 opacity-90 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                আমাদের প্রতিষ্ঠান সম্পর্কে আপনার অভিজ্ঞতা ও মতামত আমাদের সাথে শেয়ার করুন। 
                আপনার প্রতিক্রিয়া আমাদের আরও উন্নতির পথ দেখায়।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg">
                  মতামত পাঠান
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
                  যোগাযোগ করুন
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonials;
