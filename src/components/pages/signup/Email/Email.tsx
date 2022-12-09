import { Container, Title, Button, Modal, Text, Anchor, Box } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { AuthForm } from "../../../ui/form";
import { emailAndPasswordSignup } from "../../../../libs/firebase/auth";
import { useFetchers } from "../../../../hooks/useFetcher";
import { store } from "../../../../libs/store";

export const EmailSignup: FC = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { apiClient } = useFetchers();
  const { setAccessToken } = store.user();
  const { toggleIsLoading } = store.loading();

  const router = useRouter();
  const signup = useCallback(async (values: { email: string; password: string }) => {
    toggleIsLoading();
    try {
      const user = await emailAndPasswordSignup(values.email, values.password);
      const { uid, email } = user;
      await apiClient.user.post({ body: { uid, email } });
      const authResult = await apiClient.auth.login.post({
        body: { username: email, password: uid },
      });
      setAccessToken(authResult.body.access_token);
      router.push("/");
      toggleIsLoading();
    } catch (e) {
      console.log(e);
      toggleIsLoading();
      setErrorMessage("既に登録されているメールアドレスです");
    }
  }, []);

  return (
    <Container size="sm" py="100px">
      <Title order={3} className="text-center">
        会員登録
      </Title>
      <AuthForm errorMessage={errorMessage} kind="signup" submit={signup} />
      <Box className=" mt-4">
        <Anchor onClick={() => router.push("/signup")} className="ml-2">
          &lt; 戻る
        </Anchor>
      </Box>
    </Container>
  );
};
