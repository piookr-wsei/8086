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
      setCheckedBoxes([false,false,false,false,false,false,false,false])
    }
    else if(name=="xchg"){
      setXchgChecked(!xchgChecked)
      setMovChecked(false)
      setCheckLimit(0)
      setCheckedBoxes([false,false,false,false,false,false,false,false])
    }
    else{
      let tempArray = checkedBoxes
      if(tempArray[name]==true)
      {
        tempArray[name]=!tempArray[name]
        setCheckCurrent((checkCurrent => {return(checkCurrent - 1)}))
      }
      if(tempArray[name]==false && checkCurrent<checkLimit)
      {
        tempArray[name]=!tempArray[name]
        setCheckCurrent((checkCurrent => {return(checkCurrent + 1)}))
      }
      else{
        return
      }
      
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
                  AH<OpBox type="checkbox" checked={checkedBoxes[0]}/>
                </CheckWrapper>
                <CheckWrapper>
                  BH<OpBox type="checkbox" checked={checkedBoxes[1]}/>
                </CheckWrapper>
                <CheckWrapper>
                  CH<OpBox type="checkbox" checked={checkedBoxes[2]}/>
                </CheckWrapper>
                <CheckWrapper>
                  DH<OpBox type="checkbox" checked={checkedBoxes[3]}/>
                </CheckWrapper>
                <CheckWrapper>
                  AL<OpBox type="checkbox" checked={checkedBoxes[4]}/>
                </CheckWrapper>
                <CheckWrapper>
                  BL<OpBox type="checkbox" checked={checkedBoxes[5]}/>
                </CheckWrapper>
                <CheckWrapper>
                  CL<OpBox type="checkbox" checked={checkedBoxes[6]}/>
                </CheckWrapper>
                <CheckWrapper>
                  DL<OpBox type="checkbox" checked={checkedBoxes[7]}/>
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
