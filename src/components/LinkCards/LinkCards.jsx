import React from 'react';

function LinkCards(props) {
    return (
        <button type="button" className="btn btn-secondary"><a rel="noreferrer" target="_blank" href={props.linkthis}>{props.linkTitle}</a></button>
    );
}

export default LinkCards;