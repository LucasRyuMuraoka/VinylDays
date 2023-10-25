import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --circle-dark-text-color: rgb(82, 70, 222, 0.1);
        --circle-text-color: rgb(82, 70, 222, 0.2); 

        --button-background: #410179;

        --text-body: #FFFFFF;
        --shape: #0B0C16;
        --shape-footer: #222222;

        --text-footer: #8D8D8D;

        --infos-background-plus-opacity: rgb(0, 0, 0, 0.85);
        --heart-background: #434343;
    
        --category-background: #676767;
        --selected-category-background: rgba(111, 108, 242, 0.60);

        --footer-background: #222222;

        --elipse-blue: #605fd3;
    }


    * {
        box-sizing: border-box;

        padding: 0;
        margin: 0;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;    
    }

    // font-size: 16px (Desktop)
    html {
        scroll-behavior: smooth;
        
        @media only screen and (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media only screen and (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background-color: var(--shape);
        color: var(--text-body);
        -webkit-font-smoothing: antialiased;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;

        overflow-x: hidden;
    }

    body, input, textarea, button {
        font-family: "Inter", Arial, Helvetica, sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--text-body);

        &:hover {
            filter: brightness(0.7);
            text-decoration: underline;
        }
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export { GlobalStyle };