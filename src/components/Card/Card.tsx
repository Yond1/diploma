import { FC } from "react"
import { Link } from "react-router-dom"

interface Card {
    img: string,
    name: string,
    price: number,
    id: number
}

export const Card: FC<Card> = ({ img, name, price, id }) => {


    return (
        <div className="col-4">
            <div className="card catalog-item-card">
                <img src={img}
                    className="card-img-top" style={{ height: 340 }} alt="Босоножки 'MYER'" />
                <div className="card-body">
                    <p className="card-text">{name}</p>
                    <p className="card-text">{price} руб</p>
                    <Link to={`/items/${id}`}><a className="btn btn-outline-primary">Заказать</a></Link>
                </div>
            </div>
        </div>
    )
}
