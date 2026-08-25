function Header({ logo }) {
  return (
    <header className="header">
      <img src={logo} alt="Vertcon Manutenções" className="logo" />
      <nav className="nav">
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}

export default Header