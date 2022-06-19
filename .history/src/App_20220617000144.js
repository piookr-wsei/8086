import logo from './logo.svg';
import './App.css';
import { RegInput, RegWrapper, UiWindow, UiWrapper } from './Components/Components.elements';

function App() {
  return (
    <div className="App">
      <UiWindow>
        <UiWrapper>
          <RegWrapper>
            <RegInput></RegInput>
          </RegWrapper>
          
        </UiWrapper>
      </UiWindow>
      
    </div>
  );
}

export default App;
