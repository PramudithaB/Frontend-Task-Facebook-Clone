import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Facebook/Navbar';
import {Header} from './Components/Facebook/Header';
import Tabs from './Components/Facebook/Tabs';
import Posts from './Components/Facebook/Posts';



function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Tabs/>
      <Posts/>
    </div>
  );
}

export default App;
