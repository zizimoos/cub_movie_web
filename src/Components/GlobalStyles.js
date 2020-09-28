import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
a{
    text-decoration: none;
    color: inherit;
}
*{
    box-sizing: border-box;
}
body{
    font-family:Arial, Helvetica, sans-serif;
    font-size: 14px;
    background-color: rgba(20,20,20,1);
    color:whitesmoke;
    padding-top: 80px
}
`;

export default GlobalStyles;
