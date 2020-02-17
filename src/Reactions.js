import React from 'react';
import { reactionEmojis } from './actualites';
import classnames from 'classnames';
import uniqid from 'uniqid';
class Reactions extends React.Component {

    constructor(props) {
        super(props);
        this.state = { reactionType: null };
    }

    selectReaction(reactionType){
        //or this.setState({ reactionType }) ES6
        this.setState({reactionType : reactionType})
    }

    renderReaction([reactionType, compteur], key){
        const isSelectedReaction = (this.state.reactionType === reactionType);
        if(isSelectedReaction) {
            compteur++;
        }
        return (
            <div 
                key={uniqid()}
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
                {Object.entries(reactions).map((reaction, index) => this.renderReaction(reaction, index))}
            </div>
        );
    }
}

export default Reactions;