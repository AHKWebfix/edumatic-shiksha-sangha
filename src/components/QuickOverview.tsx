
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3, TrendingUp } from "lucide-react";

const QuickOverview = () => {
  const overviewData = [
    { category: "মোট শিক্ষার্থী", value: "১২৫০", percentage: "+৮%" },
    { category: "মোট শিক্ষক", value: "৬৫", percentage: "+৫%" },
    { category: "ক্লাসরুম", value: "৩০", percentage: "স্থিতিশীল" },
    { category: "ল্যাবরেটরি", value: "৮", percentage: "+২" },
    { category: "লাইব্রেরি বই", value: "৫০০০+", percentage: "+১২%" },
  ];

  const classWiseData = [
    { class: "ষষ্ঠ শ্রেণি", students: "২২০", teachers: "১২", sections: "৪" },
    { class: "সপ্তম শ্রেণি", students: "২১০", teachers: "১২", sections: "৪" },
    { class: "অষ্টম শ্রেণি", students: "২০৫", teachers: "১১", sections: "৪" },
    { class: "নবম শ্রেণি (বিজ্ঞান)", students: "১২০", teachers: "৮", sections: "২" },
    { class: "নবম শ্রেণি (মানবিক)", students: "১০০", teachers: "৭", sections: "২" },
    { class: "নবম শ্রেণি (ব্যবসায়)", students: "৮৫", teachers: "৬", sections: "২" },
    { class: "দশম শ্রেণি (বিজ্ঞান)", students: "১১৫", teachers: "৮", sections: "২" },
    { class: "দশম শ্রেণি (মানবিক)", students: "৯৫", teachers: "৭", sections: "২" },
    { class: "দশম শ্রেণি (ব্যবসায়)", students: "৯০", teachers: "৬", sections: "২" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              প্রতিষ্ঠানের সংক্ষিপ্ত পরিসংখ্যান
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমাদের প্রতিষ্ঠানের বিভিন্ন বিভাগের বিস্তারিত তথ্য ও পরিসংখ্যান
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Overview Statistics */}
          <div className="lg:col-span-1">
            <Card className="h-full shadow-lg border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  সামগ্রিক পরিসংখ্যান
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {overviewData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-accent/20 rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground">{item.category}</h4>
                        <p className="text-2xl font-bold text-primary">{item.value}</p>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        item.percentage.includes('+') 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {item.percentage}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Class-wise Information Table */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
                <CardTitle>শ্রেণিভিত্তিক তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-accent/20">
                        <TableHead className="font-semibold text-primary">শ্রেণি</TableHead>
                        <TableHead className="font-semibold text-primary text-center">শিক্ষার্থী</TableHead>
                        <TableHead className="font-semibold text-primary text-center">শিক্ষক</TableHead>
                        <TableHead className="font-semibold text-primary text-center">শাখা</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {classWiseData.map((row, index) => (
                        <TableRow 
                          key={index}
                          className={`hover:bg-accent/10 ${index % 2 === 0 ? 'bg-accent/5' : 'bg-white'}`}
                        >
                          <TableCell className="font-medium">{row.class}</TableCell>
                          <TableCell className="text-center font-semibold text-primary">{row.students}</TableCell>
                          <TableCell className="text-center">{row.teachers}</TableCell>
                          <TableCell className="text-center">{row.sections}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOverview;
