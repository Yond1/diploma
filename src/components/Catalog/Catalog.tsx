import React, { FC, useEffect, useState } from 'react'
import {
    useGetCatalogQuery,
    useGetCategoriesQuery,
} from 'redux/API/getItems'
import Loader from 'components/Loader'
import { useDebouce } from 'hooks'
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks'
import { getData, getTextInput } from 'redux/slices/MainSlice'
import CartItems from 'components/CartItems'



interface Catalog {
    isFormDisabled?: boolean
}


export const Catalog: FC<Catalog> = ({ isFormDisabled = true }) => {
    const dispatch = useAppDispatch()
    const [offset, setOffset] = useState<number>(0)
    const [changeValue, setChangeValue] = useState<string>('')
    const debounce = useDebouce(changeValue)
    const { data: mainData, text } = useAppSelector(state => state.main)
    const [currCategory, setCurrCategory] = useState(0)
    const { data: categories } = useGetCategoriesQuery()
    const { data: catalogData, isFetching, isLoading, isError } = useGetCatalogQuery([offset, currCategory, debounce])


    const onHandleLoadItems = (e: React.MouseEvent) => {
        if (offset % 6 !== 0) {
            setOffset(prev => prev = prev)
        } else {
            setOffset(prev => prev += 6)
        }
    }

    useEffect(() => {
        setChangeValue(prev => prev = text)
    }, [text])

    useEffect(() => {
        dispatch(getData(catalogData))
    }, [catalogData])

    const onChangeSearch = (str: string) => {
        setChangeValue(str)
    }
    const onHandleCategory = (category: any) => {
        setOffset(prev => prev = 0)
        setCurrCategory(prev => prev = category)
    }
    const onHandleResetFilter = () => {
        setOffset(prev => prev = 0)
        setCurrCategory(prev => prev = 0)
    }

    return (
        <main>
            {isError && <h1>{'Fetch Error'}</h1>}
            {isLoading && <Loader />}
            {!isLoading && !isError && <div className="row">
                <div className="col">
                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        {!isFormDisabled && <form className="catalog-search-form form-inline">
                            <input
                                value={changeValue}
                                onChange={(e) => onChangeSearch(e.target.value)}
                                className="form-control"
                                placeholder="Поиск" />
                        </form>}
                        <ul className="catalog-categories nav justify-content-center">
                            <li className="nav-item">
                                <a
                                    onClick={onHandleResetFilter}
                                    className={`nav-link${currCategory === 0 ? ' active' : ''}`}>Все</a>
                            </li>
                            {categories?.map(category => {
                                return (
                                    <li
                                        key={category.id} className="nav-item">
                                        <a
                                            onClick={() => onHandleCategory(category.id)}
                                            className={`nav-link${currCategory === category.id ? ' active' : ''}`}>{category.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        {isFetching && <Loader />}
                        {!isFetching && <CartItems data={mainData} />}
                        {!isFetching && <div className="text-center">
                            <button
                                disabled={catalogData!.length < 6 || catalogData === undefined ? true : false}
                                onClick={onHandleLoadItems}
                                className="btn btn-outline-primary">Загрузить ещё</button>
                        </div>}
                    </section>
                </div>
            </div>}
        </main>
    )
}
