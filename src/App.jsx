// import { Routes, Route, useLocation } from 'react-router-dom'
// import { useEffect } from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import Bikes from './pages/Bikes'
// import Scooters from './pages/Scooters'

// function ScrollToTop() {
//   const { pathname } = useLocation()
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'instant' })
//   }, [pathname])
//   return null
// }

// export default function App() {
//   return (
//     <>
//       <ScrollToTop />
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/bikes" element={<Bikes />} />
//           <Route path="/scooters" element={<Scooters />} />
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   )
// }


import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Bikes from './pages/Bikes'
import Scooters from './pages/Scooters'
import SearchResults from './pages/SearchResults'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/scooters" element={<Scooters />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}  