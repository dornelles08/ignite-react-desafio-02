import { Aside, Cart, HeaderContainer, Location } from "./styles";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { items } = useCart();
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} />
      </Link>

      <Aside>
        <Location>
          <MapPin weight="fill" size={22} />
          <span>Aracaju, SE</span>
        </Location>

        <Link to="/cart">
          <Cart>
            <ShoppingCart weight="fill" size={22} />
            {items.length > 0 && <span>{items.length}</span>}
          </Cart>
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
