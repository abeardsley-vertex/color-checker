import React from "react";
import ColorChecker from "../../color-checker";
import tinycolor from "tinycolor2";

export default class ColorCheckerComponent extends React.Component {

    
    constructor(props) {
      super(props);
    }
    

    render() {

        let myColorChecker = new ColorChecker(this.props.colors, this.props.comparisons);
        myColorChecker.check();

      return (
        <div>
          <h2>Colors:</h2>
          <ol>
          {myColorChecker.colors.map((item, index) => (
            <li key={ index }>
              <label>
                <span className="colorbox" style={ { backgroundColor: item.value } }></span>
                <span>{item.name}:</span>
                <span>{item.value }</span>
              </label>
            </li>
          ))}
          </ol>
          
          <h2>Comparisons:</h2>
          <ol>
          {myColorChecker.comparisons.map((item, index) => (
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
          { myColorChecker.isValid && <span className="success">Yes</span> }
          { !myColorChecker.isValid && <span className="error">No</span> }
        </div>
      )
    }
  }
  