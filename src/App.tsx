
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
