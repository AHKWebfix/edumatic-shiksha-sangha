
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DollarSign, CreditCard, BookOpen, Users, Calculator } from "lucide-react";

const AdmissionFeesPage = () => {
  const admissionFees = [
    { class: "প্লে-নার্সারি", admission: "৫,০০০", monthly: "১,৫০০", books: "২,০০০", uniform: "১,০০০" },
    { class: "শ্রেণি ১-৫", admission: "৮,০০০", monthly: "২,০০০", books: "৩,০০০", uniform: "১,৫০০" },
    { class: "শ্রেণি ৬-৮", admission: "১০,০০০", monthly: "২,৫০০", books: "৪,০০০", uniform: "২,০০০" },
    { class: "শ্রেণি ৯-১০", admission: "১২,০০০", monthly: "৩,০০০", books: "৫,০০০", uniform: "২,৫০০" },
    { class: "একাদশ-দ্বাদশ", admission: "১৫,০০০", monthly: "৩,৫০০", books: "৬,০০০", uniform: "৩,০০০" }
  ];

  const additionalFees = [
    { name: "পরীক্ষার ফি", amount: "৫০০", frequency: "প্রতি পরীক্ষায়" },
    { name: "খেলাধুলা ফি", amount: "২০০", frequency: "মাসিক" },
    { name: "লাইব্রেরি ফি", amount: "১০০", frequency: "মাসিক" },
    { name: "কম্পিউটার ল্যাব ফি", amount: "৩০০", frequency: "মাসিক" },
    { name: "সায়েন্স ল্যাব ফি", amount: "৪০০", frequency: "মাসিক" },
    { name: "ট্রান্সপোর্ট ফি", amount: "১,৫০০", frequency: "মাসিক" }
  ];

  const paymentMethods = [
    { method: "নগদ পেমেন্ট", details: "প্রতিষ্ঠানের অ্যাকাউন্টস অফিসে", icon: DollarSign },
    { method: "ব্যাংক ট্রান্সফার", details: "ব্র্যাক ব্যাংক লিমিটেড - ৪৫৬৭৮৯১২৩", icon: CreditCard },
    { method: "মোবাইল ব্যাংকিং", details: "বিকাশ/নগদ: ০১৭৮৮৯৯৮৮৭৭", icon: CreditCard }
  ];

  const scholarships = [
    { type: "মেধাবৃত্তি", criteria: "বোর্ড পরীক্ষায় জিপিএ ৫.০০", discount: "৫০%" },
    { type: "দরিদ্র মেধাবী", criteria: "পারিবারিক আয় ১৫,০০০ টাকার নিচে", discount: "৭৫%" },
    { type: "অসহায়", criteria: "এতিম/বিধবা পরিবারের সন্তান", discount: "১০০%" },
    { type: "ভাইবোন ছাড়", criteria: "একই পরিবারের একাধিক শিক্ষার্থী", discount: "২০%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            ভর্তি ও মাসিক ফি
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            এডুমেটিক স্কুল অ্যান্ড কলেজের সকল শ্রেণির ভর্তি ও মাসিক ফি এর বিস্তারিত তথ্য
          </p>
        </div>

        {/* Fee Structure Table */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Calculator className="mr-3 h-6 w-6" />
                ফি স্ট্রাকচার
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">শ্রেণি</th>
                      <th className="text-right p-3 font-semibold">ভর্তি ফি</th>
                      <th className="text-right p-3 font-semibold">মাসিক ফি</th>
                      <th className="text-right p-3 font-semibold">বই ফি</th>
                      <th className="text-right p-3 font-semibold">পোশাক ফি</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admissionFees.map((fee, index) => (
                      <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-muted/50' : ''}`}>
                        <td className="p-3 font-medium">{fee.class}</td>
                        <td className="p-3 text-right">৳ {fee.admission}</td>
                        <td className="p-3 text-right">৳ {fee.monthly}</td>
                        <td className="p-3 text-right">৳ {fee.books}</td>
                        <td className="p-3 text-right">৳ {fee.uniform}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Fees */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">অতিরিক্ত ফি</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalFees.map((fee, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-lg mb-2">{fee.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">৳ {fee.amount}</span>
                      <Badge variant="outline">{fee.frequency}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">পেমেন্ট পদ্ধতি</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {paymentMethods.map((payment, index) => {
                  const IconComponent = payment.icon;
                  return (
                    <div key={index} className="text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{payment.method}</h4>
                      <p className="text-sm text-muted-foreground">{payment.details}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scholarships */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Users className="mr-3 h-6 w-6" />
                বৃত্তি ও ছাড়
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scholarships.map((scholarship, index) => (
                  <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-lg border-l-4 border-green-500 bg-green-50">
                    <div className="mb-2 md:mb-0">
                      <h4 className="font-semibold text-lg">{scholarship.type}</h4>
                      <p className="text-sm text-muted-foreground">{scholarship.criteria}</p>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {scholarship.discount} ছাড়
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <div className="mb-12">
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800">গুরুত্বপূর্ণ নোট</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-amber-800">
                <li>• সকল ফি বাংলাদেশী টাকায় প্রদেয়</li>
                <li>• মাসিক ফি প্রতি মাসের ১০ তারিখের মধ্যে পরিশোধ করতে হবে</li>
                <li>• দেরিতে ফি পরিশোধের জন্য অতিরিক্ত ৫০ টাকা জরিমানা প্রযোজ্য</li>
                <li>• বৃত্তির জন্য আবেদন প্রতি বছর নবায়ন করতে হবে</li>
                <li>• ফি পরিশোধের রসিদ সংরক্ষণ করুন</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdmissionFeesPage;
