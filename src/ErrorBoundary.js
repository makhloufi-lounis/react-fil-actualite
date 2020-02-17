import React from 'react';
import App from './App';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: falsre,
        };
    }

    componentDidCatch(error, info) {
        this.setState({hasError : true});
    }

    render() {
        if(this.state.hasError) {
            return (
                <React.Fragment>
                    <h1>Oh oh, il y a une erreur...</h1>
                </React.Fragment>
            );

            return this.props.children;
        }
    }
}

<ErrorBoundary>
    <App/>
</ErrorBoundary>