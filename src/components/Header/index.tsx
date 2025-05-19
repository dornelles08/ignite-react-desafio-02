import { Aside, Cart, HeaderContainer, Location } from "./styles";

import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";

export function Header() {
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
            <span>3</span>
          </Cart>
        </Link>
      </Aside>
    </HeaderContainer>
  );
}
