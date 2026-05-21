import { ThemeProvider, useTheme } from './ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Solutions from './components/Solution'
import News from './components/News'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function AppInner() {
  const { light } = useTheme()
  return (
    <div className={`min-h-screen transition-colors duration-300 ${light ? 'bg-white light-mode' : 'bg-black'}`}>
      <Navbar />
      <Hero />
      <Timeline />
      <Solutions />
      <News />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
