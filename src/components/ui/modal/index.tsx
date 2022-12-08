import { Button, Text } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";

export const AlertModal = ({ context, id, innerProps }: ContextModalProps<{ modalBody: string }>) => (
  <div className="flex flex-row">
    <Text size="sm">{innerProps.modalBody}</Text>
    <Button fullWidth mt="xs" onClick={() => context.closeAll()}>
      OK
    </Button>
  </div>
);
