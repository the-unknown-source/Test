import './App.css'; 
import SideNavbar from './SideNavbar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
      {/* <h1> Hello World! </h1> */}
      <SideNavbar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
