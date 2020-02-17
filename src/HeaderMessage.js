import React from 'react';
import { Link } from 'react-router-dom';

function HeaderMessage(props) {
  const { auteur, datePublication, id } = props;

  return (
    <div className="HeaderMessage">
      <div className="HeaderMessage__auteur">
        <img src={auteur.avatar} alt={`Avatar de ${auteur.nom}`} />
        {auteur.nom}
      </div>

      <div className="HeaderMessage__date-publication">
        <Link to={'/actualite/' + id}>
        {new Date(datePublication).toLocaleString()}
        </Link>
      </div>
    </div>
  );
}

export default HeaderMessage;
