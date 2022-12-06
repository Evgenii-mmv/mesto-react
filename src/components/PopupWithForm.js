

function PopupWithForm(props) {

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit().then(() => {
      props.closePopup();
    })
  }

  return (
    <section className={`pop-up pop-up_theme_${props.name} ${props.isOpen ? 'pop-up_opened' : ''}`}>
      <div className="pop-up__container">
        <button type="button" className="pop-up__button pop-up__close-button button" onClick={props.closePopup}/>
        <h2 className="pop-up__title">{props.title}</h2>
        <form
          className={`pop-up__form pop-up__form_type_${props.name}`}
          action="formAvatar"
          name={props.name}
          onSubmit={onSubmit}
        >
          {props.children}

          <button
            type="submit"
            className={`pop-up__button pop-up__save-button pop-up__save-button_${props.name}`}
          >
            {props.buttonTitle}
          </button>
        </form>
      </div>
    </section>
  )
}
export default PopupWithForm;