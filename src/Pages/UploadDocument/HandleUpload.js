import { useEffect, useState} from "react";
import {Button, Center} from "@chakra-ui/react";
import {redirect, useNavigate} from "react-router-dom";



const HandleUpload = ({ sendDataToParent }) => {
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

    }, [file]);
    const handleClick = () => {
        document.getElementById("imageFile").click();
    };
    const isLoadingToggle = () => {
        setIsLoading(a => a = !a);
    }

    const uploadFile = (file) => {
        if (file === null)
            return;

        isLoadingToggle();

        const formData = new FormData();
        formData.append("file", file, "react-image.jpeg");


        const url = "https://d5ggcgl4u4.execute-api.us-east-1.amazonaws.com/test/textract/analyzeReceipt";
        const requestOptions = {
            method: 'POST',
            body: formData,
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => sendDataToParent(result))
            .then(() => navigate("/dashboard"))
            .then(() => isLoadingToggle())
            .catch(error => console.log('error', error));
    }


    return (
        <div>
            <Center h="20px" color="white">
                <Button
                    isLoading={isLoading}
                    onClick={() => {
                        handleClick();
                    }}
                    colorScheme="teal"
                    variant="solid"
                >
                    Click here to upload now
                </Button>
            </Center>

            <input
                type="file"
                id="imageFile"
                accept="image/*"
                onChange={(event) => {
                    setFile(prevFile => prevFile = event.target.files[0] || null );
                    uploadFile(event.target.files[0] || null);
                }}
                hidden
               multiple={false}/>
        </div>
    );
}

export default HandleUpload;

