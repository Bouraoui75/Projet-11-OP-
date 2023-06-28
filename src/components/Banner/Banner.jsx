import PropTypes from 'prop-types';

import style from './banner.module.scss';

export const Banner = ({ image, title }) => {
    return (
        <div className={style.bannerContainer}>
            <div className={style.bannerImageContainer}>
                <img className={style.bannerImage} src={image} alt={title} />
            </div>
            <div className={style.bannerTitleContainer}>
                {image && <h1 className={style.bannerTitle}>{title}</h1>}
            </div>
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string
};