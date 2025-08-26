import { useState } from "react";
import Header from "@/components/Header"

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-emerald-800 text-white px-4 py-2 rounded hover:bg-emerald-600 cursor-pointer"
        >
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
