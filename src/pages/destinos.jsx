import { useEffect, useState } from "react";
import { FaBed, FaCarSide } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { GiCampingTent } from "react-icons/gi";

const mockDestinos = [
  {
    id: 1,
    name: "Lisboa",
    region: "Europa • Portugal",
    price: 2499,
    duration: "5 dias",
    image:
      "https://unsplash.com/pt-br/fotografias/pessoas-reunidas-na-rua-K3XGEoZgA0s",
    link: "",
  },
  {
    id: 2,
    name: "Cidade do Cabo",
    region: "África • África do Sul",
    price: 3850,
    duration: "7 dias",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    link: "",
  },
  {
    id: 3,
    name: "Tóquio",
    region: "Ásia • Japão",
    price: 7120,
    duration: "6 dias",
    image:
      "https://images.unsplash.com/photo-1526481280690-2a9a320b0d1b?auto=format&fit=crop&w=1200&q=80",
    link: "",
  },
  {
    id: 4,
    name: "Nova York",
    region: "América • EUA",
    price: 4980,
    duration: "5 dias",
    image:
      "https://images.unsplash.com/photo-1549921296-3a5e63f2cc57?auto=format&fit=crop&w=1200&q=80",
    link: "",
  },
];

const Others = [
  {
    icon: <FaCarSide />,
    nome: "Carros",
    link: "sobre",
  },
  {
    icon: <FaBed />,
    nome: "Hoteis",
    link: "/",
  },
  {
    icon: <GiCampingTent />,
    nome: "Tour",
    link: "contactos",
  },
  {
    icon: <FaEarthAfrica />,
    nome: "Explorar",
  },
];

const travelink =
  "https://www.edreams.com/travel/?step=departure#results/type=R;from=LAD;to=LON;dep=2026-09-03;ret=2026-09-07;adults=1;children=0;infants=0;buyPath=HOTTEST_DEALS;internalSearch=true";

const faqItems = [
  {
    id: 1,
    question: "Preciso de visto para viajar para este destino?",
    answer:
      "Depende do país e da sua nacionalidade. Consulte o consulado ou a embaixada do destino antes de planejar a viagem.",
  },
  {
    id: 2,
    question: "Quanto tempo leva para obter o visto?",
    answer:
      "O prazo varia muito: pode ser de dias a semanas. Solicite com antecedência para evitar contratempos.",
  },
  {
    id: 3,
    question: "Quais documentos são necessários?",
    answer:
      "Normalmente passaporte válido, foto, comprovante de renda, reserva de hotel e passagem de ida e volta. Cada país pode pedir itens específicos.",
  },
  {
    id: 4,
    question: "Posso viajar antes do visto ser aprovado?",
    answer:
      "Não. A aprovação do visto deve ocorrer antes da viagem para garantir entrada no país.",
  },
  {
    id: 5,
    question: "Qual é a validade do visto?",
    answer:
      "A validade depende do tipo de visto e do país. Alguns duram apenas poucos dias, outros meses ou anos.",
  },
  {
    id: 6,
    question: "Posso trabalhar com visto de turista?",
    answer:
      "Em geral, não. Visto de turista normalmente não permite trabalho remunerado. Verifique o tipo correto de visto caso queira estudar ou trabalhar.",
  },
  {
    id: 7,
    question: "Preciso de seguro viagem para tirar o visto?",
    answer:
      "Alguns países exigem seguro viagem com cobertura mínima. Confira os requisitos do destino e inclua no seu planejamento.",
  },
  {
    id: 8,
    question: "O visto é garantido após o envio dos documentos?",
    answer:
      "Não há garantia. A aprovação depende da análise do consulado. Envie tudo corretamente para aumentar suas chances.",
  },
];

export default function Destinos() {
  const [destinos, setDestinos] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDestinos(mockDestinos);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

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
                <input type="date" name="date1" id="date1" required />
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
                    {Array.from({ length: 8 }, (_, index) => index + 1).map(
                      (count) => (
                        <option key={count} value={count}>
                          {count}
                        </option>
                      ),
                    )}
                  </select>
                </label>
                <label htmlFor="children">
                  Crianças
                  <select
                    name="children"
                    id="children"
                    value={children}
                    onChange={(event) =>
                      setChildren(Number(event.target.value))
                    }
                  >
                    {Array.from({ length: 7 }, (_, index) => index).map(
                      (count) => (
                        <option key={count} value={count}>
                          {count}
                        </option>
                      ),
                    )}
                  </select>
                </label>
                <label htmlFor="">
                  <button className="submeter">procurar</button>
                </label>
              </div>
            </fieldset>
          </form>
        </div>

        <div className="others-services">
          <div className="others-services-grid">
            {Others.map((det, i) => (
              <a href={det.link}>
                <div className="others-services-card">
                  <span>{det.icon}</span>
                  <h3>{det.nome}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="destinos-grid">
          {destinos.map((destino) => (
            <a href={destino.link}>
              <article key={destino.id} className="destino-card">
                <div className="card-photo">
                  <img src={destino.image} alt={destino.name} />
                </div>
                <div className="card-body">
                  <p className="card-route">{destino.region}</p>
                  <h2 className="card-title">{destino.name}</h2>
                  <div className="card-meta">
                    <span className="card-price">
                      R$ {destino.price.toLocaleString("pt-BR")}
                    </span>
                    <span className="card-tag">{destino.duration}</span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>

        <section className="faq-section">
          <div className="faq-header">
            <span className="section-label">FAQ</span>
            <h2>Perguntas frequentes sobre viagens com visto</h2>
            <p>
              Respostas rápidas para esclarecer dúvidas comuns antes de embarcar.
            </p>
          </div>
          <div className="faq-grid">
            {faqItems.map((item) => (
              <article key={item.id} className="faq-card">
                <button
                  type="button"
                  className="faq-question"
                  onClick={() =>
                    setOpenFaq(openFaq === item.id ? null : item.id)
                  }
                >
                  <span>{item.question}</span>
                  <span
                    className={`faq-icon ${openFaq === item.id ? "active" : ""}`}
                  >
                    ›
                  </span>
                </button>

                {openFaq === item.id && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      </section>

      
    </div>
  );
}
