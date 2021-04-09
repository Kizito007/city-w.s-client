import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./components/layout/Header.jsx"
import Footer from "./components/layout/Footer.jsx"
import Login from "./components/Auth/Login.jsx"
import Register from "./components/Auth/Register.jsx"
import Home from "./components/pages/Home"
import UserContext from "./components/context/UserContext"

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "" ;
      } 

      const tokenRes = await Axios.post(
        "http://localhost:3003/v1/users/tokenIsValid", null,
        {
          headers: { "x-auth-token": token }
        }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(`http://localhost:3003/v1/users`, {
          headers: { "x-auth-token": token }
        })
        setUserData({
          token,
          user: userRes.data
        })
      }
    }
    checkLoggedIn();
  }, [])

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <div style={{ background: "#626465", color: "#d5e1ec" }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
