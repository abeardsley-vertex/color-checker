# Import the ColorCheckerComponent or the ColorChecker class
```js
import ColorCheckerComponent from './components/color-checker';
import ColorChecker from './color-checker';
```

# Create Arrays to store colors and comparisons
```js
  let colors = [
    { name: 'background', value: '#fff' },
    { name: 'text', value: '#000' },
    { name: 'button-text', value: '#040' },
    { name: 'button-background', value: 'lightgreen' }
  ];

  let comparisons = [
    { color1: 'background', color2: 'text' },
    { color1: 'background', color2: 'button-text' },
    { color1: 'background', color2: 'button-background' }
  ];
  ```

# Use the Class in Code
  ```js
  let myColorChecker = new ColorChecker(colors, comparisons);
  myColorChecker.check();

  //get a list of failed comparisons
  const failedComparisons = myColorChecker.comparisons.filter(c => !c.isReadable).map((comparison, index) =>
    <li key={index}>{comparison.color1} and { comparison.color2 } are not readable!</li>
  );

  if (myColorChecker.isValid) { /*do something*/ };
  ```
  # Display Custom Errors in JSX
  ```jsx
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
```

  # Use the Component in JSX
  ```html
  <ColorChecker colors={colors} comparisons={comparisons} />
  ```

  # Component Display
  <img src="public/screenshot.png" />