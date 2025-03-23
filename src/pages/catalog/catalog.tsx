import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.tsx';
import {getCameras} from '../../store/goods/selector.ts';
import {useState} from 'react';
import {ContactModal} from '../../components/contact-modal/contact-modal.tsx';
import ProductCard from '../../components/product-card/product-card.tsx';
import {Breadcrumbs} from '../../components/breadcrumbs/breadcrumbs.tsx';
import Slider from '../../components/slider/slider.tsx';


export default function Catalog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = useAppSelector(getCameras);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <Slider/>
        <div className="page-content">
          {<Breadcrumbs/>}
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
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        card={product}
                        onClick={handleOrderClick}
                      />
                    ))}
                  </div>
                  {selectedProduct && (
                    <ContactModal
                      isOpen={isModalOpen}
                      onClose={handleCloseModal}
                      product={selectedProduct}
                    />
                  )}
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
