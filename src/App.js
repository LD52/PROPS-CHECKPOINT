import Logo from './logo192.png';
import './App.css';
import HandleName from './Profile/Profile';
function App() {
let fullName = "Joseph Leclerc"; 
  return (
    <div className="App"> <HandleName fullName={fullName} bio ="Leo" profession="teacher"/> <img src={Logo} alt ="Logo"/> </div>
  );
}

export default App;
