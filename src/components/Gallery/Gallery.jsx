import PropTypes from 'prop-types';
import style from './gallery.module.scss';
import { NavLink } from 'react-router-dom';

export const Gallery = ({ data }) => {

    const cardsList = data?.map(item => {
        return (
            <NavLink className={style.cardContainer} key={item.id} to={`/hebergement/${item.id}`}>
                <img className={style.cardImage} src={item.cover} alt={item.title} loading="lazy" />
                <h2 className={style.cardTitle}>{item.title}</h2>
            </NavLink>
        );
    });

    return <div className={style.cardsContainer}>{cardsList}</div>;
}

Gallery.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
        })
    ),
};