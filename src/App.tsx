import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound.tsx";
import { AppLayout } from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Placeholder from "./pages/Placeholder";
import DataEntry from "./pages/DataEntry";
import Projects from "./pages/Projects";
import Expenses from "./pages/Expenses";
import Cash from "./pages/Cash";
import Revenue from "./pages/Revenue";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import Payroll from "./pages/Payroll";
import Attendance from "./pages/Attendance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cash"       element={<Cash />} />
            <Route path="/expenses"   element={<Expenses />} />
            <Route path="/revenue"    element={<Revenue />} />
            <Route path="/payroll"    element={<Payroll />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/projects"   element={<Projects />} />
            <Route path="/machines"   element={<Placeholder titleKey="nav.machines" />} />
            <Route path="/suppliers"  element={<Placeholder titleKey="nav.suppliers" />} />
            <Route path="/employees"  element={<Placeholder titleKey="nav.employees" />} />
            <Route path="/reports"    element={<Reports />} />
            <Route path="/alerts"     element={<Alerts />} />
            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/settings"   element={<Placeholder titleKey="nav.settings" />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
