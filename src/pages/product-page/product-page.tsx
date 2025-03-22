import Header from '../../components/header/header.tsx';
import Footer from '../../components/footer/footer.tsx';
import { useParams } from 'react-router-dom';
import { getCamerasDataLoadingStatus, getCamerasDetail } from '../../store/goods/selector.ts';
import { getReviews, getReviewsLoadingStatus } from '../../store/reviews/selector.ts';
import {useEffect, useState} from 'react';
import { fetchCameraReviews, fetchCamerasDetails } from '../../store/api-actions.ts';
import ReviewList from '../../components/review-list/reviews-list.tsx';
import ProductInfo from '../../components/product-info/product-info.tsx';
import {useAppDispatch} from '../../hooks/use-app-dispatch.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.tsx';
import NotFound from '../not-found/not-found.tsx';

export default function ProductPage() {
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const cameraDetail = useAppSelector(getCamerasDetail);
  const reviews = useAppSelector(getReviews);
  const isReviewsLoading = useAppSelector(getReviewsLoadingStatus);
  const isCameraDetailLoading = useAppSelector(getCamerasDataLoadingStatus);

  const shouldShowButton = false;

  const visibleReviews = reviews.slice(0, visibleReviewsCount);
  const handleShowMoreReviews = () => {
    setVisibleReviewsCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchCamerasDetails(id));
      dispatch(fetchCameraReviews(id));
    }
  }, [dispatch, id]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (isCameraDetailLoading || isReviewsLoading) {
    return <div>Loading...</div>;
  }

  if (!cameraDetail) {
    return <NotFound/>;
  }

  const {
    name,
    vendorCode,
    type,
    category,
    description,
    level,
    price,
    rating,
    reviewCount,
    previewImg,
    previewImg2x,
    previewImgWebp,
    previewImgWebp2x
  } = cameraDetail;

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <div className="page-content">
          {/*<Breadcrumbs*/}
          {/*  items={[*/}
          {/*    { label: 'Главная', href: '#' },*/}
          {/*    { label: 'Каталог', href: AppRoute.Root },*/}
          {/*    { label: name, isActive: true }*/}
          {/*  ]}*/}
          {/*/>*/}
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`../${previewImgWebp}, ../${previewImgWebp2x} 2x`}
                    />
                    <img
                      src={previewImg}
                      srcSet={`../${previewImg2x} 2x`}
                      width="560"
                      height="480"
                      alt={name}
                      loading="lazy"
                    />
                  </picture>
                </div>
                <ProductInfo
                  name={name}
                  vendorCode={vendorCode}
                  type={type}
                  category={category}
                  description={description}
                  level={level}
                  price={price}
                  rating={rating}
                  reviewCount={reviewCount}
                />
              </div>
            </section>
          </div>
          <div className="page-content__section">
            {/*<ProductSimilar/>*/}
          </div>
          <div className="page-content__section">
            <section className="review-block">
              <div className="container">
                <div className="page-content__headed">
                  <h2 className="title title--h3">Отзывы</h2>
                  {shouldShowButton && (
                    <button className="btn" type="button">Оставить свой отзыв</button>
                  )}
                </div>
                <ReviewList reviews={visibleReviews}/>
                {reviews.length > visibleReviewsCount && (
                  <div className="review-block__buttons">
                    <button
                      className="btn btn--purple"
                      type="button"
                      onClick={handleShowMoreReviews}
                    >
                      Показать больше отзывов
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
      <a className="up-btn" href="#header" onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      >
        <svg width="12" height="18" aria-hidden="true">
          <use href="#icon-arrow2"></use>
        </svg>
      </a>
      <Footer/>
    </div>
  );
}
