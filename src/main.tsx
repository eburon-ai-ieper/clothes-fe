import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CheckFit from "./pages/CheckFit";
import UserAvatar from "./pages/UserAvatar";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/clothing/:id/fit" element={<CheckFit />} />
        <Route path="/clothing/:id/person" element={<UserAvatar />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
