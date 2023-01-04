import { useEffect, useState } from 'react'
import { Card, Catalog, Loader } from 'components'
import { IItem, ISize } from 'helpers/models'
import { useGetCatalogQuery, useGetTopQuery } from 'redux/API/getItems'
import { useAppDispatch } from 'redux/hooks/hooks'
import { getTextInput } from 'redux/slices/MainSlice'


export const MainPage = () => {

  const dispatch = useAppDispatch()
  const [topSales, setTopSales] = useState<IItem<ISize>[]>()
  const { isLoading, data: items } = useGetTopQuery()

  console.log('render')

  useEffect(() => {
    setTopSales(prev => prev = items)
  }, [items])

  useEffect(() => {
    dispatch(getTextInput(''))
  }, [])

  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className='row'>
          {isLoading && <Loader />}
          {topSales?.map(item => {
            return (
              <Card key={item.id} id={item.id} img={item.images[0]} name={item.title} price={item.price} />
            )
          })}
        </div>
      </section>
      <Catalog />
    </>
  )
}

