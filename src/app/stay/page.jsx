import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Slide from "./components/Slide";
import ListStay from "./components/ListStay";

const page = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-2 md:gap-0">
      <ListStay />
      <Slide />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
