import styled from 'styled-components';

export const Button = styled.button`
width: 100px;
padding: 10px;
margin: 0px 10px;
font-size: 15px;
font-weight: bold;
color: #000000;
text-transform: capitalize;
border: 1px solid #bfbfbf;
border-radius: 4px;

&:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #696969;
    box-shadow: 0px 0px 7px 0px #696969;
}
`;