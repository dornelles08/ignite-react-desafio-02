import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 72.5rem;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  form {
    display: flex;
    gap: 2rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 2.5rem;
  border-radius: 0.375rem;
`;

export const Form = styled(Base)``;

export const FormTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }
  h4 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Fields = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: relative;

    span {
      position: absolute;
      right: 0.75rem;
      top: 0.75rem;
      color: ${(props) => props.theme.colors["base-label"]};
    }
  }
`;

export const Field = styled.input`
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors["base-input"]};
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors["base-text"]};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }

  &#cep {
    width: 12.5rem;
  }
  &#number {
    width: 12.5rem;
  }
  &#uf {
    width: 3.75rem;
  }
`;

export const PaymentOptions = styled(Base)``;

export const PaymentOptionsTitle = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.colors["purple"]};
  }

  h3 {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 0.75rem;
`;

interface PaymentOptionProps {
  isSelected: boolean;
}

export const PaymentOption = styled.div<PaymentOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;

  background-color: ${(props) =>
    props.isSelected ? props.theme.colors["purple-light"] : props.theme.colors["base-button"]};

  &:hover {
    background-color: ${(props) => props.theme.colors["base-hover"]};
  }

  input {
    display: none;
  }
  svg {
    color: ${(props) => props.theme.colors["purple"]};
  }
  label {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors["base-text"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`;

export const CartItemsContainer = styled.div``;

export const CartItems = styled.div``;

export const CartItem = styled.div``;

export const Payment = styled.div``;
