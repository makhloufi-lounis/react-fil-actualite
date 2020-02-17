import React from 'react';
import FluxActualite from './FluxActualite';
import { actualites } from './actualites';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route path="/" component={() => <FluxActualite actualites={ actualites }/> }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
