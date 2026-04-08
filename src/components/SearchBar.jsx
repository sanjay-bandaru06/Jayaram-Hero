
// import { useState, useEffect, useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './SearchBar.css'

// export default function SearchBar() {
//   const [query, setQuery] = useState('')
//   const [focused, setFocused] = useState(false)
//   const [platform, setPlatform] = useState('all')
//   const inputRef = useRef(null)
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (query.trim()) {
//       navigate(
//         `/search?q=${encodeURIComponent(query)}&platform=${platform}`
//       )
//     }
//   }

//   const handleClear = () => {
//     setQuery('')
//     inputRef.current?.focus()
//   }

//   useEffect(() => {
//     const onKey = (e) => {
//       if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
//         e.preventDefault()
//         inputRef.current?.focus()
//       }
//     }

//     window.addEventListener('keydown', onKey)

//     return () => window.removeEventListener('keydown', onKey)
//   }, [])

//   return (
//     <form
//       className={`search-bar ${focused ? 'search-bar--focused' : ''}`}
//       onSubmit={handleSubmit}
//       role="search"
//     >
//       <span className="search-bar__icon">
//         <svg
//           width="18"
//           height="18"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2.2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <circle cx="11" cy="11" r="8" />
//           <line x1="21" y1="21" x2="16.65" y2="16.65" />
//         </svg>
//       </span>

//       <input
//         ref={inputRef}
//         type="text"
//         className="search-bar__input"
//         placeholder="Search Here"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         autoComplete="off"
//         spellCheck="false"
//       />

//       <select
//         className="search-bar__select"
//         value={platform}
//         onChange={(e) => setPlatform(e.target.value)}
//       >
//         <option value="all">All</option>
//         <option value="amazon">Amazon</option>
//         <option value="flipkart">Flipkart</option>
//       </select>

//       {query && (
//         <button
//           type="button"
//           className="search-bar__clear"
//           onClick={handleClear}
//           aria-label="Clear search"
//         >
//           ✕
//         </button>
//       )}

//       <button type="submit" className="search-bar__submit">
//         Search
//       </button>
//     </form>
//   )
// }

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const platform = 'all'

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim()) {
      navigate(
        `/search?q=${encodeURIComponent(query)}&platform=${platform}`
      )
    }
  }

  const handleClear = () => {
    setQuery('')
    inputRef.current?.focus()
  }

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKey)

    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <form
      className={`search-bar ${focused ? 'search-bar--focused' : ''}`}
      onSubmit={handleSubmit}
      role="search"
    >
      <span className="search-bar__icon">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>

      <input
        ref={inputRef}
        type="text"
        className="search-bar__input"
        placeholder="Search Bikes and Scooters"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete="off"
        spellCheck="false"
      />

      {query && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={handleClear}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}

      <button type="submit" className="search-bar__submit">
        Search
      </button>
    </form>
  )
}