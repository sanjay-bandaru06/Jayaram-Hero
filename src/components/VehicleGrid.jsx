import VehicleCard from './VehicleCard'
import './VehicleGrid.css'

export default function VehicleGrid({ vehicles }) {
  return (
    <div className="vehicle-grid">
      {vehicles.map((vehicle, i) => (
        <div
          key={vehicle.id}
          className="vehicle-grid__item"
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          <VehicleCard vehicle={vehicle} />
        </div>
      ))}
    </div>
  )
}
