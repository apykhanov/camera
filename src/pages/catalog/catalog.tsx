import Banner from '../../components/banner/banner.tsx';
import Footer from '../../components/footer/footer.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import ProductCard from '../../components/product-card/product-card.tsx';
import Header from '../../components/header/header.tsx';


export default function Catalog() {
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
                  <div className="cards catalog__cards">
                    <ProductCard/>
                  </div>
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
