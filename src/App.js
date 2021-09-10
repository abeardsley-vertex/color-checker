import logo from './logo.svg';
import './App.css';
import ColorChecker from './components/color-checker';

function App() {

  let colors = [
    { name: 'background', value: '#fff' },
    { name: 'text', value: '#000' },
    { name: 'button-text', value: '#040' },
    { name: 'button-background', value: 'lightblue' }
  ];

  let comparisons = [
    { color1: 'background', color2: 'text', isValid: false},
    { color1: 'background', color2: 'button-text', isValid: false},
    { color1: 'background', color2: 'button-background', isValid: false}
  ];

  return (
    <div id="app" className="App">
      <ColorChecker colors={colors} comparisons={comparisons} />
    </div>
  );
}

export default App;
