import React from 'react';

const Button = (props) => {
    return (
        <div className="Button" onClick={props.onClick} data-value={props.value} data-size={props.size}>
            {props.label}
        </div>
    );
};

export default Button;