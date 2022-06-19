import styled from "styled-components";

export const UiWindow = styled.div`
height: 400px;
width: 400px;
background: rgb(233,233,233);
position: relative;
margin: auto;
top: 80px;
`

export const UiWrapper = styled.div`
border: 20px solid transparent;

`

export const RegWrapper = styled.div`

background: rgba(0,0,0,0.1);
position: relative;
left: 0;
display: grid;
grid-template-columns: 50px 50px 50px;

`

export const RegInput = styled.input`
height: 20px;
width: 40px;
margin-bottom:5px;
`

export const RegDesc = styled.div`
height: 27px;
width: 47px;
background: black;
margin-bottom:5px;
`