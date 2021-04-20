
import './App.css';
import Header from "./Header"
import Leftpanel from "./Leftpanel"
import Rightpanel from "./Rightpanel"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainbody">
      <Leftpanel />
    
      <Rightpanel/>
      </div>
      <footer>
        Made by Shivam Tiwari 
      </footer>
    
    </div>
  );
}

export default App;
