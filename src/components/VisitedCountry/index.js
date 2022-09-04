import './index.css'

const VisitedCountry = props => {
  const {eachItemDetails, onClickVisitButton} = props
  const {id, name, isVisited} = eachItemDetails
  const text = isVisited ? 'Visited' : 'Visit'

  const onClickButton = () => {
    onClickVisitButton(id)
  }

  return (
    <li className="list-item">
      <p className="country-title">{name}</p>
      {isVisited ? (
        <p className="visit-text">{text}</p>
      ) : (
        <button type="button" onClick={onClickButton} className="btn-text">
          {text}
        </button>
      )}
    </li>
  )
}

export default VisitedCountry
