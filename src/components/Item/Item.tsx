import { FC } from "react"
import { useParams } from "react-router"
import { useGetItemQuery } from "redux/API/getItems"

interface Item {
    id: any
}

export const Item: FC<Item> = ({ id }) => {

    const { itemId } = useParams()

    const { data: item } = useGetItemQuery(itemId)

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
                                <span key={indx} className="catalog-item-size selected">{!item}</span>
                            )
                        })} </p>
                        <p>Количество: <span className="btn-group btn-group-sm pl-2">
                            <button className="btn btn-secondary">-</button>
                            <span className="btn btn-outline-primary">1</span>
                            <button className="btn btn-secondary">+</button>
                        </span>
                        </p>
                    </div>
                    <button className="btn btn-danger btn-block btn-lg">В корзину</button>
                </div>
            </div>
        </section>
    )
}
