import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Outlet} from "react-router-dom";
import {Button, Flex, Heading} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setData} from "./Services/recieptSlice";

const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight
};

const path = window.location.pathname;
const pageName  = {
    "/dashboard": "Dashboard",
    "/mainpage": "Main Page",
    "/uploadpage": "Upload Page",
}

function App() {

    return (
        <>
            <Navbar isCurrentUser={false} />
                <Heading as="h1" size="xl" textAlign="left" m={4} mb={4}>
                    {pageName[path]}
                </Heading>
            <Flex height={`${windowSize.width >= 768 ? 85: 75}vh`} direction="column" mx={4} align="stretch" justify="start">
                <Outlet/>
            </Flex>

             <Footer />
        </>
    );
}

export default App;

