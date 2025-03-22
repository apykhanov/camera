import {Review} from '../../types/review.ts';
import {DateFormat} from '../../const.ts';
import dayjs from 'dayjs';


type ReviewListProps = {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <ul className="review-block__list">
      {[...reviews].reverse().map((review) => (
        <li key={review.id} className="review-card">
          <div className="review-card__head">
            <p className="title title--h4">{review.userName}</p>
            <time className="review-card__data" dateTime={dayjs(review.createAt).format(DateFormat.AttributeFormat)}>
              {dayjs(review.createAt).format(DateFormat.ReviewDateFormat)}
            </time>
          </div>
          <div className="rate review-card__rate">
            {Array.from({ length: 5 }, (_, i) => (
              <svg key={i} width="17" height="16" aria-hidden="true">
                <use href={i < review.rating ? '#icon-full-star' : '#icon-star'}></use>
              </svg>
            ))}
            <p className="visually-hidden">Оценка: {review.rating}</p>
          </div>
          <ul className="review-card__list">
            <li className="item-list">
              <span className="item-list__title">Достоинства:</span>
              <p className="item-list__text">{review.advantage}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Недостатки:</span>
              <p className="item-list__text">{review.disadvantage}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Комментарий:</span>
              <p className="item-list__text">{review.review}</p>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
