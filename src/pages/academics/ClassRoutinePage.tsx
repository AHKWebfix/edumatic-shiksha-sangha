
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Clock, BookOpen, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClassRoutinePage = () => {
  const routineData = [
    { time: "৮:০০ - ৮:৪৫", sunday: "বাংলা", monday: "ইংরেজি", tuesday: "গণিত", wednesday: "বিজ্ঞান", thursday: "সমাজবিজ্ঞান", saturday: "ধর্ম" },
    { time: "৮:৪৫ - ৯:৩০", sunday: "ইংরেজি", monday: "গণিত", tuesday: "বাংলা", wednesday: "ইতিহাস", thursday: "ভূগোল", saturday: "শারীরিক শিক্ষা" },
    { time: "৯:৩০ - ১০:১৫", sunday: "গণিত", monday: "বিজ্ঞান", tuesday: "ইংরেজি", wednesday: "বাংলা", thursday: "তথ্য ও যোগাযোগ প্রযুক্তি", saturday: "চারু ও কারুকলা" },
    { time: "১০:১৫ - ১০:৩০", sunday: "বিরতি", monday: "বিরতি", tuesday: "বিরতি", wednesday: "বিরতি", thursday: "বিরতি", saturday: "বিরতি" },
    { time: "১০:৩০ - ১১:১৫", sunday: "বিজ্ঞান", monday: "সমাজবিজ্ঞান", tuesday: "ইতিহাস", wednesday: "গণিত", thursday: "বাংলা", saturday: "কৃষি শিক্ষা" },
    { time: "১১:১৫ - ১২:০০", sunday: "ইতিহাস", monday: "ভূগোল", tuesday: "তথ্য ও যোগাযোগ প্রযুক্তি", wednesday: "ইংরেজি", thursday: "গার্হস্থ্য বিজ্ঞান", saturday: "ব্যবসায় শিক্ষা" }
  ];

  const classes = ["ষষ্ঠ শ্রেণি", "সপ্তম শ্রেণি", "অষ্টম শ্রেণি", "নবম শ্রেণি", "দশম শ্রেণি"];
  const days = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শনিবার"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto text-center px-4">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">শ্রেণি রুটিন</h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            সকল শ্রেণির দৈনিক ক্লাস রুটিন ও সময়সূচি
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="shadow-lg border-primary/20 mb-8">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <CardTitle className="flex items-center text-xl">
                    <BookOpen className="h-6 w-6 mr-2" />
                    সাপ্তাহিক ক্লাস রুটিন
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
                        <TableHead className="font-semibold text-primary min-w-24">সময়</TableHead>
                        {days.map((day) => (
                          <TableHead key={day} className="font-semibold text-primary min-w-32">{day}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {routineData.map((item, index) => (
                        <TableRow 
                          key={index} 
                          className={`hover:bg-accent/10 ${
                            item.sunday === "বিরতি" 
                              ? "bg-orange-50 text-orange-700" 
                              : index % 2 === 0 ? "bg-accent/5" : "bg-white"
                          }`}
                        >
                          <TableCell className="font-medium">{item.time}</TableCell>
                          <TableCell className={`font-medium ${
                            item.sunday === "বিরতি" ? "text-orange-600" : "text-primary"
                          }`}>
                            {item.sunday}
                          </TableCell>
                          <TableCell className={`font-medium ${
                            item.monday === "বিরতি" ? "text-orange-600" : "text-primary"
                          }`}>
                            {item.monday}
                          </TableCell>
                          <TableCell className={`font-medium ${
                            item.tuesday === "বিরতি" ? "text-orange-600" : "text-primary"
                          }`}>
                            {item.tuesday}
                          </TableCell>
                          <TableCell className={`font-medium ${
                            item.wednesday === "বিরতি" ? "text-orange-600" : "text-primary"
                          }`}>
                            {item.wednesday}
                          </TableCell>
                          <TableCell className={`font-medium ${
                            item.thursday === "বিরতি" ? "text-orange-600" : "text-primary"
                          }`}>
                            {item.thursday}
                          </TableCell>
                          <TableCell className={`font-medium ${
                            item.saturday === "বিরতি" ? "text-orange-600" : "text-primary"
                          }`}>
                            {item.saturday}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Calendar className="h-5 w-5 mr-2" />
                    গুরুত্বপূর্ণ তথ্য
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      প্রতিদিন সকাল ৮:০০ টায় ক্লাস শুরু
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      প্রতি ক্লাসের সময়কাল ৪৫ মিনিট
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      বিরতির সময় ১০:১৫ - ১০:৩০ (১৫ মিনিট)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      শুক্রবার সাপ্তাহিক ছুটি
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Download className="h-5 w-5 mr-2" />
                    ডাউনলোড সেকশন
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    ষষ্ঠ শ্রেণির রুটিন
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    সপ্তম শ্রেণির রুটিন
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    অষ্টম শ্রেণির রুটিন
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    নবম-দশম শ্রেণির রুটিন
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClassRoutinePage;
