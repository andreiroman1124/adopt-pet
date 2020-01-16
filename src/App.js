import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Roger" type="dog" breed="Labrador" />
        <Pet name="Ben" type="cat" breed="Persian" />
        <Pet name="Pepper" type="bird" breed="Mixed" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
