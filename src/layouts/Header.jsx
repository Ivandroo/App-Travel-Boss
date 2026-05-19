import Logo from '../assets/icon/trv.png'

export default function Header() {
    return (

        <nav className={`navbar`}>
            
            <div className="liquid-menu">
                <div className="logo">
                    <img src={Logo} alt="Travel Boss Logo" width="60" height="60" />
                </div>
                <ul className="nav-links">
                    <li><a href="/">Casa</a></li>
                    <li><a href="/sobre">Sobre nós</a></li>
                    <li><a href="/destinos">Destinos</a></li>
                    <li><a href="/contactos">Contactos</a></li>
                </ul>
                <button className="contact-btn">Agendar</button>
            </div>
        </nav>    
    )
}