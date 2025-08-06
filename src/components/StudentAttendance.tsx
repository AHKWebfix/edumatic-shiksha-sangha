
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
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <UserCheck className="h-6 w-6 sm:h-8 sm:w-8 text-primary mr-2 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
              শিক্ষার্থী উপস্থিতি
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            দৈনিক ও মাসিক উপস্থিতির পরিসংখ্যান ও বিশ্লেষণ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Today's Overview */}
          <Card className="shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 sm:p-6">
              <CardTitle className="flex items-center text-base sm:text-lg">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                আজকের উপস্থিতি
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="h-48 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={todayAttendance}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
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
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="flex items-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-600 rounded-full mr-2"></div>
                    উপস্থিত
                  </span>
                  <span className="font-bold text-green-600">১১৯৫ জন (৯৫.৬%)</span>
                </div>
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="flex items-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 rounded-full mr-2"></div>
                    অনুপস্থিত
                  </span>
                  <span className="font-bold text-red-600">৫৫ জন (৪.৪%)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Class-wise Stats */}
          <Card className="lg:col-span-2 shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 sm:p-6">
              <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <span className="flex items-center text-base sm:text-lg">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  শ্রেণিভিত্তিক উপস্থিতি
                </span>
                <Select>
                  <SelectTrigger className="w-32 sm:w-40 bg-white text-foreground text-sm">
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
            <CardContent className="p-4 sm:p-6">
              <div className="h-48 sm:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={attendanceData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="class" 
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 10 }}
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
          <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg">মাসিক উপস্থিতির প্রবণতা</CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="h-60 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyTrend} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    domain={[90, 100]}
                    tick={{ fontSize: 10 }}
                    label={{ value: 'শতাংশ (%)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: 10 } }}
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
