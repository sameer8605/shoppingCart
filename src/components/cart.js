import classes from './cart.module.css'
function Cart({items,removeFromCart}) {
    return (
      <div >
        <h2>Your Cart</h2>
        <div className={classes.cart}>
        { items.length >0? items.map((product, index) => (
          <div className={classes.cart_child}>
          <h2 key={index}>{product.name}</h2>
          <h3>{product.price}</h3>
          <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        )):"no data found"}
        </div>
      </div>
    );
  }
  export default Cart;