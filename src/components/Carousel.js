import React from 'react';
import PropTypes from 'prop-types';
import css from '../scss/carousel.scss';

function renderSlides(props) {
  return React.Children.map(props.children, (slide, i) => {
    return React.cloneElement(slide, {
      style: {
        ...slide.props.style,
        width: props.width,
        left: props.width * (i - props.showIndex)
      }
    });
  });
}

function Carousel(props) {
  return (
    <div className={css.carouselContainer}>
      {renderSlides(props)}
      {props.nav}
    </div>
  );
}

Carousel.propTypes = {
  nav: PropTypes.node.isRequired,
  showIndex: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node
};

export default Carousel;
