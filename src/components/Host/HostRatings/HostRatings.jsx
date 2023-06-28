import PropTypes from 'prop-types';
import style from './HostRatings.module.scss';

export const HostRatings = ({rating}) => {
  
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<i key={`star-${i}`} className={`${style.star} fa-solid fa-star`}></i>);
  }
  for (let i = 0; i < 5 - rating; i++) {
    stars.push(<i key={`empty-star-${i}`} className={`${style.emptyStar} fa-solid fa-star`}></i>);
  }

  return (
    <div className={style.containerStars}>
      {stars}
    </div>
  );
}

HostRatings.propTypes = {
  rating: PropTypes.string.isRequired,
};