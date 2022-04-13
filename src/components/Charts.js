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
    // If map value is true
    if(this.state.map===true)
    {
      // Check selected year and display appropriate map
      switch(this.state.year)
      {
        case "2021":
        default:
          return (
            <div id="chart-area">
              <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2021map_all.html"></iframe>
            </div>
          )
        case "2020":
          return (
            <div id="chart-area">
                <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2020map_all.html"></iframe>
            </div>
          )
        case "2019":
          return (
            <div id="chart-area">
                <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2019map_all.html"></iframe>
            </div>
          )
        case "2018":
          return (
            <div id="chart-area">
              <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2018map_all.html"></iframe>
            </div>
          )
        }
    }

    // Else check selected year and display appropriate chart
    switch(this.state.year)
    {
      case "ALL":
      default:
        return (
          <div id="chart-area">
            <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2010-2025chart_all.html"></iframe>
          </div>
        )
      case "2022-2025":
        return (
          <div id="chart-area">
            <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2022-2025chart_all.html"></iframe>
          </div>
        )
      case "2021":
        return (
          <div id="chart-area">
            <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2021chart_all.html"></iframe>
          </div>
        )
      case "2020":
        return (
          <div id="chart-area">
              <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2020chart_all.html"></iframe>
          </div>
        )
      case "2019":
        return (
          <div id="chart-area">
              <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2019chart_all.html"></iframe>
          </div>
        )
      case "2018":
        return (
          <div id="chart-area">
              <iframe title="html" width="100%" height="650" frameBorder="0" scrolling="no" src="/plots/2018chart_all.html"></iframe>
          </div>
        )
      }
  }
}

export default Charts;