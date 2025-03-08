

import { Goods } from '../../types/goods.ts';

type ProductCardProps = {
  card: Goods;
}

export default function ProductCard({ card }: ProductCardProps) {
  const {
    name,
    description,
    price,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x
  } = card;

  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`../${previewImgWebp}, ../${previewImgWebp2x} 2x`}
          />
          <img
            src={`../${previewImg}`}
            srcSet={`../${previewImg2x} 2x`}
            width={280}
            height={240}
            alt={description}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {[...Array(3)].map((_, i) => (
            <svg key={`full-star-${i}`} width="17" height="16" aria-hidden="true">
              <use href="#icon-full-star"></use>
            </svg>
          ))}
          {[...Array(2)].map((_, i) => (
            <svg key={`star-${i}`} width="17" height="16" aria-hidden="true">
              <use href="#icon-star"></use>
            </svg>
          ))}
          <p className="visually-hidden">Рейтинг: 3</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>23
          </p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {price} ₽
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
