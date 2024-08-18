import { Box, Text, Heading } from "@chakra-ui/react";

export const About: React.FC = () => {
  return (
    <Box p={5} maxW="600px" mx="auto">
      <Box mb={8}>
        <Heading as="h3" size="lg" mb={2}>
          Game
        </Heading>
        <Text fontSize="md">パソコンでゲームをよく遊びます。</Text>
      </Box>

      <Box mb={8}>
        <Heading as="h3" size="lg" mb={2}>
          Gadget
        </Heading>
        <Text fontSize="md">色々なガジェットを探すのが好きです。</Text>
      </Box>
    </Box>
  );
};
