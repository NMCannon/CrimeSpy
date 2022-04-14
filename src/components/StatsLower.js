import React, { Component } from 'react'

class StatsLower extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      year: null,
      crime: null,
      about: false
    }
  }

  // Update state
  changeState = (newyear, newcrime, newabout) => {
    this.setState({year: newyear});
    this.setState({crime: newcrime});
    this.setState({about: newabout});
  }

  render() {
    console.log("statslower year is "+this.state.year+" and crime is "+this.state.crime);

    if(this.state.about===true)
    {
      return (
        <div>
        </div>
      )
    }
    else
    {
      return (
        <div id="statslower-area">
          <iframe title="4" width="50%" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/3.embed?modebar=false&link=false"></iframe>
          <iframe title="5" width="50%" height="400" frameBorder="0" scrolling="no" src="//plotly.com/~NCannon/3.embed?modebar=false&link=false"></iframe>
        </div>
      )
    }

  }
}

export default StatsLower