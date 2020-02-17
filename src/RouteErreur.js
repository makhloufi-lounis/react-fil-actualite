import React from 'react';

class RouteErreur extends React.Component {
    render() {
        const { location } = this.props;
        return (
            <div style={{color:'red', margin:0, width: 500}}>
                Aucune page trouvée pour "{location.pathname}".
            </div>
        );
    }
}

export default RouteErreur;