import logo from './logo.svg';
import './App.css';
import { RegDesc, RegInput, RegWrapper, UiWindow, UiWrapper } from './Components/Components.elements';

function App() {
  return (
    <div className="App">
      <UiWindow>
        <UiWrapper>
          <RegWrapper>
            <RegDesc max-length={2}/>  <RegDesc/>  <RegDesc/>

            <RegDesc/>  <RegInput/> <RegInput/>
            <RegDesc/>  <RegInput/> <RegInput/>
            <RegDesc/>  <RegInput/> <RegInput/>
            <RegDesc/>  <RegInput/> <RegInput/>
          </RegWrapper>
          
        </UiWrapper>
      </UiWindow>
      
    </div>
  );
}

export default App;
