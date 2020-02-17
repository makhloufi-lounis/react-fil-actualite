import React from 'react';
import HeaderMessage from './HeaderMessage';
import Message from './Message';
import Reactions from './Reactions';
import ListeComentaires from './ListeComentaires';

class Actualite extends React.Component {
  render() {
    const { auteur, datePublication, message, reactions, commentaires, id} = this.props.actualite;

    return (
      <div className="Actualite">
        <HeaderMessage auteur={auteur} datePublication={datePublication} id={id} /> 
        <Message message={message} />
        <Reactions reactions={reactions} />
        <ListeComentaires commentaires={commentaires}  />
      </div>
    );
  }
}

export default Actualite;
