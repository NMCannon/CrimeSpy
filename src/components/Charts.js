import React, { Component } from 'react'

class Charts extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      year: null,
      crime: null,
      map: false
    }
  }

  // Update state
  changeState = (newyear, newcrime, newmap) => {
    this.setState({year: newyear});
    this.setState({crime: newcrime});
    this.setState({map: newmap});
  }

  render() {
    console.log("charts year is "+this.state.year+" and crime is "+this.state.crime+" and map is "+this.state.map);
    if(this.state.map===true)
    {
      return (
        <div id="chart-area">
          <iframe title="html example" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/file4.html"></iframe>
        </div>
      )
    }

    switch(this.state.year)
    {
      case "ALL":
      default:
        return (
          <div id="chart-area">
            <iframe title="allchart" width="100%" height="650" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/7.embed?modebar=false&link=false"></iframe>
          </div>
        )
      case "2018":
        return (
          <div id="chart-area">
            <iframe title="1" width="33%" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/1.embed?modebar=false&link=false"></iframe>
            <iframe title="2" width="33%" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/1.embed?modebar=false&link=false"></iframe>
            <iframe title="3" width="33%" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/1.embed?modebar=false&link=false"></iframe>
          </div>
        )
      case "2020":
        return (
          <div id="chart-area">
            <iframe title="7" width="33%" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/5.embed?modebar=false&link=false"></iframe>
            <iframe title="8" width="33%" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/5.embed?modebar=false&link=false"></iframe>
            <iframe title="9" width="33%" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/5.embed?modebar=false&link=false"></iframe>
          </div>
        )
    }
  }
}

export default Charts;