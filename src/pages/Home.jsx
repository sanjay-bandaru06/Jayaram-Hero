import { Link } from 'react-router-dom'
import { bikes, scooters } from '../data/vehicles'
import VehicleGrid from '../components/VehicleGrid'
import heroLogo from '../assets/hero-logo.png'
import './Home.css'

export default function Home() {
  return (
    <div className="home page-enter">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-banner__bg" />
        <div className="hero-banner__content">
          <div className="hero-banner__badge">Authorised Dealer</div>
          <div className="hero-banner__logo-row">
            <img src={heroLogo} alt="Hero MotoCorp" className="hero-banner__logo" />
          </div>
          <h1 className="hero-banner__title">
            JAYARAM<br />
            <span>AUTOMOBILE</span>
          </h1>
          <p className="hero-banner__address">
            <span className="hero-banner__pin"></span>
            Ramanayyapeta, Andhra Pradesh
          </p>
          <div className="hero-banner__actions">
            <Link to="/bikes" className="btn btn--primary">Explore Bikes</Link>
            <Link
              to="/scooters"
              className="btn btn--outline"
              style={{ color: 'var(--black)', borderColor: 'black' }}
            >
              Explore Scooters
            </Link>
          </div>
        </div>
        <div className="hero-banner__scroll">scroll ↓</div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        {[
          { value: `${bikes.length}+`, label: 'Bike Models' },
          { value: `${scooters.length}+`, label: 'Scooter Models' },
          { value: '10+', label: 'Years of Trust' },
          { value: '24/7', label: 'Support' },
        ].map(stat => (
          <div key={stat.label} className="stats-strip__item">
            <span className="stats-strip__value">{stat.value}</span>
            <span className="stats-strip__label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Bikes Preview */}
      <section className="home-section">
        <div className="home-section__header">
          <div>
            <h2 className="section-title">OUR <span>BIKES</span></h2>
            <p className="home-section__desc">Discover the finest Hero MotoCorp bikes built for every rider</p>
          </div>
          <Link to="/bikes" className="btn btn--outline btn--sm">View All →</Link>
        </div>
        <VehicleGrid vehicles={bikes.slice(0, 4)} />
      </section>

      {/* Divider Banner */}
      <div className="cta-banner">
        <div className="cta-banner__inner">
          <p className="cta-banner__text">Ride the future with Hero MotoCorp</p>
          <Link to="/scooters" className="btn btn--primary">View Scooters</Link>
        </div>
      </div>

      {/* Scooters Preview */}
      <section className="home-section">
        <div className="home-section__header">
          <div>
            <h2 className="section-title">OUR <span>SCOOTERS</span></h2>
            <p className="home-section__desc">Smooth, stylish, and smart scooters for the city commuter</p>
          </div>
          <Link to="/scooters" className="btn btn--outline btn--sm">View All →</Link>
        </div>
        <VehicleGrid vehicles={scooters.slice(0, 4)} />
      </section>
    </div>
  )
}
