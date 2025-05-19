import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Intro = styled.div`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 34rem;
    width: 100vw;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3.5rem;

  max-width: 72.5rem;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors["base-title"]};
  }

  > span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`;

export const CoffeeListContainer = styled.div`
  max-width: 72.5rem;
  padding: 5.75rem 1.25rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  > h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
  }
`;
