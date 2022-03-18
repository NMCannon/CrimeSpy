import React, { Component } from 'react'
import Button from './Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class Toolbar extends Component {
  constructor() {
    super();

    this.state = {
      dropDownValue: "Select an item"
    }
  }

  changeValue(text) {
    this.setState({dropDownValue: text})
  }

  render() {
    return (
      <div id="toolbar">
        <Button text="Map"/>
        <Button text="Stats"/>#

        <DropdownButton id="dropdown-basic-button" menuVariant="dark" drop="right" title={this.state.dropDownValue}>
          <Dropdown.Item class="dropbutton" href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2022</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2021</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2020</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2019</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2018</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2017</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2016</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2015</div></Dropdown.Item>
          <Dropdown.Item href="#/action-2"><div onClick={(e) => this.changeValue(e.target.textContent)}>2014</div></Dropdown.Item>
        </DropdownButton>
      </div>
    )
  }
}

export default Toolbar;