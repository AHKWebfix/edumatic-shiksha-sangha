
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
      <div className="container mx-auto py-12 sm:py-16 px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 sm:gap-8">
          {/* School Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="bg-white/20 p-2 rounded-full">
                <img src="/placeholder.svg" alt="Logo" className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">এডুমেটিক স্কুল</h3>
                <p className="text-xs sm:text-sm opacity-90">অ্যান্ড কলেজ</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              শিক্ষায় উন্নতি, চরিত্রে মাধুর্য - এই মূলমন্ত্র নিয়ে আমরা প্রতিটি শিক্ষার্থীর 
              সুপ্ত প্রতিভা বিকাশে নিবেদিত। আধুনিক শিক্ষা ব্যবস্থা ও ঐতিহ্যবাহী মূল্যবোধের 
              সমন্বয়ে গড়ছি আগামীর বাংলাদেশ।
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">একাডেমিক তথ্য</h4>
            <ul className="space-y-2 sm:space-y-3">
              {academicInfo.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">যোগাযোগ</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-white/60" />
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    ১২৩ শিক্ষা সড়ক<br />
                    ধানমন্ডি, ঢাকা - ১২০৫<br />
                    বাংলাদেশ
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white/60" />
                <span className="text-white/80 text-sm">০১৭৮৮-৯৯৮৮৭৭</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white/60" />
                <span className="text-white/80 text-sm">info@edumatic.edu.bd</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-white/60" />
                <div className="text-white/80 text-sm">
                  <p>সোম - বৃহ: ৮:০০ - ৪:০০</p>
                  <p>শুক্র: ৮:০০ - ১২:০০</p>
                  <p>শনি: বন্ধ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © ২০২৪ এডুমেটিক স্কুল অ্যান্ড কলেজ। সকল অধিকার সংরক্ষিত।
            </p>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                প্রাইভেসি পলিসি
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                শর্তাবলী
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                সহায়তা
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-white/40 text-xs">
              Design & Developed by Ahasanul Haque Khairul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
