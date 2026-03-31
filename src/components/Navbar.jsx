// import { useState, useEffect } from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import heroLogo from '../assets/hero-logo.png'
// import './Navbar.css'

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   return (
//     <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
//       <div className="navbar__inner">
//         <Link to="/" className="navbar__brand" onClick={() => setMenuOpen(false)}>
//           <img src={heroLogo} alt="Hero MotoCorp" className="navbar__logo" />
//           <div className="navbar__brand-text">
//             <span className="navbar__name">JAYARAM</span>
//             <span className="navbar__sub">AUTOMOBILE</span>
//           </div>
//         </Link>

//         <button
//           className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
//           onClick={() => setMenuOpen(prev => !prev)}
//           aria-label="Toggle menu"
//         >
//           <span /><span /><span />
//         </button>

//         <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
//           {[
//             { to: '/', label: 'Home' },
//             { to: '/bikes', label: 'Bikes' },
//             { to: '/scooters', label: 'Scooters' },
//           ].map(({ to, label }) => (
//             <li key={to}>
//               <NavLink
//                 to={to}
//                 end={to === '/'}
//                 className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   )
// }


import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import heroLogo from '../assets/hero-logo.png'
import SearchBar from './SearchBar'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link
          to="/"
          className="navbar__brand"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={heroLogo}
            alt="Hero MotoCorp"
            className="navbar__logo"
          />

          <div className="navbar__brand-text">
            <span className="navbar__name">JAYARAM</span>
            <span className="navbar__sub">AUTOMOBILE</span>
          </div>
        </Link>

        <div className="navbar__center">
          <SearchBar />
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {[
            { to: '/', label: 'Home' },
            { to: '/bikes', label: 'Bikes' },
            { to: '/scooters', label: 'Scooters' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}