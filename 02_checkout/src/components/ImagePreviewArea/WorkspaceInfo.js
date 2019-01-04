import React from 'react';
import pluralize from 'pluralize';

const WorkspaceInfo = (props) => {
    return (
        <div className="WorkspaceInformation">
        <div className="WorkspaceName">{props.name}</div>
        <div className="WorkspacePrice">
          <div className="Price">{props.price} GBP</div>
          <div className="Duration">/ {pluralize('day',parseInt(props.duration))}</div>
        </div>
      </div>
    );
};

export default WorkspaceInfo;