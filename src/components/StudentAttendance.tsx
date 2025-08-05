
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, UserCheck, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const StudentAttendance = () => {
  const attendanceData = [
    { class: "ষষ্ঠ", present: 210, absent: 10, percentage: 95.5 },
    { class: "সপ্তম", present: 200, absent: 10, percentage: 95.2 },
    { class: "অষ্টম", present: 195, absent: 10, percentage: 95.1 },
    { class: "নবম", present: 300, absent: 20, percentage: 93.8 },
    { class: "দশম", present: 290, absent: 10, percentage: 96.7 },
  ];

  const todayAttendance = [
    { name: "উপস্থিত", value: 1195, color: "#16A34A" },
    { name: "অনুপস্থিত", value: 55, color: "#DC2626" }
  ];

  const monthlyTrend = [
    { month: "জানুয়ারি", attendance: 96.2 },
    { month: "ফেব্রুয়ারি", attendance: 95.8 },
    { month: "মার্চ", attendance: 96.5 },
    { month: "এপ্রিল", attendance: 94.2 },
    { month: "মে", attendance: 95.1 },
    { month: "জুন", attendance: 96.0 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <UserCheck className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              শিক্ষার্থী উপস্থিতি
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            দৈনিক ও মাসিক উপস্থিতির পরিসংখ্যান ও বিশ্লেষণ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Today's Overview */}
          <Card className="shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                আজকের উপস্থিতি
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={todayAttendance}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {todayAttendance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value} জন`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-2 mt-4">
                <div className="flex justify-between items-center">
                  <span className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                    উপস্থিত
                  </span>
                  <span className="font-bold text-green-600">১১৯৫ জন (৯৫.৬%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center">
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                    অনুপস্থিত
                  </span>
                  <span className="font-bold text-red-600">৫৫ জন (৪.৪%)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Class-wise Stats */}
          <Card className="lg:col-span-2 shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  শ্রেণিভিত্তিক উপস্থিতি
                </span>
                <Select>
                  <SelectTrigger className="w-40 bg-white text-foreground">
                    <SelectValue placeholder="আজ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">আজ</SelectItem>
                    <SelectItem value="week">সপ্তাহ</SelectItem>
                    <SelectItem value="month">মাস</SelectItem>
                  </SelectContent>
                </Select>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="class" 
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      formatter={(value: number, name: string) => [
                        name === 'present' ? `${value} জন উপস্থিত` : `${value} জন অনুপস্থিত`,
                        ''
                      ]}
                    />
                    <Bar dataKey="present" fill="#16A34A" name="present" />
                    <Bar dataKey="absent" fill="#DC2626" name="absent" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trend */}
        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
            <CardTitle>মাসিক উপস্থিতির প্রবণতা</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    domain={[90, 100]}
                    tick={{ fontSize: 12 }}
                    label={{ value: 'শতাংশ (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value: number) => [`${value}%`, 'উপস্থিতির হার']}
                  />
                  <Bar 
                    dataKey="attendance" 
                    fill="#059669" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StudentAttendance;
