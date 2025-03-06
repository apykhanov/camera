

export default function ProductCard() {


  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet="img/content/das-auge.webp, img/content/das-auge@2x.webp 2x"
          />
          <img
            src="img/content/das-auge.jpg"
            srcSet="img/content/das-auge@2x.jpg 2x"
            width="280"
            height="240"
            alt="Ретрокамера «Das Auge IV»"
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {[...Array(3)].map((_, i) => (
            <svg key={i} width="17" height="16" aria-hidden="true">
              <use href="#icon-full-star"></use>
            </svg>
          ))}
          {[...Array(2)].map((_, i) => (
            <svg key={i} width="17" height="16" aria-hidden="true">
              <use href="#icon-star"></use>
            </svg>
          ))}
          <p className="visually-hidden">Рейтинг: 3</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>23
          </p>
        </div>
        <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>73 450 ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">
          Купить
        </button>
        <a className="btn btn--transparent" href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
}
