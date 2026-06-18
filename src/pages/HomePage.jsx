import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MagicBento from '../components/MagicBento'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <section className="w-full pb-20 sm:pb-28">
          <div className="mx-auto box-border w-full max-w-6xl px-5 sm:px-8 lg:px-12">
            <MagicBento
              textAutoHide={false}
              glowColor="34, 197, 94"
              spotlightRadius={300}
              particleCount={12}
              enableTilt={false}
              clickEffect
              enableMagnetism
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
