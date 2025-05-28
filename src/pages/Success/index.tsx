import { useParams } from "react-router-dom";
import { Info, InfosContainer, SuccessContainer, Title } from "./styles";

import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import deliveryImage from "../../../public/images/delivery.svg";
import { useCart } from "../../hooks/useCart";

export function Success() {
  const { orderId } = useParams();
  const { orders } = useCart();
  const theme = useTheme();

  const order = orders.find((order) => order.id === orderId);

  if (!order?.id) {
    return null;
  }
  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };

  return (
    <SuccessContainer>
      <div>
        <Title>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Title>

        <InfosContainer>
          <Info>
            <MapPin
              size={32}
              weight="fill"
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors.purple }}
            />

            <div>
              <span>
                Entrega em{" "}
                <strong>
                  {order.street}, {order.number}
                </strong>
              </span>
              <span>
                {order.district} - {order.city}, {order.uf}
              </span>
            </div>
          </Info>
          <Info>
            <Timer
              size={32}
              weight="fill"
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors.yellow }}
            />
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </Info>
          <Info>
            <CurrencyDollar
              size={32}
              weight="fill"
              color={theme.colors.white}
              style={{ backgroundColor: theme.colors["yellow-dark"] }}
            />
            <div>
              <span>Pagamento na entrega</span>
              <strong>{paymentMethod[order.payment]}</strong>
            </div>
          </Info>
        </InfosContainer>
      </div>

      <div>
        <img src={deliveryImage} alt="" />
      </div>
    </SuccessContainer>
  );
}
