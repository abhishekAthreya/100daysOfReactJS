import React from 'react';
import WorkspaceInfo from './WorkspaceInfo';
import WorkspaceMeta from './WorkspaceMeta';

const ImagePreviewArea = (props) => {
    return (
        <div className="ImagePreview" style={{'backgroundImage': 'url('+ props.image +')'}}>
        <div className="WorkspaceOverview">
          <WorkspaceInfo name="Coworking Space, South Korea" price={props.price} duration="1" />
          <WorkspaceMeta people={props.people} />
        </div>
      </div>
    );
};

export default ImagePreviewArea;