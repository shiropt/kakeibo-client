import { Container, Title, Button, Divider, Text } from "@mantine/core";
import { BrandGoogle, Mail } from "tabler-icons-react";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { useFetchers } from "../../../../hooks/useFetcher";
import { useUserStore } from "../../../../libs/store/user";
import { useLoadingStore } from "../../../../libs/store/loading";
import { emailAndPasswordSignup } from "../../../../libs/firebase/auth";
import { AuthForm } from "../../../ui/form";

export const Signup: FC = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const { apiClient } = useFetchers();
  const { setAccessToken } = useUserStore();
  const { toggleIsLoading } = useLoadingStore();

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
    <Container size="sm" py="100px" className="">
      <Title order={3} className="text-center" data-testid="signup-title">
        会員登録
      </Title>
      <AuthForm errorMessage={errorMessage} kind="signup" submit={signup} />

      <Divider my="sm" className="my-10" />
      <Text className="text-center">アカウントをお持ちの方</Text>
      <Button
        fullWidth
        size="lg"
        variant="outline"
        color="red"
        className=" mt-4"
        onClick={() => router.push("/signin")}
      >
        ログイン
      </Button>
    </Container>
  );
};
