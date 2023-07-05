import React, {useState} from "react";
import {Button, Center} from "@chakra-ui/react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleClick = () => {
    document.getElementById("imageFile").click();
  };

  const url = "https://d5ggcgl4u4.execute-api.us-east-1.amazonaws.com/test/textract/analyzereciept"
  const handleUpload = () => {
      const formData = new FormData();
      formData.append("image", selectedImage);
      fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((result) => {
                  console.log("Success:", result);
                })
                .catch((error) => {
                      console.error("Error:", error);
                    });
                };
    
  
  return (
      <div>
      <Center h="20px" color="white">
        <Button
          onClick={() => {
            handleClick();
          }}
          colorScheme="teal"
          variant="solid"
        >
          Click here to upload now
        </Button>
      </Center>      

      <br />
      <br />

      {/*  Input image file */}
        <input type="file" accept="image/*"/>
        
      <input
        type="file"
        id="imageFile"
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
