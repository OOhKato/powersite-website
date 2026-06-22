import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import Problem from '../components/home/Problem'
import AboutUs from '../components/home/AboutUs'
import Approach from '../components/home/Approach'
import OurProcess from '../components/home/OurProcess'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <Problem />
        <AboutUs />
        <Approach />
        <OurProcess />
      </main>
      <Footer />
    </>
  )
}
