
import { useState } from 'react';
import './App.css';
import { RegDesc, RegInput, RegWrapper, UiWindow, UiWrapper, SettingsWrapper, Labels, CheckWrapper, OpBox } from './Components/Components.elements';


function App() {

  const xchg="xchg";
  const mov="mov"

  const {movChecked, setMovChecked} = useState(false);

  const {xchgChecked, setXchgChecked} = useState(false);

  function HandleCheck(name){
    if(name="mov"){
      setMovChecked(!movChecked)
      setXchgChecked(false)
    }
    else{
      setXchgChecked(!xchgChecked)
      setMovChecked(false)
    }
  }

function OpChange(){
  return(
    <>
    <Labels>
      <CheckWrapper>
        MOV
        <OpBox type="checkbox"  defaultChecked value={movChecked} onClick={(mov) => HandleCheck(mov)} />
      </CheckWrapper>
      <CheckWrapper>
        XCHG
        <OpBox type="checkbox" value={xchgChecked} onChange={(xchg) => HandleCheck(mov)}/>
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
