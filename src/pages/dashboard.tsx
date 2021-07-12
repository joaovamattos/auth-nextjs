import Head from "next/head";
import { GetServerSideProps } from "next";
import { useContext } from "react";
import { ThemeContext, DefaultTheme } from "styled-components";
import { FiUnlock } from "react-icons/fi";
import { parseCookies } from "nookies";

import { AuthContext } from "../contexts/AuthContext";
import {
  Main,
  Container,
  Title,
  Button,
  UserInfo,
  UserAvatar,
  UserEmail,
  UserName,
} from "../styles/pages/Dashboard";
// import { getAPIClient } from "../services/axios";

export default function Home() {
  const theme = useContext<DefaultTheme>(ThemeContext);
  const { user, signOut } = useContext(AuthContext);

  return (
    <div>
      <Head>
        <title>Auth Next.js</title>
        <meta name="description" content="Authentication with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Container>
          <FiUnlock color={theme.colors.green} size={48} />
          <Title>My secret page</Title>

          <UserInfo>
            <UserAvatar src={user?.avatar_url} alt={user?.name} />
            <div>
              <UserName>{user?.name}</UserName>
              <UserEmail>{user?.email}</UserEmail>
            </div>
          </UserInfo>

          <Button onClick={() => signOut()}>Sign out</Button>
        </Container>
      </Main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const apiClient = getAPIClient(ctx);

  const { "@auth-nextjs:TOKEN": token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // await apiClient.get("/users");

  return {
    props: {},
  };
};
