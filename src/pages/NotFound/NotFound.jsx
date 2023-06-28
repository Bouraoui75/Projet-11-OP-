import style from './notFound.module.scss';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className={style.notFoundContainer}>
            <div className={style.notFoundContainerContent}>
                <span className={style.errorIndicator}>404</span>
                <span className={style.errorMessage}>
                    Oups! La page que vous demandez n'existe pas.
                </span>
            </div>
            <NavLink to="/" className={style.linkToHome}>
                <span>Retourner sur la page d'accueil</span>
            </NavLink>
        </div>
    );
}