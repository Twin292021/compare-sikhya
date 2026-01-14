import About from "@/src/component/about";
import Hero from "@/src/component/hero";
import Partners from "@/src/component/partners";
import Services from "@/src/component/services";
import Testimonials from "@/src/component/testimonials";

export default function Home() {
  return(
    <>
      <Hero />
      <About />
      <Services />
      <Partners />
      <Testimonials />
    </>
  )
}