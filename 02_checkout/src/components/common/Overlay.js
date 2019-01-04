import React from 'react';

const Overlay = (props) => {
    return (
        <div className="Overlay" style={{'backgroundImage':'url(' + props.image + ')'}}>
        Something
      </div>
    );
};

export default Overlay;