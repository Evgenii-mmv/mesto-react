function Card  ({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="card">
      <button aria-label="deleteButton" type="button" className="card__delete-button button"></button>
      <div style={{
        backgroundImage: `url(${card.link})`,
      }}
        className="card__image" onClick={handleClick}></div>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button type="button" className="card__like-button"></button>
          <p className="card__quantity-like">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}
export default Card;