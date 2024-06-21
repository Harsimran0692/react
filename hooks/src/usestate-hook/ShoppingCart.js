import React, {useState} from 'react';

const ShoppingCart = () => {
    const [cart, setcart] = useState([]);
    const addItem = (item) => {
        setcart([
            ...cart,
            {
                ...item,
                quantity: 1
            }])
    }
    const removeItem = (id) => {
        const newCart = cart.slice();
        newCart.splice(id, 1);
        setcart(newCart);
    }
    const updateQuantity = (id, value) => {
        const newCart = cart.slice();
        newCart[id].quantity = value;
        setcart(newCart);
    }

    const totalAmount = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
    

   return(
    <div>
        <button onClick={() => addItem({itemName: 'Item 1', price: 10})}>Add Item 1</button>
        <button onClick={() => addItem({itemName: 'Item 2', price: 20})}>Add Item 2</button>
        <ul>
            {cart.map((data, id) => (    
                <li key={id}>
                    {data.itemName} ${data.price} * <input type='number' value={data.quantity} onChange={(e) => updateQuantity(id, Number(e.target.value))}/>
                    <button onClick={() => removeItem(id)}>Remove</button>
                </li>
            ))}
        </ul>
        <p>Total: ${totalAmount}</p>
    </div>
   )
}

export default ShoppingCart