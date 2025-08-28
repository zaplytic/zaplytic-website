import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Header from "@/components/Header"
import Footer from "@/components/Footer"


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <div className="h-screen w-full flex items-center justify-center bg-gray-900">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-emerald-800 text-white px-4 py-2 rounded hover:bg-emerald-600 cursor-pointer"
          >
            Count is {count}
          </button>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
