import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Virtual Pharmacist. All rights reserved.</p>
          <div className="text-sm text-gray-600 flex items-center gap-4">
            <a href="#" className="hover:text-teal-600">Privacy</a>
            <a href="#" className="hover:text-teal-600">Terms</a>
            <a href="/test" className="hover:text-teal-600">System check</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-emerald-50/50 text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
