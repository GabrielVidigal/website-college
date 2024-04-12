import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
    <div className="hero-text">
      <h1>Desperte seu potencial, transforme o mundo.</h1>
      <p>Nosso programa acadêmico é cuidadosamente desenvolvido para fornecer aos 
          as habilidades e conhecimentosnecessários para se destacarem em suas respectivas áreas. 
      </p>
      <button className='btn'>Saiba mais <img src={dark_arrow} alt="dark arrow" /></button>
    </div>
    </div>
  )
}

export default Hero