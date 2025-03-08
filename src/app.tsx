import {Route, Routes} from 'react-router-dom';
import Catalog from './pages/catalog/catalog.tsx';
import {AppRoute} from './const.ts';
import ProductPage from './pages/product-page/product-page.tsx';
import HistoryRouter from './components/history-router/history-router.tsx';
import browserHistory from './browser-history/browser-history.ts';


export default function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Catalog/>}
        />
        <Route
          path={`${AppRoute.ProductPage}/:id`}
          element={<ProductPage/>}
        />
      </Routes>
    </HistoryRouter>

  );
}
