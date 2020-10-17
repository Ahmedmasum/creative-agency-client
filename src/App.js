import React, { createContext } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import { useState } from "react";
import CustomerOrderPage from "./Components/CustomerOrder/CustomerOrder/CustomerOrderPage";
import OrderForm from "./Components/CustomerOrder/CustomerOrder/OrderForm";
import ServiceList from "./Components/CustomerOrder/CustomerOrder/ServiceList";
import Review from "./Components/CustomerOrder/CustomerOrder/Review";
import PrivateRoute from "./Components/Login/Login/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/place-order">
            <CustomerOrderPage></CustomerOrderPage>
          </PrivateRoute>
          <Route path="/order-form">
            <OrderForm></OrderForm>
          </Route>
          <Route path="/service-list">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
