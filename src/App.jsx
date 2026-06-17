import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from './ThemeContext'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import TimelinePage from './pages/TimelinePage'
import SolutionsPage from './pages/SolutionsPage'
import NewsPage from './pages/NewsPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import ImprintPage from './pages/ImprintPage'
import DataPolicyPage from './pages/DataPolicyPage'
import './index.css'

function AppInner() {
  const { light } = useTheme()
  return (
    <div className={`w-full min-h-screen overflow-x-clip transition-colors duration-300 ${light ? 'bg-white light-mode' : 'bg-black'}`}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/imprint" element={<ImprintPage />} />
        <Route path="/data-policy" element={<DataPolicyPage />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </BrowserRouter>
  )
}
