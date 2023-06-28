import style from './footer.module.scss';
import Logo from '../../assets/images/footer-logo.png';

export const Footer = () => {
    return (
        <footer className={style.container}>
            <img className={style.footerLogo} src={Logo} />
            <span className={style.footerText}>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}