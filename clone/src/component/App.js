import react, { useEffect } from "react"
import "../css/App.css"
import Header from "./Header"
import Home from "./Home"
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider"

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The user from reload is>>>", authUser)
      if(authUser){
        //the user just logged in or the user was loged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //user the logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path = "/checkout">
            <Checkout />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
