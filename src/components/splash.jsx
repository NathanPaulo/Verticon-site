import logoV from '../assets/logo-v.svg';
function Splash() {
  return (
    <div className="splash">
      <div className="splash-brand">
        <img src={logoV} className="splash-icon" alt="Vertcon Logo" />
        <span className="splash-title">VERTCON</span>
      </div>
    </div>
  )
}

export default Splash
