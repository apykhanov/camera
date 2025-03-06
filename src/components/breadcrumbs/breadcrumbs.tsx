export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="index.html" aria-label="Главная">
              Главная
              <svg width="5" height="8" aria-hidden="true">
                <use href="#icon-arrow-mini"></use>
              </svg>
            </a>
          </li>
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link breadcrumbs__link--active" aria-current="page">Каталог</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
