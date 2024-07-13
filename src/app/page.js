"use client";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import Work from "./components/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
   <header>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/CV" element={<CV />} />
    </Routes>
    </BrowserRouter>
    </header>
  );
}
