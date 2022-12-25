import Card from 'components/Card'
import { Item, Size } from '../../helpers/models'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useGetCategoriesQuery, useGetItemsByCategoryQuery, useGetItemsByNameQuery } from 'redux/API/getItems'
import Loader from 'components/Loader'
import { useDebouce } from 'hooks'



interface Catalog {
    items: Item<Size>[]
    isFormDisabled?: boolean
    isLoading: boolean
}


export const Catalog: FC<Catalog> = ({ isFormDisabled = true, items, isLoading }) => {
    const [changeValue, setChangeValue] = useState<string>('')
    const debounce = useDebouce(changeValue)
    const [data, setData] = useState<Item<Size>[] | undefined>(items)
    const [currCategory, setCurrCategory] = useState(0)
    const { data: categories } = useGetCategoriesQuery()
    const { data: catItems } = useGetItemsByCategoryQuery(currCategory)
    const { data: itemsByName } = useGetItemsByNameQuery(debounce)

    console.log(itemsByName)

    const onChangeSearch = (str: string) => {
        setChangeValue(str)
    }
    const onHandleCategory = (category: any) => {
        setCurrCategory(prev => prev = category)
    }
    const onHandleResetFilter = () => {
        setCurrCategory(prev => prev = 0)
    }
    useEffect(() => {
        if (debounce === '') {
            setData(prev => prev = catItems)
        } else {
            setData(prev => prev = itemsByName)
        }
    }, [catItems, debounce, itemsByName])

    return (
        <main>
            {isLoading && <Loader />}
            {!isLoading && <div className="row">
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
                        <div className="row">
                            {data!.length < 1 && 'Ничего не найдено'}
                            {data?.map(item => {
                                return (
                                    <Card
                                        key={item.id}
                                        id={item.id}
                                        img={item.images[0]}
                                        name={item.title}
                                        price={item.price} />
                                )
                            })}
                        </div>
                        <div className="text-center">
                            <button className="btn btn-outline-primary">Загрузить ещё</button>
                        </div>
                    </section>
                </div>
            </div>}
        </main>
    )
}
