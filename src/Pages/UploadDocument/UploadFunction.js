import React, { useState } from "react";
import { Button, Center } from "@chakra-ui/react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClick = () => {
    document.getElementById("imageFile").click();
  };

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>

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
      {/* {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )} */}

      <br />
      <br />

      <input
        type="file"
        id="imageFile"
        capture="environment"
        accept="image/*"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
        hidden
      />
    </div>
  );
};

export default UploadAndDisplayImage;
