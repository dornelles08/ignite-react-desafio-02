import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 0 1.25rem 1.25rem;
  border-radius: 0.375rem 1.625rem;
  width: 16rem;

  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  margin-top: -1.25rem;
  align-self: center;
`;

export const Tags = styled.div`
  gap: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  span {
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    border-radius: 6.25rem;
    padding: 0.25rem 0.5rem;
    ${mixins.fonts.tag};
    text-transform: uppercase;
  }
`;

export const Title = styled.h3`
  margin-top: 1rem;
  ${mixins.fonts.titleS};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  ${mixins.fonts.textS};
  color: ${({ theme }) => theme.colors["base-label"]};
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
`;

export const Price = styled.span`
  display: flex;
  align-items: baseline;

  span:first-child {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
  span:last-child {
    ${mixins.fonts.titleM};
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    background-color: ${({ theme }) => theme.colors["purple-dark"]};
    border-radius: 0.375rem;
    padding: 0.5rem;
    display: flex;

    &:hover {
      background-color: ${({ theme }) => theme.colors["purple"]};
    }
  }
`;
