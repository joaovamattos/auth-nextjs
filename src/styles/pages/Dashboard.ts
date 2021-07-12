import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
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

export const UserInfo = styled.div`
  max-width: 22.5rem;
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.25rem;
  background: ${(props) => props.theme.colors.foreground};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const UserEmail = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 0.875rem;
  font-weight: 400;
`;

export const UserAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1.5rem;
  object-fit: cover;
  margin-right: 1rem;
`;
