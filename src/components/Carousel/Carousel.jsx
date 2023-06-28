import PropTypes from 'prop-types';
import style from './carousel.module.scss';
import { useState } from 'react';

export const Carousel = ({ data }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        if (currentIndex < data.pictures.length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const previous = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        } else {
            setCurrentIndex(data.pictures.length - 1);
        }
    };

    return (
        <div className={style.carouselContainer}>
            <img src={data.pictures[currentIndex]} alt={data.description} />
            {data.pictures.length > 1 && (
                <>
                    <div className={style.arrowContainer}>
                        <i onClick={previous} className={`${style.arrow} fas fa-arrow-left`}></i>
                        <i onClick={next} className={`${style.arrow} fas fa-arrow-right`}></i>
                    </div>
                    <div className={style.indexContainer}>
                        <span>{`${currentIndex + 1}/${data.pictures.length}`}</span>
                    </div>
                </>
            )}
        </div>
    )
}

Carousel.propTypes = {
    data: PropTypes.shape({
        pictures: PropTypes.arrayOf(PropTypes.string.isRequired),
        description: PropTypes.string.isRequired,
    }).isRequired
};