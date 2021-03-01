import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './Components/Menu/Menu';
import Header from './Components/Header/Header';
import Products from './Components/ProductArea/Products/Products';
import Blog from './Components/Blog/Blog';
import OurService from './Components/OurServiceArea/OurService/OurService';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/home">
            <Menu />
          </Route>
          <Route exact path="/">
            <Header />
            <Products />
            <Blog />
            <OurService />
            <Footer />
          </Route>
          <Route path="*">
            <h3>Page not Found</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
