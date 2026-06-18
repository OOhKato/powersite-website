import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import AboutUs from '../components/AboutUs'
import Approach from '../components/Approach'
import MarketOpportunity from '../components/MarketOpportunity'
import OurProcess from '../components/OurProcess'
import InvestorCTA from '../components/InvestorCTA'
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
        <MarketOpportunity />
        <OurProcess />
        <InvestorCTA />
      </main>
      <Footer />
    </>
  )
}
