
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap, Award, Phone, Mail, Calendar } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrincipalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 to-primary/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-2xl md:text-4xl font-bold text-primary">
              প্রধান শিক্ষক
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            আমাদের প্রতিষ্ঠানের নেতৃত্বে রয়েছেন একজন অভিজ্ঞ ও দক্ষ শিক্ষাবিদ
          </p>
        </div>

        {/* Principal Profile */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="shadow-xl border-primary/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="text-xl md:text-2xl">অধ্যক্ষের প্রোফাইল</CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <Avatar className="w-32 h-32 md:w-40 md:h-40">
                    <AvatarFallback className="bg-primary/10 text-primary text-4xl md:text-5xl font-bold">
                      ড.র
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    ড. মোহাম্মদ রহিম উদ্দিন
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">অধ্যক্ষ</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="text-sm md:text-base">পিএইচডি, শিক্ষা বিজ্ঞান</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm md:text-base">২৫ বছরের অভিজ্ঞতা</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-sm md:text-base">০১৭৮৮-৯৯৮৮৭৭</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-sm md:text-base">principal@edumatic.edu.bd</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    <Badge className="bg-green-500 text-white">শিক্ষা বিশেষজ্ঞ</Badge>
                    <Badge className="bg-blue-500 text-white">গবেষক</Badge>
                    <Badge className="bg-purple-500 text-white">লেখক</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message & Achievements */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Principal's Message */}
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/20">
              <CardTitle className="text-lg md:text-xl text-primary flex items-center">
                <User className="h-5 w-5 mr-2" />
                অধ্যক্ষের বার্তা
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <blockquote className="text-muted-foreground leading-relaxed text-sm md:text-base">
                "শিক্ষা হলো সেই আলো যা অন্ধকার থেকে আলোর পথে নিয়ে যায়। আমাদের এডুমেটিক স্কুল 
                অ্যান্ড কলেজ প্রতিটি শিক্ষার্থীর মধ্যে সেই আলো জ্বালানোর প্রত্যয়ে নিবেদিত। 
                আমরা শুধু পাঠ্যবই পড়াই না, বরং জীবনের জন্য প্রয়োজনীয় মূল্যবোধ ও দক্ষতা 
                অর্জনে সহায়তা করি। আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীকে একজন আদর্শ মানুষ 
                হিসেবে গড়ে তোলা।"
              </blockquote>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/20">
              <CardTitle className="text-lg md:text-xl text-primary flex items-center">
                <Award className="h-5 w-5 mr-2" />
                উল্লেখযোগ্য অর্জন
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-start space-x-2">
                  <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>জাতীয় শিক্ষা পুরস্কার প্রাপ্ত (২০২২)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>শিক্ষা মন্ত্রণালয়ের বিশেষ স্বীকৃতি (২০২১)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>১৫টি গবেষণা প্রকাশনা</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>৫০০+ শিক্ষার্থীর সফল ক্যারিয়ার গঠন</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>আন্তর্জাতিক শিক্ষা সম্মেলনে বক্তা</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrincipalPage;
