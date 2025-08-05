
import { Menu, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navItems = [
    "মূলপাতা",
    "আমাদের সম্পর্কে",
    "একাডেমিক",
    "ভর্তি",
    "ফলাফল",
    "নোটিশ",
    "গ্যালারি",
    "যোগাযোগ"
  ];

  return (
    <header className="w-full bg-gradient-to-r from-primary to-primary/90 text-white sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-primary/20 py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>০১৭৮৮-৯৯৮৮৭৭</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@edumatic.edu.bd</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>ঢাকা, বাংলাদেশ</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <img 
            src="/placeholder.svg" 
            alt="School Logo" 
            className="h-12 w-12 rounded-full bg-white/20 p-2"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold">এডুমেটিক স্কুল অ্যান্ড কলেজ</h1>
            <p className="text-sm opacity-90">শিক্ষায় উন্নতি, চরিত্রে মাধুর্য</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href="#" 
              className="hover:text-accent transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
