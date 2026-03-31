import { scooters } from '../data/vehicles'
import VehicleGrid from '../components/VehicleGrid'
import './VehiclePage.css'

export default function Scooters() {
  return (
    <div className="vehicle-page page-enter">
      <div className="vehicle-page__hero">
        <div className="vehicle-page__hero-bg vehicle-page__hero-bg--scooter" />
        <div className="vehicle-page__hero-content">
          <span className="vehicle-page__breadcrumb">Hero MotoCorp / Scooters</span>
          <h1 className="vehicle-page__title">OUR <span>SCOOTERS</span></h1>
          <p className="vehicle-page__desc">
            Sleek, smart, and city-ready — Hero scooters for every road and every rider.
          </p>
          <div className="vehicle-page__meta">
            <span className="vehicle-page__count">{scooters.length} Models Available</span>
            <span className="vehicle-page__note">Click any card to buy on Amazon</span>
          </div>
        </div>
      </div>

      <div className="vehicle-page__grid-wrap">
        <VehicleGrid vehicles={scooters} />
      </div>
    </div>
  )
}
