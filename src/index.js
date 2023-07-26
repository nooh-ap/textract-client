import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {ChakraProvider} from "@chakra-ui/react";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Dashboard} from "./Pages/Dashboard";
import {MainPage} from "./Pages/MainPage";
import SignupCard from "./Pages/SignUp"
import UploadPage from "./Pages/UploadDocument/UploadPage";
import {UploadPageLoader} from "./Pages/UploadDocument/UploadPageLoader";
import {Provider} from "react-redux";
import {store} from "./Services/store";
import SignIn from "./Pages/SignIn";

// TODO: Add Error Pages

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <MainPage/>,
            },
            {
                path: "uploadpage",
                element: <UploadPage/>,
            },
            {
                path: "dashboard",
                element: <Dashboard/>,
                errorElement: <div>404</div>
            }, {
                path: "loader",
                element: <UploadPageLoader/>,
            }, {
                path: "sign-up",
                element: <SignupCard/>,
            },{
                path: "sign-in",
                element: <SignIn/>,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ChakraProvider>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <RouterProvider router={router}/>
            </DevSupport>
        </ChakraProvider>
    </ Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
