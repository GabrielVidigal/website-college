import React from 'react'
import './About.css'
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>SOBRE A UNIVERSIDADE</h3>
                <h2>Nutrindo o Futuro Hoje</h2>
                <p>Embarque em uma jornada educacional transformadora com os programas abrangentes de educação de nossa
                     universidade.Nosso currículo de ponta é projetado para capacitar os alunos com o conhecimento,
                      habilidades e experiências necessárias para se destacar no dinâmico campo da educação.</p>
                <p>Com foco em inovação, aprendizado prático e orientação personalizada,
                     nossos programas preparam educadores aspirantes para fazerem um impacto
                      significativo em salas de aula, escolas e comunidades.</p>
                <p>Se você aspira se tornar um professor, administrador, orientador ou líder educacional,
                     nossa ampla gama de programas oferece o caminho perfeito para alcançar seus objetivos
                      e desbloquear todo o seu potencial na formação do futuro da educação..</p>
            </div>
        </div>
    )
}

export default About