import React from "react";
import Navbar from "../navbar/Navbar";

function Layout(props){

    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default Layout;