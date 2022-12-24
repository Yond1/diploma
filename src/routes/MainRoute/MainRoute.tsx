import { Links } from 'Links'
import { AboutPage, CatalogPage, ContactPage, ErrorPage, MainPage } from 'pages'
import { Route, Routes } from 'react-router'

export const MainRoute = () => {

    const { ABOUT, CATALOG, CONTACTS, MAIN, ERROR } = Links

    return (
        <>
            <Routes>
                <Route path={MAIN} element={<MainPage />} />
                <Route path={ABOUT} element={<AboutPage />} />
                <Route path="/cart" element='' />
                <Route path={CATALOG} element={<CatalogPage />} />
                <Route path={CONTACTS} element={<ContactPage />} />
                <Route path={ERROR} element={<ErrorPage />} />
            </Routes>
        </>
    )
}
