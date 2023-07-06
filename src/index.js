import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {ChakraProvider} from "@chakra-ui/react";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Dashboard} from "./Pages/Dashboard/Dashboard";
import UploadPage from "./Pages/UploadDocument/UploadPage";


// TODO: Add Error Pages

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "dashboard",
                element: <Dashboard/>,
            }
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <RouterProvider router={router}/>
        </DevSupport>
    </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
