import classes from './product.module.css';
const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
];
function Product({AddToCart,name}) {
    return (
      <>
      <h2 style={{textAlign:'center'}}>{name}</h2>
      <div className={classes.product}>
        {products.map((product,index)=>{
            return(
                <div key={index} className={classes.product_child}>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <button onClick={() => AddToCart(product)}>Add to cart</button>
            </div>
            )
        })}
      </div>
      </>
    );
  }
  export default Product;