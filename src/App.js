import logo from './logo.svg';
import MainPageComponent from './components/MainPageComponent';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import AddDoctor from './components/doctor/AddDoctor';
import Dashboard from './components/doctor/Dashboard'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <Router>
       <MainPageComponent/>
       <Route exact path="/add-doctor" component={AddDoctor}/>
       <Route exact path="/get-doctor" component={Dashboard}/>
    </Router>
    </Provider>
  );
}

export default App;
