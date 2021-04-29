import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: #260022;
    color: #fff;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  img {
    width: 100%;
    display: inline-block;
  }
  
  .button {
    text-align: center;
    line-height: 55px;
    box-shadow: none;
    border: 1px solid #111;
    background: #030105;
    color: #fff;
    width: 100%;
    display: block;
    height: 55px;
    font-size: 18px;
    font-weight: 300;
    transition: 0.2s background;
  }
  
  .button:hover {
    background: #e4038a;
  }
  
  a {
    color: #ffdc72;
  }
  
  @media (max-width: 768px) {
    .button {
      font-size: 16px;
    }
  }
`

export default GlobalStyles;