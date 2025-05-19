import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  border-radius: 0.375rem;

  button {
    background: transparent;
    display: flex;
    align-items: center;
  }

  button svg {
    color: ${({ theme }) => theme.colors.purple};
    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors["purple-dark"]};
    }
  }

  span {
    padding-top: 0.125rem;
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`;
