import React from 'react';
import HeaderMessage from './HeaderMessage';
import Message from './Message';
class Commentaire extends React.Component {
   
    render () {
        const {auteur, datePublication, message, actualiteId} = this.props.commentaire;
        return (
            <React.Fragment>
                <div className="Commentaire">
                    <HeaderMessage auteur={auteur} datePublication={datePublication} id={actualiteId}/> 
                    <Message message={message} />
                </div>
            </React.Fragment>
        );
    }
}

export default Commentaire;
