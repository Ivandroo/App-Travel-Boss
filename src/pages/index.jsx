import React, { useRef } from 'react'

import bg1 from '../assets/bg/bg1.jpg'
import Museu1 from '../assets/museus/museu1.jpg'
import Museu2 from '../assets/museus/museu2.jpg'
import Museu3 from '../assets/museus/museu3.jpg'

import ScrollBehavior from '../components/scroll-behavior'

export default function Home() {

  return (
    <div className="home">
      <section className="welcome-container">
        <div className="welcome-content">
          <h1>Descubra sua nova aventura</h1>
          <p>Explore o mundo com nossas experiências de viagem</p>
        </div>
      </section>

      {/* Secção de museus e atrações turísticas */}
      <section className="museus-container">
        <div className="museus-content">
          {/* Div 1 - Museu Nacional de Angola */}
          <div className="museus-grid">
            <div className="museus-img">
              <img src={Museu1} alt="Museu Nacional de Angola" />
            </div>
            <div className="museus-text">
              <h2>Forças Armadas,</h2>
              <span> Museu Nacional de Angola </span>
              <p>Explore a história militar de Angola no museu das Forças Armadas. Uma viagem pelos momentos que definiram a nossa nação, com acervo único de artefactos e documentos históricos.</p>
            </div>
          </div>
          {/* Div 2 - Quedas de Kalandula */}
          <div className="museus-grid">
            <div className="museus-text">
              <h2>Quedas de Kalandula,</h2>
              <span> Uma das 7 maravilhas de Angola </span>
              <p>As quedas de água de Kalandula, antigamente conhecidas por Duque de Bragança, são as maiores de Angola e as segundas maiores de África, depois das quedas Victória, entre a Zâmbia e o Zimbabué.</p>
            </div>
            <div className="museus-img">
              <img src={Museu2} alt="Museu Nacional de Angola" />
            </div>
          </div>
          {/* Div 3 - Museu do Louvre */}
          <div className="museus-grid">
            <div className="museus-img">
              <img src={Museu3} alt="Museu Nacional de Angola" />
            </div>
            <div className="museus-text">
              <h2>Museu do Louvre,</h2>
              <span> Palácio do Louvre, França </span>
              <p>O Museu do Louvre foi a sede do governo monárquico francês desde a época dos Capetos medievais até o reinado de Luís XIV. A transformação do complexo de edifícios em museu iniciou em 1692, quando Luís XIV ordenou a criação de uma galeria de esculturas antigas na Sala das Cariátides.</p>
            </div>
          </div>
        </div>
      </section>

      <ScrollBehavior />

      {/* Secção de Contacto */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Entre em contacto</h2>
          <p>Tem dúvidas ou quer agendar sua próxima viagem? Preencha o formulário abaixo e nossa equipa entrará em contacto!</p>
          <form className="contact-form">
            <input type="text" name="nome" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu email" required />
            <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
      
    </div>
  )
}