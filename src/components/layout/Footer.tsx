import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import React, { ReactNode } from "react";

interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer: React.FC = () => {
  return (
    <Box bg="gray.900" color="gray.200">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2024 Shogo Onuki, All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"GitLab"} href={"https://github.com/o-Shooo"}>
            <AiFillGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
