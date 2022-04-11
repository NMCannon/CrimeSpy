import React, { Component } from 'react'
import Button from './Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class Toolbar extends Component {
  constructor() {
    super();

    this.state = {
      year: "Select Year",
      crime: "Select Crime",
      stattype: "Chart",
      map: false
    }
  }
  applyFilter = () => {
    this.props.parentMethod();
  }

  mapChangeTrue = () => {
    this.setState({map: true})
    this.setState({stattype: "Map"})
  }

  mapChangeFalse = () => {
    this.setState({map: false})
    this.setState({stattype: "Chart"})
  }

  changeValue(text) {
    this.setState({year: text})
  }

  changeValueCrime(text) {
    this.setState({crime: text})
  }

  render() {
    return (
      <div id="toolbar-container">
        <div id="toolbar">
          <DropdownButton  className="dropdown-basic-button" id="year-dropdown" menuVariant="dark" drop="right" title={this.state.stattype}>
            <Dropdown.Item><div onClick={this.mapChangeFalse}>Chart</div></Dropdown.Item>
            <Dropdown.Item><div onClick={this.mapChangeTrue}>Map</div></Dropdown.Item>
          </DropdownButton>

          <div className="d-flex">
            <div className="vr" style={{currentColor: 'white'}}></div>
          </div>

          <DropdownButton className="dropdown-basic-button" id="year-dropdown" menuVariant="dark" drop="right" title={this.state.year}>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>ALL</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>2022</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>2021</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>2020</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>2019</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>2018</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>2017</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>2016</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>2015</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValue(e.target.textContent)}>2014</div></Dropdown.Item>
          </DropdownButton>

          <DropdownButton  className="dropdown-basic-button" id="year-dropdown" menuVariant="dark" drop="right" title={this.state.crime}>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>ALL</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>ASSAULT</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>BURGLARY</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>HOMICIDE</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>MOTOR VEHICLE THEFT</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>ROBBERY</div></Dropdown.Item>
            <Dropdown.Item><div onClick={(e) => this.changeValueCrime(e.target.textContent)}>SEXUAL ABUSE</div></Dropdown.Item>
          </DropdownButton>

          <button id="apply-btn" onClick={this.applyFilter}>Apply</button>
          <div className="d-flex">
            <div className="vr" style={{currentColor: 'white'}}></div>
          </div>
          <Button text="About"/>
        </div>
      </div>
    )
  }
}

export default Toolbar;