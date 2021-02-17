import React from "react";
import { Button } from "devextreme-react/button";

class ButtonsExample extends React.Component {
  render() {
    return (
      <div className="buttons-demo">
        <div className="buttons">
          <div className="buttons-column">
            <div className="column-header">Normal</div>
            <div>
              <Button
                width={120}
                text="Text"
                type="success"
                stylingMode="contained"
              />
            </div>

            <div>
              <Button
                width={120}
                text="Text"
                type="default"
                stylingMode="contained"
              />
            </div>
            <div>
              <Button
                width={120}
                text="Text"
                type="danger"
                stylingMode="contained"
              />
            </div>
            <div>
              <Button
                width={120}
                text="Text"
                type="back"
                stylingMode="contained"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonsExample;
