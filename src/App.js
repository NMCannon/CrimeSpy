import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Charts from './components/Charts';
import Header from './components/Header';
import Piecharts from './components/Piecharts';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';

import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      year: null,
      crime: null,
      map: false
    }
    this.toolbarRef= React.createRef();
    this.chartsRef= React.createRef();
    this.pieRef= React.createRef();
  }

  // Get states of children (toolbar, charts and piecharts)
  getChildState = () => {
    let toolbarelement = this.toolbarRef.current;
    let chartselement = this.chartsRef.current;
    let pieelement = this.pieRef.current;

    let newyear = toolbarelement.state.year;
    let newcrime = toolbarelement.state.crime;
    let newmap = toolbarelement.state.map;
    console.log("toolbar year is "+newyear+" amd crime is "+newcrime);

    // Update parent states
    this.setState({year: newyear});
    this.setState({crime: newcrime});
    this.setState({map: newmap});

    // Pass new state to charts
    chartselement.changeState(newyear, newcrime, newmap);

    // Pass new states to piecharts
    pieelement.changeState(newyear, newcrime);
  }

  render() {
    console.log("parent year is "+this.state.year+" and map is "+this.state.map);
    return (
      <div className="App">
        <Header />
        <Toolbar ref={this.toolbarRef} parentMethod={this.getChildState}></Toolbar>
        <div id="main-content-area">
          <h1>Washington D.C.</h1>
          <Sidebar />
          <Charts ref={this.chartsRef}/>
          <Piecharts ref={this.pieRef}/>
        </div>
      </div>
    )
  }
}

export default App;