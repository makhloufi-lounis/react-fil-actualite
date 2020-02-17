import React from 'react';

function HeaderMessage(props) {
  const { auteur, datePublication } = props;

  return (
    <div className="HeaderMessage">
      <div className="HeaderMessage__auteur">
        <img src={auteur.avatar} alt={`Avatar de ${auteur.nom}`} />
        {auteur.nom}
      </div>

      <div className="HeaderMessage__date-publication">
        {new Date(datePublication).toLocaleString()}
      </div>
    </div>
  );
}

export default HeaderMessage;
