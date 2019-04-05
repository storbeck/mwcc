import React, { Component } from 'react';
import store from "./store";
import { Provider } from "react-redux";
import Divider from '@material-ui/core/Divider';


import './App.css';
import NavBar from './components/NavBar';
import Cover from "./components/Cover";
import Triplets from "./components/Triplets";
import AboutUs from "./components/AboutUs";
import WhyUs from "./components/WhyUs";
import Products from "./components/Products";
import Services from "./components/Services";
import FormDialog from "./components/FormDialog";

class App extends Component {
  render() {

    return (
        <Provider store={store}>
            <NavBar></NavBar>
            <div>
                <Cover />
                <Triplets />
                <AboutUs />
                <Divider variant="middle" />
                <WhyUs />
                <Divider variant="middle" />
                <Products />
                <Divider variant="middle" />
                <Services />
            </div>
            <FormDialog />
        </Provider>
    );
  }
}

export default App;
