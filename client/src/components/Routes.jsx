import React from "react";
import { Route, Switch } from "react-router-dom";
import AddItem from "../routes/AddItem";
import UpdateItem from "../routes/UpdateItem";
import Home from "../routes/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/add" exact component={AddItem} />
      <Route path="/:id/update" exact component={UpdateItem} />
    </Switch>
  );
};

export default Routes;
