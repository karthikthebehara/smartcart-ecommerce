import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import ContextConnector from "./config/connector";

// SmartCart: Components
import Navbar from "./components/Navbar";

// SmartCart: Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import AdminOrders from "./pages/AdminOrders";

function App() {
  return (
    <ContextConnector>
      <Router>
        {/* SmartCart: Fixed navbar sits outside the route wrapper */}
        <Navbar />
        {/* SmartCart: Route wrapper adds top padding to clear the fixed navbar */}
        <div id="sc-route-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/admin/orders" component={AdminOrders} />
          </Switch>
        </div>
      </Router>
    </ContextConnector>
  );
}

export default App;
