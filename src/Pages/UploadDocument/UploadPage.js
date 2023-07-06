import {Box, Center, Container, Heading, Stack, Text, VStack} from "@chakra-ui/react";
import HandleUpload from "./HandleUpload";

const UploadPage = () => {

  return (
    <div>
      <VStack spacing={4} align="stretch">
        <Box h="50px">
          <Center h="100px">
            <Heading>Upload Your Receipt!</Heading>
          </Center>
        </Box>
        <Container p="12">
          <Stack spacing={3}>
            <Text fontSize="xl">
              <strong>Step 1:</strong> Get your receipt ready to be scanned
            </Text>
            <Text fontSize="xl">
              <strong>Step 2:</strong> Open the Scanly app on your smartphone or
              click the 'Upload Receipt' button on our website. You will be
              prompted to upload a photo of your receipt.
            </Text>
            <Text fontSize="xl">
              <strong>Step 3:</strong> Position your receipt and capture a clear
              photo using your phone's camera. You can also upload a photo from
              your phone's gallery.
            </Text>
          </Stack>
        </Container>

        <Box h="80px">
          <Center h="20px" color="white">
            <HandleUpload />
          </Center>
        </Box>
      </VStack>
    </div>
  );
};

export default UploadPage;
