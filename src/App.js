//import logo from './logo.svg';
import './App.css';
import ColorCheckerComponent from './components/color-checker';
import ColorChecker from './color-checker';
function App() {

  let colors = [
    { name: 'background', value: '#fff' },
    { name: 'text', value: '#000' },
    { name: 'button-text', value: '#040' },
    { name: 'Button Background', value: 'darkblue' }
  ];

  let comparisons = [
    { color1: 'background', color2: 'text' },
    { color1: 'background', color2: 'button-text' },
    { color1: 'background', color2: 'Button Background' }
  ];

  let myColorChecker = new ColorChecker(colors, comparisons);
  myColorChecker.check();

  //get a list of failed comparisons
  const failedComparisons = myColorChecker.comparisons.filter(c => !c.isReadable).map((comparison, index) =>
    <li key={index}>{comparison.color1} and { comparison.color2 } are not readable!</li>
  );
  

  return (
    <div id="app" className="App">
      <h1>Component</h1>
      <ColorCheckerComponent colors={colors} comparisons={comparisons} />

      <h1>Code</h1>
      { myColorChecker.isValid && <span className="success">Yes</span> }
      {
        failedComparisons.length > 0 &&
        <div>
          <div className="error">Found Comparison errors!</div>
          <ul>
            {
              failedComparisons
            }            
          </ul>

        </div>
      }
    </div>
  );
}

export default App;
