import React from 'react';
import pluralize from 'pluralize';

const WorkspaceMeta = (props) => {
    return (
        <div className="WorkspaceMeta">
        <div className="Description">Entire office for <strong>{pluralize('person',props.people)}</strong></div>  
        <div className="Dates"><strong>Mon, Aug 22, 2016</strong> to <strong>Fri, Aug 29, 2016</strong></div>
      </div>
    );
};

export default WorkspaceMeta;