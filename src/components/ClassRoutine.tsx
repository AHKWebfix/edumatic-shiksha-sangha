
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Clock, BookOpen } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ClassRoutine = () => {
  const routineData = [
    { time: "৮:০০ - ৮:৪৫", subject: "বাংলা", teacher: "আলিমা খাতুন", room: "১০১" },
    { time: "৮:৪৫ - ৯:৩০", subject: "ইংরেজি", teacher: "রফিক উল্লাহ", room: "১০২" },
    { time: "৯:৩০ - ১০:১৫", subject: "গণিত", teacher: "সালমা বেগম", room: "১০৩" },
    { time: "১০:১৫ - ১০:৩০", subject: "বিরতি", teacher: "-", room: "-" },
    { time: "১০:ৣ০ - ১১:১৫", subject: "বিজ্ঞান", teacher: "ড. করিম", room: "ল্যাব ১" },
    { time: "১১:১৫ - ১২:০০", subject: "ইতিহাস", teacher: "নূরুল আমিন", room: "১০৪" },
  ];

  const classes = ["ষষ্ঠ শ্রেণি", "সপ্তম শ্রেণি", "অষ্টম শ্রেণি", "নবম শ্রেণি", "দশম শ্রেণি"];

  return (
    <section className="py-16 bg-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              ক্লাস রুটিন
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            সকল শ্রেণির দৈনিক ক্লাস রুটিন ও সময়সূচি
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <CardTitle className="flex items-center text-xl">
                  <BookOpen className="h-6 w-6 mr-2" />
                  ক্লাস রুটিন
                </CardTitle>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <Select>
                    <SelectTrigger className="w-48 bg-white text-foreground">
                      <SelectValue placeholder="শ্রেণি নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls} value={cls}>
                          {cls}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="flex items-center space-x-2 bg-white text-primary hover:bg-accent"
                  >
                    <Download className="h-4 w-4" />
                    <span>ডাউনলোড</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-accent/20">
                      <TableHead className="font-semibold text-primary">সময়</TableHead>
                      <TableHead className="font-semibold text-primary">বিষয়</TableHead>
                      <TableHead className="font-semibold text-primary">শিক্ষক</TableHead>
                      <TableHead className="font-semibold text-primary">রুম</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {routineData.map((item, index) => (
                      <TableRow 
                        key={index} 
                        className={`hover:bg-accent/10 ${
                          item.subject === "বিরতি" 
                            ? "bg-orange-50 text-orange-700" 
                            : index % 2 === 0 ? "bg-accent/5" : "bg-white"
                        }`}
                      >
                        <TableCell className="font-medium">{item.time}</TableCell>
                        <TableCell className={`font-medium ${
                          item.subject === "বিরতি" ? "text-orange-600" : "text-primary"
                        }`}>
                          {item.subject}
                        </TableCell>
                        <TableCell>{item.teacher}</TableCell>
                        <TableCell>{item.room}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {/* Download All Routines */}
              <div className="p-6 bg-accent/5 border-t">
                <div className="grid md:grid-cols-3 gap-4">
                  <Button variant="outline" className="flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>সাপ্তাহিক রুটিন</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>পরীক্ষার রুটিন</span>
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>সকল রুটিন</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClassRoutine;
