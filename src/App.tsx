import { ThemeProvider } from "styled-components";

import { CartContextProvider } from "./contexts/CartProvider";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <Router />
      </CartContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
