import {useState} from "react";
import {Button, Center} from "@chakra-ui/react";


const url = "https://d5ggcgl4u4.execute-api.us-east-1.amazonaws.com/test/textract/analyzereciept"
const uploadFileToAWS = (file) => {
    const formData = new FormData();
    formData.append("image", file);
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


const HandleUpload = () => {
    const [file, setFile] = useState(null);

    const uploadFile = (selectedFile) => {
        setFile(selectedFile);
        uploadFileToAWS(selectedFile)
    }
    const handleClick = () => {
        document.getElementById("imageFile").click();
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

                <br/>
                <br/>

                <input
                    type="file"
                    id="imageFile"
                    accept="image/*"
                    onChange={(event) => {
                        uploadFile(event.target.files[0]);
                    }}
                    hidden
                />
            </div>
    );
}

export default HandleUpload;
