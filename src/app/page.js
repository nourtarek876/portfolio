"use client";
import Landing from "./components/Landing";

export default function Home() {
  return (
   <header>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    </BrowserRouter>
    </header>
  );
}
