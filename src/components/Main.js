import React from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-edit" onClick={props.onEditAvatar}>
        <div className="profile__avatar" style={{
        backgroundImage: `url(${currentUser.avatar})`,
      }}></div>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title">
              {currentUser.name}
            </h1>
            <button className="profile__edit-button button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">
          {currentUser.about}
          </p>
        </div>
        <button className="profile__add-button button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {props.cards.map((card) => {
          return <Card key={card._id}
          card={card}
          onCardLike={props.onCardLike}
          onCardClick={props.onCardClick}
          onCardDelete={props.onCardDelete}/>
        })}
      </section>
    </main>
  )
}

export default Main;