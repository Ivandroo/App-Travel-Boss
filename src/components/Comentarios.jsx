import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Comentarios() {
  const [comentarios, setComentarios] = useState([
    {
      nome: "Ana Souza",
      texto:
        "Minha viagem foi incrível! A Travel Boss cuidou de tudo com muita atenção.",
      data: "10/05/2026",
    },
    {
      nome: "Carlos Lima",
      texto: "Equipe super prestativa e ótimas recomendações de passeios.",
      data: "08/05/2026",
    },
  ]);
  const [novoComentario, setNovoComentario] = useState("");
  const [nome, setNome] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!nome.trim() || !novoComentario.trim()) return;
    setComentarios([
      {
        nome,
        texto: novoComentario,
        data: new Date().toLocaleDateString(),
      },
      ...comentarios,
    ]);
    setNovoComentario("");
    setNome("");
  }

  return (
    <div className="comentarios-container">
      <h2>Comentários de Viajantes</h2>
      <form className="comentario-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          maxLength={30}
        />
        <textarea
          placeholder="Deixe seu comentário..."
          value={novoComentario}
          onChange={(e) => setNovoComentario(e.target.value)}
          maxLength={200}
        />
        <button type="submit">Enviar</button>
      </form>
      <div className="comentarios-list">
        {comentarios.map((c, i) => (
          <div className="comentario-card" key={i}>
            <div className="comentario-header">
              <FaUserCircle className="comentario-avatar" />
              <div>
                <span className="comentario-nome">{c.nome}</span>
                <span className="comentario-data">{c.data}</span>
              </div>
            </div>
            <p className="comentario-texto">{c.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
