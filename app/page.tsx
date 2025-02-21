import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="h-screen">
      <Header/>
      <div className="h-5/6">
        <Hero/>
      </div>
    </div>
  );
}
