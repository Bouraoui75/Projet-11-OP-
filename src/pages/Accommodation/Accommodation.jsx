import PropTypes from 'prop-types';
import style from './accommodation.module.scss';
import { HostCard, Dropdown, Carousel } from '../../components';

export const Accommodation = ({ data }) => {

    const equipmentsFormatedData = data.equipments.map((equipment) => <li key={equipment}>{equipment}</li>);

    return (
        <>
            <Carousel data={data} />
            <HostCard data={data} />
            <div className={style.containerDropdowns}>
                <Dropdown
                    title="Description"
                    content={data.description}
                    className={style.containerWrapDropdown}
                />
                <Dropdown
                    title="Equipments"
                    content={equipmentsFormatedData}
                    className={style.containerWrapDropdown}
                />
            </div>
        </>
    );
}

Accommodation.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
        rating: PropTypes.string.isRequired,
        host: PropTypes.shape({
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        }).isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        cover: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};
