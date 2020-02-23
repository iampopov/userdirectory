import React from "react";
import { Input } from "reactstrap"

import { SearchBar } from "../styles"

const EmployeeSearch = props => {
    return (

        <SearchBar>
            <Input type="email" name="email" id="exampleEmail" placeholder="Search employee..." />
        </SearchBar>
    )
};

export default EmployeeSearch;