
import './App.css';
import { RegDesc, RegInput, RegWrapper, UiWindow, UiWrapper, SettingsWrapper, Labels } from './Components/Components.elements';

function OpChange(){
  return(
    <Labels>
    <input type="checkbox"  defaultChecked />
    <input type="checkbox"/>
    <Labels/>
    )
  }





function App() {
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
