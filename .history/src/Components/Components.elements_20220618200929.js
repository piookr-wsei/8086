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
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const RegWrapper = styled.div`
    width: 180px;
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
    text-align: center;
`

export const SettingsWrapper = styled.div`
    width: 180px;
    background: rgba(0,0,0,0.1);
    position: relative;
    right: 0;
    display: grid;
    grid-template-columns: 50px 50px 50px;
    border: solid 1px black;
    font-size: 15px;
    line-height: 22px;

`

export const RegDescSC = styled.div`
    height: 27px;
    width: 47px;
    background: black;
    margin-bottom:5px;
    color: white;
    font-weight: 600;
`

export const DescText = styled.p`
    font-size: 10px;
    text-align: center;
    position: relative;
    top: -3px;
`

export function RegDesc(props){
    return(
        <RegDescSC>
            <DescText>{props.textContent}</DescText>
        </RegDescSC>
    )
}

export const Labels = styled.div`
    display: grid;
    grid-template-columns: 80px 60px 60px;
`

export const CheckWrapper = styled.div`
    background: rgba(0,0,0,0.05);
    width: 65px;
    height: 25px;
`

export const OpBox = styled.input`
    vertical-align: "middle"; 
    position: relative; 
    top:-2px;
`