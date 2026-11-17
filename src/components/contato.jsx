import { useState } from 'react'

function Contato() {
  const [nome, setNome] = useState('')
  const [servico, setServico] = useState('Limpeza e lavagem de fachada')
  const [detalhes, setDetalhes] = useState('')

  const textoMensagem = `Olá! Vim pelo site da Vertcon e gostaria de solicitar um orçamento.

*Nome / Condomínio:* ${nome || 'Não informado'}
*Serviço de interesse:* ${servico}${detalhes ? `\n*Detalhes:* ${detalhes}` : ''}`

  const mensagemCodificada = encodeURIComponent(textoMensagem)

  return (
    <section id="contato" className="contato">
      <div className="contato-container">
        <span className="contato-tag">Atendimento Rápido</span>
        <h2>Solicite seu orçamento</h2>
        <p>Preencha os dados abaixo para agilizar seu atendimento técnico pelo WhatsApp.</p>

        <div className="contato-card">
          <div className="contato-campo">
            <label htmlFor="nome">Seu nome ou nome do condomínio</label>
            <input
              id="nome"
              type="text"
              placeholder="Ex: Condomínio Solar / João Silva"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="contato-campo">
            <label htmlFor="servico">Qual serviço você precisa?</label>
            <select
              id="servico"
              value={servico}
              onChange={(e) => setServico(e.target.value)}
            >
              <option value="Limpeza e lavagem de fachada">Limpeza e lavagem de fachada</option>
              <option value="Pintura e restauração predial">Pintura e restauração predial</option>
              <option value="Impermeabilização e vedação">Impermeabilização e vedação</option>
              <option value="Manutenção geral em altura (NR-35)">Manutenção geral em altura (NR-35)</option>
              <option value="Outro / Vistoria técnica">Outro / Vistoria técnica</option>
            </select>
          </div>

          <div className="contato-campo">
            <label htmlFor="detalhes">Observações (opcional)</label>
            <textarea
              id="detalhes"
              rows="3"
              placeholder="Ex: Prédio de 8 andares, bairro, urgência..."
              value={detalhes}
              onChange={(e) => setDetalhes(e.target.value)}
            />
          </div>

          <a
            href={`https://wa.me/5583999112253?text=${mensagemCodificada}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta btn-whatsapp"
          >
            Enviar solicitação no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contato