import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';

import { LocationProvider } from './contexts/LocationContext';
import { ProductsProvider } from './contexts/ProductsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LocationProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ProductsProvider>
      </LocationProvider>
      <ToastContainer position='top-center' />
      <GlobalStyle />
    </ThemeProvider>
  );
}
