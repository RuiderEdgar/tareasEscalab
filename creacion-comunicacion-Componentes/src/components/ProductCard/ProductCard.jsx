import React, { useEffect, useState } from 'react'
import s from './ProductCard.module.css'

export const ProductCard = ({ id, name, description, img, price, stock, onHandleBuy }) => {
    return (
        <article className={s.article}>
            <figure>
                <img src={img} alt="image product" />
            </figure>
            <section>
                <header>
                    <h3>{name}</h3>
                    <aside>
                        <span>${price}</span>
                        <span>Stock:{stock}</span>
                    </aside>
                </header>
                <main>
                    <p>{description}</p>
                </main>
                <button onClick={() => onHandleBuy(id)} disabled={stock === 0}>Comprar</button>
            </section>
        </article >
    )
}
