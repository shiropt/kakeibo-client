import { useMediaQuery as MediaQuery } from "@mantine/hooks";
export const useMediaQuery = () => {
  const largeScreen = MediaQuery("(min-width: 1127px)");
  const smallScreen = MediaQuery("(max-width: 600px)");
  return { largeScreen, smallScreen };
};
