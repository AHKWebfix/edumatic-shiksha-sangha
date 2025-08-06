
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck2, Users, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const StaffAttendance = () => {
  const staffData = [
    { name: "আলিমা খাতুন", department: "বাংলা", status: "present", time: "৭:৪৫" },
    { name: "রফিক উল্লাহ", department: "ইংরেজি", status: "present", time: "৭:৫০" },
    { name: "সালমা বেগম", department: "গণিত", status: "present", time: "৭:৪০" },
    { name: "ড. আব্দুর রহমান", department: "বিজ্ঞান", status: "present", time: "৭:৫৫" },
    { name: "নূরুল আমিন", department: "সমাজবিজ্ঞান", status: "late", time: "৮:১৫" },
    { name: "ফাতেমা বেগম", department: "ইসলাম শিক্ষা", status: "absent", time: "-" },
    { name: "করিম উদ্দিন", department: "শারীরিক শিক্ষা", status: "present", time: "৭:৩৫" },
    { name: "রোকেয়া খাতুন", department: "গার্হস্থ্য বিজ্ঞান", status: "present", time: "৭:৪৮" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return <Badge className="bg-green-500 text-white text-xs">উপস্থিত</Badge>;
      case "late":
        return <Badge className="bg-orange-500 text-white text-xs">দেরিতে</Badge>;
      case "absent":
        return <Badge className="bg-red-500 text-white text-xs">অনুপস্থিত</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">অজানা</Badge>;
    }
  };

  const totalStaff = staffData.length;
  const presentStaff = staffData.filter(s => s.status === "present").length;
  const lateStaff = staffData.filter(s => s.status === "late").length;
  const absentStaff = staffData.filter(s => s.status === "absent").length;

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-accent/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <UserCheck2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
              কর্মচারী উপস্থিতি
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            আজকের দিনে শিক্ষক ও কর্মচারীদের উপস্থিতির তথ্য
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
            <Card className="bg-white shadow-lg border-primary/20">
              <CardContent className="p-3 sm:p-6 text-center">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-primary">{totalStaff}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">মোট কর্মচারী</div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 shadow-lg border-green-200">
              <CardContent className="p-3 sm:p-6 text-center">
                <UserCheck2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-green-600">{presentStaff}</div>
                <div className="text-xs sm:text-sm text-green-700">উপস্থিত</div>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-50 shadow-lg border-orange-200">
              <CardContent className="p-3 sm:p-6 text-center">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-orange-600">{lateStaff}</div>
                <div className="text-xs sm:text-sm text-orange-700">দেরিতে</div>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50 shadow-lg border-red-200">
              <CardContent className="p-3 sm:p-6 text-center">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-red-600">{absentStaff}</div>
                <div className="text-xs sm:text-sm text-red-700">অনুপস্থিত</div>
              </CardContent>
            </Card>
          </div>

          {/* Staff List */}
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 sm:p-6">
              <CardTitle className="text-base sm:text-xl">
                আজকের উপস্থিতি তালিকা
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {staffData.map((staff, index) => (
                  <div 
                    key={index}
                    className={`p-3 sm:p-6 border-b last:border-b-0 hover:bg-accent/20 transition-colors ${
                      index % 2 === 0 ? "bg-accent/5" : "bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                        <Avatar className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {staff.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-foreground text-sm sm:text-lg truncate leading-tight">
                            {staff.name}
                          </h3>
                          <p className="text-muted-foreground text-xs sm:text-base truncate">{staff.department} বিভাগ</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 flex-shrink-0">
                        {staff.time !== "-" && (
                          <div className="text-right">
                            <div className="text-xs text-muted-foreground">আগমনের সময়</div>
                            <div className="font-medium text-xs sm:text-sm">{staff.time}</div>
                          </div>
                        )}
                        {getStatusBadge(staff.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StaffAttendance;
