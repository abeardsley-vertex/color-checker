import React from "react";
import tinycolor from "tinycolor2";

export default class TodoApp extends React.Component {

    constructor(props) {
      super(props);
      
      this.state = {
        colors: [
            { name: 'background', value: '#fff' },
            { name: 'text', value: '#000' },
            { name: 'button-text', value: '#040' },
            { name: 'button-background', value: '#2c7' },
        ],
        comparisons: [
            { color1: 'background', color2: 'text', isValid: false},
            { color1: 'background', color2: 'button-text', isValid: false},
            { color1: 'background', color2: 'button-background', isValid: false}
        ]
      };
      
    }
    
    render() {

        this.state.comparisons.forEach(comparison => {
            let color1 = this.state.colors.find(c => c.name == comparison.color1).value;
            let color2 = this.state.colors.find(c => c.name == comparison.color2).value;
            comparison.isReadable =  tinycolor.isReadable(color1, color2, {});
        });

      return (
        <div>
          <h2>Colors:</h2>
          <ol>
          {this.state.colors.map(item => (
            <li key={item.id}>
              <label>
                <span style={ { display: 'inline-block', width: '20px', height: '20px', border: 'solid 1px #777', backgroundColor: item.value } }></span>
                <span>{item.name}:</span>
                <span>{item.value }</span>
              </label>
            </li>
          ))}
          </ol>
          
          <h2>Comparisons:</h2>
          <ol>
          {this.state.comparisons.map(item => (
            <li key={item.id}>
              <label>
                <span>{item.color1}: </span>
                <span>{item.color2} </span>
                <span className={ item.isReadable ? "success" : "error" }>{ item.isReadable.toString() }</span>
              </label>
            </li>
          ))}
          </ol>
        </div>
      )
    }
  }
  