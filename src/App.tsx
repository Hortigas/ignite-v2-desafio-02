import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ProductsProvider } from './contexts/ProductsContext';
import { Router } from './Router';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ProductsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ProductsProvider>
    </ThemeProvider>
  );
}
