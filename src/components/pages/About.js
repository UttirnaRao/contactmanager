import React from 'react'

export default props => {
    return (
        <div>
            <h1 className="display-4">About Contact Manager </h1>
            {/* adding id to the parmalink*/}
            {/*<h1 className="display-4">{props.match.params.name} </h1>*/}
            <p className="lead">Simple App to manage contacts</p>
            <p className="text-secondary">Version 1.0.0</p>
        </div>
    );
};
