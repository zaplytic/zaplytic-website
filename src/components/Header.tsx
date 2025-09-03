import logo from "@/assets/favicon.svg"
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <nav className="z-1 bg-gray-900 w-full fixed top-0 left-0 grid grid-cols-2 shadow-lg shadow-cyan-500/15 p-4">
        <div className="mx-10">
          <a href="/">
            <img className="size-[clamp(1.25rem,_0.2081rem_+_2.3121vw,_2rem)] shrink-0" src={logo} alt="Zaplytic Official Logo" />
          </a>
        </div>
        <div className="w-4/5 mx-auto">
          {!menu ?
          <svg onClick={() => setMenu(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden tb:block size-6 tb:fixed tb:right-4">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          :
          <>
            <svg onClick={() => setMenu(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden tb:block size-6 tb:fixed tb:right-4">
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
            <ul className="hidden tb:block flex justify-between tb:absolute tb:flex-col tb:-bottom-40 tb:right-4">
              <li className="tb:active:text-cyan-500 tb:active:font-bold tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/">Home</a></li>
              <li className="tb:active:text-cyan-500 tb:active:font-bold tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/#services">Services</a></li>
              <li className="tb:active:text-cyan-500 tb:active:font-bold tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/#works">Works</a></li>
              <li className="tb:active:text-cyan-500 tb:active:font-bold tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/about-us">About Zaplytic</a></li>
              <li className="tb:active:text-cyan-500 tb:active:font-bold tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/#contact-us">Contact Us</a></li>
            </ul>
          </>}
          <ul className="flex justify-between tb:hidden">
              <li className="hover:text-cyan-500 hover:font-medium tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/">Home</a></li>
              <li className="hover:text-cyan-500 hover:font-medium tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/#services">Services</a></li>
              <li className="hover:text-cyan-500 hover:font-medium tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/#works">Works</a></li>
              <li className="hover:text-cyan-500 hover:font-medium tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/about-us">About Zaplytic</a></li>
              <li className="hover:text-cyan-500 hover:font-medium tb:bg-gray-800 tb:py-2 tb:px-4"><a href="/#contact-us">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
