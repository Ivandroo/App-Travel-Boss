import { useEffect, useState } from 'react'
import { FaBed, FaCarSide,  } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { GiCampingTent } from "react-icons/gi";

const mockDestinos = [
  {
    id: 1,
    name: 'Lisboa',
    region: 'Europa • charmoso',
    price: 2499,
    duration: '5 dias',
    image:
      'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Cidade do Cabo',
    region: 'África • aventura',
    price: 3850,
    duration: '7 dias',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Tóquio',
    region: 'Ásia • urbano',
    price: 7120,
    duration: '6 dias',
    image:
      'https://images.unsplash.com/photo-1526481280690-2a9a320b0d1b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: 'Nova York',
    region: 'América • icônico',
    price: 4980,
    duration: '5 dias',
    image:
      'https://images.unsplash.com/photo-1549921296-3a5e63f2cc57?auto=format&fit=crop&w=1200&q=80',
  },
]

const Others = [
  {
    icon: <FaCarSide />,
    nome: "Carros",
    link: "sobre"
  },
  {
    icon: <FaBed />,
    nome: "Hoteis",
    link: "/"
  },
  {
    icon: <GiCampingTent />,
    nome: "Tour",
    link: "contactos"
  },
  {
    icon: <FaEarthAfrica />,
    nome: "Explorar",
  },
]

export default function Destinos() {
  const [destinos, setDestinos] = useState([])
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDestinos(mockDestinos)
    }, 250)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="destinos">
    
      <section className="welcome-container">
        <div className="welcome-content">
          <h1>Viaje com a nossa ajuda </h1>
          <p>Escolha seu destino, seu visto e tratamos do resto</p>
        </div>
      </section>

      <section className="destinos-page">
        <div className="destinos-hero">
          <span className="section-label">Explore destinos</span>
          <h1>Escolha onde quer ir e ficar</h1>
          <form onSubmit={(event) => event.preventDefault()}>

            <div className="caminho">
              <label htmlFor="idaevolta">
                Ida e Volta
                <input type="radio" name="idaevolta" id="idaevolta" />
              </label>
              <label htmlFor="soida">
                Só Ida
                <input type="radio" name="idaevolta" id="soida" />
              </label>
              <label htmlFor="variascidades">
                Várias cidades
                <input type="radio" name="idaevolta" id="variascidades" />
              </label>
            </div>
            
            <fieldset>
              <label htmlFor="from">
                De
                <input type="text" name="from" id="from" required />
              </label>
              <label htmlFor="to">
                Para
                <input type="text" name="to" id="to" required />
              </label>

              

              <label htmlFor="date1">
                Partida
                <input type="date" name="date1" id="date1" required/>
              </label>
              <label htmlFor="date2">
                Regresso
                <input type="date" name="date2" id="date2" />
              </label>

              

              <div className="passengers-group">
                
                <label htmlFor="adults">
                  Adultos
                  <select
                    name="adults"
                    id="adults"
                    value={adults}
                    onChange={(event) => setAdults(Number(event.target.value))}
                  >
                    {Array.from({ length: 8 }, (_, index) => index + 1).map((count) => (
                      <option key={count} value={count}>
                        {count}
                      </option>
                    ))}
                  </select>
                </label>
                <label htmlFor="children">
                  Crianças
                  <select
                    name="children"
                    id="children"
                    value={children}
                    onChange={(event) => setChildren(Number(event.target.value))}
                  >
                    {Array.from({ length: 7 }, (_, index) => index).map((count) => (
                      <option key={count} value={count}>
                        {count}
                      </option>
                    ))}
                  </select>
                </label>
                <label htmlFor="">
                  <button className='submeter'>procurar</button>
                </label>
                
              </div>
            </fieldset>
          </form>
        </div>

        <div className="others-services">
          <div className="others-services-grid">
            {Others.map((det, i) => 
              <a href={det.link}>
                <div className="others-services-card">
                  <span>{det.icon}</span>
                  <h3>{det.nome}</h3>
                </div>
              </a>
            )}
          </div>
        </div>

        <div className="destinos-grid">
          {destinos.map((destino) => (
            <article key={destino.id} className="destino-card">
              <div className="card-photo">
                <img src={destino.image} alt={destino.name} />
              </div>
              <div className="card-body">
                <p className="card-route">{destino.region}</p>
                <h2 className="card-title">{destino.name}</h2>
                <div className="card-meta">
                  <span className="card-price">R$ {destino.price.toLocaleString('pt-BR')}</span>
                  <span className="card-tag">{destino.duration}</span>
                </div>
                <p className="card-code">
                  {`const passagem = {\n  destino: '${destino.name}',\n  preco: ${destino.price},\n  duracao: '${destino.duration}'\n}`}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
