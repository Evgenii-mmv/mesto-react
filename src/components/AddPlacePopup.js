import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const cardLinkRef = React.useRef();
  const cardSubtitleRef = React.useRef();

  React.useEffect(() => {
    cardLinkRef.current.value = ""
    cardSubtitleRef.current.value = ""
  }, [props.isOpen]);


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
      buttonTitle="Создать"
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