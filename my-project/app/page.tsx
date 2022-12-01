import Text from "../components/Text";
import Heading from "../components/Heading";
import Box from "../components/Box";
import OutlinedButton from "../components/OutlinedButton";

export default function Home() {
  return (
    <>
      <Text size="text-3xl">Hello World</Text>
      <Box outline width="32" height="10000">
        <Heading size="text-4xl">Hello World</Heading>
      </Box>
      <OutlinedButton size="text-5xl">Hello World</OutlinedButton>
    </>
  );
}
