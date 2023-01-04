import { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks'
import { deleteItem, ICart } from 'redux/slices/CartSlice'



export const Cart: FC = () => {

    const dispatch = useAppDispatch()
    const { items } = useAppSelector(state => state.cart)

    const onDeleteItem = (id: number | string) => {
        dispatch(deleteItem(id))
    }

    console.log(items)

    return (
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Размер</th>
                        <th scope="col">Кол-во</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Итого</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, indx) => {
                        return (
                            <tr key={item.id}>
                                <td scope="row">{indx + 1}</td>
                                <td><a>{item.title}</a></td>
                                <td>{item.size}</td>
                                <td>{item.count}</td>
                                <td>{item.price}</td>
                                <td>{item.totalPrice}</td>
                                <td>
                                    <button
                                        onClick={() => onDeleteItem(item.id)}
                                        className="btn btn-outline-danger btn-sm">Удалить</button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td colSpan={5} className="text-right">Общая стоимость</td>
                        <td>{items.reduce((ac, cv) => ac + cv.totalPrice, 0)}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
