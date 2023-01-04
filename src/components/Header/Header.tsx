import Banner from 'components/Banner'
import { Links } from 'helpers/Links'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks/hooks'
import { getTextInput } from 'redux/slices/MainSlice'
import headerLogo from '../../assets/img/header-logo.png'


export const Header = () => {
    const [value, setValue] = useState<string>('')
    const [invisible, setInvisible] = useState<boolean>(true)
    const { ABOUT, CATALOG, CONTACTS, MAIN, CART } = Links
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { items } = useAppSelector(state => state.cart)


    const onHandleToggleFrom = () => {
        if (!invisible && value.length > 3) {
            navigate('/catalog')
            dispatch(getTextInput(value))
            setValue(prev => prev = '')
        }
        setInvisible(prev => prev = !prev)
    }

    const onChangeValue = (value: string) => {
        setValue(prev => prev = value)
    }

    return (
        <>
            <header>
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                            <Link to={MAIN}>
                                <a className="navbar-brand">
                                    <img src={headerLogo} alt="Bosa Noga" />
                                </a>
                            </Link>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarMain">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to={MAIN}>
                                            <a className="nav-link">Главная</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={CATALOG}>
                                            <a className="nav-link">Каталог</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={ABOUT}>
                                            <a className="nav-link">О магазине</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={CONTACTS}>
                                            <a className="nav-link">Контакты</a>
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    <div className="header-controls-pics">
                                        <div
                                            onClick={onHandleToggleFrom}
                                            data-id="search-expander" className="header-controls-pic header-controls-search">
                                        </div>
                                        <Link to={CART}>
                                            <div className="header-controls-pic header-controls-cart">
                                                <div className="header-controls-cart-full">{items.length}</div>
                                                <div className="header-controls-cart-menu"></div>
                                            </div>
                                        </Link>
                                    </div>
                                    <form data-id="search-form" className={`header-controls-search-form form-inline ${invisible ? 'invisible' : ''}`}>
                                        <input onChange={(e) => { onChangeValue(e.target.value) }} value={value} className="form-control" placeholder="Поиск" />
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
