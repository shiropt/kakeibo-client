import { Button, Text } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";

export const AlertModal = ({ context, id, innerProps }: ContextModalProps<{ modalBody: string }>) => (
  <div>
    <div className="flex justify-center">
      <Text size="sm">{innerProps.modalBody}</Text>
    </div>
    <Button fullWidth mt="xs" onClick={() => context.closeAll()}>
      OK
    </Button>
  </div>
);
