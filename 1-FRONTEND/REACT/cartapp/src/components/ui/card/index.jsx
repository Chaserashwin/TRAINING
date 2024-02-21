import styles from './card.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './../../../slices/cartSlice'

const Card = ({ product }) => {
  const { id,thumbnail, title, brand, description, price, discountPercentage } = product;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const productToAdd = {
      id,
      title,
      thumbnail,
      price,
      amount: 1
    }

    dispatch(addToCart(productToAdd))

  }

  return (
    <div className={styles.card}>
      <div className={styles['card-header']}>
        <img src={thumbnail} alt={title} />
      </div>
      <div className={styles['card-body']}>
        <p className={styles.tag}>{brand}</p>
        <h3>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <p className={styles.price}>${price}<span>({discountPercentage}% off)</span></p>
        <button onClick={addToCartHandler}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
