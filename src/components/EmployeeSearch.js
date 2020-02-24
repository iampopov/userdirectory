import React from "react";
import { Input } from "reactstrap"

import { SearchBar } from "../styles"

const EmployeeSearch = props => {
    return (

        <SearchBar>
            <Input
             type="text"
             name="searchTerm"
             id="searchTerm"
             placeholder="Search employee..."
             onChange={props.handleInputChange}
             value={props.searchTerm}
             />
        </SearchBar>
    )
};

export default EmployeeSearch;