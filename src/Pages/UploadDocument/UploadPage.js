import {Box, Center, Container, Heading, Stack, Text, VStack} from "@chakra-ui/react";
import HandleUpload from "./HandleUpload";
import TableComponent from "../../Components/Table";
import {useState} from "react";

const UploadPage = () => {
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleDataFromChild = (data) => {
    // Process the data received from the child component
    setDataFromChild(data);
  };

  const steps = [
        {
        id: 1,
        title: 'Step 1',
        description: 'Take a picture of your receipt',
    },
    {
        id: 2,
        title: 'Step 2',
        description: 'Upload the picture',
    },
    {
        id: 3,
        title: 'Step 3',
        description: 'View your receipt',
    }];
  return (
    <div>
      <VStack spacing={4} align="stretch">
        <Box h="50px">
          <Center h="100px">
            <Heading>Upload Your Receipt!</Heading>
          {/*    subheader*/}
          </Center>
        </Box>
        <Container p="8">
            {
                steps.map((step) => (
                    <Box key={step.id} p={3} mt={4} borderRadius={8} shadow="md" borderWidth="1px">
                        <Heading fontSize="xl">{step.title}</Heading>
                        <Text mt={4}>{step.description}</Text>
                    </Box>
                ))
            }
        </Container>
        <Box h="80px">
          <Center h="20px" color="white">
            <HandleUpload sendDataToParent={handleDataFromChild} />
          </Center>
        </Box>

        <TableComponent sharedData={dataFromChild} />
      </VStack>
    </div>
  );
};

export default UploadPage;
