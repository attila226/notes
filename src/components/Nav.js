import React from 'react';

const Nav = props => {

    return (
        <div>
            {props.notes &&  props.notes.map((note, index) => {
                return (<div key={index}>{note.title}</div>);
            })}
        </div>
    )
}

export default Nav;