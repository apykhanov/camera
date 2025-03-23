import { Goods } from '../../types/goods.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

type ProductCardProps = {
  card: Goods;
  onClick: (card: Goods) => void;
};

export default function ProductCard({card, onClick}: ProductCardProps) {
  const {
    id,
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
          {Array.from({ length: 3 }, (_, i) => (
            <svg key={`full-star-${i}`} width="17" height="16" aria-hidden="true">
              <use href="#icon-full-star"></use>
            </svg>
          ))}
          {Array.from({ length: 2 }, (_, i) => (
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
        <button
          className="btn btn--purple product-card__btn"
          type="button"
          onClick={() => onClick(card)}
        >
          Заказать
        </button>
        <Link className="btn btn--transparent" to={`${AppRoute.ProductPage}/${id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}
