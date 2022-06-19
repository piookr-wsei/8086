import React from 'react';
import { useState } from 'react';
import './App.css';
import { RegDesc, RegInput, RegWrapper, UiWindow, UiWrapper, SettingsWrapper, Labels, CheckWrapper, OpBox } from './Components/Components.elements';


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
    }
    else if(name=="xchg"){
      setXchgChecked(!xchgChecked)
      setMovChecked(false)
      
    }
    setOpChosen(name)
  }

function OpChange(){
  return(
    <>
    <Labels>
      <CheckWrapper>
        MOV
        <OpBox type="checkbox"  checked={movChecked} onClick={() => HandleCheck(mov)} id="MOV"/>
      </CheckWrapper>
      <CheckWrapper>
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

            <RegDesc textContent={"A"}/>  <RegInput maxLength={2}/> <RegInput maxLength={2}/>
            <RegDesc textContent={"B"}/>  <RegInput maxLength={2}/> <RegInput maxLength={2}/>
            <RegDesc textContent={"C"} />  <RegInput maxLength={2}/> <RegInput maxLength={2}/>
            <RegDesc textContent={"D"}/>  <RegInput maxLength={2}/> <RegInput maxLength={2}/>
          </RegWrapper>
          
          <SettingsWrapper>
            <OpChange/>
          </SettingsWrapper>

        </UiWrapper>
      </UiWindow>
      
    </div>
  );
}

export default App;
