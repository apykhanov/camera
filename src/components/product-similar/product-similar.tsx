import { useState } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector.tsx';
import { getSimilarCameras } from '../../store/goods/selector.ts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import './product-similar.module.css';

export default function ProductSimilar() {
  const products = useAppSelector(getSimilarCameras);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!products || products.length === 0) {
    return null;
  }

  const slidesToShow = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, products.length - slidesToShow)
    );
  };

  const isPrevDisabled = currentIndex === 0;

  const isNextDisabled = currentIndex >= products.length - slidesToShow;

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <div className="product-similar__slider-list">
            {products
              .slice(currentIndex, currentIndex + slidesToShow)
              .map((product) => (
                <div key={product.id} className="product-card is-active">
                  <div className="product-card__img">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`../${product.previewImgWebp}, ../${product.previewImgWebp2x} 2x`}
                      />
                      <img
                        src={product.previewImg}
                        srcSet={`../${product.previewImg2x} 2x`}
                        width="280"
                        height="240"
                        alt={product.name}
                      />
                    </picture>
                  </div>
                  <div className="product-card__info">
                    <div className="rate product-card__rate">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg key={i} width="17" height="16" aria-hidden="true">
                          <use
                            xlinkHref={
                              i < product.rating ? '#icon-full-star' : '#icon-star'
                            }
                          />
                        </svg>
                      ))}
                      <p className="visually-hidden">Рейтинг: {product.rating}</p>
                      <p className="rate__count">
                        <span className="visually-hidden">Всего оценок:</span>
                        {product.reviewCount}
                      </p>
                    </div>
                    <p className="product-card__title">{product.name}</p>
                    <p className="product-card__price">
                      <span className="visually-hidden">Цена:</span>
                      {product.price} ₽
                    </p>
                  </div>
                  <div className="product-card__buttons">
                    <button
                      className="btn btn--purple product-card__btn"
                      type="button"
                    >
                      Купить
                    </button>
                    <Link
                      className="btn btn--transparent"
                      to={`${AppRoute.ProductPage}/${product.id}`}
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              ))}
          </div>
          <button
            className={`slider-controls slider-controls--prev ${
              isPrevDisabled ? 'disabled' : ''
            }`}
            type="button"
            aria-label="Предыдущий слайд"
            onClick={handlePrev}
            disabled={isPrevDisabled}
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
          <button
            className={`slider-controls slider-controls--next ${
              isNextDisabled ? 'disabled' : ''
            }`}
            type="button"
            aria-label="Следующий слайд"
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
