import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setAbout(e.target.value);
  }
  function handleSubmit() {
    return props.onUpdateUser(name, about);
  }

  return (
    <PopupWithForm name='edit' title='Редактировать профиль'
      onSubmit={handleSubmit}
      closePopup={props.onClose}
      isOpen={props.isOpen}
      buttonTitle="Сохранить"
    >
      <input type="text" name="nameInput" id="nameInput" placeholder="ФИО"
        className="pop-up__input pop-up__input_type_name"
        required minLength="2" maxLength="40"
        value={name || ''}
        onChange={handleChangeName}
      />
      <span className="error" id="nameInput-error"></span>
      <input type="text" name="jobInput" id="jobInput" placeholder="О себе"
        className="pop-up__input pop-up__input_type_job"
        required minLength="2" maxLength="200"
        value={about || ''}
        onChange={handleChangeDescription} />
      <span className="error" id="jobInput-error"></span>
    </PopupWithForm>
  )
}
export default EditProfilePopup;
