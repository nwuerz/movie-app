import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Main from './components/Main';
import MovieDetail from './components/MovieDetail';

function App({ location }) {
  const { pathname } = location;
 

  return (
    <body>
      <div id='site-content'>
      <NavBar />
        <Switch>
          <Route exact path={'/'}>
            <Main />
          </Route>
          <Route exact path={pathname} component={MovieDetail}/>
        </Switch>
      </div>
    </body>
  );
}

export default withRouter(App);
