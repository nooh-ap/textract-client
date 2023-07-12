import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {Outlet} from "react-router-dom";
import {Flex} from "@chakra-ui/react";


function App() {
    return (
        <>
            <Navbar isCurrentUser={false}/>
            <Flex direction="column" mx={4} align="stretch" justify="center">
                <Outlet/>
            </Flex>
            <Footer/>
        </>
    );
}

export default App;

