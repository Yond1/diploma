import { useEffect, useState, FC } from 'react'

import Card from 'components/Card'
import { IItem, ISize } from 'helpers/models'

interface CartItemsProps {
    data: IItem<ISize>[]
}

export const CartItems: FC<CartItemsProps> = ({ data }) => {

    const [state, setState] = useState<IItem<ISize>[]>([])

    useEffect(() => {
        data && setState(prev => prev = data)
    }, [data])

    return (
        <div className="row min-vh-80">
            {data && state.map(item => {
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
    )
}
