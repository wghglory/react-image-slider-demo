import React from 'react';
import PropTypes from 'prop-types';

import css from '../scss/frame.scss';

function Frame(props) {
  return <div className={css.frameContainer}>{props.children}</div>;
}

Frame.propTypes = {
  children: PropTypes.node
};

export default Frame;
