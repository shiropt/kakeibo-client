import { Container, Title, Button, Modal, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useCallback, useState } from "react";
import { useToggle } from "@mantine/hooks";
import { AuthForm } from "../../../ui/form";

export const EmailSignup: FC = () => {
  const router = useRouter();
  const [phone, setPhone] = useState(0);
  const [isModalOpen, toggleModal] = useToggle(false, [true, false]);
  const sendAuthNumber = useCallback(() => {
    // Todo SMS認証API
    router.push("/signup/auth");
  }, [isModalOpen]);

  return (
    <Container size="sm" py="100px">
      <Title order={3} className="text-center">
        会員登録
      </Title>
      <AuthForm kind="signup" submit={() => {}} />
      <Modal
        classNames={{ title: "font-bold", header: "pt-2 flex justify-center" }}
        title={phone}
        withCloseButton={false}
        closeOnClickOutside={false}
        opened={isModalOpen}
        centered={true}
        onClose={() => toggleModal()}
        size="md"
      >
        <Container className="flex justify-center">
          <Text className="mb-6">
            上記の番号にSMSで認証番号を送ります。電話番号を変更する場合はキャンセルを押してください
          </Text>
        </Container>
        <Container className="flex justify-center">
          <Button color="red" fullWidth onClick={sendAuthNumber}>
            OK
          </Button>
          <Button variant="white" color="red" fullWidth onClick={() => toggleModal()}>
            キャンセル
          </Button>
        </Container>
      </Modal>
    </Container>
  );
};
