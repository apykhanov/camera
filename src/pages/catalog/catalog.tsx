import Banner from '../../components/banner/banner.tsx';
import Footer from '../../components/footer/footer.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import Header from '../../components/header/header.tsx';
import ProductCardList from '../../components/product-card-list/product-card-list.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.tsx';
import {getCameras} from '../../store/goods/selector.ts';


export default function Catalog() {
  const cards = useAppSelector(getCameras);

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <Banner/>
        <div className="page-content">
          <Breadcrumbs/>
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <img src="img/banner.png" alt="Баннер"/>
                  {/*<CatalogFilter/> */}
                </div>
                <div className="catalog__content">
                  {/*<CatalogSort/>*/}
                  <ProductCardList cards={cards} />
                  {/*<Pagination/>*/}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
