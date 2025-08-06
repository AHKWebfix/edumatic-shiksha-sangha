
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Award, Calendar, GraduationCap, BookOpen, Users } from "lucide-react";

const PrincipalPage = () => {
  return (
    <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      
      <PageHeader
        title="অধ্যক্ষ"
        subtitle="প্রতিষ্ঠানের নেতৃত্ব"
        description="আমাদের প্রতিষ্ঠানের নেতৃত্বে রয়েছেন একজন অভিজ্ঞ ও দক্ষ শিক্ষাবিদ"
        icon={<User />}
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "প্রশাসন", href: "/administration" },
          { label: "অধ্যক্ষ" }
        ]}
      />
      
      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Principal Profile */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-white/90 shadow-xl border-primary/20">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-24 w-24 text-primary" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-primary mb-2">
                      ড. মোহাম্মদ রহিম উদ্দিন
                    </h2>
                    <p className="text-xl text-muted-foreground mb-4">অধ্যক্ষ</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                      <Badge variant="secondary">পিএইচডি ইন এডুকেশন</Badge>
                      <Badge variant="secondary">২৫+ বছরের অভিজ্ঞতা</Badge>
                      <Badge variant="secondary">শিক্ষা গবেষক</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm">principal@edumatic.edu.bd</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm">০১৭৮৮-৯৯৮৮৭৮</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm">যোগদান: জানুয়ারি ২০১৮</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span className="text-sm">ঢাকা বিশ্ববিদ্যালয়</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/90 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <BookOpen className="h-6 w-6 mr-3 text-primary" />
                  শিক্ষাগত যোগ্যতা
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary text-lg">পিএইচডি ইন এডুকেশন</h3>
                  <p className="text-sm text-muted-foreground">ঢাকা বিশ্ববিদ্যালয় (২০১৫)</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary text-lg">এমএড (শিক্ষা বিষয়ে স্নাতকোত্তর)</h3>
                  <p className="text-sm text-muted-foreground">ঢাকা বিশ্ববিদ্যালয় (২০০৫)</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary text-lg">বিএড (শিক্ষা বিষয়ে স্নাতক)</h3>
                  <p className="text-sm text-muted-foreground">জাতীয় বিশ্ববিদ্যালয় (২০০২)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="h-6 w-6 mr-3 text-primary" />
                  পুরস্কার ও সম্মাননা
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary text-lg">শ্রেষ্ঠ শিক্ষক পুরস্কার</h3>
                  <p className="text-sm text-muted-foreground">শিক্ষা মন্ত্রণালয়, বাংলাদেশ (২০২১)</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary text-lg">গবেষণা পুরস্কার</h3>
                  <p className="text-sm text-muted-foreground">বাংলাদেশ শিক্ষা গবেষণা পরিষদ (২০১৯)</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary text-lg">শিক্ষা উন্নয়ন পুরস্কার</h3>
                  <p className="text-sm text-muted-foreground">জেলা প্রশাসন, ঢাকা (২০২০)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision & Message */}
          <Card className="bg-white/90 shadow-xl mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="h-6 w-6 mr-3 text-primary" />
                অধ্যক্ষের বার্তা
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed text-lg space-y-4">
              <p>
                "শিক্ষা একটি জাতির মেরুদণ্ড। আমাদের এডুমেটিক স্কুল অ্যান্ড কলেজে আমরা প্রতিটি 
                শিক্ষার্থীর মধ্যে নৈতিক মূল্যবোধ, সৃজনশীলতা এবং দেশপ্রেম জাগিয়ে তুলতে প্রতিশ্রুতিবদ্ধ।"
              </p>
              <p>
                "আমাদের লক্ষ্য কেবল পাঠ্যবই পড়ানো নয়, বরং প্রতিটি শিক্ষার্থীকে একজন সুনাগরিক 
                হিসেবে গড়ে তোলা। আমরা আধুনিক শিক্ষা ব্যবস্থার সাথে আমাদের ঐতিহ্যবাহী মূল্যবোধের 
                সমন্বয় ঘটিয়ে একটি আদর্শ শিক্ষা প্রতিষ্ঠান হিসেবে এগিয়ে চলেছি।"
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrincipalPage;
