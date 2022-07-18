import { Container, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { AuthForm } from "../../../ui/form";

export const SmsAuth: FC = () => {
  const router = useRouter();
  const signin = useCallback(() => {
    router.push("/");
  }, []);

  return (
    <Container size="sm" py="100px">
      <Title order={3} className="text-center">
        電話番号の認証
      </Title>
      <AuthForm kind="auth" submit={signin} />
    </Container>
  );
};
