import { Outlet } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
