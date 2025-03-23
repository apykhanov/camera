import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useAppSelector } from '../../hooks/use-app-selector.tsx';
import { getSimilarCameras } from '../../store/goods/selector.ts';
import type { Swiper as SwiperType } from 'swiper';

export default function ProductSimilar() {
  const products = useAppSelector(getSimilarCameras);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          modules={[Navigation]}
          navigation={{
            prevEl: '.slider-controls--prev',
            nextEl: '.slider-controls--next',
          }}
          onSwiper={setSwiperInstance}
          onReachBeginning={() => {
            swiperInstance?.navigation?.prevEl?.classList.add('disabled');
          }}
          onReachEnd={() => {
            swiperInstance?.navigation?.nextEl?.classList.add('disabled');
          }}
          onSlideChange={() => {
            if (swiperInstance?.isBeginning) {
              swiperInstance.navigation?.prevEl?.classList.add('disabled');
            } else {
              swiperInstance.navigation?.prevEl?.classList.remove('disabled');
            }
            if (swiperInstance?.isEnd) {
              swiperInstance.navigation?.nextEl?.classList.add('disabled');
            } else {
              swiperInstance.navigation?.nextEl?.classList.remove('disabled');
            }
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-card is-active">
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
                    {Array.from({length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        width="17"
                        height="16"
                        aria-hidden="true"
                      >
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
                  <a className="btn btn--transparent" href="#">
                    Подробнее
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="slider-controls slider-controls--prev"
          type="button"
          aria-label="Предыдущий слайд"
          disabled
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
        <button
          className="slider-controls slider-controls--next"
          type="button"
          aria-label="Следующий слайд"
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
      </div>
    </section>
  );
}
