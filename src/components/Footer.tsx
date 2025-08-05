
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Facebook, Youtube, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "মূলপাতা", "আমাদের সম্পর্কে", "একাডেমিক তথ্য", "ভর্তি প্রক্রিয়া", 
    "নোটিশ বোর্ড", "পরীক্ষার ফলাফল", "গ্যালারি", "যোগাযোগ"
  ];

  const academicInfo = [
    "ক্লাস রুটিন", "পরীক্ষার রুটিন", "বার্ষিক ক্যালেন্ডার", 
    "সিলেবাস", "বইয়ের তালিকা", "অ্যাসাইনমেন্ট"
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container mx-auto py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* School Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/20 p-2 rounded-full">
                <img src="/placeholder.svg" alt="Logo" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold">এডুমেটিক স্কুল</h3>
                <p className="text-lg opacity-90">অ্যান্ড কলেজ</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed text-lg font-bold">
              শিক্ষায় উন্নতি, চরিত্রে মাধুর্য - এই মূলমন্ত্র নিয়ে আমরা প্রতিটি শিক্ষার্থীর 
              সুপ্ত প্রতিভা বিকাশে নিবেদিত। আধুনিক শিক্ষা ব্যবস্থা ও ঐতিহ্যবাহী মূল্যবোধের 
              সমন্বয়ে গড়ছি আগামীর বাংলাদেশ।
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-extrabold mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors text-lg font-bold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-2xl font-extrabold mb-6">একাডেমিক তথ্য</h4>
            <ul className="space-y-3">
              {academicInfo.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors text-lg font-bold"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-extrabold mb-6">যোগাযোগ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-white/60" />
                <div>
                  <p className="text-white/80 text-lg leading-relaxed font-bold">
                    ১২৩ শিক্ষা সড়ক<br />
                    ধানমন্ডি, ঢাকা - ১২০৫<br />
                    বাংলাদেশ
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60" />
                <span className="text-white/80 text-lg font-bold">০১৭৮৮-৯৯৮৮৭৭</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <span className="text-white/80 text-lg font-bold">info@edumatic.edu.bd</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 text-white/60" />
                <div className="text-white/80 text-lg font-bold">
                  <p>সোম - বৃহ: ৮:০০ - ৪:০০</p>
                  <p>শুক্র: ৮:০০ - ১২:০০</p>
                  <p>শনি: বন্ধ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-lg text-center md:text-left font-bold">
              © ২০২৪ এডুমেটিক স্কুল অ্যান্ড কলেজ। সকল অধিকার সংরক্ষিত।
            </p>
            
            <div className="flex items-center space-x-6 text-lg">
              <a href="#" className="text-white/60 hover:text-white transition-colors font-bold">
                প্রাইভেসি পলিসি
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors font-bold">
                শর্তাবলী
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors font-bold">
                সহায়তা
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-white/50 text-base font-bold">
              প্রযুক্তিগত সহায়তায়: এডুমেটিক টেক টিম
            </p>
            <p className="text-white/60 text-lg font-extrabold mt-2">
              Design & Developed by Ahasanul Haque Khairul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
