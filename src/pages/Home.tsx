import Hero from "@/components/Hero";
import LatestBlogs from "@/components/LatestBlogs";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main data-testid="homepage">
      <Hero />
      <TechStack />
      <LatestBlogs />
    </main>
  );
}
