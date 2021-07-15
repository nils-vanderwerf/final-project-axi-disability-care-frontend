import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
