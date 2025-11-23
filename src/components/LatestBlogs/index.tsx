import { useGSAP } from "@gsap/react";
import BlogCard, { type BlogCardProps } from "./BlogCard";
import gsap from "gsap";

const blogs: BlogCardProps[] = [
  {
    title: "Better is when everything works together",
    category: "Product",
    href: "#",
    img: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=360"
  },
  {
    title: "What CFR really is about",
    category: "Business",
    href: "#",
    img: "https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=360"
  },
  {
    title: "Should Product Owners think like entrepreneurs?",
    category: "Business",
    href: "#",
    img: "https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=360"
  },
  {
    title: "Announcing Front Strategies: Ready-to-use rules",
    category: "Facilities",
    href: "#",
    img: "https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=360"
  }
];

export default function LatestBlogs() {
  useGSAP(() => {
    gsap.from("#latest-blog-title, #latest-blog-subtitle", {
      opacity: 0,
      yPercent: 100,
      scrollTrigger: {
        trigger: "#latest-blog-title",
        start: "top 80%"
      }
    });
  }, []);

  return (
    <div className="max-w-7xl px-4 py-10 sm:px-6  lg:py-14 mx-auto">
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2
          className="text-3xl font-bold md:text-4xl md:leading-tight dark:text-white"
          id="latest-blog-title"
        >
          Read our latest blogs
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400" id="latest-blog-subtitle">
          We've worked tirelessly for the last 2 years, let us share some insight
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-10 lg:mb-14">
        {blogs.map((blog, index) => (
          <BlogCard {...blog} key={index} />
        ))}
      </div>

      <div className="text-center">
        <div className="inline-block bg-white border border-gray-200 shadow-2xs rounded-full dark:bg-neutral-900 dark:border-neutral-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 dark:text-neutral-400">Want to read more?</p>
            <a
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
              href="#"
            >
              Go here
              <svg
                aria-hidden="true"
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
