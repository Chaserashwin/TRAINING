import styles from './cart.module.css';
import { useSelector } from 'react-redux';

const Cart = () => {

  const { products, cartTotal } = useSelector(state => state.cart);

  return (
    <div className={styles["cart-modal"]}>
      <header>
        <h2>Shopping Bag</h2>
      </header>
      <div className={styles["cart-modal-body"]}>
        {products.map(item => (
          <div className={styles["cart-item"]} key={item.id}>
            <button>x</button>
            <img src={item.thumbnail} alt="" />
            <h4>{item.title}</h4>
            <div className={styles["quantity"]}>
              <button>+</button>
              {item.amount}
              <button>-</button>
            </div>
            <p className={styles["price"]}>${item.price * item.amount}</p>
          </div>
        ))}
      </div>
      <footer>
        <h3>Total: ${cartTotal}</h3>
      </footer>
    </div>
  )
}

export default Cart;
