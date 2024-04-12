import React, {useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef()
    let tx = 0

const slideForward = () =>{
    if(tx > -50){
        tx -= 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = () =>{
    if(tx < 0){
        tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
}


    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Ana Maria</h3>
                                    <span>Rio de Janeiro, RJ</span>
                                </div>
                            </div>
                            <p>Na Edusity, a excelência vai além das salas de aula: encontrei professores apaixonados,
                                 matérias inspiradoras e uma reputação acadêmica que eleva meu diploma a novos patamares.
                                  
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Maicon Judson</h3>
                                    <span>Belo Horzionte, MG</span>
                                </div>
                            </div>
                            <p>Optar por cursar minha graduação na Edusity foi uma das melhores decisões que já tomei.
                             A comunidade solidária, as instalações de ponta e o compromisso com a excelência 
                             acadêmica realmente superaram minhas expectativas.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Luisa Souza</h3>
                                    <span>Lavras, MG</span>
                                </div>
                            </div>
                            <p>A Edusity oferece laboratórios e computadores de ponta,
                                 proporcionando uma experiência prática de aprendizado.
                                 Com bons professores e uma localização conveniente,
                                  é uma excelente escolha para quem busca qualidade acadêmica
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Pedro Oliveira </h3>
                                    <span>Xique-Xique, BA</span>
                                </div>
                            </div>
                            <p>Destaco também o direcionamento para o mercado de trabalho,
                                 que prepara os alunos com habilidades relevantes.
                                  Sua reputação no Brasil e boa nota no MAC
                                   reforçam sua qualidade como instituição de ensino confiável
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials