import React from "react";
import { Route, Switch } from "react-router-dom";
import AddItem from "../routes/AddItem";
import UpdateItem from "../routes/UpdateItem";
import Search from "../routes/Search";
import Landing from "../routes/Landing";
import "../styles/general.css";

const Routes = () => {
  return (
    <div className="main-section">
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/add" exact component={AddItem} />
        <Route path="/:id/update" exact component={UpdateItem} />
        <Route path="/landing" exact component={Landing} />
      </Switch>
    </div>
  );
};

export default Routes;
