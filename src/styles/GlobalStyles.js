import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --blue: #0079FF;
        --green: #00DFA2;
        --blue-light: #5BBCFF;
        
        /* Gray Scale */
        --white: #fafafa;
        --gray-200: #65656B;
        --gray-300: #2D2F30;
        --gray-400: #1A1B1B;
        --gray-500: #101011;
        --black: #121212;
        --yellow: #E2B000;

        --success: #22C55E;
        --danger: #EF4444;
        --import: #6366F1;
        --export: #A855F7
    }

    html {
        scroll-behavior: smooth;
    }

    img {
        user-select: none;
    }

    body {
        color: var(--white);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    // Estilo de la barra de desplazamiento para Chrome
    ::-webkit-scrollbar {
        width: 10px; /* Ancho de la barra de desplazamiento */
        height: 100%;
    }

    /* Estilo del botón de flecha (flecha de desplazamiento) en Chrome */
    ::-webkit-scrollbar-button {
        display: none;
    }

    /* Estilo de la pista (fondo) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-track {
        background-color: transparent; /* Color de fondo de la pista */
    }

    /* Estilo del pulgar (el indicador que se arrastra) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-thumb {
        background-color: var(--gray-300); /* Color del pulgar */
        height: 20px;
        border-radius: 20px;
        transition: all .3s ease-in-out;
        cursor: pointer;
    }

    /* Estilo del pulgar cuando se pasa el mouse por encima en Chrome */
    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--gray-200); /* Color del pulgar al pasar el mouse por encima */
        
    }

    .no-scroll {
        overflow: hidden;
    }

    .container {
        width: 100%;
    }

    .wrapper {
        width: 100%;
        display: flex;
        padding-bottom: 140px;

        @media (min-width: 300px) {
            padding: 30px 15px 140px 15px;
        }

        @media (min-width: 400px) {
            padding: 30px 20px 140px 20px;
        }
    }

    .MuiPaper-root {
        & > div {
            background-color: var(--gray-300);

            .MuiButtonBase-root {
                color: var(--white);
            }

            .Mui-selected {
                
                td {
                    background-color: var(--green-opacity);
                    color: var(--green) !important;
                }
            }
        }   
        & th, td {
            background-color: transparent;
            color: var(--white) !important;
            padding: 10px 15px;
            height: auto;
            border-color: var(--gray-200);
        }
    }

    .p-dropdown-panel {
        background-color: var(--gray-300);
        border-radius: 10px;

        & .p-dropdown-items-wrapper .p-dropdown-items {
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
    }


    .p-datepicker {
        background-color: var(--gray-300);
        padding: 10px;
        position: absolute;
        z-index: 1001;
        transform-origin: center bottom;
        border: 0 none;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        .p-datepicker-group-container {

        .p-datepicker-group {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .p-datepicker-header {
                padding: 0.5rem;
                color: #4b5563;
                font-weight: 600;
                margin: 0;
                border-bottom: 1px solid var(--gray-200);
                border-top-right-radius: 6px;
                border-top-left-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .p-datepicker-prev, .p-datepicker .p-datepicker-header .p-datepicker-next {
                    width: 2rem;
                    height: 2rem;
                    color: var(--gray-200);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                }

                .p-datepicker-prev, .p-datepicker-next {
                    cursor: pointer;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    position: relative;
                }

                .p-datepicker-title {
                    margin: 0 auto;
                    .p-datepicker-year, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
                        color: var(--white);
                        transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                        font-weight: 600;
                        padding: 0.5rem;
                    }
                    .p-datepicker-month {
                        color: var(--gray-200);
                        transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                        font-weight: 600;
                        padding: 0.5rem;
                        text-transform: uppercase;
                    }
                }

                .p-datepicker-next {
                    width: 2rem;
                    height: 2rem;
                    color: var(--gray-200);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                }

                .p-datepicker-decade {
                    span {
                        color: var(--gray-200);
                    }
                }
            }

            .p-datepicker-calendar-container {
                table {
                    width: 100%;
                    border-collapse: collapse;

                    th {
                        padding: .5rem;

                        span {
                            font-weight: 600;
                            color: var(--green);
                        }
                    }

                    td {
                        padding: 0.5rem;
                    }

                    .p-datepicker-other-month {
                        color: var(--gray-200);
                        span {
                            font-weight: 200;
                        }
                        
                    }
                }
            }
        }
    }
        .p-monthpicker {
            margin: 0.5rem 0;
            .p-monthpicker-month {
                padding: 0.5rem;
                transition: box-shadow 0.2s;
                border-radius: 6px;
            }
        }

        .p-yearpicker {
            margin: 0.5rem 0;
            .p-yearpicker-year {
                padding: 0.5rem;
                transition: box-shadow 0.2s;
                border-radius: 6px;
            }
        }
    }
`