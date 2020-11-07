import './App.css';
import {Route, Switch} from 'react-router-dom'
import Users from "./components/Users";
import Profile from "./components/profile/Profile";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      {/* <Switch> */}
      <Route exact path="/"components={Users}/>
      <Route exact
        path="/users/:id"
        render={(props) => <Profile {...props} />}
        />
      <Route
        exact
        path="/posts/:id"
        render={(props) => <Comments {...props} />}
      />
      {/* </Switch> */}
    </div>
  );
}

export default App;
