import React from "react";
import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  Image,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as Scroll } from "react-scroll";
import { mug } from "../../assets/images";

const Links: string[] = ["Top", "Career", "Skill"];

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Flex
        bg="gray.900"
        color="gray.200"
        px={10}
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        top={0}
        position="sticky"
        zIndex={"sticky"}
      >
        <Box display={{ base: "block", md: "none" }}>
          <Button onClick={onOpen} bg="gray.100">
            <HamburgerIcon color="gray.500" />
          </Button>
          <Drawer
            isOpen={isOpen}
            onClose={onClose}
            placement="left"
            finalFocusRef={btnRef}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody px={8}>
                  {Links.map((link) => (
                    <Box
                      _hover={{
                        color: "cyan.500",
                        cursor: "pointer",
                      }}
                      h={8}
                    >
                      <Scroll to={link} smooth={true} offset={-100}>
                        {link}
                      </Scroll>
                    </Box>
                  ))}
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
        <HStack spacing={8}>
          <Image boxSize="50px" src={mug} />
          <HStack spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Box
                _hover={{
                  color: "cyan.500",
                  cursor: "pointer",
                }}
              >
                <Scroll to={link} smooth={true} offset={-100}>
                  {link}
                </Scroll>
              </Box>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </>
  );
};
