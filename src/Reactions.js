import React from 'react';
import { reactionEmojis } from './actualites';
import classnames from 'classnames';

class Reactions extends React.Component {

    constructor(props) {
        super(props);
        this.state = { reactionType: null };
    }

    selectReaction(reactionType){
        //or this.setState({ reactionType }) ES6
        this.setState({reactionType : reactionType})
    }

    renderReaction([reactionType, compteur]){
        const isSelectedReaction = (this.state.reactionType === reactionType);
        if(isSelectedReaction) {
            compteur++;
        }
        return (
            <div 
                className={classnames(
                    'Reactions__reaction',
                    {'Reactions__reaction--selected' : isSelectedReaction}
                )}
                onClick={(e) => this.selectReaction(reactionType)
            }>
                {reactionEmojis[reactionType]} {compteur}
            </div>
        );        
    }

    render() {
        const { reactions } = this.props;
        return (
            <div className="Reactions">
                {Object.entries(reactions).map((reaction) => this.renderReaction(reaction))}
            </div>
        );
    }
}

export default Reactions;