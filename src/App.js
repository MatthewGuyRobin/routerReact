import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Shop from './components/Shop';
import Home from './components/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {

  state = {
    item: 0
  }

  addItem = () => {
    this.setState({
      item: this.state.item + 1
    })
  }

  render() {
    return (
      <div className="center">
        <BrowserRouter>

          <Navbar item={this.state.item} />


          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/shop" component={()=> <Shop add={this.addItem}/>}/>
          </Switch>


        </BrowserRouter>
      </div>
    );
  }
}

export default App;
