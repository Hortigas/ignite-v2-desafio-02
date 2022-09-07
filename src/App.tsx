import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { ProductsProvider } from './contexts/ProductsContext';
import { Router } from './Router';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';

import { toast, ToastContainer } from 'react-toastify';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProductsProvider>
      <ToastContainer position='top-center' />
      <GlobalStyle />
    </ThemeProvider>
  );
}
