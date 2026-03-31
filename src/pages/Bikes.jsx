import { bikes } from '../data/vehicles'
import VehicleGrid from '../components/VehicleGrid'
import './VehiclePage.css'

export default function Bikes() {
  return (
    <div className="vehicle-page page-enter">
      <div className="vehicle-page__hero">
        <div className="vehicle-page__hero-bg" />
        <div className="vehicle-page__hero-content">
          <span className="vehicle-page__breadcrumb">Hero MotoCorp / Bikes</span>
          <h1 className="vehicle-page__title">OUR <span>BIKES</span></h1>
          <p className="vehicle-page__desc">
            From everyday commuters to performance beasts — find your perfect Hero MotoCorp ride.
          </p>
          <div className="vehicle-page__meta">
            <span className="vehicle-page__count">{bikes.length} Models Available</span>
            <span className="vehicle-page__note">Click any card to buy on Amazon</span>
          </div>
        </div>
      </div>

      <div className="vehicle-page__grid-wrap">
        <VehicleGrid vehicles={bikes} />
      </div>
    </div>
  )
}
