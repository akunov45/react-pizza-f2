

import { useContext } from 'react'
import './CartPage.css'
import { CART_CONTEXT } from '../../context/CartContext'

const CartPage = () => {
    const { cart } = useContext(CART_CONTEXT)

    console.log(cart);

    if(cart.length === 0 ){
        return (
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: 'column',
                height: "100vh"
            }}>
                <h3>Ваша корзина пока что пуста 🙄</h3>
                <p>Пора добавлять пиццы в корзину и оформлять заказ</p>
            </div> 
        )
    }
    

    return (
        <div className='container'>
            CartPage 333
        </div>
    )
}

export default CartPage