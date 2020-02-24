import styled from "styled-components";

const darkGray = "#596066";
const lightGray = "#dbdbdb";
const darkRed = "#ba0000";
const white = "#f5f5f5";

export const HeaderBar = styled.article`
border-bottom: 5px solid ${darkRed};
background-color: ${darkGray};
color: ${white};
text-align: center;
`

export const SearchBar = styled.article`
background-color: ${lightGray};
height: 80px;
input {
    width: 250px
}
`
export const EmployeeBar = styled.article`
border-bottom: 2px solid ${lightGray};
border-top: 2px solid ${lightGray};
margin-top: 5px;
`
export const EmployeeCardBar = styled.article`
.card-body {
    padding: 20px 0 0 40px;
}
.no-gutters {
    width: 40rem;
}
#ec {
    margin-top: 1rem;
}
li {
    list-style: none;  
}
`

