import { useEffect, useState } from 'react';
import api from '../utilits/api';
import Card from './Card';

function Main(props) {
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userDescription, setUserDescription] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);

  useEffect(() => {
    api.getCards().then((cardsData) => {
      setCards(cardsData);
    })
    api.getUser().then((userInfo) =>{
      setUserName(userInfo);
      setUserDescription(userInfo);
      setUserAvatar(userInfo);
    });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-edit" onClick={props.onEditAvatar}>
        <div className="profile__avatar" style={{
        backgroundImage: `url(${userAvatar.avatar})`,
      }}></div>
        </div>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title">
              {userName.name}
            </h1>
            <button className="profile__edit-button button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">
          {userDescription.about}
          </p>
        </div>
        <button className="profile__add-button button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map((card) => {
          return <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
        })}
      </section>
    </main>
  )
}
export default Main;