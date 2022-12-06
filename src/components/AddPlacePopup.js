import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  // const [title, setTitle] = React.useState("");
  // const [link, setLink] = React.useState("");
  const cardLinkRef = React.useRef();
  const cardSubtitleRef = React.useRef();


  function handleSubmit() {
    return props.onAddPlace(
      cardSubtitleRef.current.value,
      cardLinkRef.current.value
    )
  }

  return (
    <PopupWithForm name='add' title='Новое место'
      closePopup={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <input ref={cardSubtitleRef} type="text" name="placeName" id="placeNameInput" className="pop-up__input pop-up__input_title"
        placeholder="Название" required minLength="2" maxLength="30" />
      <span className="error" id="placeNameInput-error"></span>
      <input ref={cardLinkRef} type="url" id="imageSourceInput" name="image" className="pop-up__input pop-up__input_image"
        placeholder="Ссылка на картинку" required />
      <span className="error" id="imageSourceInput-error"></span>
    </PopupWithForm>
  )

}

export default AddPlacePopup;