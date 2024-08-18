import { ChakraProvider } from "@chakra-ui/react";
import { Top } from "./pages/Top";

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Top />
    </ChakraProvider>
  );
};
