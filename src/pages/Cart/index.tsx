import { zodResolver } from "@hookform/resolvers/zod";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CartCheckout,
  CartContainer,
  CartItemsContainer,
  CartTotals,
  CheckoutButton,
  Coffee,
  CoffeInfo,
  Field,
  Fields,
  FieldsContainer,
  Form,
  FormContainer,
  FormTitle,
  Options,
  PaymentOption,
  PaymentOptions,
  PaymentOptionsTitle,
} from "./styles";

import { QuantityInput } from "../../components/QuantityInput";
import { useCart } from "../../hooks/useCart";

import { coffees } from "../../../data.json";
import { Divisor } from "../../components/Header/styles";

const newOrderSchema = z.object({
  cep: z.string().min(1, "Informe o CEP"),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  complement: z.string(),
  district: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  uf: z.string().min(1, "Informe a UF"),
  payment: z.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

type AddressFormData = z.infer<typeof newOrderSchema>;

const shippingPrice = 3.5;

export function Cart() {
  const { register, handleSubmit, watch } = useForm<AddressFormData>({
    resolver: zodResolver(newOrderSchema),
  });
  const { items, removeFromCart, decrementItemQuantity, incrementItemQuantity, checkoutCart } =
    useCart();

  const coffesOnCart = items.map((item) => {
    const coffee = coffees.find((coffee) => coffee.id === item.id);
    if (!coffee) {
      throw new Error("Invalid coffee.");
    }
    return {
      ...coffee,
      quantity: item.quantity,
    };
  });

  const totalItemsPrice = coffesOnCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity);
  }, 0);

  const paymentMethod = watch("payment");

  function handleCheckout(data: AddressFormData) {
    const payload = {
      id: new Date().toISOString(),
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      district: data.district,
      city: data.city,
      uf: data.uf,
      payment: data.payment,
      items: coffesOnCart,
    };
    checkoutCart(payload);
  }

  return (
    <CartContainer>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <FormContainer>
          <h3>Complete seu pedido</h3>
          <Form>
            <FormTitle>
              <MapPinLine size={22} />
              <div>
                <h4>Endereço de Entrega</h4>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </FormTitle>

            <FieldsContainer>
              <Field type="text" placeholder="CEP" id="cep" {...register("cep")} />
              <Field type="text" placeholder="Rua" {...register("street")} />
              <Fields>
                <Field type="text" placeholder="Número" id="number" {...register("number")} />
                <div id="complement">
                  <Field type="text" placeholder="Complemento" {...register("complement")} />
                  <span>Opcional</span>
                </div>
              </Fields>
              <Fields>
                <Field type="text" placeholder="Bairro" {...register("district")} />
                <Field type="text" placeholder="Cidade" {...register("city")} />
                <Field type="text" placeholder="UF" id="uf" {...register("uf")} />
              </Fields>
            </FieldsContainer>
          </Form>

          <PaymentOptions>
            <PaymentOptionsTitle>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </PaymentOptionsTitle>

            <Options>
              <PaymentOption isSelected={paymentMethod === "credit"}>
                <input type="radio" id="credit" value="credit" {...register("payment")} />
                <label htmlFor="credit">
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </label>
              </PaymentOption>

              <PaymentOption isSelected={paymentMethod === "debit"}>
                <input type="radio" id="debit" value="debit" {...register("payment")} />
                <label htmlFor="debit">
                  <Bank size={16} />
                  CARTÃO DE DÉBITO
                </label>
              </PaymentOption>

              <PaymentOption isSelected={paymentMethod === "cash"}>
                <input type="radio" id="cash" value="cash" {...register("payment")} />
                <label htmlFor="cash">
                  <Money size={16} />
                  Dinheiro
                </label>
              </PaymentOption>
            </Options>
          </PaymentOptions>
        </FormContainer>

        <CartItemsContainer>
          <h3>Cafés selecionados</h3>

          <CartCheckout>
            {coffesOnCart.map((coffee) => {
              return (
                <div key={coffee.id}>
                  <Coffee>
                    <div>
                      <img src={coffee.image} alt={coffee.title} />

                      <div>
                        <span>{coffee.title}</span>

                        <CoffeInfo>
                          <QuantityInput
                            decrementQuantity={() => decrementItemQuantity(coffee)}
                            incrementQuantity={() => incrementItemQuantity(coffee)}
                            quantity={coffee.quantity}
                          />

                          <button onClick={() => removeFromCart(coffee)}>
                            <Trash size={16} />
                            REMOVER
                          </button>
                        </CoffeInfo>
                      </div>
                    </div>

                    <aside>
                      {new Intl.NumberFormat("pt-br", {
                        currency: "BRL",
                        style: "currency",
                      }).format(coffee.price)}
                    </aside>
                  </Coffee>

                  <Divisor />
                </div>
              );
            })}

            <CartTotals>
              <div>
                <span>Total de itens</span>
                <span>
                  {new Intl.NumberFormat("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  }).format(totalItemsPrice)}
                </span>
              </div>

              <div>
                <span>Entrega</span>
                <span>
                  {new Intl.NumberFormat("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  }).format(shippingPrice)}
                </span>
              </div>

              <div>
                <span>Total</span>
                <span>
                  {new Intl.NumberFormat("pt-br", {
                    currency: "BRL",
                    style: "currency",
                  }).format(totalItemsPrice + shippingPrice)}
                </span>
              </div>
            </CartTotals>

            <CheckoutButton type="submit">CONFIRMAR PEDIDO</CheckoutButton>
          </CartCheckout>
        </CartItemsContainer>
      </form>
    </CartContainer>
  );
}
