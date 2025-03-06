import {Route, Routes} from 'react-router-dom';
import Catalog from './pages/catalog/catalog.tsx';
import {AppRoute} from './const.ts';
import ProductPage from './pages/product-page/product-page.tsx';

export default function App() {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<Catalog />}
      />
      <Route
        path={`${AppRoute.ProductPage}/:id`}
        element={<ProductPage/>}
      />
    </Routes>
  );
}
