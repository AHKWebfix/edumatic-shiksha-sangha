import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: "শীতকালীন ছুটির ঘোষণা",
      date: "১৫ ডিসেম্বর ২০২৪",
      priority: "জরুরি",
      content: "আগামী ২০ ডিসেম্বর থেকে ১৫ জানুয়ারি পর্যন্ত শীতকালীন ছুটি থাকবে।"
    },
    {
      id: 2,
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
      date: "১০ ডিসেম্বর ২০২৪",
      priority: "সাধারণ",
      content: "আগামী ২৫ ডিসেম্বর বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে।"
    },
    {
      id: 3,
      title: "অভিভাবক সভা",
      date: "০৮ ডিসেম্বর ২০২৪",
      priority: "গুরুত্বপূর্ণ",
      content: "আগামী ২২ ডিসেম্বর সকাল ১০টায় অভিভাবক সভা অনুষ্ঠিত হবে।"
    },
    {
      id: 4,
      title: "পরীক্ষার রুটিন প্রকাশ",
      date: "০৫ ডিসেম্বর ২০২৪",
      priority: "জরুরি",
      content: "বার্ষিক পরীক্ষার রুটিন প্রকাশিত হয়েছে। বিস্তারিত দেখুন।"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "জরুরি": return "bg-red-500";
      case "গুরুত্বপূর্ণ": return "bg-orange-500";
      default: return "bg-primary";
    }
  };

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Bell className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              নোটিশ বোর্ড
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            গুরুত্বপূর্ণ ঘোষণা ও তথ্যসমূহ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 sm:p-6">
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <Bell className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                সাম্প্রতিক নোটিশসমূহ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {notices.map((notice, index) => (
                  <div 
                    key={notice.id} 
                    className={`p-4 sm:p-6 border-b last:border-b-0 hover:bg-accent/30 transition-colors cursor-pointer ${
                      index % 2 === 0 ? "bg-accent/10" : "bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                          <Badge className={`${getPriorityColor(notice.priority)} text-white w-fit text-xs sm:text-sm`}>
                            {notice.priority}
                          </Badge>
                          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            {notice.date}
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
                          {notice.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {notice.content}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-primary ml-2 sm:ml-4 opacity-50 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 sm:p-6 bg-accent/5">
                <Button className="w-full" variant="outline">
                  সকল নোটিশ দেখুন
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;
