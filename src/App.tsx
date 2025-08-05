
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InstituteHistoryPage from "./pages/about/InstituteHistoryPage";
import InstituteOverview from "./pages/about/InstituteOverview";
import RecognitionSeats from "./pages/about/RecognitionSeats";
import Infrastructure from "./pages/about/Infrastructure";
import PrincipalPage from "./pages/administration/PrincipalPage";
import TeachersStaffPage from "./pages/administration/TeachersStaffPage";
import ManagingCommitteePage from "./pages/administration/ManagingCommitteePage";
import AlumniPage from "./pages/administration/AlumniPage";
import AdmissionFormPage from "./pages/admission/AdmissionFormPage";
import AdmissionFeesPage from "./pages/admission/AdmissionFeesPage";
import StudentEvaluationPage from "./pages/admission/StudentEvaluationPage";
import ClassRoutinePage from "./pages/academics/ClassRoutinePage";
import SyllabusPage from "./pages/academics/SyllabusPage";
import AcademicCalendarPage from "./pages/academics/AcademicCalendarPage";
import ExamFeesRoutinePage from "./pages/exams/ExamFeesRoutinePage";
import ExamResultsPage from "./pages/exams/ExamResultsPage";
import PublicExamResultsPage from "./pages/exams/PublicExamResultsPage";
import NoticeBoardPage from "./pages/NoticeBoardPage";
import GalleryPage from "./pages/GalleryPage";
import AttendancePage from "./pages/AttendancePage";
import MagazinePage from "./pages/MagazinePage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about/history" element={<InstituteHistoryPage />} />
          <Route path="/about/overview" element={<InstituteOverview />} />
          <Route path="/about/recognition" element={<RecognitionSeats />} />
          <Route path="/about/facilities" element={<Infrastructure />} />
          <Route path="/administration/principal" element={<PrincipalPage />} />
          <Route path="/administration/teachers" element={<TeachersStaffPage />} />
          <Route path="/administration/committee" element={<ManagingCommitteePage />} />
          <Route path="/administration/alumni" element={<AlumniPage />} />
          <Route path="/admission/form" element={<AdmissionFormPage />} />
          <Route path="/admission/fees" element={<AdmissionFeesPage />} />
          <Route path="/admission/evaluation" element={<StudentEvaluationPage />} />
          <Route path="/academics/routine" element={<ClassRoutinePage />} />
          <Route path="/academics/syllabus" element={<SyllabusPage />} />
          <Route path="/academics/calendar" element={<AcademicCalendarPage />} />
          <Route path="/exams/fees-routine" element={<ExamFeesRoutinePage />} />
          <Route path="/exams/results" element={<ExamResultsPage />} />
          <Route path="/exams/public-results" element={<PublicExamResultsPage />} />
          <Route path="/noticeboard" element={<NoticeBoardPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
