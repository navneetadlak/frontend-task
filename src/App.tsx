import './App.css'
import { Features } from './components/features';
import { Header } from './components/Header';
import { HeroSection } from './components/hero-section';
import { Popular } from './components/popular';
import { Tutorials } from './components/tutorials';

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Tutorials />
      <Features />
      <Popular />
    </>
  )
}

export default App
