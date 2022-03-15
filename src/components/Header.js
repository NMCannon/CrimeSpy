import Toolbar from "./Toolbar"

export default function Header() {
  return (
    <div id="header-container">
        <div id="header">
            <img src="logo.png"></img>
            <h5>Prediction & Statistics</h5>
        </div>
        <Toolbar />
    </div>
  )
}
