import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader,textFirstCell, textSecondCell }) {
  let content;
  const getStylin = { backgroundColor: isHeader? '#deb5b545' : '#f5f5f5ab'}
  if (isHeader) {
    if (textSecondCell === null) {
      content = <th colSpan="2">{textFirstCell}</th>;
    } else {
      content = (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    }
  } else {
    content = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
  return <tr style={getStylin}>{content}</tr>;
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
