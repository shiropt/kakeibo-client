import { InputWrapper, PasswordInput, TextInput, Button } from "@mantine/core";
import { FC } from "react";
import { useAuthForm } from "../../../../libs/mantine/useForm/authForm";

type Props = {
  submit: () => void;
  kind: "signin" | "signup" | "auth" | "reset";
};

export const AuthForm: FC<Props> = (props) => {
  const { form } = useAuthForm(props.kind);

  if (props.kind === "signup")
    return (
      <form onSubmit={form.onSubmit(props.submit)}>
        <InputWrapper id="mail-label" label="メールアドレス">
          <TextInput {...form.getInputProps("email")} size="lg" />
        </InputWrapper>
        <InputWrapper className="my-4" label="パスワード">
          <PasswordInput {...form.getInputProps("password")} size="lg" />
        </InputWrapper>
        <InputWrapper label="ニックネーム">
          <TextInput {...form.getInputProps("name")} size="lg" />
        </InputWrapper>
        <InputWrapper label="電話番号">
          <TextInput {...form.getInputProps("phone")} size="lg" />
        </InputWrapper>
        <Button type="submit" fullWidth size="lg" color="red" className="mt-12">
          次へ
        </Button>
      </form>
    );

  if (props.kind === "signin")
    return (
      <form onSubmit={form.onSubmit(props.submit)}>
        <InputWrapper label="メールアドレス">
          <TextInput data-testid="mail-input" {...form.getInputProps("email")} size="lg" />
        </InputWrapper>
        <InputWrapper className="my-4" label="パスワード">
          <PasswordInput data-testid="password-input" {...form.getInputProps("password")} size="lg" />
        </InputWrapper>
        <Button type="submit" fullWidth size="lg" color="red" className="mt-12">
          ログイン
        </Button>
      </form>
    );

  if (props.kind === "auth")
    return (
      <form onSubmit={form.onSubmit(props.submit)}>
        <InputWrapper label="認証番号">
          <TextInput {...form.getInputProps("authNumber")} size="lg" />
        </InputWrapper>
        <Button type="submit" fullWidth size="lg" color="red" className="mt-12">
          認証して完了する
        </Button>
      </form>
    );

  return (
    <form onSubmit={form.onSubmit(props.submit)}>
      <InputWrapper label="メールアドレス">
        <TextInput {...form.getInputProps("email")} size="lg" />
      </InputWrapper>
      <Button type="submit" fullWidth size="lg" color="red" className="mt-12">
        パスワードをリセットする
      </Button>
    </form>
  );
};
