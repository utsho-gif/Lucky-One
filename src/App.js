import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shop from './Component/Shop/Shop';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
       <Navbar></Navbar>
       <Shop></Shop>
       <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;
