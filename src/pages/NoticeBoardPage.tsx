
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, Search, Calendar, Download, Eye, Clock, AlertCircle, Info, Megaphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const NoticeBoardPage = () => {
  const allNotices = [
    {
      id: 1,
      title: "শীতকালীন ছুটির ঘোষণা",
      date: "১৫ ডিসেম্বর ২০২৪",
      priority: "জরুরি",
      category: "ছুটি",
      content: "আগামী ২০ ডিসেম্বর থেকে ১৫ জানুয়ারি পর্যন্ত শীতকালীন ছুটি থাকবে। সকল শিক্ষার্থী ও অভিভাবকদের অনুরোধ করা হচ্ছে এই সময়সূচি মেনে চলার জন্য।",
      attachments: ["winter_holiday_notice.pdf"],
      views: 234
    },
    {
      id: 2,
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৪",
      date: "১০ ডিসেম্বর ২০২৪",
      priority: "সাধারণ",
      category: "খেলাধুলা",
      content: "আগামী ২৫ ডিসেম্বর বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে। সকল শিক্ষার্থী অংশগ্রহণের জন্য আমন্ত্রিত। রেজিস্ট্রেশন চলছে।",
      attachments: ["sports_schedule.pdf", "registration_form.pdf"],
      views: 156
    },
    {
      id: 3,
      title: "অভিভাবক সভা আহ্বান",
      date: "০৮ ডিসেম্বর ২০২৪",
      priority: "গুরুত্বপূর্ণ",
      category: "সভা",
      content: "আগামী ২২ ডিসেম্বর সকাল ১০টায় অভিভাবক সভা অনুষ্ঠিত হবে। সকল অভিভাবকদের উপস্থিতি কাম্য।",
      attachments: ["parent_meeting_agenda.pdf"],
      views: 189
    },
    {
      id: 4,
      title: "পরীক্ষার রুটিন প্রকাশ - বার্ষিক ২০২৪",
      date: "০৫ ডিসেম্বর ২০২৪",
      priority: "জরুরি",
      category: "পরীক্ষা",
      content: "বার্ষিক পরীক্ষার রুটিন প্রকাশিত হয়েছে। সকল শিক্ষার্থী রুটিন অনুযায়ী প্রস্তুতি নিবেন।",
      attachments: ["annual_exam_routine_2024.pdf"],
      views: 312
    },
    {
      id: 5,
      title: "নতুন শিক্ষক নিয়োগ",
      date: "০২ ডিসেম্বর ২০২৪",
      priority: "তথ্য",
      category: "নিয়োগ",
      content: "গণিত এবং বিজ্ঞান বিষয়ে নতুন শিক্ষক নিয়োগ দেওয়া হয়েছে। শিক্ষার্থীরা আগামী সপ্তাহ থেকে ক্লাস পাবে।",
      attachments: [],
      views: 98
    },
    {
      id: 6,
      title: "বিদ্যালয়ের নিয়মাবলী আপডেট",
      date: "২৮ নভেম্বর ২০২ৄ",
      priority: "গুরুত্বপূর্ণ",
      category: "নিয়মাবলী",
      content: "বিদ্যালয়ের কিছু নিয়মাবলী আপডেট করা হয়েছে। সকল শিক্ষার্থী ও অভিভাবকদের অবহিত থাকার জন্য অনুরোধ।",
      attachments: ["school_rules_2024.pdf"],
      views: 145
    },
    {
      id: 7,
      title: "বৃত্তি পরীক্ষার আবেদন",
      date: "২৫ নভেম্বর ২০২ৄ",
      priority: "তথ্য",
      category: "বৃত্তি",
      content: "প্রাথমিক ও উচ্চ বৃত্তি পরীক্ষার জন্য আবেদন চলছে। আবেদনের শেষ তারিখ ৩১ ডিসেম্বর।",
      attachments: ["scholarship_application.pdf"],
      views: 167
    },
    {
      id: 8,
      title: "বিজ্ঞান মেলা ২০২৪",
      date: "২২ নভেম্বর ২০২৪",
      priority: "সাধারণ",
      category: "একাডেমিক",
      content: "আগামী মাসে বিজ্ঞান মেলার আয়োজন করা হবে। আগ্রহী শিক্ষার্থীরা প্রকল্প জমা দিতে পারেন।",
      attachments: ["science_fair_guidelines.pdf"],
      views: 134
    }
  ];

  const categories = ["সব", "ছুটি", "পরীক্ষা", "সভা", "খেলাধুলা", "একাডেমিক", "নিয়োগ", "নিয়মাবলী", "বৃত্তি"];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "জরুরি": return "bg-red-500 text-white";
      case "গুরুত্বপূর্ণ": return "bg-orange-500 text-white";
      case "তথ্য": return "bg-blue-500 text-white";
      default: return "bg-primary text-white";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "জরুরি": return <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />;
      case "গুরুত্বপূর্ণ": return <Megaphone className="h-3 w-3 sm:h-4 sm:w-4" />;
      case "তথ্য": return <Info className="h-3 w-3 sm:h-4 sm:w-4" />;
      default: return <Bell className="h-3 w-3 sm:h-4 sm:w-4" />;
    }
  };

  const urgentNotices = allNotices.filter(notice => notice.priority === "জরুরি");
  const importantNotices = allNotices.filter(notice => notice.priority === "গুরুত্বপূর্ণ");

  return (
    <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      
      <PageHeader
        title="নোটিশ বোর্ড"
        description="গুরুত্বপূর্ণ ঘোষণা ও তথ্যসমূহ এক স্থানে"
        icon={<Bell />}
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "নোটিশ বোর্ড" }
        ]}
      />
      
      <main className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          {/* Search and Filter Section */}
          <Card className="shadow-lg border-primary/20 mb-6 sm:mb-8">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-primary flex items-center text-lg sm:text-xl">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                নোটিশ খোঁজ করুন
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    কীওয়ার্ড
                  </label>
                  <Input placeholder="নোটিশ খোঁজ করুন..." className="text-sm" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    ক্যাটেগরি
                  </label>
                  <Select>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="ক্যাটেগরি নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category} className="text-sm">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2">
                    অগ্রাধিকার
                  </label>
                  <Select>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="অগ্রাধিকার নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all" className="text-sm">সব</SelectItem>
                      <SelectItem value="জরুরি" className="text-sm">জরুরি</SelectItem>
                      <SelectItem value="গুরুত্বপূর্ণ" className="text-sm">গুরুত্বপূর্ণ</SelectItem>
                      <SelectItem value="সাধারণ" className="text-sm">সাধারণ</SelectItem>
                      <SelectItem value="তথ্য" className="text-sm">তথ্য</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 sm:mb-8 h-auto gap-1 sm:gap-0">
              <TabsTrigger value="all" className="flex items-center justify-center space-x-2 text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5">
                <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>সকল নোটিশ</span>
              </TabsTrigger>
              <TabsTrigger value="urgent" className="flex items-center justify-center space-x-2 text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5">
                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>জরুরি নোটিশ</span>
              </TabsTrigger>
              <TabsTrigger value="important" className="flex items-center justify-center space-x-2 text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-2.5">
                <Megaphone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>গুরুত্বপূর্ণ নোটিশ</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6">
                {allNotices.map((notice) => (
                  <Card key={notice.id} className="shadow-lg border-primary/20 hover:shadow-xl transition-shadow">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                            <Badge className={`${getPriorityColor(notice.priority)} w-fit text-xs`}>
                              {getPriorityIcon(notice.priority)}
                              <span className="ml-1">{notice.priority}</span>
                            </Badge>
                            <Badge variant="outline" className="w-fit text-xs">{notice.category}</Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {notice.date}
                            </div>
                          </div>
                          <CardTitle className="text-primary text-base sm:text-xl mb-2 leading-tight">
                            {notice.title}
                          </CardTitle>
                        </div>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground flex-shrink-0">
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{notice.views}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                        {notice.content}
                      </p>
                      
                      {notice.attachments.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">সংযুক্তি:</h4>
                          <div className="flex flex-wrap gap-2">
                            {notice.attachments.map((attachment, index) => (
                              <Button key={index} variant="outline" size="sm" className="flex items-center space-x-1 text-xs px-2 py-1 h-auto">
                                <Download className="h-3 w-3" />
                                <span className="truncate max-w-[120px] sm:max-w-none">{attachment}</span>
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-border gap-3">
                        <div className="flex items-center space-x-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>প্রকাশ: {notice.date}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-auto w-fit">
                          বিস্তারিত দেখুন
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="urgent" className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6">
                {urgentNotices.map((notice) => (
                  <Card key={notice.id} className="shadow-lg border-red-200 hover:shadow-xl transition-shadow">
                    <CardHeader className="bg-red-50 p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                            <Badge className="bg-red-500 text-white w-fit text-xs">
                              <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {notice.priority}
                            </Badge>
                            <Badge variant="outline" className="w-fit text-xs">{notice.category}</Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {notice.date}
                            </div>
                          </div>
                          <CardTitle className="text-red-700 text-base sm:text-xl mb-2 leading-tight">
                            {notice.title}
                          </CardTitle>
                        </div>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground flex-shrink-0">
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{notice.views}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                        {notice.content}
                      </p>
                      
                      {notice.attachments.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">সংযুক্তি:</h4>
                          <div className="flex flex-wrap gap-2">
                            {notice.attachments.map((attachment, index) => (
                              <Button key={index} variant="outline" size="sm" className="flex items-center space-x-1 text-xs px-2 py-1 h-auto">
                                <Download className="h-3 w-3" />
                                <span className="truncate max-w-[120px] sm:max-w-none">{attachment}</span>
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-border gap-3">
                        <div className="flex items-center space-x-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>প্রকাশ: {notice.date}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-auto w-fit">
                          বিস্তারিত দেখুন
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="important" className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6">
                {importantNotices.map((notice) => (
                  <Card key={notice.id} className="shadow-lg border-orange-200 hover:shadow-xl transition-shadow">
                    <CardHeader className="bg-orange-50 p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                            <Badge className="bg-orange-500 text-white w-fit text-xs">
                              <Megaphone className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {notice.priority}
                            </Badge>
                            <Badge variant="outline" className="w-fit text-xs">{notice.category}</Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {notice.date}
                            </div>
                          </div>
                          <CardTitle className="text-orange-700 text-base sm:text-xl mb-2 leading-tight">
                            {notice.title}
                          </CardTitle>
                        </div>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground flex-shrink-0">
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{notice.views}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                        {notice.content}
                      </p>
                      
                      {notice.attachments.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">সংযুক্তি:</h4>
                          <div className="flex flex-wrap gap-2">
                            {notice.attachments.map((attachment, index) => (
                              <Button key={index} variant="outline" size="sm" className="flex items-center space-x-1 text-xs px-2 py-1 h-auto">
                                <Download className="h-3 w-3" />
                                <span className="truncate max-w-[120px] sm:max-w-none">{attachment}</span>
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-border gap-3">
                        <div className="flex items-center space-x-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>প্রকাশ: {notice.date}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs px-3 py-1 h-auto w-fit">
                          বিস্তারিত দেখুন
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NoticeBoardPage;
