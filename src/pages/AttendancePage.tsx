
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, UserCheck, Search, Download, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AttendancePage = () => {
  const attendanceStats = {
    totalStudents: 1250,
    presentToday: 1180,
    absentToday: 70,
    attendanceRate: 94.4
  };

  const classAttendance = [
    { class: "ষষ্ঠ শ্রেণি", section: "ক", present: 42, total: 45, percentage: 93.3 },
    { class: "ষষ্ঠ শ্রেণি", section: "খ", present: 40, total: 44, percentage: 90.9 },
    { class: "সপ্তম শ্রেণি", section: "ক", present: 38, total: 40, percentage: 95.0 },
    { class: "সপ্তম শ্রেণি", section: "খ", present: 41, total: 43, percentage: 95.3 },
    { class: "অষ্টম শ্রেণি", section: "ক", present: 39, total: 42, percentage: 92.9 },
    { class: "অষ্টম শ্রেণি", section: "খ", present: 37, total: 41, percentage: 90.2 }
  ];

  const monthlyAttendance = [
    { month: "জানুয়ারি", percentage: 92.5, trend: "up" },
    { month: "ফেব্রুয়ারি", percentage: 94.2, trend: "up" },
    { month: "মার্চ", percentage: 93.8, trend: "down" },
    { month: "এপ্রিল", percentage: 95.1, trend: "up" },
    { month: "মে", percentage: 94.4, trend: "down" }
  ];

  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 95) return "text-green-600 bg-green-50";
    if (percentage >= 90) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="হাজিরা তথ্য"
        description="শিক্ষার্থীদের উপস্থিতির তথ্য ও পরিসংখ্যান"
        icon={<UserCheck />}
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "হাজিরা তথ্য" }
        ]}
      />
      
      <main className="container mx-auto py-4 sm:py-6 lg:py-8 px-4">
        {/* Daily Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-4 text-center">
              <Users className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 mx-auto text-primary mb-1 sm:mb-2" />
              <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-primary">{attendanceStats.totalStudents}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">মোট শিক্ষার্থী</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-4 text-center">
              <UserCheck className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 mx-auto text-green-600 mb-1 sm:mb-2" />
              <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-green-600">{attendanceStats.presentToday}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">আজ উপস্থিত</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-4 text-center">
              <Clock className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 mx-auto text-red-600 mb-1 sm:mb-2" />
              <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-red-600">{attendanceStats.absentToday}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">আজ অনুপস্থিত</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-4 text-center">
              <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 mx-auto text-primary mb-1 sm:mb-2" />
              <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-primary">{attendanceStats.attendanceRate}%</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">উপস্থিতির হার</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-4 sm:mb-6 lg:mb-8 h-auto sm:h-10">
            <TabsTrigger 
              value="individual" 
              className="text-xs sm:text-sm lg:text-base py-2 sm:py-1.5 px-2 sm:px-3 mb-1 sm:mb-0"
            >
              ব্যক্তিগত অনুসন্ধান
            </TabsTrigger>
            <TabsTrigger 
              value="class" 
              className="text-xs sm:text-sm lg:text-base py-2 sm:py-1.5 px-2 sm:px-3 mb-1 sm:mb-0"
            >
              শ্রেণিভিত্তিক
            </TabsTrigger>
            <TabsTrigger 
              value="monthly" 
              className="text-xs sm:text-sm lg:text-base py-2 sm:py-1.5 px-2 sm:px-3"
            >
              মাসিক রিপোর্ট
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <Card className="shadow-sm">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl">শিক্ষার্থীর হাজিরা খোঁজ করুন</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <Label htmlFor="student-id" className="text-xs sm:text-sm lg:text-base">শিক্ষার্থী আইডি</Label>
                    <Input 
                      id="student-id" 
                      placeholder="আইডি নম্বর লিখুন" 
                      className="text-xs sm:text-sm lg:text-base h-8 sm:h-10 mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="class-select" className="text-xs sm:text-sm lg:text-base">শ্রেণি</Label>
                    <Select>
                      <SelectTrigger className="text-xs sm:text-sm lg:text-base h-8 sm:h-10 mt-1">
                        <SelectValue placeholder="শ্রেণি নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6" className="text-xs sm:text-sm">ষষ্ঠ শ্রেণি</SelectItem>
                        <SelectItem value="7" className="text-xs sm:text-sm">সপ্তম শ্রেণি</SelectItem>
                        <SelectItem value="8" className="text-xs sm:text-sm">অষ্টম শ্রেণি</SelectItem>
                        <SelectItem value="9" className="text-xs sm:text-sm">নবম শ্রেণি</SelectItem>
                        <SelectItem value="10" className="text-xs sm:text-sm">দশম শ্রেণি</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <Label htmlFor="month-select" className="text-xs sm:text-sm lg:text-base">মাস</Label>
                    <Select>
                      <SelectTrigger className="text-xs sm:text-sm lg:text-base h-8 sm:h-10 mt-1">
                        <SelectValue placeholder="মাস নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="january" className="text-xs sm:text-sm">জানুয়ারি</SelectItem>
                        <SelectItem value="february" className="text-xs sm:text-sm">ফেব্রুয়ারি</SelectItem>
                        <SelectItem value="march" className="text-xs sm:text-sm">মার্চ</SelectItem>
                        <SelectItem value="april" className="text-xs sm:text-sm">এপ্রিল</SelectItem>
                        <SelectItem value="may" className="text-xs sm:text-sm">মে</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <Button className="flex-1 text-xs sm:text-sm lg:text-base h-8 sm:h-10">
                    <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    অনুসন্ধান করুন
                  </Button>
                  <Button variant="outline" className="flex-1 sm:flex-none text-xs sm:text-sm lg:text-base h-8 sm:h-10">
                    <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    ডাউনলোড
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="class">
            <Card className="shadow-sm">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl">আজকের শ্রেণিভিত্তিক উপস্থিতি</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px] sm:min-w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm lg:text-base">শ্রেণি</th>
                        <th className="text-left p-2 sm:p-3 text-xs sm:text-sm lg:text-base">শাখা</th>
                        <th className="text-center p-2 sm:p-3 text-xs sm:text-sm lg:text-base">উপস্থিত</th>
                        <th className="text-center p-2 sm:p-3 text-xs sm:text-sm lg:text-base">মোট</th>
                        <th className="text-center p-2 sm:p-3 text-xs sm:text-sm lg:text-base">শতাংশ</th>
                        <th className="text-center p-2 sm:p-3 text-xs sm:text-sm lg:text-base">অবস্থা</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classAttendance.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="p-2 sm:p-3 font-medium text-xs sm:text-sm lg:text-base">{item.class}</td>
                          <td className="p-2 sm:p-3 text-xs sm:text-sm lg:text-base">{item.section}</td>
                          <td className="p-2 sm:p-3 text-center text-xs sm:text-sm lg:text-base">{item.present}</td>
                          <td className="p-2 sm:p-3 text-center text-xs sm:text-sm lg:text-base">{item.total}</td>
                          <td className="p-2 sm:p-3 text-center font-bold text-xs sm:text-sm lg:text-base">{item.percentage}%</td>
                          <td className="p-2 sm:p-3 text-center">
                            <Badge className={`${getAttendanceColor(item.percentage)} text-xs px-1 py-0.5 sm:px-2 sm:py-1`}>
                              {item.percentage >= 95 ? 'চমৎকার' : item.percentage >= 90 ? 'ভাল' : 'উন্নতি প্রয়োজন'}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly">
            <Card className="shadow-sm">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl">মাসিক উপস্থিতির পরিসংখ্যান</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {monthlyAttendance.map((item, index) => (
                    <Card key={index} className="border-primary/20 shadow-sm">
                      <CardContent className="p-3 sm:p-4 text-center">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-primary text-xs sm:text-sm lg:text-base">{item.month}</h3>
                          <TrendingUp className={`h-3 w-3 sm:h-4 sm:w-4 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                        </div>
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1">{item.percentage}%</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">গড় উপস্থিতি</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default AttendancePage;
