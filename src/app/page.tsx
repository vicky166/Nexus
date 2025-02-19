import MedicalInfo from '@/components/content'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Chart from '@/components/graph'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Product from '@/components/product'
import Products from '@/components/products'
import Review from '@/components/reviews'
import SculptraComponent from '@/components/Sculptra'
import Team from '@/components/team'
import { Top } from '@/components/top'
import Treatment from '@/components/treatment'
import Video from '@/components/video'

export default function Home() {
  return (
    <>
      <Top />
      <Navbar />
      <Hero />
      <CTA/>
      <MedicalInfo />
      <Header />
      <Chart />
      <SculptraComponent/>
      <Product />
      <Video  />
      <Treatment />
      <Products />
      <Team />
      <Review />
      <Footer />
    </>
  )
}
