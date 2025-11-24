import { Hero } from "./components/Hero";
import { FeaturedCars } from "./components/FeaturedCars";
import { Categories } from "./components/Categories";
import { Benefits } from "./components/Benefits";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedCars />
      <Categories />
      <Benefits />
      <Footer />
    </div>
  );
}