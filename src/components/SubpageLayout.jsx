import Navbar from './Navbar'
import Footer from './Footer'

export default function SubpageLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="w-full pt-16 sm:pt-[4.25rem]">
        {children}
      </main>
      <Footer />
    </>
  )
}
