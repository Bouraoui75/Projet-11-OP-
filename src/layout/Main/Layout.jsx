import style from './main.module.scss';

export const Layout = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}