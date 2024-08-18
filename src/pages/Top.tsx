import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Career } from "../components/layout/Career";
import { About } from "../components/layout/About";
import { Skill } from "../components/layout/Skill";
import { Box, Image, Flex, Text, Center } from "@chakra-ui/react";
import so from "../assets/images/so.jpg";

export const Top: React.FC = () => {
  const birthDate: Date = new Date("1998-10-21");
  const calculateAge = (birthDate: Date): number => {
    const currentDate = new Date();

    const calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      return calculatedAge - 1;
    }

    return calculatedAge;
  };

  return (
    <>
      <Header />
      <Flex id="Top" alignItems="center" justify="center" height="600px">
        <Box pr={8}>
          <Image
            borderRadius="full"
            boxSize="400"
            objectFit="cover"
            src={so}
            alt="Shogo Onuki"
          />
        </Box>
        <Box>
          <Text fontSize="8xl" fontWeight="bold">
            Shogo Onuki
          </Text>
          <Text fontSize="4xl">Developer</Text>
          <Text fontSize="4xl">1998.10.21({calculateAge(birthDate)})</Text>
        </Box>
      </Flex>
      <Center></Center>
      <Center></Center>
      <Center></Center>
      <Box id="Career" textAlign="center" height="600px">
        <Text fontSize="6xl" fontWeight="bold">
          Career
        </Text>
        <Career />
      </Box>
      <Box id="Skill" textAlign="center">
        <Text fontSize="6xl" fontWeight="bold">
          Skill
        </Text>
        <Skill />
      </Box>
      <Box id="About" textAlign="center">
        <Text fontSize="6xl" fontWeight="bold">
          About
        </Text>
        <About />
      </Box>
      <Footer />
    </>
  );
};
