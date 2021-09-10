//import logo from './logo.svg';
import './App.css';
import ColorCheckerComponent from './components/color-checker';
import ColorChecker from './color-checker';
function App() {

  let colors = [
    { name: 'background', value: '#fff' },
    { name: 'text', value: '#000' },
    { name: 'button-text', value: '#040' },
    { name: 'button-background', value: 'lightblue' }
  ];

  let comparisons = [
    { color1: 'background', color2: 'text' },
    { color1: 'background', color2: 'button-text' },
    { color1: 'background', color2: 'button-background' }
  ];

  let myColorChecker = new ColorChecker(colors, comparisons);
  myColorChecker.check();

  return (
    <div id="app" className="App">
      <h1>Component</h1>
      <ColorCheckerComponent colors={colors} comparisons={comparisons} />

      <h1>Code</h1>
      { myColorChecker.isValid && <span className="success">Yes</span> }
      { !myColorChecker.isValid && <span className="error">No</span> }
    </div>
  );
}

export default App;
