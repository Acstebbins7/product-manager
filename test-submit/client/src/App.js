import './App.css';
import Main from './views/Main';
import OnePet from './views/OnePet';
import NewPet from './views/NewPet';
import UpdatePet from './views/UpdatePet';
import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="jumbotron">Welcome to Help a Pet!</h1>
        <Link to="/"><h4 className="navig">Home</h4></Link>&nbsp; | &nbsp;
        <Link to="/new"><h4 className="navig">Add</h4></Link>
      </div>
      <Router>
        <Main path="/" />
        <OnePet path="/pets/:_id"/>
        <NewPet path="/new"/>
        <UpdatePet path="/pets/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
