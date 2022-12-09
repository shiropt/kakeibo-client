import { Container, Title, Button, Divider, Text, Anchor } from "@mantine/core";
import { BrandGoogle, Mail } from "tabler-icons-react";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { emailAndPasswordSignin, googleSignin } from "../../../../libs/firebase/auth";
import { useFetchers } from "../../../../hooks/useFetcher";
import Axios from "axios";
import { AuthForm } from "../../../ui/form";
import { store } from "../../../../libs/store";

export const Signin: FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { apiClient } = useFetchers();
  const { setAccessToken } = store.user();
  const { toggleIsLoading } = store.loading();
  const router = useRouter();
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
  const googleSigninClicked = async () => {
    toggleIsLoading();
    try {
      router.push("/");
      const user = await googleSignin();
      const { uid, email } = user;
      await apiClient.user.post({ body: { uid, email } });
      const authResult = await apiClient.auth.login.post({
        body: { username: email, password: uid },
      });
      setAccessToken(authResult.body.access_token);

      toggleIsLoading();
    } catch (e) {
      if (Axios.isAxiosError(e) && e.response && e.response.status === 401) {
        console.log(e);
      }
      toggleIsLoading();
      return;
    }
  };

  return (
    <Container size="sm" py="100px" className="">
      <Title order={3} data-testid="signin-title" className="text-center">
        ログイン
      </Title>
      <AuthForm
        errorMessage={errorMessage}
        submit={signin}
        resetErrorMessage={() => setErrorMessage("")}
        kind="signin"
      />
      <Anchor data-testid="link" onClick={() => router.push("/signin/password/reset")} className=" p-4 float-right">
        パスワードを忘れた方はこちら &gt;
      </Anchor>
      <Button
        fullWidth
        size="lg"
        leftIcon={<BrandGoogle />}
        variant="outline"
        color="gray"
        onClick={googleSigninClicked}
        className="mt-16"
      >
        Googleでログイン
      </Button>
      <Divider my="sm" className="my-10" />
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
