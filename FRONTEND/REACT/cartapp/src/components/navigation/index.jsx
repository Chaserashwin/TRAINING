import { useState } from 'react';
import styles from './navigation.module.css';
import Modal from '../ui/modal';
import Cart from './../cart';
const Navigation = () => {
  
  const [showModal, setShowModal] = useState(false)
  
  const modalCloseHandler = () => {
    setShowModal(false);
  }

  return (
    <div className={styles.navigation}>
      <div className="container">
        <nav>
          <h2>EShop</h2>
          <button onClick={() => { setShowModal(true)}}>Cart</button>
        </nav>
      </div>
      <Modal isOpen={showModal} onClose={modalCloseHandler}>
        <Cart/>
      </Modal>
      
    </div>
  )
}

export default Navigation
