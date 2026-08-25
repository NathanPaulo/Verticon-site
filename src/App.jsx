import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logo.webp'
import heroImg from './assets/portfolio/trabalho1.jpg'
import Splash from './components/splash'
import Header from './components/header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Serviços'
import Contato from './components/contato'
import Footer from './components/Footer'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) {
    return <Splash logo={logo} />
  }

  return (
    <>
      <Header logo={logo} />
      <Hero heroImg={heroImg} />
      <Sobre />
      <Servicos />
      <Contato />
      <Footer />
    </>
  )
}

export default App