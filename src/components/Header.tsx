
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
        { title: "আসন সংখ্যা", href: "#capacity" },
        { title: "অবকাঠামো", href: "#infrastructure" },
        { title: "সুযোগ-সুবিধা", href: "#facilities" },
        { title: "ভর্তি নিয়মাবলী", href: "#admission-rules" },
        { title: "শিক্ষার্থীর মূল্যায়ন", href: "#evaluation" },
      ]
    },
    {
      title: "প্রশাসন",
      href: "#administration",
      submenu: [
        { title: "প্রধান শিক্ষক", href: "#principal" },
        { title: "শিক্ষকবৃন্দ", href: "#teachers" },
        { title: "স্টাফবৃন্দ", href: "#staff" },
        { title: "ম্যানেজিং কমিটি", href: "#committee" },
        { title: "প্রাক্তন শিক্ষকবৃন্দ", href: "#former-teachers" },
        { title: "কৃতি শিক্ষার্থী", href: "#alumni" },
      ]
    },
    {
      title: "ভর্তি ও টিউশন তথ্য",
      href: "#admission",
      submenu: [
        { title: "ভর্তি ফর্ম", href: "#admission-form" },
        { title: "ভর্তি ফি (শ্রেণিভিত্তিক)", href: "#admission-fees" },
        { title: "মাসিক বেতন", href: "#monthly-fees" },
      ]
    },
    {
      title: "একাডেমিক তথ্য",
      href: "#academics",
      submenu: [
        { title: "শ্রেণি রুটিন", href: "#routine" },
        { title: "একাডেমিক সিলেবাস", href: "#syllabus" },
        { title: "একাডেমিক কারিকুলাম", href: "#curriculum" },
        { title: "একাডেমিক ক্যালেন্ডার", href: "#calendar" },
      ]
    },
    {
      title: "পরীক্ষার তথ্য",
      href: "#exams",
      submenu: [
        { title: "পরীক্ষার ফি", href: "#exam-fees" },
        { title: "পরীক্ষার রুটিন", href: "#exam-routine" },
        { title: "পরীক্ষার ফলাফল", href: "#results" },
        { title: "পাবলিক পরীক্ষার ফলাফল", href: "#public-results" },
      ]
    },
    { title: "নোটিশবোর্ড", href: "#notices" },
    {
      title: "অন্যান্য তথ্য",
      href: "#others",
      submenu: [
        { title: "গ্যালারি", href: "#gallery" },
        { title: "হাজিরা তথ্য", href: "#attendance" },
        { title: "শূন্য পদ তালিকা", href: "#vacancies" },
        { title: "প্রতিষ্ঠান স্মরণিকা", href: "#magazine" },
      ]
    },
    { title: "যোগাযোগ", href: "#contact" }
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
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                {item.submenu ? (
                  <>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-64 p-4">
                        {item.submenu.map((subItem, subIndex) => (
                          <NavigationMenuLink
                            key={subIndex}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
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
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {item.title}
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <nav className="flex flex-col space-y-2 mt-8">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a 
                    href={item.href}
                    className="flex items-center justify-between text-foreground hover:text-primary transition-colors font-medium py-2"
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
                          className="block text-sm text-muted-foreground hover:text-primary py-1"
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
