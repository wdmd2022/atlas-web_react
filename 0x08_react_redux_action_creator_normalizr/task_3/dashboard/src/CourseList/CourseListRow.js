import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { useState } from 'react';

const styles = StyleSheet.create({
  headerRow: {
    textAlign: 'center',
    backgroundColor: '#deb5b545',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray'
  },
  headerRowTwo: {
    textAlign : 'left',
    paddingLeft: '2%'
  },
  bodyRow: {
    backgroundColor: '#f5f5f5ab',
    textAlign: 'left',
    paddingLeft: '2%'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
})

function CourseListRow({ isHeader,textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleIsCheckedChange = () => {
    // since it's boolean we'll just flip the value when clicked
    setIsChecked(!isChecked);
  };
  let content;
  if (isHeader) {
    if (textSecondCell === null) {
      content = <th colSpan="2" className={css(styles.headerRow)}>{textFirstCell}</th>;
    } else {
      content = (
        <>
          <th className={css(styles.headerRow, styles.headerRowTwo)}>{textFirstCell}</th>
          <th className={css(styles.headerRow, styles.headerRowTwo)}>{textSecondCell}</th>
        </>
      );
    }
  } else {
    content = (
      <>
        <td className={css(styles.bodyRow, isChecked && styles.rowChecked)}><input type="checkbox" onChange={handleIsCheckedChange} />{textFirstCell}</td>
        <td className={css(styles.bodyRow, isChecked && styles.rowChecked)}>{textSecondCell}</td>
      </>
    );
  }
  return <tr>{content}</tr>;
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
