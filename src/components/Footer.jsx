import heroLogo from '../assets/hero-logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={heroLogo} alt="Hero MotoCorp" className="footer__logo" />
          <div>
            <div className="footer__title">JAYARAM AUTOMOBILE</div>
            <div className="footer__tagline">Authorised Hero MotoCorp Dealer</div>
          </div>
        </div>

        <div className="footer__info">
          <div className="footer__info-item">
            <span className="footer__info-icon"></span>
            <span>Ramanayyapeta, Andhra Pradesh</span>
          </div>
          <div className="footer__info-item">
            <span className="footer__info-icon"></span>
            <span>Bikes &amp; Scooters Showroom</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Jayaram Automobile. All Rights Reserved.</span>
        <span className="footer__powered">Powered by Hero MotoCorp</span>
      </div>
    </footer>
  )
}
