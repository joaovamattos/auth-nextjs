import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 24rem;
  width: 100%;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2.25rem;
  margin-top: 0.25rem;
  text-align: center;
`;

export const Input = styled.input`
  max-width: 22.5rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.foreground};
  height: 3.375rem;
  font-size: 1rem;
  padding: 0 1.5rem;
  margin-bottom: 0.5rem;

  color: ${(props) => props.theme.colors.black};
`;

export const Button = styled.button`
  max-width: 22.5rem;
  width: 100%;
  border: 0;
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.green};
  height: 3.375rem;
  padding: 0 1.5rem;
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.foreground};
  cursor: pointer;
  transition: 0.2s filter;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: translateY(0.25rem);
  }
`;
