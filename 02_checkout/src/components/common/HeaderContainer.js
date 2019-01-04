import React from 'react';

const HeaderContainer = (props) => {
    return (
        <header>
            <input onChange={props.onChange} type="range" min="1" max="100" step="1"/>
        </header>
    );
};

export default HeaderContainer;