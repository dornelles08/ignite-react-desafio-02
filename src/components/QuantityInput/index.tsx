import { Minus, Plus } from "@phosphor-icons/react";
import { InputContainer } from "./styles";

type Props = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};

export function QuantityInput({ quantity, incrementQuantity, decrementQuantity }: Props) {
  return (
    <InputContainer>
      <button onClick={decrementQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </InputContainer>
  );
}
