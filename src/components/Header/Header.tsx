import Banner from 'components/Banner'
import { Links } from 'Links'
import { NavLink } from 'react-router-dom'
import headerLogo from '../../assets/img/header-logo.png'


export const Header = () => {

    const { ABOUT, CATALOG, CONTACTS, MAIN } = Links

    return (
        <>
            <header>
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <a className="navbar-brand" href="/">
                                <img src={headerLogo} alt="Bosa Noga" />
                            </a>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarMain">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <NavLink to={MAIN}>
                                            <a className="nav-link">Главная</a>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={CATALOG}>
                                            <a className="nav-link">Каталог</a>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={ABOUT}>
                                            <a className="nav-link">О магазине</a>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={CONTACTS}>
                                            <a className="nav-link">Контакты</a>
                                        </NavLink>
                                    </li>
                                </ul>
                                <div>
                                    <div className="header-controls-pics">
                                        <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                                        <div className="header-controls-pic header-controls-cart">
                                            <div className="header-controls-cart-full">1</div>
                                            <div className="header-controls-cart-menu"></div>
                                        </div>
                                    </div>
                                    <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                                        <input className="form-control" placeholder="Поиск" />
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <Banner />
        </>
    )
}