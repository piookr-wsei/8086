import React from 'react';
import { useState } from 'react';
import './App.css';
import { RegDesc, RegInput, RegWrapper, UiWindow, UiWrapper, SettingsWrapper, Labels, CheckWrapper, OpBox, LineWrap, NumDesc, RegChWrapper, Run } from './Components/Components.elements';


function App() {

  const xchg="xchg";
  const mov="mov"

  const [movChecked, setMovChecked] = useState(false);

  const [xchgChecked, setXchgChecked] = useState(false);

  const [opChosen,setOpChosen] = useState(null)

  function HandleCheck(name){
    if(name=="mov"){
      setMovChecked(!movChecked)
      setXchgChecked(false)
      setCheckLimit(1)
    }
    else if(name=="xchg"){
      setXchgChecked(!xchgChecked)
      setMovChecked(false)
      setCheckLimit(0)
    }
    setOpChosen(name)
  }

  const [checkLimit, setCheckLimit] = useState(0);
  const [checkCurrent, setCheckCurrent] = useState(0);
  const [checkedBoxes, setCheckedBoxes] = useState([false,false,false,false,false,false,false,false])



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






  return (
    <div className="App">
      <UiWindow>
        <UiWrapper>
          <RegWrapper>
            <RegDesc textContent={"REG"}/>  <RegDesc textContent={"H"}/>  <RegDesc textContent={"L"}/>

            <RegDesc textContent={"A"}/>  <RegInput  readOnly value={"0x255"}/> <RegInput  readOnly/>
            <RegDesc textContent={"B"}/>  <RegInput  readOnly/> <RegInput  readOnly/>
            <RegDesc textContent={"C"} />  <RegInput  readOnly/> <RegInput  readOnly/>
            <RegDesc textContent={"D"}/>  <RegInput  readOnly/> <RegInput  readOnly/>
          </RegWrapper>
          
          <SettingsWrapper>
            
              <OpChange/>
              
              <RegChWrapper>
                <CheckWrapper>
                  AH<OpBox type="checkbox"/>
                </CheckWrapper>
                <CheckWrapper>
                  BH<OpBox type="checkbox"/>
                </CheckWrapper>
                <CheckWrapper>
                  CH<OpBox type="checkbox"/>
                </CheckWrapper>
                <CheckWrapper>
                  DH<OpBox type="checkbox"/>
                </CheckWrapper>
                <CheckWrapper>
                  AL<OpBox type="checkbox"/>
                </CheckWrapper>
                <CheckWrapper>
                  BL<OpBox type="checkbox"/>
                </CheckWrapper>
                <CheckWrapper>
                  CL<OpBox type="checkbox"/>
                </CheckWrapper>
                <CheckWrapper>
                  DL<OpBox type="checkbox"/>
                </CheckWrapper>
              </RegChWrapper>

              <LineWrap>
              <NumDesc textContent={"Value in decimal"}/>  <RegInput maxLength={3} style={{width:"40px"}}/>
              </LineWrap>
              <Run>RUN</Run>
          </SettingsWrapper>
          
          

        </UiWrapper>
      </UiWindow>
      
    </div>
  );
}

export default App;
