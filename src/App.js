
import './App.css';
import Login from "./Components/Login/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home/Home";
import MyOrder from "./Components/MyOrder/MyOrder";
import AllOrders from "./Components/AllOrders/AllOrders";
import NotFound from "./Components/NotFound/NotFound";
import Regi from "./Components/Regi/Regi";
import AuthProvider from "./Components/Context/AuthProvider/AuthProvider";
import PrivetRoute from "./Components/Context/PrivetRouter/PrivetRouter";
import AddItems from './Components/AddItems/AddItems';
import Footer from './Components/Footer/Footer';
import ItemDetails from "./Components/Home/ItemDetails/ItemDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/additem">
              <AddItems></AddItems>
            </Route>

            <Route path="/myorder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/allorder">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/item/:itemId">
              <ItemDetails></ItemDetails>
            </PrivetRoute>
            <Route path="regi">
              <Regi></Regi>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
