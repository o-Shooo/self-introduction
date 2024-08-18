import { Flex, Card, CardBody, Stack, Image, Text } from "@chakra-ui/react";

interface SkillCardProps {
  bg?: string;
  h?: string;
  src: string;
  name: string;
}

export const SkillCard: React.FC<SkillCardProps> = (props) => {
  return (
    <>
      <Flex alignItems="center" justify="center">
        <Card maxW="sm">
          <CardBody>
            <Image src={props.src} boxSize="150" objectFit="cover" />
            <Stack mt="6" spacing="3">
              <Text>{props.name}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};
