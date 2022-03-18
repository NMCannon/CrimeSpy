import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-content-area">
        <Sidebar />
        <Stats />
      </div>
    </div>
  );
}

export default App;