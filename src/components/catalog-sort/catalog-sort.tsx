export default function CatalogSort() {
  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title&#45;&#45;h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input type="radio" id="sortPrice" name="sort" checked>
                <label form="sortPrice">по цене</label>
              </input>
            </div>
            <div className="catalog-sort__btn-text">
              <input type="radio" id="sortPopular" name="sort">
                <label form="sortPopular">по популярности</label>
              </input>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn&#45;&#45;up">
              <input type="radio" id="up" name="sort-icon" checked aria-label="По возрастанию">
                <label form="up">
                  <svg width="16" height="14" aria-hidden="true">
                    <use href="#icon-sort"></use>
                  </svg>
                </label>
              </input>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn&#45;&#45;down">
              <input type="radio" id="down" name="sort-icon" aria-label="По убыванию">
                <label form="down">
                  <svg width="16" height="14" aria-hidden="true">
                    <use href="#icon-sort"></use>
                  </svg>
                </label>
              </input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
