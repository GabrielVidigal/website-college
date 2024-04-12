import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='NOSSOS PROGRAMAS' title='O Que Nós Oferecemos' />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle='Galeria' title='Fotos do Campus' />
        <Campus/>
        <Title subTitle='DEPOIMENTOS' title='O Que dizem Nossos Alunos' />
        <Testimonials/>
        <Title subTitle='CONTATO' title='Fale Conosco' />
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App