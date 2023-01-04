import Loader from 'components/Loader'
import React, { useState, useEffect } from 'react'
import { usePostOrderItemsMutation } from 'redux/API/getItems'
import { useAppSelector } from 'redux/hooks/hooks'
import { ICart } from 'redux/slices/CartSlice'

export const Order = () => {
    interface IOrder {
        phone: string
        address: string
    }
    const { items } = useAppSelector(state => state.cart)
    console.log(items)
    const [orderItems, setOrederitems] = useState<Pick<ICart, 'id' | 'count' | 'price'>[]>([])
    const [addPost, { isLoading }] = usePostOrderItemsMutation()
    const [order, setOrder] = useState<IOrder>({
        phone: '',
        address: ''
    })
    const [checked, setChecked] = useState<boolean>(false)

    const onChangeCheckbox = () => {
        setChecked(prev => prev = !prev)
    }

    const onChangeOrderData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.id === 'phone' ? setOrder(prev => prev = { ...prev, phone: e.target.value }) : setOrder(prev => prev = { ...prev, address: e.target.value })
    }

    const onHandlerPostOrder = async (e: React.MouseEvent) => {
        e.preventDefault()
        await addPost({
            owner: {
                phone: order.phone,
                address: order.address
            },
            items: orderItems
        })
    }

    useEffect(() => {
        items.forEach(item => setOrederitems(prev => prev = [...prev, { id: item.id, price: item.price, count: item.count }]))
    }, [items])



    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card" style={{ minWidth: 30, margin: 0 }}>
                <form className="card-body">
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input
                            value={order.phone}
                            onChange={(e) => { onChangeOrderData(e) }}
                            className="form-control" id="phone" placeholder="Ваш телефон" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input
                            value={order.address}
                            onChange={(e) => { onChangeOrderData(e) }}
                            className="form-control" id="address" placeholder="Адрес доставки" />
                    </div>
                    <div className="form-group form-check">
                        <input
                            onChange={onChangeCheckbox}
                            checked={checked}
                            type="checkbox" className="form-check-input" id="agreement" />
                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                    </div>
                    {isLoading && <Loader />}
                    {!isLoading && <button
                        onClick={onHandlerPostOrder}
                        disabled={checked && order.phone && order.address ? false : true}
                        type="submit"
                        className="btn btn-outline-secondary">Оформить</button>}
                </form>
            </div>
        </section>
    )
}
