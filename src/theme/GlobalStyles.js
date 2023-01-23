import { createGlobalStyle } from 'styled-components';
import lightBG from '../assets/bg-desktop-light.jpg';
import darkBG from '../assets/bg-desktop-dark.jpg';

export const GlobalStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    ul {
        list-style: none;
    }

    li {
        list-style: none;
    }
    
    button {
        background: none;
        border: none;
        /* outline: none; */
        cursor: pointer;
    }

    /* Set core body defaults */
    body {
        /* display: grid;
        grid-template-rows: 20rem 1fr; */
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.125rem;
        background-color: ${(props) =>
            props.themeMode === 'dark'
                ? props.theme.bodybg
                : props.theme.bodybg};

        background-image: url(${(props) =>
            props.themeMode === 'dark' ? darkBG : lightBG});
            
        background-repeat: no-repeat;
        background-size: 100% 20rem;
        @media (min-width: 40.625em) {
            background-size: 100% 25rem;
        }
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }


    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    .nice {
        background-color: black
    }

    .filter-btns {
        display: flex;
        gap: 0.8rem;
        font-weight: bold;
        flex: 1;
        justify-content: center;
        background-color: background-color: ${({ theme }) => theme.todobgColor};
    }
    
    .filter-btns button {
        transition: all 300ms;
    }

    .filter-btns button.active {
        color: hsl(220, 98%, 61%);
        font-weight: bold;
        transition: all 300ms;
    }

    .filter-btns button:not(.active) {
        color: ${({ theme }) => theme.filterColor};
    }

    .filter-btns button:not(.active):hover,
    .filter-btns button:not(.active):active {
        color: hsl(233, 14%, 35%);
    }
`;
