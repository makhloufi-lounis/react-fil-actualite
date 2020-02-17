import React from 'react';
import Actualite from './Actualite';

class FluxActualite extends React.Component {
  render() {
    const { actualites } = this.props;

    return (
      <div className="FluxActualite">
        {actualites.map((actualite) => <Actualite key={actualite.id} actualite={actualite} />)}
      </div>
    )
  }
}

export default FluxActualite;
