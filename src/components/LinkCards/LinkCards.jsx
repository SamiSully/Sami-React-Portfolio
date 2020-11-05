import React from 'react';

function LinkCards(props) {
    return (
        <a rel="noreferrer" target="_blank" href={props.linkthis}><button type="button" className="btn btn-secondary">{props.linkTitle}</button></a>
    );
}

export default LinkCards;