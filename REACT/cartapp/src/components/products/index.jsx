import { useEffect, useState } from 'react';
import styles from './products.module.css'
import Card from '../ui/card';
import Loader from '../ui/loader';

const Products = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [productsData, setProductsData] = useState({
    products: [],
    total:0
  });
  const [limit, setLimit] = useState(10);

  const getProductsData = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const data = await response.json();
    setProductsData(data);
    setIsLoading(false);
  }
  
  const handleLoadMore = () => {
    setLimit(prev=>prev+10)
  }

  const LoadMoreHtml = productsData.products.length < productsData.total && (
    <div className={styles.loadmore}>
      {isLoading ? <Loader /> : <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
  
  useEffect(() => {
    setIsLoading(true);
    getProductsData();
  }, [limit])

  return (
    
    <div className={styles.products}>
        <div className="container">
          <div className={styles['products-grid']}>
            {
              productsData.products.length > 0 && (
                productsData.products.map((product) => {
                  return <Card key={product.id} product={product} />
                })
              )
            }
          </div>
        {LoadMoreHtml}
        </div>
      </div>
  )
}

export default Products
