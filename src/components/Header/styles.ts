import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  background: ${(props) => props.theme.colors.background};
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors["yellow-light"]};
  color: ${(props) => props.theme.colors["yellow-dark"]};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: -2rem;
    margin-left: 2rem;
    background: ${(props) => props.theme.colors["yellow-dark"]};
    color: ${(props) => props.theme.colors.white};
    border-radius: 100%;
    width: 1.25rem;
    height: 1.25rem;
    ${mixins.fonts.textS}
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors["purple-light"]};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.purple};
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme.colors["purple-dark"]};
    ${mixins.fonts.textS}
  }
`;
