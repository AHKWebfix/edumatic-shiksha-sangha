
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Hash, Calendar } from "lucide-react";

const InstituteInfo = () => {
  const info = [
    {
      icon: Calendar,
      title: "প্রতিষ্ঠিত সাল",
      value: "২০০৫",
      description: "শিক্ষার মানোন্নয়নে নিবেদিত"
    },
    {
      icon: Hash,
      title: "EIIN নম্বর",
      value: "১৩৪৫৬৭",
      description: "শিক্ষা বোর্ড কর্তৃক প্রদত্ত"
    },
    {
      icon: School,
      title: "প্রতিষ্ঠান কোড",
      value: "EMC-২০০৫",
      description: "অনন্য পরিচয় কোড"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            প্রতিষ্ঠানের তথ্য
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমাদের শিক্ষা প্রতিষ্ঠানের মৌলিক তথ্য ও পরিচিতি
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {info.map((item, index) => (
            <Card key={index} className="bg-white/80 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{item.value}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstituteInfo;
