import { useState } from "react";

function VideoCarousel({ videos }) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <div className="video-row-wrapper">
        <div className="video-row">
          {videos.map((v, i) => (
            <div className="video-card" key={i} onClick={() => setActiveVideo(v)}>
              <video src={`${v.src}#t=0.5`} preload="metadata" muted playsInline />
              <div className="video-card-overlay" />
              <div className="video-play-btn" aria-hidden="true">▶</div>
            </div>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Fechar"
            >
              ✕
            </button>
            <video
              src={activeVideo.src}
              controls
              autoPlay
              playsInline
              className="video-modal-video"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default VideoCarousel;