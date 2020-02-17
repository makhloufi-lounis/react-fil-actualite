import React from 'react';
import Commentaire from './Commentaire';
import uniqid from 'uniqid';
class ListeComentaires extends React.Component {
    render() {
        const { commentaires } = this.props;

        if(!commentaires.length){
            return null;
        }

        return (
            <div className="ListeComentaires">
                {commentaires.map(commentaire => < Commentaire key={uniqid()} commentaire={commentaire} />)}
            </div>
        );
    }
}

export default ListeComentaires;