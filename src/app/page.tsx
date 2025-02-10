import MedicalInfo from "@/components/content";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import Review from "@/components/reviews";
import Team from "@/components/team";
import { Top } from "@/components/top";
import Treatment from "@/components/treatment";

export default function Home() {
  return (
   <>
   <Top/>
   <Navbar/>
   <Hero/>
   <MedicalInfo/>
   <Header/>
   <Treatment/>
   <Team/>
   <Products/>
   <Review/>
   <Footer/>  
   </>
  );
}
