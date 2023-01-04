import { nanoid } from "@reduxjs/toolkit"
import { IItem, ISize } from "helpers/models"
import { FC, useState } from "react"
import { useParams } from "react-router"
import { useGetItemQuery } from "redux/API/getItems"
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks"
import { addCart } from "redux/slices/CartSlice"

interface ItemProps {
    id: any
}

export const Item: FC<ItemProps> = ({ id }) => {
    const { itemId } = useParams()
    const { data: item } = useGetItemQuery(itemId)
    const dispatch = useAppDispatch()
    const [size, setSize] = useState<string>()
    const [value, setValue] = useState<number>(1)

    const onHandleAddCart = (item: IItem<ISize>) => {
        let result = {
            id: nanoid(),
            title: item.title,
            size: size,
            count: value,
            price: item.price,
            totalPrice: item.price * value,
        }
        if (!size) {

        }
        dispatch(addCart(result))
    }

    const onHandleSize = (x: string) => {
        setSize(prev => prev = x)
    }

    return (
        <section className="catalog-item">
            <h2 className="text-center">{item?.title}</h2>
            <div className="row">
                <div className="col-5">
                    <img src={item?.images[0]}
                        className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{item?.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{item?.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{item?.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{item?.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{item?.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{item?.reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <p>Размеры в наличии: {item?.sizes.map((item, indx) => {
                            return (
                                <span
                                    onClick={() => onHandleSize(item!.size)}
                                    key={indx} className={`catalog-item-size ${(item!.size === size) && 'selected'}`}><a>{item!.size}</a></span>
                            )
                        })} </p>
                        <p>Количество: <span className="btn-group btn-group-sm pl-2">
                            <button
                                onClick={() => setValue(prev => {
                                    return (prev <= 1) ? prev = 1 : prev = prev - 1
                                })}
                                className="btn btn-secondary">-</button>
                            <span className="btn btn-outline-primary">{value}</span>
                            <button
                                onClick={() => setValue(prev => {
                                    return (prev >= 10) ? prev = 10 : prev = prev + 1
                                })}
                                className="btn btn-secondary">+</button>
                        </span>
                        </p>
                    </div>
                    <button
                        disabled={size ? false : true}
                        onClick={() => { onHandleAddCart(item!) }}
                        className="btn btn-danger btn-block btn-lg">В корзину</button>
                </div>
            </div>
        </section>
    )
}
