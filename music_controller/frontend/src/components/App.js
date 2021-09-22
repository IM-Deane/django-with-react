import React from "react";
import { render } from "react-dom";

function App(props) {
	return <h1>Testing React Component</h1>;
}

export default App;

render(<App />, document.getElementById("app"));
