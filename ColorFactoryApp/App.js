import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import NewColorForm from "./NewColorForm";

function App() {
  const [colors, setColors] = useState([{ name: "red", value: "#FF0000" }, { name: "green", value: "#00FF00" }]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route path="/colors/new">
          <NewColorForm addColor={addColor} />
        </Route>
        <Route path="/colors/:color">
          <ColorDetails colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </Router>
  );
}

export default App;
