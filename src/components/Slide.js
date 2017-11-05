import React from 'react';
import PropTypes from 'prop-types';
import css from '../scss/slide.scss';

function Slide(props) {
  return (
    <article style={props.style} className={css.imageSlider}>
      <img src={props.image} alt={props.title} />
      <footer className={css.footer}>
        <h2 className={css.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.string
};

export default Slide;
