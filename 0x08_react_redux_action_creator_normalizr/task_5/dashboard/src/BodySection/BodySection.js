import React from 'react';

function BodySection(props) {
  return (
    <div className="bodySection">
      <h2>{props.title}</h2>
          {props.children}
    </div>
  );
}

export default BodySection;
