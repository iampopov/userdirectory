import React from "react";

import { HeaderBar } from "../styles"

const NavBar = props => {
    return (
        <HeaderBar>
        <h1>Employee Directory</h1>
        <p>Start typing firs or last name in the search box or scroll down to see all employees</p>
        </HeaderBar>
    )
};

export default NavBar;