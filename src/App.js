import {ToastContainer} from 'react-toastify';
import {Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

const App=()=> {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
          <Route exact path="/">
              <Home/>
            </Route>
        
            <Route exact path="/add">
              <AddContact/>
            </Route>

            <Route exact path="/edit/:id">
             <EditContact/>
            </Route>


      </Switch>
  
    </div>
  );
}

export default App;
