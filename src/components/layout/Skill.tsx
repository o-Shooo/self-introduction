import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import { SkillCard } from "../ui/SkillCard";
import {
  javascript,
  typescript,
  python,
  node,
  express,
  nest,
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
        <SimpleGrid spacing={10} minChildWidth="250px">
          <SkillCard h="200px" name="JavaScript" src={javascript} />
          <SkillCard h="200px" name="TypeScript" src={typescript} />
          <SkillCard h="200px" name="Python" src={python} />
          <SkillCard h="200px" name="Node.js" src={node} />
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h3" size="lg" mb={2} my={10}>
          Framework / Library
        </Heading>
        <SimpleGrid spacing={10} minChildWidth="250px">
          <SkillCard h="200px" name="express.js" src={express} />
          <SkillCard h="200px" name="nest.js" src={nest} />
          <SkillCard h="200px" name="React.js" src={react} />
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h3" size="lg" mb={2} my={10}>
          Cloud
        </Heading>
        <SimpleGrid spacing={10} minChildWidth="250px">
          <SkillCard h="200px" name="Azure" src={azure} />
          <SkillCard h="200px" name="AWS" src={aws} />
        </SimpleGrid>
      </Box>
      <Box>
        <Heading as="h3" size="lg" mb={2} my={10}>
          Certification
        </Heading>
        <SimpleGrid spacing={10} minChildWidth="250px">
          <SkillCard name="基本情報技術者試験" src={fe} />
          <SkillCard name="AWS CLF-C02" src={clf} />
        </SimpleGrid>
      </Box>
    </>
  );
};
