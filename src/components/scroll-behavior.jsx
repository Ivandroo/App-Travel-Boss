import React, { useRef, useEffect, useState } from 'react'

import Brasil from '../assets/destiny/01brasil.jpg'
import Barcelona from '../assets/destiny/02barcelona.jpg'
import Portugal from '../assets/destiny/03portugal.jpg'
import Maldivas from '../assets/destiny/04maldivas.jpg'
import AfricaSul from '../assets/destiny/africa-do-sul.jpg'
import EUA from '../assets/destiny/eua.jpg'
import Canada from '../assets/destiny/canadá.jpg'

const images = [
    { src:Brasil, nome: "Brasil" },
    { src:Barcelona, nome: "Barcelona" },
    { src:Portugal, nome: "Portugal" },
    { src:Maldivas, nome: "Maldivas" },
    { src:AfricaSul, nome: "África do Sul" },
    { src:EUA, nome: "EUA" },
    { src:Canada, nome: "Canadá" }
]

const servicesList = [
    {
        nome: "Correspondência Personalizada",
        descricao: "Nosso sistema exclusivo de correspondência permite que você encontre exatamente o passeio que deseja para suas próximas férias."
    },
    {
        nome: "Suporte 24/7",
        descricao: "Nossa equipe de suporte dedicada está disponível 24 horas por dia, 7 dias por semana, para garantir que sua experiência de viagem seja tranquila e sem preocupações."
    },
    {
        nome: "Garantia de Preço",
        descricao: "Oferecemos uma garantia de preço para que você possa reservar com confiança, sabendo que está obtendo a melhor oferta possível para suas férias dos sonhos."
    },
    {
        nome: "Ampla variendade de destinos",
        descricao: "Explore uma ampla variedade de destinos ao redor do mundo, desde praias paradisíacas até cidades vibrantes, tudo ao seu alcance com a Travel Boss."
    },
    {
        nome: "Serviços de qualidade",
        descricao: "Oferecemos serviços de alta qualidade, desde a reserva até o suporte pós-viagem, garantindo que cada etapa da sua experiência seja excepcional."
    },
    {
        nome: "Experiências personalizadas",
        descricao: "Criamos experiências de viagem personalizadas para atender às suas preferências e interesses, garantindo que cada viagem seja única e memorável."
    }
]

export default function ScrollBehavior() {

    const sectionRef = useRef(null)
    const trackRef = useRef(null)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
        if (!sectionRef.current || !trackRef.current) return

        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight = sectionRef.current.offsetHeight
        const viewportHeight = window.innerHeight
        
        // Calcula quanto da secção já foi "scrollada"
        const scrollStart = -rect.top
        const scrollDistance = sectionHeight - viewportHeight
        const scrollProgress = Math.min(Math.max(scrollStart / scrollDistance, 0), 1)
        
        setProgress(scrollProgress)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // roda 1x no mount
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Calcula o deslocamento horizontal baseado no progresso do scroll
    const trackWidth = images.length * 450 - window.innerWidth // 450px por card
    const translateX = -progress * trackWidth

    return (
        <section className="scroll-behavior-container">

            <section className="scroll-carousel" ref={sectionRef}>
                <div className="sticky-container">
                    <div className="carousel-header">
                        <h2>Descubra os Destinos</h2>
                        <p>Rola para explorar os destinos</p>
                    </div>
                    
                    <div className="carousel-viewport">
                        <div className="carousel-track" ref={trackRef} style={{ transform: `translateX(${translateX}px)` }}>
                            
                            {images.map((img, i) => (
                            <div key={i} className="carousel-card">
                                <img src={img.src} alt={`Destino ${i + 1}`} />
                                <div className="card-info">
                                    <h3>{img.nome}</h3>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="nossos-servicos">
                <div className="carousel-header">
                    <h2>Aqui, você encontra</h2>
                    <p>Os melhores serviços para sua viagem</p>
                </div>
                <div className="nossos-serivicos-content">
                    {servicesList.map((service, i) => 
                        <div key={i} className="service-card">
                            <h3>{service.nome}</h3>
                            <p>{service.descricao}</p>
                        </div> 
                    )}
                </div>
            </div>

        </section>
    )
}