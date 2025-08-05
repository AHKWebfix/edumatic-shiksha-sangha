
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, Briefcase, Phone, Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ManagingCommitteePage = () => {
  const committeeMembers = [
    {
      name: "জনাব আবুল কালাম আজাদ",
      position: "চেয়ারম্যান",
      profession: "ব্যবসায়ী ও সমাজসেবক",
      phone: "০১৭১১-১২৩৪৫৬",
      email: "chairman@edumatic.edu.bd",
      role: "chairman"
    },
    {
      name: "ড. মোহাম্মদ রহিম উদ্দিন",
      position: "অধ্যক্ষ (সদস্য সচিব)",
      profession: "শিক্ষাবিদ ও গবেষক",
      phone: "০১৭৮৮-৯৯৮৮৭৭",
      email: "principal@edumatic.edu.bd",
      role: "secretary"
    },
    {
      name: "প্রফেসর ড. নূরুল ইসলাম",
      position: "সদস্য",
      profession: "বিশ্ববিদ্যালয়ের অধ্যাপক",
      phone: "০১৯১১-৭৮৯০১২",
      email: "member1@edumatic.edu.bd",
      role: "member"
    },
    {
      name: "জনাব মোহাম্মদ করিম",
      position: "সদস্য",
      profession: "সাবেক সরকারি কর্মকর্তা",
      phone: "০১৮১১-৫৬৭৮৯০",
      email: "member2@edumatic.edu.bd",
      role: "member"
    },
    {
      name: "বেগম রোকেয়া খাতুন",
      position: "সদস্য",
      profession: "সমাজকর্মী",
      phone: "০১৬১১-৩৪৫৬৭৮",
      email: "member3@edumatic.edu.bd",
      role: "member"
    },
    {
      name: "জনাব আনোয়ার হোসেন",
      position: "সদস্য",
      profession: "আইনজীবী",
      phone: "০১৫১১-২৩৪৫৬৭",
      email: "member4@edumatic.edu.bd",
      role: "member"
    }
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "chairman":
        return <Badge className="bg-purple-500 text-white">চেয়ারম্যান</Badge>;
      case "secretary":
        return <Badge className="bg-blue-500 text-white">সদস্য সচিব</Badge>;
      default:
        return <Badge className="bg-green-500 text-white">সদস্য</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 to-primary/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Crown className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-2xl md:text-4xl font-bold text-primary">
              ম্যানেজিং কমিটি
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            আমাদের প্রতিষ্ঠানের নীতি-নির্ধারণী ও পরিচালনা কমিটির সদস্যবৃন্দ
          </p>
        </div>

        {/* Committee Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12 max-w-4xl mx-auto">
          <Card className="text-center p-6 shadow-lg border-primary/20">
            <Crown className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary">৬</div>
            <div className="text-sm text-muted-foreground">মোট সদস্য</div>
          </Card>
          <Card className="text-center p-6 shadow-lg border-primary/20">
            <Users className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary">৩</div>
            <div className="text-sm text-muted-foreground">বছরের মেয়াদ</div>
          </Card>
          <Card className="text-center p-6 shadow-lg border-primary/20">
            <Briefcase className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold text-primary">১০+</div>
            <div className="text-sm text-muted-foreground">গড় অভিজ্ঞতা (বছর)</div>
          </Card>
        </div>

        {/* Committee Members */}
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="text-xl md:text-2xl flex items-center">
                <Crown className="h-6 w-6 mr-3" />
                কমিটির সদস্যবৃন্দ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {committeeMembers.map((member, index) => (
                  <div 
                    key={index}
                    className={`p-4 md:p-6 border-b last:border-b-0 hover:bg-accent/10 transition-colors ${
                      index % 2 === 0 ? "bg-accent/5" : "bg-white"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div className="flex items-center space-x-4 flex-1">
                        <Avatar className="h-16 w-16 md:h-20 md:w-20">
                          <AvatarFallback className={`text-white text-lg md:text-xl font-bold ${
                            member.role === 'chairman' ? 'bg-purple-500' : 
                            member.role === 'secretary' ? 'bg-blue-500' : 'bg-green-500'
                          }`}>
                            {member.name.split(' ')[1]?.charAt(0) || member.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                            {member.name}
                          </h3>
                          <p className="text-primary font-semibold text-sm md:text-base mb-1">
                            {member.position}
                          </p>
                          <p className="text-muted-foreground text-xs md:text-sm">
                            {member.profession}
                          </p>
                          <div className="mt-2">
                            {getRoleBadge(member.role)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2 md:text-right">
                        <div className="flex items-center md:justify-end space-x-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{member.phone}</span>
                        </div>
                        <div className="flex items-center md:justify-end space-x-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium break-all">{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Committee Responsibilities */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="bg-gradient-to-r from-accent to-accent/90 text-white">
              <CardTitle className="text-xl md:text-2xl flex items-center">
                <Briefcase className="h-6 w-6 mr-3" />
                কমিটির দায়িত্ব ও কর্মপরিধি
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3 text-base md:text-lg">প্রধান দায়িত্বসমূহ</h4>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>প্রতিষ্ঠানের নীতি-নির্ধারণ</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>বার্ষিক বাজেট অনুমোদন</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>শিক্ষক নিয়োগ ও পদোন্নতি</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>শিক্ষা কার্যক্রম তদারকি</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3 text-base md:text-lg">সভার সময়সূচি</h4>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>মাসিক সভা - প্রতি মাসের ১ম রবিবার</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>বার্ষিক সাধারণ সভা - জানুয়ারি মাসে</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>জরুরি সভা - প্রয়োজন অনুযায়ী</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ManagingCommitteePage;
