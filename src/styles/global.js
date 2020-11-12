import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background: #000;
         color: #F9F909;  
        }
    

    body, input, button{
        font-size: 16px;
        font-family: 'Poller One', cursive;

    } 

    button{
        cursor: pointer;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }   

`