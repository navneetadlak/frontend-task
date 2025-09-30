import './App.css'
import { Features } from './components/features';
import { Header } from './components/Header';
import { HeroSection } from './components/hero-section';
import { Popular } from './components/popular';
import { Tutorials } from './components/tutorials';

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
    </>
  )
}

export default App
