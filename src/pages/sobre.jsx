import brasil from "../assets/flags/brasil.png";
import canada from "../assets/flags/canada.png";
import elSalvador from "../assets/flags/el-salvador.png";
import espanha from "../assets/flags/espanha.png";
import eua from "../assets/flags/eua.png";
import portugal from "../assets/flags/portugal.png";
import singapura from "../assets/flags/singapura.png";

import {
  MdOutlineFlight,
  MdLocalHotel,
  MdDirectionsCar,
  MdShield,
  MdEditDocument,
} from "react-icons/md";
import { FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";

import Comentarios from "../components/Comentarios";

const servicos = [
  {
    nome: "Reservas de Voos",
    icon: <MdOutlineFlight />,
    desc: "Passagens aéreas nacionais e internacionais.",
  },
  {
    nome: "Hotéis & Hospedagem",
    icon: <MdLocalHotel />,
    desc: "Reserva de hotéis, hostels e resorts.",
  },
  {
    nome: "Transfers & Transportes",
    icon: <MdDirectionsCar />,
    desc: "Aluguel de carros, transfers e traslados.",
  },
  {
    nome: "Passeios & Tours",
    icon: <FaMapMarkedAlt />,
    desc: "Roteiros turísticos e experiências locais.",
  },
  {
    nome: "Seguro Viagem",
    icon: <MdShield />,
    desc: "Cobertura completa para sua segurança.",
  },
  {
    nome: "Documentação",
    icon: <MdEditDocument />,
    desc: "Apoio com vistos, passaportes e burocracias.",
  },
  {
    nome: "Atendimento Personalizado",
    icon: <FaPhone />,
    desc: "Suporte dedicado antes, durante e após a viagem.",
  },
  {
    nome: "Consultoria de Destinos",
    icon: <FaEarthEurope />,
    desc: "Ajuda para escolher o melhor destino.",
  },
];

const flags = [
  {
    img: brasil,
  },
  {
    img: canada,
  },
  {
    img: elSalvador,
  },
  {
    img: espanha,
  },
  {
    img: eua,
  },
  {
    img: portugal,
  },
  {
    img: singapura,
  },
];

const porque = [
  {
    nome: "Experiência",
    descricao:
      "Uma agência de viagens que transforma sonhos em realidade, cuidando de tudo, vôos, hotéis e atividades para uma viagem sem preocupações!",
  },
  {
    nome: "Sobre Nós",
    descricao:
      "A Travel Boss está comprometida em oferecer aos nossos clientes o melhor em valor e qualidade nos arranjos de viagem.",
  },
  {
    nome: "Missão",
    descricao:
      "Estamos aqui para transformar os seus sonhos de viagem em realidade! Cuidamos de tudo para que você só precise se preocupar em aproveitar.",
  },
];

export default function Sobre() {
  return (
    <div className="sobre">

      <section className="contact-hero">
        <div className="contact-hero__inner">
          <span>Sobre</span>
          <h1>Saiba mais sobre a Travel Boss</h1>
          <p>
            Conheça os nossos serviços e como trabalhamos. Temos uma equipa dedicada pronta para ajudar com reservas, itinerários e dicas de viagem personalizadas.
          </p>
        </div>
      </section>

      <section className="porque-section">
        <div className="porque-header">
          <h2> Por que a Travel Boss </h2>
          <p>
            Temos orgulho em oferecer excelente qualidade e um ótimo
            custo-benefício em nossos passeios.
          </p>
        </div>

        <div className="porque-cards">
          {porque.map((desc, i) => (
            <div key={i} className="porque-card">
              <h3>{desc.nome}</h3>
              <p>{desc.descricao}</p>
            </div>
          ))}
        </div>

        <div className="flags-carousel">
          <div className="flags-track">
            {[...flags, ...flags].map((src, i) => (
              <div key={i} className="flag">
                <img src={src.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nossos-trabalhos">
        <h2 className="servicos-title">Nossos Trabalhos</h2>
        <div className="servicos-grid">
          {servicos.map((serv, i) => (
            <div className="servico-card" key={i}>
              <span className="servico-icon">{serv.icon}</span>
              <h3>{serv.nome}</h3>
              <p>{serv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="comentarios-section">
        <Comentarios />
      </section>
      
    </div>
  );
}
