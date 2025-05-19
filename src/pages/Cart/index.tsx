import { zodResolver } from "@hookform/resolvers/zod";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CartContainer,
  CartItems,
  CartItemsContainer,
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

const addressFormSchema = z.object({
  cep: z.string().min(1, "Informe o CEP"),
  street: z.string().min(1, "Informe a rua"),
  number: z.string().min(1, "Informe o número"),
  complement: z.string(),
  district: z.string().min(1, "Informe o bairro"),
  city: z.string().min(1, "Informe a cidade"),
  uf: z.string().min(1, "Informe a UF"),
  payment: z.string().min(1, "Informe o método de pagamento"),
});

type AddressFormData = z.infer<typeof addressFormSchema>;

export function Cart() {
  const { register, handleSubmit, watch } = useForm<AddressFormData>({
    resolver: zodResolver(addressFormSchema),
    defaultValues: {
      cep: "49035530",
      street: "Manoel Andrade",
      number: "2279",
      complement: "",
      district: "Coroa do Meio",
      city: "Aracaju",
      uf: "SE",
      payment: "",
    },
  });

  const paymentMethod = watch("payment");

  return (
    <CartContainer>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
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

              <PaymentOption isSelected={paymentMethod === "cach"}>
                <input type="radio" id="cash" value="cach" {...register("payment")} />
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
          <CartItems></CartItems>
        </CartItemsContainer>
      </form>
    </CartContainer>
  );
}
