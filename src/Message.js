import React from 'react';
class Message extends React.Component {
    
    render(){
        const { message } = this.props;
        return (
            <div className="Message">
                { message }
            </div>
        )
    }
}

export default Message;