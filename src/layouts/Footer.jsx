
import Logo from "../assets/icon/trv.png"

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo"><img src={Logo} alt="Travel Boss" /></span>
          <p className="footer__description">
            Contacte a nossa agência e garanta que seu processo seja bem acompanhado e não precise se preocupar com nada. 
          </p>
        </div>

        <div className="footer__grid">
          <div className="footer__column">
            <span className="footer__title">Links rápidos</span>
            <a className="footer__link" href="/">
              Home
            </a>
            <a className="footer__link" href="/destinos">
              Destinos
            </a>
            <a className="footer__link" href="/sobre">
              Sobre
            </a>
            <a className="footer__link" href="/contactos">
              Contactos
            </a>
          </div>

          <div className="footer__column">
            <span className="footer__title">Recursos</span>
            <a className="footer__link" href="/servicos">
              Serviços
            </a>
            <a className="footer__link" href="/depoimentos">
              Passagens
            </a>
            <a className="footer__link" href="/faq">
              FAQ
            </a>
            <a className="footer__link" href="/destinos">
              Ofertas
            </a>
          </div>

          <div className="footer__column footer__column--last">
            <span className="footer__title">Contato</span>
            <p className="footer__text">geral@travelboss.gdmao.com</p>
            <p className="footer__text">+244 99999-9999</p>
            <div className="footer__tags">
              <span>Viagem</span>
              <span>Turismo</span>
              <span>Aventura</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__note">
            Desenvolvido por Silicon Tech
          </p>
          <p className="footer__copyright">
            &copy; {year} Travel Boss. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
