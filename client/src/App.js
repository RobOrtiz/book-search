import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSearch from "./pages/BookSearch";
import Saved from "./pages/Saved";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Nav from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={BookSearch} />
          <Route exact path="/search" component={BookSearch} />
          <Route exact path="/books/:id" component={Info} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
