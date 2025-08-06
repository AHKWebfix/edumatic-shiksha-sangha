
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const AcademicCalendarPage = () => {
  const academicEvents = [
    {
      date: "১ জানুয়ারি",
      title: "নববর্ষ উদযাপন",
      type: "holiday",
      description: "জাতীয় ছুটি"
    },
    {
      date: "১৫ জানুয়ারি",
      title: "ষাণ্মাসিক পরীক্ষা শুরু",
      type: "exam",
      description: "সকল শ্রেণির জন্য"
    },
    {
      date: "৩০ জানুয়ারি",
      title: "ষাণ্মাসিক পরীক্ষা সমাপ্ত",
      type: "exam",
      description: "পরীক্ষার ফলাফল প্রকাশ"
    },
    {
      date: "২১ ফেব্রুয়ারি",
      title: "আন্তর্জাতিক মাতৃভাষা দিবস",
      type: "special",
      description: "সাংস্কৃতিক অনুষ্ঠান"
    },
    {
      date: "১ মার্চ",
      title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
      type: "activity",
      description: "আন্তঃশ্রেণি খেলাধুলা"
    },
    {
      date: "২৬ মার্চ",
      title: "স্বাধীনতা দিবস",
      type: "holiday",
      description: "জাতীয় দিবস উদযাপন"
    },
    {
      date: "১৪ এপ্রিল",
      title: "পহেলা বৈশাখ",
      type: "special",
      description: "বাংলা নববর্ষ উদযাপন"
    },
    {
      date: "১ মে",
      title: "মে দিবস",
      type: "holiday",
      description: "আন্তর্জাতিক শ্রমিক দিবস"
    },
    {
      date: "১৫ মে",
      title: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান",
      type: "activity",
      description: "শিল্প ও সংস্কৃতি প্রতিযোগিতা"
    },
    {
      date: "১ জুন",
      title: "বার্ষিক পরীক্ষা শুরু",
      type: "exam",
      description: "সকল শ্রেণির চূড়ান্ত পরীক্ষা"
    },
    {
      date: "৩০ জুন",
      title: "বার্ষিক পরীক্ষা সমাপ্ত",
      type: "exam",
      description: "গ্রীষ্মকালীন ছুটি শুরু"
    },
    {
      date: "১৫ আগস্ট",
      title: "জাতীয় শোক দিবস",
      type: "special",
      description: "বঙ্গবন্ধুর স্মরণে"
    }
  ];

  const getEventTypeStyle = (type: string) => {
    switch (type) {
      case "exam":
        return "bg-red-100 text-red-800 border-red-200";
      case "holiday":
        return "bg-green-100 text-green-800 border-green-200";
      case "activity":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "special":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "exam":
        return <AlertCircle className="h-4 w-4" />;
      case "holiday":
        return <CheckCircle className="h-4 w-4" />;
      case "activity":
        return <Clock className="h-4 w-4" />;
      case "special":
        return <Calendar className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  const getEventTypeName = (type: string) => {
    switch (type) {
      case "exam":
        return "পরীক্ষা";
      case "holiday":
        return "ছুটি";
      case "activity":
        return "কার্যক্রম";
      case "special":
        return "বিশেষ দিবস";
      default:
        return "অন্যান্য";
    }
  };

  const monthlyStats = [
    { month: "জানুয়ারি", workingDays: 20, holidays: 4, events: 3 },
    { month: "ফেব্রুয়ারি", workingDays: 22, holidays: 2, events: 2 },
    { month: "মার্চ", workingDays: 24, holidays: 3, events: 4 },
    { month: "এপ্রিল", workingDays: 23, holidays: 2, events: 3 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="একাডেমিক ক্যালেন্ডার"
        subtitle="একাডেমিক"
        description="শিক্ষাবর্ষের সম্পূর্ণ কার্যক্রম ও গুরুত্বপূর্ণ তারিখসমূহ"
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "একাডেমিক" },
          { label: "একাডেমিক ক্যালেন্ডার" }
        ]}
        icon={<Calendar />}
      />

      {/* Quick Stats */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">মাসিক পরিসংখ্যান</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {monthlyStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-primary">{stat.month}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    <p>কর্মদিবস: <span className="font-semibold text-primary">{stat.workingDays}</span></p>
                    <p>ছুটির দিন: <span className="font-semibold text-green-600">{stat.holidays}</span></p>
                    <p>অনুষ্ঠান: <span className="font-semibold text-blue-600">{stat.events}</span></p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 md:mb-0">বার্ষিক কর্মসূচি</h2>
              <Button className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>পূর্ণ ক্যালেন্ডার ডাউনলোড</span>
              </Button>
            </div>

            <div className="space-y-6">
              {academicEvents.map((event, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
                            <Badge 
                              className={`${getEventTypeStyle(event.type)} flex items-center space-x-1`}
                            >
                              {getEventIcon(event.type)}
                              <span>{getEventTypeName(event.type)}</span>
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-1">{event.description}</p>
                          <p className="text-sm font-medium text-primary">{event.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center space-x-2">
                        <Download className="h-3 w-3" />
                        <span>বিস্তারিত</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">গুরুত্বপূর্ণ তারিখসমূহ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  পরীক্ষার তারিখ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>ষাণ্মাসিক: ১৫ জানুয়ারি - ৩০ জানুয়ারি</p>
                <p>বার্ষিক: ১ জুন - ৩০ জুন</p>
                <p>প্রাক-নির্বাচনী: ১৫ সেপ্টেম্বর - ৩০ সেপ্টেম্বর</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  ছুটির দিনসমূহ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>গ্রীষ্মকালীন: ১ জুলাই - ৩১ জুলাই</p>
                <p>শীতকালীন: ১৫ ডিসেম্বর - ৫ জানুয়ারি</p>
                <p>ঈদ ছুটি: ৫ দিন</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Clock className="h-5 w-5 mr-2" />
                  বিশেষ কার্যক্রম
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>ক্রীড়া প্রতিযোগিতা: মার্চ</p>
                <p>সাংস্কৃতিক অনুষ্ঠান: মে</p>
                <p>বার্ষিক পুরস্কার বিতরণী: ডিসেম্বর</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicCalendarPage;
