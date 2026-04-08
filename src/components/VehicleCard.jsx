// import './VehicleCard.css'

// export default function VehicleCard({ vehicle }) {
//   const { name, price, image, amazonLink, tag } = vehicle

//   const handleClick = () => {
//     window.open(amazonLink, '_blank', 'noopener,noreferrer')
//   }

//   return (
//     <div className="vehicle-card" onClick={handleClick} role="button" tabIndex={0}
//       onKeyDown={e => e.key === 'Enter' && handleClick()}>
//       {tag && <span className="vehicle-card__tag">{tag}</span>}

//       <div className="vehicle-card__image-wrap">
//         <img
//           src={image}
//           alt={name}
//           className="vehicle-card__image"
//           onError={e => {
//             e.target.src = `https://placehold.co/400x220/161616/E8000D?text=${encodeURIComponent(name)}&font=bebas-neue`
//           }}
//           loading="lazy"
//         />
//         <div className="vehicle-card__overlay">
//           <span className="vehicle-card__cta">Buy on Amazon →</span>
//         </div>
//       </div>

//       <div className="vehicle-card__info">
//         <h3 className="vehicle-card__name">{name}</h3>
//         <div className="vehicle-card__footer">
//           <span className="vehicle-card__price">{price}</span>
//           <span className="vehicle-card__arrow">→</span>
//         </div>
//       </div>
//     </div>
//   )
// }



import './VehicleCard.css'

export default function VehicleCard({ vehicle }) {
  const { name, price, image, amazonLink, flipkartLink, tag } = vehicle

  const openLink = (link, e) => {
    e.stopPropagation()
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="vehicle-card">
      {tag && <span className="vehicle-card__tag">{tag}</span>}

      <div className="vehicle-card__image-wrap">
        <img
          src={image}
          alt={name}
          className="vehicle-card__image"
          onError={e => {
            e.target.src = `https://placehold.co/400x220/161616/E8000D?text=${encodeURIComponent(name)}&font=bebas-neue`
          }}
          loading="lazy"
        />

        <div className="vehicle-card__overlay">
          <div className="vehicle-card__buttons">
            {amazonLink && (
              <button
                className="vehicle-card__btn vehicle-card__btn--amazon"
                onClick={(e) => openLink(amazonLink, e)}
              >
                Amazon
              </button>
            )}

            {flipkartLink && (
              <button
                className="vehicle-card__btn vehicle-card__btn--flipkart"
                onClick={(e) => openLink(flipkartLink, e)}
              >
                Flipkart
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="vehicle-card__info">
        <h3 className="vehicle-card__name">{name}</h3>

        <div className="vehicle-card__footer">
          <span className="vehicle-card__price">{price}</span>
        </div>

        <div className="vehicle-card__buttons vehicle-card__buttons--bottom">
          {amazonLink && (
            <button
              className="vehicle-card__btn vehicle-card__btn--amazon"
              onClick={(e) => openLink(amazonLink, e)}
            >
              Amazon
            </button>
          )}

          {flipkartLink && (
            <button
              className="vehicle-card__btn vehicle-card__btn--flipkart"
              onClick={(e) => openLink(flipkartLink, e)}
            >
              Flipkart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}