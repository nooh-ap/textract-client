import {useState} from "react";
import {Button, Center} from "@chakra-ui/react";




const HandleUpload = () => {
    const [file, setFile] = useState(null);

    // const uploadFile =  (selectedFile) => {
    //     console.log(selectedFile, "Uploaded file");
    //
    //     const formdata = new FormData();
    //     formdata.append("file", selectedFile, "react-image.jpeg");
    //
    //     const requestOptions = {
    //         method: 'POST',
    //         body: formdata,
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //             "Access-Control-Allow-Origin": "http://localhost:3000/",
    //             "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
    //         },
    //         redirect: 'follow'
    //     };
    //
    //     fetch("https://d5ggcgl4u4.execute-api.us-east-1.amazonaws.com/test/textract/analyzeReceipt", requestOptions)
    //         .then(response => response.json())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    //
    //     console.log("Scanned file");
    // }


    const handleClick = () => {
        // document.getElementById("imageFile").click();

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://d5ggcgl4u4.execute-api.us-east-1.amazonaws.com/test/textract", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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
                    // onChange={(event) => {
                    //     uploadFile(event.target.files[0]);
                    // }}
                    hidden
                />
            </div>
    );
}

export default HandleUpload;
