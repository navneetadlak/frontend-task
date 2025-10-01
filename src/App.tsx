import './App.css'
import { FAQ } from './components/f&q';
import { Features } from './components/features';
import { Footer } from './components/footer';
import { FreeCourse } from './components/freecourse';
import { Header } from './components/Header';
import { HeroSection } from './components/hero-section';
import { Popular } from './components/popular';
import { Pricing } from './components/pricing';
import { Tutorials } from './components/tutorials';
import { Workflow } from './components/workflow';

function App() {

  return (
    <>
      <div className='px-32 bg-gradient-to-r from-[#E0F5FA] to-[#FFFDE6]'>
        <Header />
        <HeroSection />
      </div>
      <Tutorials />
      <Features />
      <Popular />
      <Workflow />
      <Pricing />
      <FreeCourse />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
