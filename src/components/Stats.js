import Charts from "./Charts"
import Piecharts from "./Piecharts"

export default function Stats() {
  return (
      <div id="stats-container">
          <div id="stats-area">
            <Charts />
            <Piecharts />
          </div>
      </div>
  )
}
