import React from 'react';
import { useState } from 'react';
import './App.css';
import { RegDesc, RegInput, RegWrapper, UiWindow, UiWrapper, SettingsWrapper, Labels, CheckWrapper, OpBox, LineWrap, NumDesc, RegChWrapper, Run } from './Components/Components.elements';


function App() {

  const xchg="xchg";
  const mov="mov"
  const falseArray = [false,false,false,false,false,false,false,false]
  const [movChecked, setMovChecked] = useState(false);

  const [xchgChecked, setXchgChecked] = useState(false);

  const [opChosen,setOpChosen] = useState(null)

  function HandleCheck(name){
    if(name=="mov"){
      setMovChecked(!movChecked)
      setXchgChecked(false)
      setCheckLimit(1)
      setCheckedBoxes([false,false,false,false,false,false,false,false])
      setCheckCurrent(0)
      if(!movChecked){
        setRowOne(false)
        setRowTwo(true)}
      else{
        setRowOne(true)
        setRowTwo(true)}
    }
    else if(name=="xchg"){
      setXchgChecked(!xchgChecked)
      setMovChecked(false)
      setCheckLimit(2)
      setCheckedBoxes([false,false,false,false,false,false,false,false])
      setCheckCurrent(0)
      if(!xchgChecked){
        setRowOne(false)
        setRowTwo(false)}
      else{
        setRowOne(true)
        setRowTwo(true)}
      
    }
    else{
      let tempArray = checkedBoxes
      if(tempArray[name]==true)
      {
        tempArray[name]=!tempArray[name]
        console.log(tempArray[name])
        setCheckCurrent((checkCurrent => {return(checkCurrent - 1)}))
      }
      else if(tempArray[name]==false && checkCurrent<checkLimit)
      {
        tempArray[name]=!tempArray[name]
        console.log(tempArray[name])
        setCheckCurrent((checkCurrent => {return(checkCurrent + 1)}))
      }
      else{
        return
      }
      setCheckedBoxes(tempArray)
    }

    setOpChosen(name)
  }

  const [checkLimit, setCheckLimit] = useState(0);
  const [checkCurrent, setCheckCurrent] = useState(0);
  const [checkedBoxes, setCheckedBoxes] = useState([false,false,false,false,false,false,false,false])
  const [tempString, setTempString] = useState("")


function OpChange(){
  return(
    <>
    <Labels>
      <CheckWrapper>
        MOV
        <OpBox type="checkbox"  checked={movChecked} onClick={() => HandleCheck(mov)} id="MOV"/>
      </CheckWrapper>
      <CheckWrapper style={{position:"relative", left:"10px"}}>
        XCHG
        <OpBox type="checkbox" checked={xchgChecked} onChange={() => HandleCheck(xchg)} id="XCHG" name="XCHG"/>
      </CheckWrapper>
    </Labels>
    </>
    )
  }

  const [text, setText]=useState({topText:""});

  function handleChange(event){
    const name = event.target.name
    if(event.target.value.length==0){
      setText(oldText => {
        return({
          ...oldText,
          [name]:event.target.value
  
      })}
      )}
    else{
    console.log(event.target.value[event.target.value.length-1])
    event.target.value=event.target.value.toUpperCase()
    setText(oldText => {
      if(event.target.value[event.target.value.length-1].match(/^(1|2|3|4|5|6|7|8|9|A|B|C|D|E|F)$/)){
      return({
        ...oldText,
        [name]:event.target.value

    })}
    else{return oldText}
  })}
}



function Compile(){
  let first="00";
  let second="00"
  let tempArray=regValues
  
  if(movChecked==true && checkCurrent==1 && text.topText!=""){
    
    
    if(checkedBoxes[0]){
      
      if(text.topText.length<=2){tempArray[1]=text.topText; setRegValues(tempArray); console.log(tempArray)}
      else if(text.topText.length<=4){tempArray[1]=text.topText[1]+text.topText[0]; tempArray[0]=text.topText.substring(2); setRegValues(tempArray); setCheckedBoxes([false,false,false,false,false,false,false,false]);}
    }




    else if(checkedBoxes[1]){
      if(text.topText.length<=2){tempArray[3]=text.topText; setRegValues(tempArray)}
      if(text.topText.length<=4){tempArray[3]=text.topText[1]+text.topText[0]; tempArray[2]=text.topText.substring(2); setRegValues(tempArray)}
    }
    else if(checkedBoxes[2]){
      if(text.topText.length<=2){tempArray[5]=text.topText; setRegValues(tempArray)}
      if(text.topText.length<=4){tempArray[5]=text.topText[1]+text.topText[0]; tempArray[4]=text.topText.substring(2); setRegValues(tempArray)}
    }
    else if(checkedBoxes[3]){
      if(text.topText.length<=2){tempArray[7]=text.topText; setRegValues(tempArray)}
      if(text.topText.length<=4){tempArray[7]=text.topText[1]+text.topText[0]; tempArray[6]=text.topText.substring(2); setRegValues(tempArray)}
    }
  }
  else if(xchgChecked==true && checkCurrent==2 && text.topText!=""){

  }
  else
  return
}


const [regValues,setRegValues] = useState(["00","00","00","00","00","00","00","00"])
const [rowOne, setRowOne] = useState(true);
const [rowTwo, setRowTwo] = useState(true);



  return (
    <div className="App">
      <UiWindow>
        <UiWrapper>
          <RegWrapper>
            <RegDesc textContent={"REG"}/>  <RegDesc textContent={"H"}/>  <RegDesc textContent={"L"}/>

            <RegDesc textContent={"A"}/>  <RegInput  readOnly value={regValues[0]}/> <RegInput  readOnly value={regValues[1]}/>
            <RegDesc textContent={"B"}/>  <RegInput  readOnly  value={regValues[2]}/> <RegInput  readOnly  value={regValues[3]}/>
            <RegDesc textContent={"C"} />  <RegInput  readOnly  value={regValues[4]}/> <RegInput  readOnly  value={regValues[5]}/>
            <RegDesc textContent={"D"}/>  <RegInput  readOnly  value={regValues[6]}/> <RegInput  readOnly  value={regValues[7]}/>
          </RegWrapper>
          
          <SettingsWrapper>
            
              <OpChange/>
              <LineWrap>From:</LineWrap>
              <RegChWrapper>
                <CheckWrapper>
                  AX<OpBox type="checkbox" checked={checkedBoxes[0]} onChange={() => HandleCheck(0)} disabled={rowOne}/>
                </CheckWrapper>
                <CheckWrapper>
                  BX<OpBox type="checkbox" checked={checkedBoxes[1]} onChange={() => HandleCheck(1)} disabled={rowOne}/>
                </CheckWrapper>
                <CheckWrapper>
                  CX<OpBox type="checkbox" checked={checkedBoxes[2]} onChange={() => HandleCheck(2)} disabled={rowOne}/>
                </CheckWrapper>
                <CheckWrapper>
                  DX<OpBox type="checkbox" checked={checkedBoxes[3]} onChange={() => HandleCheck(3)} disabled={rowOne}/>
                </CheckWrapper>
              </RegChWrapper>
              <LineWrap>To:</LineWrap>
              <RegChWrapper>
                <CheckWrapper>
                  AX<OpBox type="checkbox" checked={checkedBoxes[4]} onChange={() => HandleCheck(4)} disabled={rowTwo}/>
                </CheckWrapper>
                <CheckWrapper>
                  BX<OpBox type="checkbox" checked={checkedBoxes[5]} onChange={() => HandleCheck(5)} disabled={rowTwo}/>
                </CheckWrapper>
                <CheckWrapper>
                  CX<OpBox type="checkbox" checked={checkedBoxes[6]} onChange={() => HandleCheck(6)} disabled={rowTwo}/>
                </CheckWrapper>
                <CheckWrapper>
                  DX<OpBox type="checkbox" checked={checkedBoxes[7]} onChange={() => HandleCheck(7)} disabled={rowTwo}/>
                </CheckWrapper>
              </RegChWrapper>

              <LineWrap>
              <NumDesc textContent={"Value in hex"}/>  <RegInput type="text" id="field-1" className="field" name="topText" onChange={handleChange}  maxLength={2} style={{width:"40px"}}  value={text.topText}/> 
              
              </LineWrap>
              <Run onClick={Compile}>COMPILE</Run>
              <Run onClick={setCheckedBoxes([false,false,false,false,false,false,false,false])}>RUN</Run>
          </SettingsWrapper>
          
          

        </UiWrapper>
      </UiWindow>
      
    </div>
  );
}

export default App;
