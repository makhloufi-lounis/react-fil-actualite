import React from 'react';
import FluxActualite from './FluxActualite';
import { actualites } from './actualites';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       actualites: [],
    }
  }

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
      <div className="App">
        <FluxActualite actualites={ actualites } />
      </div>
    );
  }
}

export default App;
