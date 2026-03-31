import { useLocation } from 'react-router-dom'
import { bikes, scooters } from '../data/vehicles'
import VehicleGrid from '../components/VehicleGrid'
import './SearchResults.css'

export default function SearchResults() {
  const location = useLocation()

  const params = new URLSearchParams(location.search)
  const query = params.get('q') || ''

  const allVehicles = [...bikes, ...scooters]

  const filteredVehicles = allVehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="search-results-page">
      <div className="search-results-header">
        <h1>Search Results</h1>
        <p>
          {filteredVehicles.length} vehicle(s) found for "{query}"
        </p>
      </div>

      {filteredVehicles.length > 0 ? (
        <VehicleGrid vehicles={filteredVehicles} />
      ) : (
        <div className="search-results-empty">
          <h2>No vehicles found</h2>
          <p>Try searching with a different bike or scooter name.</p>
        </div>
      )}
    </div>
  )
}