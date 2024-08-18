import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Center,
  Card,
  CardBody,
} from "@chakra-ui/react";

const getCurrentYearMonth = (): string => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");

  return `${year}-${month}`;
};

export const Career: React.FC = () => {
  const currentYearMonth = getCurrentYearMonth();
  const steps = [
    {
      title: "IT専門学校(2年制)",
      description: "2019-04 ~ 2021-02",
    },
    { title: "SES企業入社", description: `2021-04 ~ ${currentYearMonth}` },
  ];

  const { activeStep } = useSteps({
    index: 1,
  });
  return (
    <>
      <Center>
        <Stepper
          index={activeStep}
          orientation="vertical"
          height="400px"
          gap="0"
          my={10}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator bg="white">
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>
                  <Card>
                    <CardBody>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                    </CardBody>
                  </Card>
                </StepTitle>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Center>
    </>
  );
};
