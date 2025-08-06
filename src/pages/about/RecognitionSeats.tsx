import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, CheckCircle, Shield } from "lucide-react";

const RecognitionSeats = () => {
  const recognitions = [{
    title: "শিক্ষা বোর্ড স্বীকৃতি",
    description: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড কর্তৃক স্বীকৃতিপ্রাপ্ত",
    year: "২০০৫"
  }, {
    title: "সরকারি নিবন্ধন",
    description: "শিক্ষা মন্ত্রণালয় কর্তৃক নিবন্ধিত শিক্ষা প্রতিষ্ঠান",
    year: "২০০৬"
  }, {
    title: "শ্রেষ্ঠ প্রতিষ্ঠান পুরস্কার",
    description: "জেলা পর্যায়ে শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠানের পুরস্কার",
    year: "২০১৮"
  }, {
    title: "গুণগত শিক্ষার স্বীকৃতি",
    description: "জাতীয় পর্যায়ে গুণগত শিক্ষার জন্য স্বীকৃতি",
    year: "২০২০"
  }];
  const seatInfo = [{
    grade: "প্লে গ্রুপ - নার্সারি",
    seats: "৮০",
    shift: "সকাল শাখা"
  }, {
    grade: "শ্রেণি ১ - শ্রেণি ৫",
    seats: "৩০০",
    shift: "সকাল ও দিন শাখা"
  }, {
    grade: "শ্রেণি ৬ - শ্রেণি ১০",
    seats: "৪০০",
    shift: "সকাল ও দিন শাখা"
  }, {
    grade: "একাদশ - দ্বাদশ (বিজ্ঞান)",
    seats: "১২০",
    shift: "সকাল শাখা"
  }, {
    grade: "একাদশ - দ্বাদশ (ব্যবসায়)",
    seats: "১০০",
    shift: "সকাল শাখা"
  }, {
    grade: "একাদশ - দ্বাদশ (মানবিক)",
    seats: "৮০",
    shift: "সকাল শাখা"
  }];
  return <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      
      <PageHeader
        title="স্বীকৃতি ও আসন সংখ্যা"
        subtitle="প্রতিষ্ঠানিক তথ্য"
        description="আমাদের প্রতিষ্ঠানের সরকারি স্বীকৃতি ও শ্রেণিভিত্তিক আসন সংখ্যার বিস্তারিত তথ্য"
        icon={<Award />}
        breadcrumb={[
          { label: "হোম", href: "/" },
          { label: "আমাদের সম্পর্কে", href: "/about" },
          { label: "স্বীকৃতি ও আসন সংখ্যা" }
        ]}
      />

      <main className="pb-16">
        <div className="container mx-auto px-4">
          {/* Recognition Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-primary">
                স্বীকৃতি ও পুরস্কার
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {recognitions.map((item, index) => <Card key={index} className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-primary" />
                      <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                      <span className="text-sm bg-primary text-white px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Seat Information */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Users className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-primary">
                শ্রেণিভিত্তিক আসন সংখ্যা
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">শ্রেণি</th>
                      <th className="px-6 py-4 text-center font-semibold">মোট আসন</th>
                      <th className="px-6 py-4 text-center font-semibold">শাখা</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seatInfo.map((item, index) => <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="px-6 py-4 font-medium text-foreground">
                          {item.grade}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
                            {item.seats}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-muted-foreground">
                          {item.shift}
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total Summary */}
            <div className="mt-8 bg-primary text-white rounded-lg p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">মোট আসন সংখ্যা</h3>
                <div className="text-5xl font-bold mb-2">১,০৮০</div>
                <p className="text-lg opacity-90">সকল শ্রেণি মিলিয়ে</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default RecognitionSeats;
