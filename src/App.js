import EditProfilePopup from './components/EditProfilePopup';
import EditAvatarPopup from './components/EditAvatarPopup';
import AddPlacePopup from './components/AddPlacePopup';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import ImagePopup from './components/ImagePopup';
import api from './utilits/api';
import './index';
import { CurrentUserContext } from './contexts/CurrentUserContext';



function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUser().then((currentUserData) => {
      setCurrentUser(currentUserData);
    })
    api.getCards().then((cardsData) => {
      setCards(cardsData);
    })
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then(
      (newCard) => {
        /*
          state = [
            {
              likes: [1],
              id: 1
            },
            {
              likes: [2], // likes: [1, 2]
              id: 2
            },
            {
              likes: [1, 3],
              id: 3
            }
          ];
          newCard { likes: [1, 2], id: 2};
          map create new array
          return new array filter: remove if predicate return false
          sort dont return ne array, it mutate array

          Это я сам для себя написал, чтобы не путаться
        */
        setCards(
          (state) => state.map((c) => c._id === card._id ? newCard : c)
        );
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard();
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(name, about) {
    return api.updateUser(name, about).then(newUser => {
      setCurrentUser(newUser);
    })
  }
  function handleUpdateAvatar(avatar) {
    return api.setNewAvatar(avatar).then(newUser => {
      setCurrentUser(newUser);
    })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newArray) => {
      setCards((cards) => cards.filter((c) => (
        c._id !== card._id)))
    })
  }

  function handleAddPlaceSubmit(name, link) {
    return api.createCard(name, link).then(newCard => {
      setCards([newCard, ...cards]);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} />
          <Footer />
        </div>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
