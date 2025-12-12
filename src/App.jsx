import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";         // adjust path if in a folder
import { NotFound } from "./pages/NotFound"; // adjust path if in a folder
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
