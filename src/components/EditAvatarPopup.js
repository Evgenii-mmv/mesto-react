import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = ""
  }, [props.isOpen]);

  function handleSubmit() {
    return props.onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm name='avatar' title='Обновить аватар'
      closePopup={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      buttonTitle="Сохранить"
    >
      <input ref={avatarRef} id="avatar-input" className="pop-up__input pop-up__input_image" type="url" name="link"
        placeholder="Ссылка на аватар" required />
      <span className="error" id="avatar-input-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;