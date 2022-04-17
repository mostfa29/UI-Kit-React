import logo from './logo.svg';
import './App.css';
import InvertedButton from "./Components/Buttons/InvertedButton/InvertedButton"
import Button from './Components/Buttons/Button/Button';
function App() {
  return (
    <div className="App">
    <InvertedButton name="click me"  click_bg_color='green' onClick={console.log('test')} />
    <Button name="click me"/>
    </div>
  );
}

export default App;
