import React from "react";
import tinycolor from "tinycolor2";

export default class ColorChecker extends React.Component {

    /*
    constructor(props) {
      super(props);
    }
    */
   
    render() {

        let isValid = true;

        this.props.comparisons.forEach(comparison => {
            let color1 = this.props.colors.find(c => c.name === comparison.color1).value;
            let color2 = this.props.colors.find(c => c.name === comparison.color2).value;
            comparison.isReadable =  tinycolor.isReadable(color1, color2, {});

            if (!comparison.isReadable) isValid = false;
        });

      return (
        <div>
          <h2>Colors:</h2>
          <ol>
          {this.props.colors.map((item, index) => (
            <li key={ index }>
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
          {this.props.comparisons.map((item, index) => (
            <li key={ index }>
              <label>
                <span>{item.color1} and </span>
                <span>{item.color2}: </span>
                <span className={ item.isReadable ? "success" : "error" }>{ item.isReadable.toString() }</span>
              </label>
            </li>
          ))}
          </ol>

          <h2>All Are Valid</h2>
          { isValid && <span className="success">Yes</span> }
          { !isValid && <span className="error">No</span> }
        </div>
      )
    }
  }
  