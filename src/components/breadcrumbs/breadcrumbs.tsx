import { Link } from 'react-router-dom';
import {AppRoute} from '../../const.ts';

type BreadcrumbsProps = {
  productName?: string;
};

export function Breadcrumbs({ productName }: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={AppRoute.Root} className="breadcrumbs__link">
              Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <Link to={AppRoute.Root} className="breadcrumbs__link">
              Каталог
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          {productName && (
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                {productName}
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
