import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <Header />
      <Stats />
      <Sidebar />
    </div>
  );
}

export default App;