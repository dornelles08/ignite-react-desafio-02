import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeListContainer, Content, Heading, Intro, Items } from "./styles";

import { useTheme } from "styled-components";
import heroBackgorund from "../../../public/images/hero-bg.svg";
import heroImage from "../../../public/images/hero.svg";
import { Card } from "../../components/Card";

import { coffees } from "../../../data.json";

export function Home() {
  const theme = useTheme();

  return (
    <div>
      <Intro>
        <Content>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
            </Heading>

            <Items>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors["yellow-dark"] }}
                />
                <span>Compra simples e segura</span>
              </div>
              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors["base-text"] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors["yellow"] }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme.colors.white}
                  style={{ backgroundColor: theme.colors["purple"] }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Items>
          </div>

          <img src={heroImage} />
        </Content>

        <img src={heroBackgorund} id="hero-bg" />
      </Intro>

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeListContainer>
    </div>
  );
}
