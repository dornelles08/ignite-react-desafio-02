import { ThemeProvider } from "styled-components";

import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { CartContextProvider } from "./contexts/CartProvider";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
