
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InstituteInfo from "@/components/InstituteInfo";
import NoticeBoard from "@/components/NoticeBoard";
import InstituteHistory from "@/components/InstituteHistory";
import QuickOverview from "@/components/QuickOverview";
import AdministrativeMessages from "@/components/AdministrativeMessages";
import ClassRoutine from "@/components/ClassRoutine";
import StudentAttendance from "@/components/StudentAttendance";
import StaffAttendance from "@/components/StaffAttendance";
import ResultCorner from "@/components/ResultCorner";
import Gallery from "@/components/Gallery";
import ParentTestimonials from "@/components/ParentTestimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-anek-bangla">
      <Header />
      <main>
        <HeroSection />
        <InstituteInfo />
        <NoticeBoard />
        <InstituteHistory />
        <QuickOverview />
        <AdministrativeMessages />
        <ClassRoutine />
        <StudentAttendance />
        <StaffAttendance />
        <ResultCorner />
        <Gallery />
        <ParentTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
