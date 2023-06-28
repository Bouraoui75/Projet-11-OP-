import PropTypes from 'prop-types';
import homeBanner from '../../assets/images/home-banner.png';
import { Gallery, Banner } from '../../components';

export const Home = ({ data, loading, error }) => {
    return (
        <>
            <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
            {loading && (
                <p>Chargement en cours</p>
            )}
            {error && (
                <p>Une erreur est survenue...</p>
            )}
            {data && !error && !loading && <Gallery data={data} />}
        </>
    );
}

Home.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    error: PropTypes.bool,
};