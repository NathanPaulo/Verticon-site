import { useState } from 'react'
import apresentacao from '../assets/videos/apresentacao.mp4'
import equipe1 from '../assets/videos/equipe1.mp4'
import equipe2 from '../assets/videos/equipe2.mp4'
import equipe3 from '../assets/videos/equipe3.mp4'
import VideoCarousel from './VideoCarousel'

const videosEquipe = [
  { src: equipe1, titulo: "Equipe em ação", local: "Limpeza de fachada" },
  { src: equipe2, titulo: "Equipe em ação", local: "Manutenção predial" },
  { src: equipe3, titulo: "Equipe em ação", local: "Cuidado com detalhes" },
];

function Sobre() {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <section id="sobre" className="sobre">
      <h2>Sobre a Vertcon</h2>
      <p>
        Somos especializados em limpeza e manutenção de fachadas prediais,
        unindo técnica, segurança e cuidado para deixar seu prédio sempre
        impecável.
      </p>

      <div className="sobre-video-principal" onClick={() => setModalAberto(true)}>
        <div className="video-principal-media">
          <video src={`${apresentacao}#t=0.5`} preload="metadata" muted playsInline />
          <div className="video-card-overlay" />
          <div className="video-play-btn video-play-btn-lg" aria-hidden="true">▶</div>
        </div>
      </div>

      {modalAberto && (
        <div className="video-modal" onClick={() => setModalAberto(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setModalAberto(false)}
              aria-label="Fechar"
            >
              ✕
            </button>
            <video
              src={`${apresentacao}#t=0.5`}
              controls
              autoPlay
              playsInline
              className="video-modal-video"
            />
          </div>
        </div>
      )}

      <VideoCarousel videos={videosEquipe} />
    </section>
  )
}

export default Sobre