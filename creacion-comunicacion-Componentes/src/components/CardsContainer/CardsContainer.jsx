import React, { useEffect, useState } from 'react'
import { articulosGamer } from '../../js/fakeData'
import { ProductCard } from '../ProductCard/ProductCard';
import s from './CardsContainer.module.css'

export const CardsContainer = () => {
    const [data, setData] = useState(articulosGamer)

    //Reducir el stock y hacer comprobacion para que no siga en numeros negativos
    const onHandleBuy = (id) => {
        const newProducts = data.map(product => {
            if (product.id === id) {
                if (product.stock > 0) {
                    return { ...product, stock: product.stock - 1 }
                }
            }
            return product
        })
        setData(newProducts)
    }
    return (
        <main className={s.main}>
            {
                data.map((product) => {
                    return (
                        <ProductCard key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            img={product.picture}
                            price={product.price}
                            stock={product.stock}
                            onHandleBuy={onHandleBuy}
                        />
                    )
                })
            }
        </main>
    )
}
