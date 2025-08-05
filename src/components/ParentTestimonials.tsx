
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ParentTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "জনাব আবুল কালাম",
      relation: "সাকিব হাসানের পিতা",
      studentClass: "দশম শ্রেণি",
      rating: 5,
      text: "এডুমেটিক স্কুল অ্যান্ড কলেজের শিক্ষার মান অত্যন্ত উন্নত। এখানকার শিক্ষকগণ খুবই যত্নশীল এবং প্রতিটি শিক্ষার্থীর প্রতি বিশেষ নজর রাখেন। আমার সন্তানের চারিত্রিক উন্নতি ও পড়াশোনায় অগ্রগতি দেখে আমি খুবই সন্তুষ্ট।"
    },
    {
      id: 2,
      name: "মিসেস রোকেয়া খাতুন",
      relation: "তানিয়া আক্তারের মাতা",
      studentClass: "নবম শ্রেণি",
      rating: 5,
      text: "আমার মেয়ে এই স্কুলে ভর্তি হওয়ার পর থেকে তার পড়াশোনায় বিশাল উন্নতি হয়েছে। এখানকার পরিবেশ খুবই ভালো এবং শিক্ষকগণ প্রতিটি বিষয়ে সুস্পষ্ট ধারণা প্রদান করেন। আমি এই প্রতিষ্ঠানকে সবার কাছে সুপারিশ করব।"
    },
    {
      id: 3,
      name: "জনাব মোহাম্মদ রহিম",
      relation: "রাহুল দাসের অভিভাবক",
      studentClass: "অষ্টম শ্রেণি",
      rating: 5,
      text: "এডুমেটিক স্কুলের সবচেয়ে বড় বিশেষত্ব হলো এখানে শুধু পাঠ্যবই নয়, বরং সামগ্রিক শিক্ষায় গুরুত্ব দেওয়া হয়। আমার সন্তানের নৈতিক মূল্যবোধ ও সৃজনশীলতার বিকাশে এই প্রতিষ্ঠান গুরুত্বপূর্ণ ভূমিকা পালন করছে।"
    },
    {
      id: 4,
      name: "মিসেস সালমা বেগম",
      relation: "নুসরাত জাহানের মাতা",
      studentClass: "সপ্তম শ্রেণি",
      rating: 5,
      text: "এই স্কুলের শৃঙ্খলা ও নিয়মানুবর্তিতা প্রশংসনীয়। শিক্ষার্থীদের সাথে শিক্ষকদের আচরণ অত্যন্ত ভালো। আমার মেয়ে এখানে পড়ে খুশি এবং আমরাও তার উন্নতি দেখে সন্তুষ্ট।"
    },
    {
      id: 5,
      name: "জনাব আহমেদ হোসেন",
      relation: "ইমরান হাসানের পিতা",
      studentClass: "ষষ্ঠ শ্রেণি",
      rating: 5,
      text: "আমার ছেলে প্রথমে লজ্জাবতী ছিল, কিন্তু এই স্কুলের পরিবেশ তাকে আত্মবিশ্বাসী করে তুলেছে। এখানকার সহপাঠী কার্যক্রম ও খেলাধুলার সুবিধা চমৎকার। সন্তানের সার্বিক বিকাশে এই প্রতিষ্ঠান অগ্রণী ভূমিকা পালন করছে।"
    },
    {
      id: 6,
      name: "মিসেস ফরিদা খাতুন",
      relation: "রায়হান আহমেদের মাতা",
      studentClass: "দশম শ্রেণি",
      rating: 5,
      text: "এডুমেটিক স্কুলে আমার সন্তানের শিক্ষাজীবন অত্যন্ত সফল হয়েছে। এখানকার আধুনিক শিক্ষাপদ্ধতি ও প্রযুক্তির ব্যবহার যুগোপযোগী। সর্বোপরি, এটি একটি আদর্শ শিক্ষা প্রতিষ্ঠান।"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star 
            key={index}
            className={`h-4 w-4 ${
              index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              অভিভাবকদের মতামত
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমাদের প্রতিষ্ঠান সম্পর্কে অভিভাবকদের প্রতিক্রিয়া ও অভিজ্ঞতা
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`bg-white shadow-lg border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                index % 3 === 0 ? "md:row-span-1" : ""
              }`}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 text-center italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-3">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                      {testimonial.name.split(' ')[1]?.charAt(0) || testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h4 className="font-bold text-primary text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-1">
                    {testimonial.relation}
                  </p>
                  
                  <div className="bg-accent/20 px-3 py-1 rounded-full">
                    <span className="text-primary text-sm font-medium">
                      {testimonial.studentClass}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary to-primary/90 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                আপনিও আপনার মতামত জানান
              </h3>
              <p className="mb-6 opacity-90">
                আমাদের প্রতিষ্ঠান সম্পর্কে আপনার অভিজ্ঞতা ও মতামত আমাদের সাথে শেয়ার করুন
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-accent transition-colors">
                  মতামত পাঠান
                </button>
                <button className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors">
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
