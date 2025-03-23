import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getPromo, getPromoLoadingStatus } from '../../store/goods/selector';
import { fetchPromo } from '../../store/api-actions';
import { Promo } from '../../types/goods.ts';
import { useEffect } from 'react';
import { redirectToRoute } from '../../store/action.ts';
import './slider.module.css';
import {useAppDispatch} from '../../hooks/use-app-dispatch.tsx';
import {AppRoute} from '../../const.ts';

const Slider = () => {
  const dispatch = useAppDispatch();
  const slides = useAppSelector(getPromo);
  const isLoading = useAppSelector(getPromoLoadingStatus);
  const isError = useAppSelector(getPromoLoadingStatus);

  const MAX_SLIDES_AMOUNT = 3;

  useEffect(() => {
    dispatch(fetchPromo());
  }, [dispatch]);

  const params = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
  };

  if (isLoading) {
    return <div className="banner">Загрузка...</div>;
  }

  if (isError) {
    return <div className="banner">Ошибка загрузки данных</div>;
  }

  if (!slides.length) {
    return <div className="banner">Нет данных для отображения</div>;
  }

  return (
    <div className="banner">
      <Swiper {...params}>
        {slides.slice(0, MAX_SLIDES_AMOUNT).map((slide: Promo) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-image-wrapper">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${slide.previewImgWebp}, ${slide.previewImgWebp2x} 2x`}
                />
                <img
                  src={slide.previewImg}
                  srcSet={`${slide.previewImg2x} 2x`}
                  width="1280"
                  height="280"
                  alt={slide.name}
                />
              </picture>
            </div>
            <p className="banner__info">
              <span className="banner__message">Новинка!</span>
              <span className="title title--h1">{slide.name}</span>
              <span className="banner__text">Профессиональная камера от известного производителя</span>
              <button
                className="btn"
                onClick={() => dispatch(redirectToRoute(`${AppRoute.Product}${slide.id}`))}
              >
                Подробнее
              </button>
            </p>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
