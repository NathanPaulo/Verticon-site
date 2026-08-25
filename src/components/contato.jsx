function Contato() {
  const mensagem = encodeURIComponent(
    "Olá! Vim pelo site da Verticon e gostaria de um orçamento."

  );

  return (
    <section id="contato" className="contato">
      <h2>Entre em contato</h2>
      <p>Solicite um orçamento sem compromisso</p>
      
      <a href={`https://wa.me/5583999112253?text=${mensagem}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta"
      >
        Falar no WhatsApp
      </a>
    </section>
  )
}

export default Contato