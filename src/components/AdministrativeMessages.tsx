
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, User, Crown } from "lucide-react";

const AdministrativeMessages = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            প্রশাসনিক বার্তা
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমাদের নেতৃত্বের পক্ষ থেকে অভিভাবক ও শিক্ষার্থীদের জন্য বার্তা
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Principal's Message */}
          <Card className="bg-white/90 shadow-xl border-primary/20 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="flex items-center text-xl">
                <User className="h-6 w-6 mr-3" />
                অধ্যক্ষের বার্তা
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    ড. মোহাম্মদ রহিম উদ্দিন
                  </h3>
                  <p className="text-muted-foreground">অধ্যক্ষ</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                <blockquote className="text-muted-foreground leading-relaxed pl-6">
                  "শিক্ষা হলো সেই আলো যা অন্ধকার থেকে আলোর পথে নিয়ে যায়। আমাদের এডুমেটিক স্কুল 
                  অ্যান্ড কলেজ প্রতিটি শিক্ষার্থীর মধ্যে সেই আলো জ্বালানোর প্রত্যয়ে নিবেদিত। 
                  আমরা শুধু পাঠ্যবই পড়াই না, বরং জীবনের জন্য প্রয়োজনীয় মূল্যবোধ ও দক্ষতা 
                  অর্জনে সহায়তা করি।"
                </blockquote>
              </div>
            </CardContent>
          </Card>

          {/* Chairman's Message */}
          <Card className="bg-white/90 shadow-xl border-primary/20 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="flex items-center text-xl">
                <Crown className="h-6 w-6 mr-3" />
                পরিচালনা পর্ষদের চেয়ারম্যানের বার্তা
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Crown className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    জনাব আবুল কালাম আজাদ
                  </h3>
                  <p className="text-muted-foreground">চেয়ারম্যান, পরিচালনা পর্ষদ</p>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                <blockquote className="text-muted-foreground leading-relaxed pl-6">
                  "আমাদের প্রতিষ্ঠান শিক্ষার মান উন্নয়নে প্রতিশ্রুতিবদ্ধ। আমরা বিশ্বাস করি যে, 
                  উন্নত শিক্ষা ব্যবস্থা ও যুগোপযোগী কারিকুলামের মাধ্যমে আমরা গড়ে তুলতে পারি 
                  দক্ষ ও আত্মনির্ভরশীল একটি প্রজন্ম। আমাদের সকল শিক্ষার্থী যেন আগামীর 
                  বাংলাদেশ গড়ায় অবদান রাখতে পারে, সেই লক্ষ্যে আমরা কাজ করে যাচ্ছি।"
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdministrativeMessages;
