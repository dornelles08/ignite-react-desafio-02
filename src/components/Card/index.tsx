import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { QuantityInput } from "../QuantityInput";
import {
  CardContainer,
  CoffeeImage,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from "./styles";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export function Card({ coffee }: Props) {
  const theme = useTheme();
  const [quantity, setQuantity] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState(false);

  function decrementQuantity() {
    if (quantity > 1) setQuantity((state) => state - 1);
  }
  function incrementQuantity() {
    setQuantity((state) => state + 1);
  }
  function handleAddItem() {
    setIsItemAdded(true);
  }

  useEffect(() => {
    let timeout: number;

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false);
      }, 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isItemAdded]);

  return (
    <CardContainer>
      <CoffeeImage src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>

        <Order>
          <QuantityInput
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat weight="fill" size={22} color={theme.colors["base-card"]} />
            ) : (
              <ShoppingCart size={22} color={theme.colors["base-card"]} />
            )}
          </button>
        </Order>
      </Control>
    </CardContainer>
  );
}
