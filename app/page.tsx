import Hero from "@/components/Home/Hero";
import Course from "@/components/Home/Course";
import Features from "@/components/Home/Features";
import Achievment from "@/components/Home/Achievment";
import Fedback from "@/components/Home/Fedback";
import Footer from "@/components/Footer";
import Prising from "@/components/Home/Prising";
const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <Course />
        <Achievment />
        <Fedback />
        <Prising />
        <Footer />
      </main>
    </>
  );
};

export default Home;
