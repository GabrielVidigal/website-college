import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96c8cfe3-667d-4a97-ba28-c8df27ac3265");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
      
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form
                    or find our contact information below.
                    Your feedback, questions, and suggestions are
                    important to us as we strive to provide exceptional
                    service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />email@email.com</li>
                    <li><img src={phone_icon} alt="" /> 31 9876-5432</li>
                    <li><img src={location_icon} alt="" /> Belo Horizonte <br />MG</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Nome</label>
                    <input type="text" name='name' placeholder='Digite seu nome' required />
                    <label>Telefone</label>
                    <input type="tel" name='phone' placeholder='Digite o seu número de telefone' required />
                    <label>Email</label>
                    <input type="email" name='email' placeholder='Digete seu email' required />
                    <label>Mensagem </label>
                    <textarea name="message" rows="6" placeholder='Escreva sua mensagem' required></textarea>
                    <button type='submit' className='btn dark-btn'>Enviar<img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>

    )
}

export default Contact