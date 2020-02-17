import React from 'react';
import Actualite from './Actualite';
//import Actualite from './Actualite';

class RouteActualite extends React.Component {
  render() {
    const { actualites, match } = this.props;
    console.log(match);
    if(! actualites.length){
        return null;
    }
    //Note : ici filter return un tableau => result[0]
    const result =  actualites.filter((actualite) => actualite.id === match.params.id);
    return (
        <div>
            <Actualite actualite={result[0]} />
        </div>
    );
  }
}

export default RouteActualite;
