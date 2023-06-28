import PropTypes from 'prop-types';
import style from './HostTags.module.scss';

export const HostTags = ({tags}) => {
  return (
    <div className={style.tagContainer}>
      {tags.map((data) => (
        <span key={data}>{data}</span>
      ))}
    </div>
  );
}

HostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};