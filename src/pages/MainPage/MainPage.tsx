import { useEffect, useState } from 'react'
import { Card, Catalog, Loader } from 'components'
import { Item, Size } from 'helpers/models'
import { useGetCatalogQuery, useGetTopQuery } from 'redux/API/getItems'


export const MainPage = () => {

  const [topSales, setTopSales] = useState<Item<Size>[]>()
  const { isLoading, data: items, isError } = useGetTopQuery()
  const { data: catalogItems, isLoading: LoadCategory } = useGetCatalogQuery()

  useEffect(() => {
    setTopSales(prev => prev = items)
    console.log('render')
  }, [items])

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
      <Catalog items={catalogItems!} isLoading={LoadCategory} />
    </>
  )
}

