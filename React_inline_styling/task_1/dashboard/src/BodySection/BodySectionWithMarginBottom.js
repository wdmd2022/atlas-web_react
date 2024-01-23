import BodySection from './BodySection';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMarginBottom: { marginBottom: '40px' }
});

function BodySectionWithMarginBottom(props) {
  return (
    <div className="bodySectionWithMarginBottom">
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default BodySectionWithMarginBottom;
