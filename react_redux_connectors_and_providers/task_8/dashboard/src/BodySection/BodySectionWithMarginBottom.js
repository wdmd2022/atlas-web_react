import BodySection from './BodySection';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMarginBottom: {
    marginBottom: '40px',
    '@media (max-width: 900px)': {
      marginBottom: '20px'
    }
  }
});

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.bodySectionWithMarginBottom)}>
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default BodySectionWithMarginBottom;
