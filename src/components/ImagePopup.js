
function ImagePopup({card, onClose}) {
  return (
    <section className={`pop-up pop-up_theme_image ${card ? 'pop-up_opened' : ""}`}>
    <div className="pop-up__container pop-up__container_image">
      <figure className="pop-up__figure">
        <button type="button" className="pop-up__button button pop-up__close-button" onClick={onClose}></button>
        <img src={card ? card.link : "#"} className="pop-up__image" alt="Изображение выбранное пользователем" />
        <figcaption className="pop-up__cardtitle"></figcaption>
      </figure>
    </div>
    </section>
  )
}
export default ImagePopup;