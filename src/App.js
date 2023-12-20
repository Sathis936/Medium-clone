import './App.css';
import Register from './auth/register/Register';
 import{Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
function App(){
  return (
    <div className="App">
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register />}/>
        
      </Route>
    </Routes>
  
    </div>
  );
}

export default App;
