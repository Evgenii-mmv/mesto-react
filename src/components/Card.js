import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Card  ({card, onCardLike ,onCardClick, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? 'card__like-button_active' : ''
  }`;


  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="card">

      {isOwn && (
        <button aria-label="deleteButton"
          type="button"
          className="button card__delete-button"
          onClick={handleDeleteClick}>
        </button>
      )}

      <div style={{
        backgroundImage: `url(${card.link})`,
      }}
        className="card__image" onClick={handleClick}></div>
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="card__quantity-like">{card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}
export default Card;