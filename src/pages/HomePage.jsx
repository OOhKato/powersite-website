import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
      </main>
      <Footer />
    </>
  )
}
