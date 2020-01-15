const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, `Pet Name: ${props.name}`),
    React.createElement("h2", {}, `Type: ${props.type}`),
    React.createElement("h2", {}, `Breed: ${props.breed}`)
  ]);
};

class App extends React.Component {
  handeTitleClick() {
    alert("You'll need to insert a <Link> here");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handeTitleClick }, "Adopt me!"),
      React.createElement(Pet, {
        name: "Roger",
        type: "dog",
        breed: "labrador"
      }),
      React.createElement(Pet, {
        name: "Roger",
        type: "dog",
        breed: "labrador"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
