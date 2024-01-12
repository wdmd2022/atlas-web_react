import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import React from 'react';
import PropTypes from 'prop-types';

function BodySectionWithMarginBottom(props) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: propTypes.string,
  children: PropTypes.node
};

export default BodySectionWithMarginBottom;
