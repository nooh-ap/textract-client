import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Outlet} from "react-router-dom";
import {Flex, Heading} from "@chakra-ui/react";

const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight
};

function App() {

    return (
        <>
            <Navbar isCurrentUser={false}/>
            <Flex minH={`${windowSize.width >= 768 ? 85 : 75}vh`} direction="column" mx={4} align="stretch"
                  justify="start">
                <Outlet/>
            </Flex>

            <Footer/>
        </>
    );
}

export default App;

