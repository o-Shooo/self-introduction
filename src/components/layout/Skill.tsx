import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { SkillCard } from "../ui/SkillCard";
import {
  javascript,
  typescript,
  python,
  node,
  express,
  react,
  azure,
  aws,
  fe,
  clf,
} from "../../assets/images";

export const Skill: React.FC = () => {
  return (
    <>
      <Box>
        <Heading as="h3" size="lg" mb={2} my={10}>
          Language / Runtime
        </Heading>
        <SimpleGrid columns={4} spacing={10} minChildWidth="250px">
          <SkillCard bg="tomato" h="200px" name="JavaScript" src={javascript} />
          <SkillCard bg="tomato" h="200px" name="TypeScript" src={typescript} />
          <SkillCard bg="tomato" h="200px" name="Python" src={python} />
          <SkillCard bg="tomato" h="200px" name="Node.js" src={node} />
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h3" size="lg" mb={2} my={10}>
          Framework / Library
        </Heading>
        <SimpleGrid columns={4} spacing={10} minChildWidth="250px">
          <SkillCard bg="tomato" h="200px" name="express.js" src={express} />
          <SkillCard bg="tomato" h="200px" name="React.js" src={react} />
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h3" size="lg" mb={2} my={10}>
          Cloud
        </Heading>
        <SimpleGrid columns={4} spacing={10} minChildWidth="250px">
          <SkillCard bg="tomato" h="200px" name="Azure" src={azure} />
          <SkillCard bg="tomato" h="200px" name="AWS" src={aws} />
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h3" size="lg" mb={2} my={10}>
          Certification
        </Heading>
        <SimpleGrid columns={4} spacing={10} minChildWidth="250px">
          <SkillCard name="基本情報技術者試験" src={fe} />
          <SkillCard name="AWS CLF-C02" src={clf} />
        </SimpleGrid>
      </Box>
    </>
  );
};
