import "./App.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuBar from "./Components/Shared/MenuBar/MenuBar";
import Home from "./Components/Home/Home/Home";
import About from "./Components/About/About/About";
import Bookings from "./Components/Book/Bookings/Bookings";
import DhakaToKalkata from "./Components/Book/Bookings/DhakaToKalkata";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Shared/Footer/Footer";
import NoMatch from "./Components/Shared/NoMatch/NoMatch";
import ScrollToTop from "./Components/Shared/ScrollToTop/ScrollToTop";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddTickets from "./Components/Dashboard/AddTickets/AddTickets";
import PrivateRoute from "./Components/Shared/Login/PrivateRoute/PrivateRoute";
import Login from "./Components/Shared/Login/Login/Login";

export const UserContext = createContext();
export const statusContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [status, setStatus] = useState("");
  return (
    <div style={{ overflow: "hidden" }}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <statusContext.Provider value={[status, setStatus]}>
          <Router>
            <MenuBar />
            <ScrollToTop />
            <Switch>
              <Route path="/home">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <PrivateRoute path="/bookings">
                <Bookings />
              </PrivateRoute>

              <Route path="/dhakatokalkata">
                <DhakaToKalkata />
              </Route>

              <Route path="/blogs">
                <Blogs />
              </Route>

              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>

              <Route path="/login">
                <Login />
              </Route>

              
              <Route path="/addtickets">
                <AddTickets />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </statusContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
