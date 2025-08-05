
import { Menu, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const menuItems = [
    { title: "হোম", href: "/" },
    {
      title: "আমাদের সম্পর্কে",
      href: "#about",
      submenu: [
        { title: "প্রতিষ্ঠান ইতিহাস", href: "#history" },
        { title: "এক নজরে আমাদের প্রতিষ্ঠান", href: "#overview" },
        { title: "স্বীকৃতি ও সাধারণ তথ্য", href: "#recognition" },
        { title: "অবকাঠামো ও সুযোগ-সুবিধা", href: "#facilities" },
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
        { title: "ভর্তি নিয়মাবলী", href: "#admission-rules" },
        { title: "ভর্তি ফি ও মাসিক বেতন", href: "#fees" },
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
      {/* Top Info Bar with better contrast */}
      <div className="bg-slate-800/90 py-2.5">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-base font-bold">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span className="font-extrabold">০১৭৮৮-৯৯৮৮৭৭</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span className="font-extrabold">info@edumatic.edu.bd</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="font-extrabold">ঢাকা, বাংলাদেশ</span>
          </div>
        </div>
      </div>

      {/* Main Header - Adjusted width */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-4 min-w-0 flex-shrink-0">
          <img 
            src="/placeholder.svg" 
            alt="School Logo" 
            className="h-14 w-14 rounded-full bg-white/20 p-2 flex-shrink-0"
          />
          <div className="min-w-0">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
              এডুমেটিক স্কুল
            </h1>
            <p className="text-base md:text-lg opacity-90 font-bold">
              শিক্ষায় উন্নতি, চরিত্রে মাধুর্য
            </p>
          </div>
        </div>

        {/* Desktop Navigation with proper positioning */}
        <div className="hidden xl:flex">
          <NavigationMenu className="z-50">
            <NavigationMenuList className="space-x-1">
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white font-bold text-base px-3 py-2 data-[state=open]:bg-white/10">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="min-w-max p-0">
                        <div className="w-72 p-4 bg-white border border-gray-200 shadow-lg rounded-md">
                          {item.submenu.map((subItem, subIndex) => (
                            <NavigationMenuLink
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-3 text-base font-bold hover:bg-accent hover:text-accent-foreground rounded-md transition-colors text-foreground border-b border-gray-100 last:border-b-0"
                            >
                              {subItem.title}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-base font-bold transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="xl:hidden">
            <Button variant="ghost" size="sm" className="flex-shrink-0">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <nav className="flex flex-col space-y-2 mt-8">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a 
                    href={item.href}
                    className="flex items-center justify-between text-foreground hover:text-primary transition-colors font-bold py-3 text-lg"
                  >
                    {item.title}
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block text-base font-bold text-muted-foreground hover:text-primary py-2"
                        >
                          {subItem.title}
                        </a>
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
