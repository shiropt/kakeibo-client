import { Container, Title, Anchor } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { AuthForm } from "../../../ui/form";

export const EmailSignin: FC = () => {
  const router = useRouter();

  const signin = useCallback((values = {}) => {
    console.log(values);

    router.push("/");
  }, []);

  return (
    <Container size="sm" py="100px">
      <Title order={3} className="text-center" data-testid="email-signin-title">
        ログイン
      </Title>
      <AuthForm submit={signin} kind="signin" />
      <Anchor data-testid="link" onClick={() => router.push("/signin/password/reset")} className=" p-6 float-right">
        パスワードを忘れた方はこちら &gt;
      </Anchor>
    </Container>
  );
};
