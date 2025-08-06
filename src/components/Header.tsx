import { Menu, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const isActiveRoute = (href: string, submenu?: any[]) => {
    if (submenu) {
      return submenu.some(item => location.pathname === item.href);
    }
    return location.pathname === href;
  };

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollThreshold = 150;
          const minScrollDifference = 25;
          
          const scrollDifference = Math.abs(currentScrollY - lastScrollY.current);
          
          // Only process scroll if there's significant movement to avoid jitter
          if (scrollDifference >= minScrollDifference) {
            // Clear any existing timeout
            if (scrollTimeoutRef.current) {
              clearTimeout(scrollTimeoutRef.current);
            }
            
            // Add a small debounce to ensure smooth transitions
            scrollTimeoutRef.current = setTimeout(() => {
              // Always show at the very top
              if (currentScrollY <= 30) {
                setIsScrolled(false);
              }
              // Hide when scrolling down past threshold
              else if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY.current) {
                setIsScrolled(true);
              }
              // Show when scrolling up significantly
              else if (currentScrollY < lastScrollY.current - 10) {
                setIsScrolled(false);
              }
            }, 50); // 50ms debounce
            
            lastScrollY.current = currentScrollY;
          }
          
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    // Set initial scroll position
    lastScrollY.current = window.scrollY;
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const menuItems = [{
    title: "হোম",
    href: "/"
  }, {
    title: "আমাদের সম্পর্কে",
    href: "#about",
    submenu: [{
      title: "প্রতিষ্ঠান ইতিহাস",
      href: "/about/history"
    }, {
      title: "এক নজরে আমাদের প্রতিষ্ঠান",
      href: "/about/overview"
    }, {
      title: "স্বীকৃতি ও আসন সংখ্যা",
      href: "/about/recognition"
    }, {
      title: "অবকাঠামো ও সুযোগ-সুবিধা",
      href: "/about/facilities"
    }]
  }, {
    title: "প্রশাসন",
    href: "#administration",
    submenu: [{
      title: "প্রধান শিক্ষক",
      href: "/administration/principal"
    }, {
      title: "শিক্ষক ও স্টাফবৃন্দ",
      href: "/administration/teachers"
    }, {
      title: "ম্যানেজিং কমিটি",
      href: "/administration/committee"
    }, {
      title: "কৃতি শিক্ষার্থী",
      href: "/administration/alumni"
    }]
  }, {
    title: "ভর্তি তথ্য",
    href: "#admission",
    submenu: [{
      title: "ভর্তি ফর্ম ও নিয়মাবলী",
      href: "/admission/form"
    }, {
      title: "ভর্তি ও মাসিক ফি",
      href: "/admission/fees"
    }, {
      title: "শিক্ষার্থীর মূল্যায়ন",
      href: "/admission/evaluation"
    }]
  }, {
    title: "একাডেমিক",
    href: "#academics",
    submenu: [{
      title: "শ্রেণি রুটিন",
      href: "/academics/routine"
    }, {
      title: "সিলেবাস ও কারিকুলাম",
      href: "/academics/syllabus"
    }, {
      title: "একাডেমিক ক্যালেন্ডার",
      href: "/academics/calendar"
    }]
  }, {
    title: "পরীক্ষা",
    href: "#exams",
    submenu: [{
      title: "পরীক্ষার ফি ও রুটিন",
      href: "/exams/fees-routine"
    }, {
      title: "পরীক্ষার ফলাফল",
      href: "/exams/results"
    }, {
      title: "পাবলিক পরীক্ষার ফলাফল",
      href: "/exams/public-results"
    }]
  }, {
    title: "নোটিশবোর্ড",
    href: "/noticeboard"
  }, {
    title: "অন্যান্য",
    href: "#others",
    submenu: [{
      title: "গ্যালারি",
      href: "/gallery"
    }, {
      title: "হাজিরা তথ্য",
      href: "/attendance"
    }, {
      title: "প্রতিষ্ঠান স্মরণিকা",
      href: "/magazine"
    }]
  }, {
    title: "যোগাযোগ",
    href: "/contact"
  }];

  return (
    <header className="w-full bg-gradient-to-r from-primary to-primary/90 text-white sticky top-0 z-50 relative">
      {/* Top Info Bar */}
      <div className={`absolute top-0 left-0 right-0 bg-slate-800/90 py-2 z-10 transition-all duration-300 ease-out ${
        isScrolled 
          ? '-translate-y-full opacity-0' 
          : 'translate-y-0 opacity-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs font-medium">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3 flex-shrink-0" />
                <span className="font-semibold">০১৭৮৮-৯৯৮৮৭৭</span>
              </div>
              {/* Hide email section on mobile, show full email on desktop */}
              <div className="hidden sm:flex items-center space-x-1">
                <Mail className="h-3 w-3 flex-shrink-0" />
                <span className="font-semibold">info@edumatic.edu.bd</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="font-semibold">ঢাকা, বাংলাদেশ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`container mx-auto flex items-center justify-between py-3 sm:py-4 px-4 transition-all duration-300 ease-out ${isScrolled ? 'pt-3 sm:pt-4' : 'pt-10 sm:pt-12'}`}>
        <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-shrink-0">
          <img src="/placeholder.svg" alt="School Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full bg-white/20 p-2 flex-shrink-0" />
          <div className="min-w-0">
            <h1 className="sm:text-xl md:text-2xl leading-tight font-bold text-lg lg:text-xl">
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
                  <DropdownMenuTrigger className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none ${isActiveRoute(item.href, item.submenu) ? 'bg-white/20 text-white' : ''}`}>
                    {item.title}
                    <ChevronDown className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-white border border-gray-200 shadow-lg">
                    {item.submenu.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} asChild>
                        <Link to={subItem.href} className={`block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer ${location.pathname === subItem.href ? 'bg-primary/10 text-primary font-semibold' : ''}`}>
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link to={item.href} className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none ${isActiveRoute(item.href) ? 'bg-white/20 text-white' : ''}`}>
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
          <SheetContent side="right" className="w-72 sm:w-80 overflow-y-auto max-h-screen">
            <nav className="flex flex-col space-y-1 mt-8 pb-6">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <Collapsible open={openSubmenu === index} onOpenChange={() => toggleSubmenu(index)}>
                      <CollapsibleTrigger className={`flex items-center justify-between w-full text-left px-3 py-3 rounded-md text-foreground hover:text-primary hover:bg-accent/50 transition-colors font-semibold text-sm sm:text-base ${isActiveRoute(item.href, item.submenu) ? 'bg-primary/10 text-primary font-bold' : ''}`}>
                        <span>{item.title}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openSubmenu === index ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 mt-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link key={subIndex} to={subItem.href} className={`block ml-4 px-3 py-2 rounded-md text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors ${location.pathname === subItem.href ? 'bg-primary/10 text-primary font-semibold' : ''}`}>
                            {subItem.title}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link to={item.href} className={`flex items-center px-3 py-3 rounded-md text-foreground hover:text-primary hover:bg-accent/50 transition-colors font-semibold text-sm sm:text-base ${isActiveRoute(item.href) ? 'bg-primary/10 text-primary font-bold' : ''}`}>
                      {item.title}
                    </Link>
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
