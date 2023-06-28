import style from './header.module.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={style.headerContainer}>
                    <div>
                        <NavLink to="/">
                            <img className={style.headerLogo} src={Logo} />
                        </NavLink>
                    </div>
                    <nav>
                        <ul className={style.headerNav}>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >Accueil</NavLink>
                            </li>
                            <li>
                                <NavLink to="/a-propos"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >A Propos</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}