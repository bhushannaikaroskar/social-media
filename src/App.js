
import './App.css';
import {Navbar, Sidebar, Suggestion} from './components';
import { Homepage } from './pages';

function App() {
  return (
    <div className="App bg-blue-50">
      <Navbar/>
      <Sidebar/>
      <Homepage/>
      <Suggestion/>
    </div>
  );
}

export default App;
