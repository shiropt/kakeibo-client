import { InputWrapper, PasswordInput, TextInput, NumberInput, Button } from "@mantine/core";
import { FC } from "react";
import { useForm } from "@mantine/form";

type Props = {
  submit: () => void;
  kind: "signin" | "signup" | "auth" | "reset";
};

export const AuthForm: FC<Props> = (props) => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: null,
      authNumber: null,
    },
  });

  if (props.kind === "signup")
    return (
      <form onSubmit={form.onSubmit(props.submit)}>
        <InputWrapper label="メールアドレス">
          <TextInput {...form.getInputProps("email")} size="lg" />
        </InputWrapper>
        <InputWrapper className="my-4" label="パスワード">
          <PasswordInput {...form.getInputProps("password")} size="lg" />
        </InputWrapper>
        <InputWrapper label="ニックネーム">
          <TextInput placeholder="ニックネーム" {...form.getInputProps("name")} size="lg" />
        </InputWrapper>
        <InputWrapper label="電話番号">
          <NumberInput noClampOnBlur hideControls={true} {...form.getInputProps("phone")} size="lg" />
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
          <TextInput {...form.getInputProps("email")} size="lg" />
        </InputWrapper>
        <InputWrapper className="my-4" id="input-demo" label="パスワード">
          <PasswordInput {...form.getInputProps("password")} size="lg" />
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
          <NumberInput hideControls={true} {...form.getInputProps("authNumber")} size="lg" />
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
