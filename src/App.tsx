import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/pages/About";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
