import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import WithSubnavigation from "../Components/Navbar";
import SocialButton from "../Components/Footer";
import NavLink from "../Components/Navbar";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/WithSubnavigation">
                <WithSubnavigation/>
            </ComponentPreview>
            <ComponentPreview path="/SocialButton">
                <SocialButton/>
            </ComponentPreview>
            <ComponentPreview path="/NavLink">
                <NavLink/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews