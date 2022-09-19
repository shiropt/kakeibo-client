import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";

export const useAuthForm = (kind: "signin" | "signup" | "auth" | "reset") => {
  const baseSchema = z.object({
    email: z
      .string()
      .email({ message: "メールアドレスの形式が正しくありません" })
      .min(1, { message: "メールアドレスは必須です" }),
    password: z.string().regex(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,20}$/i, {
      message: "パスワードは6文字以上の半角英数字を組み合わせて入力してください",
    }),
    name: z.string().min(1, { message: "ニックネームは必須です" }),
    phone: z.string().min(1, { message: "電話番号は必須です" }),
    authNumber: z.string().min(1, { message: "認証番号は必須です" }),
  });

  const signupSchema = baseSchema.pick({ email: true, password: true, name: true, phone: true });
  const signinSchema = baseSchema.pick({ email: true, password: true });
  const resetSchema = baseSchema.pick({ email: true });
  const authSchema = baseSchema.pick({ authNumber: true });

  const schema = () => {
    switch (kind) {
      case "signup":
        return signupSchema;
      case "signin":
        return signinSchema;
      case "reset":
        return resetSchema;
      case "auth":
        return authSchema;
    }
  };

  const form = useForm({
    schema: zodResolver(schema()),
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
      authNumber: "",
    },
  });

  return { form };
};
