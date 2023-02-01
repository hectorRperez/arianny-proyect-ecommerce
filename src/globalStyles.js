import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body{
        margin: 0;
        padding: 0;
        background-color: var(--main-bg);
        font-family: var(--body-font-gilroy-regular);
        scroll-behavior: smooth;
    }
    a{
        font-size: 16;
        color: var(--white);
        text-decoration: none;
        font-family: var(--body-font-barlow);
    }

    p{
      margin: 0;
    }

    .containerElement{
        width: 90%;
        margin: 15px auto;
    }

    ul{
      margin: 0;
      padding: 0;
    }

    li{
      list-style-type: none;
    }
`

export default GlobalStyle;