import { Item } from 'components'
import { Links } from 'helpers/Links'
import { AboutPage, CartPage, CatalogPage, ContactPage, ErrorPage, MainPage } from 'pages'
import { useParams } from 'react-router'
import { Route, Routes } from 'react-router'

export const MainRoute = () => {

    const { ABOUT, CATALOG, CONTACTS, MAIN, ERROR, CART, ITEM } = Links

    const { itemId } = useParams()

    console.log(itemId)

    return (
        <>
            <Routes>
                <Route path={MAIN} element={<MainPage />} />
                <Route path={ABOUT} element={<AboutPage />} />
                <Route path={CART} element={<CartPage />} />
                <Route path={CATALOG} element={<CatalogPage />} />
                <Route path={CONTACTS} element={<ContactPage />} />
                <Route path={ERROR} element={<ErrorPage />} />
                <Route path={`items/:itemId`} element={<Item id={itemId} />} />
            </Routes>
        </>
    )
}
