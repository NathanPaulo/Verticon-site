function Hero({ heroImg }) {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay">
        <h1 className="hero-brand">VERTCON</h1>
        <h2>Limpeza e manutenção de fachadas prediais</h2>
        <p>Qualidade, segurança e cuidado com o seu prédio</p>
        <a href="#contato" className="btn-cta">Solicitar orçamento</a>
      </div>
    </section>
  )
}

export default Hero