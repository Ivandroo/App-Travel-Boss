import { useState } from "react";

export default function Contactos() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.nome ||
      !formData.email ||
      !formData.assunto ||
      !formData.mensagem
    ) {
      setStatus({
        type: "error",
        message: "Por favor, preencha todos os campos antes de enviar.",
      });
      return;
    }

    setStatus({
      type: "success",
      message: "Mensagem enviada com sucesso! Entraremos em contacto em breve.",
    });

    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <span>Contactos</span>
          <h1>Planeie a sua próxima viagem conosco</h1>
          <p>
            Temos uma equipa dedicada pronta para ajudar com reservas,
            itinerários e dicas de viagem personalizadas.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <div className="contact-top">
            <div className="contact-card-grid">
              <article className="contact-card">
                <h3>Atendimento Rápido</h3>
                <p>Respostas ágeis para quem precisa de apoio imediato.</p>
                <strong>(+244) 923 456 789</strong>
              </article>
              <article className="contact-card">
                <h3>Envie um Email</h3>
                <p>
                  Partilhe os seus planos e nós prepararemos uma proposta
                  personalizada.
                </p>
                <strong>info@travelboss.com</strong>
              </article>
              <article className="contact-card">
                <h3>Visite-nos</h3>
                <p>
                  Estamos disponíveis na nossa sede para consultas presenciais.
                </p>
                <strong>Luanda, Angola</strong>
              </article>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Fale com a equipa</h2>
              <p>Preencha os dados abaixo e faremos o resto.</p>

              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.message}
                </div>
              )}

              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu email"
                required
              />
              <input
                type="text"
                name="assunto"
                value={formData.assunto}
                onChange={handleChange}
                placeholder="Assunto"
                required
              />
              <textarea
                name="mensagem"
                rows="6"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Escreva sua mensagem"
                required
              />
              <button type="submit">Enviar mensagem</button>
            </form>
          </div>

          <div className="contact-details-footer">
            <div className="contact-summary-card">
              <h3>Horário de atendimento</h3>
              <p>Segunda a Sexta: 09:00 – 18:00</p>
              <p>Sábado: 10:00 – 14:00</p>
              <p>Domingo: Fechado</p>
            </div>
            <div className="contact-summary-card">
              <h3>Por que nos contactar?</h3>
              <p>
                Reservas, pacotes personalizados, assistência em viagem e
                sugestões de destinos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
