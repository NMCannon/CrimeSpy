import React, { Component } from 'react'

class Charts extends Component {

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
    this.setState({crime: newcrime});
  }

  render() {
    console.log("charts year is "+this.state.year+" and crime is "+this.state.crime);
    if(this.state.year === null || this.state.year === "2018")
    {
      return (
        <div id="chart-area">
          <iframe title="1" width="520" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/1.embed?modebar=false&link=false"></iframe>
          <iframe title="2" width="520" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/1.embed?modebar=false&link=false"></iframe>
          <iframe title="3" width="520" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/1.embed?modebar=false&link=false"></iframe>
        </div>
      )
    }
    else if (this.state.year === "2020")
    {
      return (
        <div id="chart-area">
          <iframe title="7" width="520" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/5.embed?modebar=false&link=false"></iframe>
          <iframe title="8" width="520" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/5.embed?modebar=false&link=false"></iframe>
          <iframe title="9" width="520" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/5.embed?modebar=false&link=false"></iframe>
        </div>
      )
    }
    else
    {
      return(
        <div id="chart-area">
        <h1>:(</h1>
      </div>
      )
    }
  }
}

export default Charts;