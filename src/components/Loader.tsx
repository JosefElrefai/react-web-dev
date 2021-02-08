/**@jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate = keyframes`
100%{
    transform: rotate(-360deg);
}
`;

const Loader = styled.div`
position: relative;
top: 1rem;
width: 15rem;
height: 15rem;
background: #181818;
margin: 0 auto;
box-shadow: 0px 4px 12px #000;
overflow: hidden;

&::before{
    content: "";
    background-image: conic-gradient(
        #01b4e4 20deg,
        transparent 120deg
        );
        width: 150%;
        height: 150%;
        position: absolute;
        top: -25%;
        left: -25%;
        animation: ${rotate} 2s infinite linear;
    }
    
    &::after{
        content: "BALLOONS";
        height: 96%;
        width: 96%;
        border-radius: 5px;
        background: #181818;
        color: #01b4e4;
        position: absolute;
        top: 2%;
        left: 2%;
        display: grid;
        place-items: center;
        font-size: 1.8rem;
        letter-spacing: 5px;
        font-weight: 300;
    }
    `;

export default Loader;