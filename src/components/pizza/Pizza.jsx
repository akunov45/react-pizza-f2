

import './Pizza.css'
import { useContext } from 'react'
import { CART_CONTEXT } from '../../context/CartContext'

const Pizza = (props) => {
    const { pizzaData } = props
    const {setCart} = useContext(CART_CONTEXT)

    const addToCart = (pizza) => {
        // pizza  = {} []-length [].length - fn.length - "alex".length
        // ... Rest vs Spread 
        setCart((oldPizza) => {
            return [...oldPizza, pizza]
        })
    }

    // map, filter, sort, reduce
    return (
        <div className="container pizza-wrap">
            {pizzaData.map((item) => {
                return <div className="p-card" key={item.name} >
                    <div>
                        <img src={item.image} alt="" />
                    </div>
                    <div>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <div className='sizes'>
                            {item.sizes.map(s => <button key={s}>{s}</button>)}
                        </div>
                        <div className='crusts'>
                            {item.crusts.map(c => <button key={c}>{c}</button>)}
                        </div>
                        <div className='p-footer'>
                            <h4> {item.price} </h4>
                            <button onClick={()=>{
                                addToCart(item)
                            }}>В корзину</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Pizza
// rafce - component 