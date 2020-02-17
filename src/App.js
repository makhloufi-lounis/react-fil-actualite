import React from 'react';
import FluxActualite from './FluxActualite';
import { actualites } from './actualites';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RouteActualite from './RouteActualite';
import RouteErreur from './RouteErreur';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       actualites: [],
    }
  }

  //componentWillMount is not recommended for use set initial state in the constructor
  componentWillMount() {
      /*fetch('http://localhost:3000/actualites')
      .then((response) => response.json())
      //or .then(( actualites) => this.setState({  actualites})) ES6
      .then((response) => this.setState({ actualites : response.actualites}))*/
      this.setState({ actualites : actualites })
  }

  render() {
    const { actualites } = this.state;
    // get this.props.match
    // const { match } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route exact path="/" component={() => <FluxActualite actualites={ actualites }/> }/>
              <Route exact path="/actualite/:id" component={({match}) => <RouteActualite actualites={ actualites } match={match}/> }/>
              {/* Pas besoin d'utilisé path avec RouteErreur  */}
              <Route component={({location}) => <RouteErreur location={location}/>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
