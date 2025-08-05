
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Twitter, 
  Youtube,
  MessageCircle,
  User,
  Building,
  Globe
} from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "ফোন নম্বর",
      details: [
        "০১৭৮৮-৯৯৮৮৭৭ (প্রধান)",
        "০১৯৮৮-৭৭৬৬৫৫ (অফিস)",
        "০১৫৫৫-৪৪৩৩২২ (ভর্তি)"
      ]
    },
    {
      icon: Mail,
      title: "ইমেইল",
      details: [
        "info@edumatic.edu.bd",
        "admission@edumatic.edu.bd",
        "principal@edumatic.edu.bd"
      ]
    },
    {
      icon: MapPin,
      title: "ঠিকানা",
      details: [
        "এডুমেটিক স্কুল অ্যান্ড কলেজ",
        "১২৩ শিক্ষা সড়ক, ধানমন্ডি",
        "ঢাকা - ১২০৫, বাংলাদেশ"
      ]
    },
    {
      icon: Clock,
      title: "অফিস সময়",
      details: [
        "রবিবার - বৃহস্পতিবার",
        "সকাল ৮:০০ - বিকাল ৪:০০",
        "শুক্রবার: সকাল ৮:০০ - দুপুর ১২:০০"
      ]
    }
  ];

  const departments = [
    { name: "ভর্তি বিভাগ", head: "জনাব মোঃ আব্দুর রহমান", phone: "০১৫৫৫-৪৪৩৩২২" },
    { name: "একাডেমিক বিভাগ", head: "জনাবা ফাতেমা খাতুন", phone: "০১৭৭৭-৮৮৯৯০০" },
    { name: "অ্যাকাউন্টস বিভাগ", head: "জনাব আহমদ হাসান", phone: "০১৬৬৬-৫৫৪৪৩৩" },
    { name: "পরীক্ষা নিয়ন্ত্রণ", head: "জনাবা রুবিনা আক্তার", phone: "০১৮৮৮-৭৭৬৬৫৫" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            <MessageCircle className="inline h-8 w-8 mr-3" />
            যোগাযোগ
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            আমাদের সাথে যোগাযোগ করুন। আমরা আপনার সেবায় প্রতিদিন প্রস্তুত।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>আমাদের সাথে যোগাযোগ করুন</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">পূর্ণ নাম *</Label>
                    <Input id="name" placeholder="আপনার নাম লিখুন" />
                  </div>
                  <div>
                    <Label htmlFor="phone">ফোন নম্বর *</Label>
                    <Input id="phone" placeholder="০১xxxxxxxxx" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">ইমেইল</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="subject">বিষয়</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="বিষয় নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admission">ভর্তি সংক্রান্ত</SelectItem>
                      <SelectItem value="academic">একাডেমিক বিষয়</SelectItem>
                      <SelectItem value="fees">ফি সংক্রান্ত</SelectItem>
                      <SelectItem value="exam">পরীক্ষা সংক্রান্ত</SelectItem>
                      <SelectItem value="other">অন্যান্য</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">বার্তা *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="আপনার প্রশ্ন বা মতামত লিখুন..." 
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  বার্তা পাঠান
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Department Contacts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>বিভাগীয় যোগাযোগ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Building className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-bold text-primary">{dept.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{dept.head}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                      <span>{dept.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Media & Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>সামাজিক যোগাযোগ মাধ্যম</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <Facebook className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-medium">Facebook</h4>
                    <p className="text-sm text-muted-foreground">@edumaticschool</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <Youtube className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <h4 className="font-medium">YouTube</h4>
                    <p className="text-sm text-muted-foreground">Edumatic School</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <Globe className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <h4 className="font-medium">ওয়েবসাইট</h4>
                    <p className="text-sm text-muted-foreground">www.edumatic.edu.bd</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>অবস্থানের মানচিত্র</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Google Maps</p>
                  <p className="text-sm text-muted-foreground">১২৩ শিক্ষা সড়ক, ধানমন্ডি, ঢাকা</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
