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
      switch(this.state.year)
      {
        case "2021":
        default:
          return (
            <div id="statslower-area">
              <iframe title="6" width="50%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/25.embed?link=false"></iframe>
              <iframe title="5" width="50%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/29.embed?link=false"></iframe>
            </div>
          )
        case "2020":
          return (
            <div id="statslower-area">
              <iframe title="7" width="50%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/23.embed?link=false"></iframe>
              <iframe title="8" width="50%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/27.embed?link=false"></iframe>
            </div>
          )
        case "2019":
          return (
            <div id="statslower-area">
              <iframe title="10" width="50%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/21.embed?link=false"></iframe>
              <iframe title="11" width="50%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/31.embed?link=false"></iframe>
            </div>
          )
        case "2018":
          return (
            <div id="statslower-area">
              <iframe title="15" width="50%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/3.embed?link=false"></iframe>
              <iframe title="13" width="50%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/33.embed?link=false"></iframe>
            </div>
          )
        case "Forecast":
          return (
            <div id="statslower-area">
              <iframe title="14" width="50%" height="500" frameborder="0" scrolling="no" src="//plotly.com/~NCannon/36.embed?link=false"></iframe>
            </div>
          )
      }
    }

  }
}

export default StatsLower