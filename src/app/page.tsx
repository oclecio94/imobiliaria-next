import AboutUs from "@/components/AboutUs";
import BestDeals from "@/components/BestDeals";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewestDeals from "@/components/NewestDeals";

export default function Home() {
  return (
    <>
      <div className="App  w-11/12 md:w-4/5 m-auto">
        <Hero />
        <NewestDeals />
        <AboutUs />
        {/* <BestDeals /> */}
      </div>
      <Footer />
    </>
  );
}
