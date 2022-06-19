import logo from './logo.svg';
import './App.css';
import { RegDesc, RegInput, RegWrapper, UiWindow, UiWrapper } from './Components/Components.elements';

function App() {
  return (
    <div className="App">
      <UiWindow>
        <UiWrapper>
          <RegWrapper>
            <RegDesc />  <RegDesc/>  <RegDesc/>

            <RegDesc/>  <RegInput maxLength={2}/> <RegInput maxLength={2}/>
            <RegDesc/>  <RegInput maxLength={2}/> <RegInput maxLength={2}/>
            <RegDesc/>  <RegInput maxLength={2}/> <RegInput maxLength={2}/>
            <RegDesc/>  <RegInput maxLength={2}/> <RegInput maxLength={2}/>
          </RegWrapper>
          
        </UiWrapper>
      </UiWindow>
      
    </div>
  );
}

export default App;
