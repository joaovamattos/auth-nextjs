import Head from "next/head";
import { useContext } from "react";
import { ThemeContext, DefaultTheme } from "styled-components";
import { FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";

import { AuthContext } from "../contexts/AuthContext";
import { Main, Form, Title, Input, Button } from "../styles/pages/SignIn";

export default function Home() {
  const theme = useContext<DefaultTheme>(ThemeContext);
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  async function handleSignin(data) {
    try {
      await signIn(data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <Head>
        <title>Auth Next.js</title>
        <meta name="description" content="Authentication with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Form onSubmit={handleSubmit(handleSignin)}>
          <FiLock color={theme.colors.green} size={48} />
          <Title>Auth Next.js</Title>
          <Input
            {...register("email")}
            placeholder="Your best email"
            type="email"
          />
          <Input
            {...register("password")}
            placeholder="Your secret password"
            type="password"
          />
          <Button>Sign in</Button>
        </Form>
      </Main>
    </div>
  );
}
