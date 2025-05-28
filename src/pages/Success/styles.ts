import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 10rem;
  gap: 10rem;
  margin-top: 5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme.colors["yellow-dark"]};
    ${mixins.fonts.titleL}
  }
  span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 0.375rem 2.25rem;

  border: 1px solid ${(props) => props.theme.colors["purple"]};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  svg {
    padding: 0.5rem;
    border-radius: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;
