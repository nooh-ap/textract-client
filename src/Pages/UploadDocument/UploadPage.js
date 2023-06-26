import { Heading } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Stack, VStack, StackDivider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const UploadPage = () => {
  //click hidden input
  const handleClick = () => {
    document.getElementById("imageFile").click();
  };
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
            <Button
              onClick={() => {
                handleClick();
              }}
              colorScheme="teal"
              variant="solid"
            >
              Click here to upload
            </Button>
          </Center>
        </Box>
      </VStack>

      <input
        type="file"
        id="imageFile"
        capture="environment"
        accept="image/*"
        hidden
      />
    </div>
  );
};

export default UploadPage;