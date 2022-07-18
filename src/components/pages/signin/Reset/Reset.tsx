import type { NextPage } from "next";
import { Container, Title, Button, Modal, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { useToggle } from "@mantine/hooks";
import { AuthForm } from "../../../ui/form";

export const PasswordReset: FC = () => {
  const router = useRouter();
  const [isModalOpen, toggleModal] = useToggle(false, [true, false]);
  const resetPassword = useCallback(() => {
    toggleModal();
  }, [isModalOpen]);

  return (
    <Container size="sm" py="100px" className="">
      <Title order={3} className="text-center">
        パスワードを忘れた方
      </Title>
      <AuthForm kind="reset" submit={resetPassword} />
      <Modal
        styles={{ title: { marginRight: "100px" } }}
        title="メールを確認してください"
        withCloseButton={false}
        closeOnClickOutside={false}
        opened={isModalOpen}
        centered={true}
        onClose={() => toggleModal()}
        size="md"
      >
        <Container className="">
          <Text>パスワード再設定のメールを送信しました</Text>
        </Container>
        <Container className="flex justify-center">
          <Button color="red" fullWidth onClick={() => router.push("/signin")}>
            OK
          </Button>
        </Container>
      </Modal>
    </Container>
  );
};
