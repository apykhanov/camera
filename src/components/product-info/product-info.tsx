import { useState } from 'react';

type ProductInfoProps = {
  name: string;
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  level: string;
  price: number;
  rating: number;
  reviewCount: number;
};

export default function ProductInfo({
  name,
  vendorCode,
  type,
  category,
  description,
  level,
  price,
  rating,
  reviewCount,
}: ProductInfoProps) {
  const [isActive, setIsActive] = useState<'spec' | 'description'>('description');

  return (
    <div className="product__content">
      <h1 className="title title--h3">{name}</h1>
      <div className="rate product__rate">
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} width="17" height="16" aria-hidden="true">
            <use href={i < rating ? '#icon-full-star' : '#icon-star'}></use>
          </svg>
        ))}
        <p className="visually-hidden">Рейтинг: {rating}</p>
        <p className="rate__count">
          <span className="visually-hidden">Всего оценок:</span>
          {reviewCount}
        </p>
      </div>
      <p className="product__price">
        <span className="visually-hidden">Цена:</span>
        {price.toLocaleString()} ₽
      </p>
      <button className="btn btn--purple" type="button">
        <svg width="24" height="16" aria-hidden="true">
          <use href="#icon-add-basket"></use>
        </svg>
        Добавить в корзину
      </button>
      <div className="tabs product__tabs">
        <div className="tabs__controls product__tabs-controls">
          <button
            className={`tabs__control ${isActive === 'spec' ? 'is-active' : ''}`}
            type="button"
            onClick={() => setIsActive('spec')}
          >
            Характеристики
          </button>
          <button
            className={`tabs__control ${isActive === 'description' ? 'is-active' : ''}`}
            type="button"
            onClick={() => setIsActive('description')}
          >
            Описание
          </button>
        </div>
        <div className="tabs__content">
          <div className={`tabs__element ${isActive === 'spec' ? 'is-active' : ''}`}>
            <ul className="product__tabs-list">
              <li className="item-list">
                <span className="item-list__title">Артикул:</span>
                <p className="item-list__text">{vendorCode}</p>
              </li>
              <li className="item-list">
                <span className="item-list__title">Категория:</span>
                <p className="item-list__text">{category}</p>
              </li>
              <li className="item-list">
                <span className="item-list__title">Тип камеры:</span>
                <p className="item-list__text">{type}</p>
              </li>
              <li className="item-list">
                <span className="item-list__title">Уровень:</span>
                <p className="item-list__text">{level}</p>
              </li>
            </ul>
          </div>
          <div className={`tabs__element ${isActive === 'description' ? 'is-active' : ''}`}>
            <div className="product__tabs-text">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
