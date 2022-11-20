import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';
import './index';



function App() {
  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(undefined);
  }
  function handleCardClick(card){
    setSelectedCard(card);
  }


  const[isAddPlacePopupOpen,setIsAddPlacePopupOpen] = useState(false);
  const[isEditProfilePopupOpen,setIsEditProfilePopupOpen] = useState(false);
  const[isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = useState(false);
  const[selectedCard, setSelectedCard] = useState();

  return (
  <div className="page">
    <div className="page__wrapper">
      <Header/>
      <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick} />
      <Footer/>
    </div>

    <PopupWithForm name='add'title='Новое место' closePopup={closeAllPopups} isOpen={isAddPlacePopupOpen}>
      <input type="text" name="placeName" id="placeNameInput" className="pop-up__input pop-up__input_title"
          placeholder="Название" required minLength="2" maxLength="30"/>
      <span className="error" id="placeNameInput-error"></span>
      <input type="url" id="imageSourceInput" name="image" className="pop-up__input pop-up__input_image"
          placeholder="Ссылка на картинку" required/>
      <span className="error" id="imageSourceInput-error"></span>
    </PopupWithForm>

    <PopupWithForm name='avatar' title='Обновить аватар' closePopup={closeAllPopups} isOpen={isEditAvatarPopupOpen}>
      <input id="avatar-input" className="pop-up__input pop-up__input_image" type="url" name="link"
          placeholder="Ссылка на аватар" required/>
      <span className="error" id="avatar-input-error"></span>
    </PopupWithForm>

    <PopupWithForm name='edit'title='Редактировать профиль' closePopup={closeAllPopups} isOpen={isEditProfilePopupOpen}>
      <input type="text" name="nameInput" id="nameInput" placeholder="ФИО"
        className="pop-up__input pop-up__input_type_name" required minLength="2" maxLength="40" defaultValue={"Жак-Ив Кусто"}/>
      <span className="error" id="nameInput-error"></span>
      <input type="text" name="jobInput" id="jobInput" placeholder="О себе"
        className="pop-up__input pop-up__input_type_job" required minLength="2" maxLength="200"
          defaultValue={"Исследователь океана"}/>
      <span className="error" id="jobInput-error"></span>
    </PopupWithForm>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
  </div>
  );
}

export default App;
