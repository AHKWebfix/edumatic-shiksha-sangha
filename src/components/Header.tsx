
import { Menu, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const menuItems = [
    { title: "হোম", href: "/" },
    {
      title: "আমাদের সম্পর্কে",
      href: "#about",
      submenu: [
        { title: "প্রতিষ্ঠান ইতিহাস", href: "/about/history" },
        { title: "এক নজরে আমাদের প্রতিষ্ঠান", href: "/about/overview" },
        { title: "স্বীকৃতি ও আসন সংখ্যা", href: "/about/recognition" },
        { title: "অবকাঠামো ও সুযোগ-সুবিধা", href: "/about/facilities" },
      ]
    },
    {
      title: "প্রশাসন",
      href: "#administration",
      submenu: [
        { title: "প্রধান শিক্ষক", href: "#principal" },
        { title: "শিক্ষক ও স্টাফবৃন্দ", href: "#staff" },
        { title: "ম্যানেজিং কমিটি", href: "#committee" },
        { title: "কৃতি শিক্ষার্থী", href: "#alumni" },
      ]
    },
    {
      title: "ভর্তি তথ্য",
      href: "#admission",
      submenu: [
        { title: "ভর্তি ফর্ম ও নিয়মাবলী", href: "#admission-form" },
        { title: "ভর্তি ও মাসিক ফি", href: "#fees" },
        { title: "শিক্ষার্থীর মূল্যায়ন", href: "#evaluation" },
      ]
    },
    {
      title: "একাডেমিক",
      href: "#academics",
      submenu: [
        { title: "শ্রেণি রুটিন", href: "#routine" },
        { title: "সিলেবাস ও কারিকুলাম", href: "#syllabus" },
        { title: "একাডেমিক ক্যালেন্ডার", href: "#calendar" },
      ]
    },
    {
      title: "পরীক্ষা",
      href: "#exams",
      submenu: [
        { title: "পরীক্ষার ফি ও রুটিন", href: "#exam-routine" },
        { title: "পরীক্ষার ফলাফল", href: "#results" },
        { title: "পাবলিক পরীক্ষার ফলাফল", href: "#public-results" },
      ]
    },
    { title: "নোটিশবোর্ড", href: "#notices" },
    {
      title: "অন্যান্য",
      href: "#others",
      submenu: [
        { title: "গ্যালারি", href: "#gallery" },
        { title: "হাজিরা তথ্য", href: "#attendance" },
        { title: "প্রতিষ্ঠান স্মরণিকা", href: "#magazine" },
      ]
    },
    { title: "যোগাযোগ", href: "#contact" }
  ];

  return (
    <header className="w-full bg-gradient-to-r from-primary to-primary/90 text-white sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-slate-800/90 py-2">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-medium px-4 gap-2 sm:gap-0">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-semibold">০১৭৮৮-৯৯৮৮৭৭</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-semibold hidden sm:inline">info@edumatic.edu.bd</span>
              <span className="font-semibold sm:hidden">Email</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-semibold">ঢাকা, বাংলাদেশ</span>
          </div>
        </div>
      </div>

      {/* Main Header - Aligned with container */}
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4">
        <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-shrink-0">
          <img 
            src="/placeholder.svg" 
            alt="School Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-white/20 p-2 flex-shrink-0"
          />
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
              এডুমেটিক স্কুল অ্যান্ড কলেজ
            </h1>
            <p className="text-xs sm:text-sm md:text-base opacity-90 font-medium">
              শিক্ষায় উন্নতি, চরিত্রে মাধুর্য
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {item.submenu ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none">
                    {item.title}
                    <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-white border border-gray-200 shadow-lg">
                    {item.submenu.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} asChild>
                        <Link
                          to={subItem.href}
                          className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
                        >
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to={item.href}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="sm" className="flex-shrink-0">
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 sm:w-80">
            <nav className="flex flex-col space-y-2 mt-8">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <Link 
                    to={item.href}
                    className="flex items-center justify-between text-foreground hover:text-primary transition-colors font-semibold py-3 text-sm sm:text-base"
                  >
                    {item.title}
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="block text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary py-2"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
