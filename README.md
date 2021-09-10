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
  ...
  ...
  if (myColorChecker.isValid) { /*do something*/ };
  ```

  # Use the Component in JSX
  ```html
  <ColorChecker colors={colors} comparisons={comparisons} />
  ```

  # Result
  <img src="public/screenshot.png" />