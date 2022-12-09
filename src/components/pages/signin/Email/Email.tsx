import { Container, Title, Anchor, Button, Divider, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { useFetchers } from "../../../../hooks/useFetcher";
import { AuthForm } from "../../../ui/form";
import Axios from "axios";
import { emailAndPasswordSignin } from "../../../../libs/firebase/auth";
import { store } from "../../../../libs/store";

export const EmailSignin: FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { setAccessToken } = store.user();
  const { toggleIsLoading } = store.loading();
  const { apiClient } = useFetchers();

  const signin = useCallback(async (values: { email: string; password: string }) => {
    toggleIsLoading();
    try {
      const result = await emailAndPasswordSignin(values.email, values.password);
      if (typeof result === "string" || !result) {
        toggleIsLoading();
        setErrorMessage("メールアドレス、またはパスワードが正しくありません");
        return;
      }
      const user = await apiClient.auth.login.post({
        body: { username: result.email!, password: result.uid },
      });
      setAccessToken(user.body.access_token);
      toggleIsLoading();
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status === 401) {
        setErrorMessage("メールアドレス、またはパスワードが正しくありません");
        toggleIsLoading();
      }
      return;
    }
    router.push("/");
  }, []);

  return (
    <Container size="sm" py="100px">
      <Title order={3} className="text-center" data-testid="email-signin-title">
        ログイン
      </Title>
      <AuthForm
        errorMessage={errorMessage}
        submit={signin}
        resetErrorMessage={() => setErrorMessage("")}
        kind="signin"
      />
      <Anchor data-testid="link" onClick={() => router.push("/signin/password/reset")} className=" p-6 float-right">
        パスワードを忘れた方はこちら &gt;
      </Anchor>
      <Divider my="lg" className=" mt-16" />
      <Text className="text-center">アカウントをお持ちでない方</Text>
      <Button
        fullWidth
        size="lg"
        variant="outline"
        color="red"
        className=" mt-4"
        onClick={() => router.push("/signup")}
      >
        会員登録
      </Button>
    </Container>
  );
};
