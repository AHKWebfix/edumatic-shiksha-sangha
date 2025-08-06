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
      
      <main className="container mx-auto py-8 px-4">
        {/* Daily Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 mx-auto text-primary mb-2" />
              <h3 className="text-2xl font-bold text-primary">{attendanceStats.totalStudents}</h3>
              <p className="text-sm text-muted-foreground">মোট শিক্ষার্থী</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <UserCheck className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <h3 className="text-2xl font-bold text-green-600">{attendanceStats.presentToday}</h3>
              <p className="text-sm text-muted-foreground">আজ উপস্থিত</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto text-red-600 mb-2" />
              <h3 className="text-2xl font-bold text-red-600">{attendanceStats.absentToday}</h3>
              <p className="text-sm text-muted-foreground">আজ অনুপস্থিত</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto text-primary mb-2" />
              <h3 className="text-2xl font-bold text-primary">{attendanceStats.attendanceRate}%</h3>
              <p className="text-sm text-muted-foreground">উপস্থিতির হার</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="individual">ব্যক্তিগত অনুসন্ধান</TabsTrigger>
            <TabsTrigger value="class">শ্রেণিভিত্তিক</TabsTrigger>
            <TabsTrigger value="monthly">মাসিক রিপোর্ট</TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <Card>
              <CardHeader>
                <CardTitle>শিক্ষার্থীর হাজিরা খোঁজ করুন</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <Label htmlFor="student-id">শিক্ষার্থী আইডি</Label>
                    <Input id="student-id" placeholder="আইডি নম্বর লিখুন" />
                  </div>
                  <div>
                    <Label htmlFor="class-select">শ্রেণি</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="শ্রেণি নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">ষষ্ঠ শ্রেণি</SelectItem>
                        <SelectItem value="7">সপ্তম শ্রেণি</SelectItem>
                        <SelectItem value="8">অষ্টম শ্রেণি</SelectItem>
                        <SelectItem value="9">নবম শ্রেণি</SelectItem>
                        <SelectItem value="10">দশম শ্রেণি</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="month-select">মাস</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="মাস নির্বাচন করুন" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="january">জানুয়ারি</SelectItem>
                        <SelectItem value="february">ফেব্রুয়ারি</SelectItem>
                        <SelectItem value="march">মার্চ</SelectItem>
                        <SelectItem value="april">এপ্রিল</SelectItem>
                        <SelectItem value="may">মে</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button className="flex-1">
                    <Search className="h-4 w-4 mr-2" />
                    অনুসন্ধান করুন
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    ডাউনলোড
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="class">
            <Card>
              <CardHeader>
                <CardTitle>আজকের শ্রেণিভিত্তিক উপস্থিতি</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">শ্রেণি</th>
                        <th className="text-left p-3">শাখা</th>
                        <th className="text-center p-3">উপস্থিত</th>
                        <th className="text-center p-3">মোট</th>
                        <th className="text-center p-3">শতাংশ</th>
                        <th className="text-center p-3">অবস্থা</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classAttendance.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="p-3 font-medium">{item.class}</td>
                          <td className="p-3">{item.section}</td>
                          <td className="p-3 text-center">{item.present}</td>
                          <td className="p-3 text-center">{item.total}</td>
                          <td className="p-3 text-center font-bold">{item.percentage}%</td>
                          <td className="p-3 text-center">
                            <Badge className={getAttendanceColor(item.percentage)}>
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
            <Card>
              <CardHeader>
                <CardTitle>মাসিক উপস্থিতির পরিসংখ্যান</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {monthlyAttendance.map((item, index) => (
                    <Card key={index} className="border-primary/20">
                      <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-primary">{item.month}</h3>
                          <TrendingUp className={`h-4 w-4 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                        </div>
                        <p className="text-2xl font-bold text-primary mb-1">{item.percentage}%</p>
                        <p className="text-sm text-muted-foreground">গড় উপস্থিতি</p>
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
