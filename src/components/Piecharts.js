import React, { Component } from 'react'

class Piecharts extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      year: null,
      crime: null
    }
  }

  // Update state
  changeState = (newyear, newcrime) => {
    this.setState({year: newyear});
    this.setState({crime: newcrime})
  }

  render() {
    console.log("pies year is "+this.state.year+" and crime is "+this.state.crime);
    return (
      <div id="pie-area">
        <iframe title="4" width="515" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/3.embed?modebar=false&link=false"></iframe>
        <iframe title="5" width="515" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/3.embed?modebar=false&link=false"></iframe>
      </div>
    )
  }
}

export default Piecharts