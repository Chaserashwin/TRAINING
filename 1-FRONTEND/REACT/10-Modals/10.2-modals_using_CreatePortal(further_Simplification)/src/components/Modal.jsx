import React, { useState } from "react";
import ShowModal from "./ShowModal";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleCloseButton = <button onClick={closeModal}>Accept it</button>;

  const mainModal = (
    <ShowModal closeModal={closeModal} handleCloseButton={handleCloseButton}>
      <h2>STAY TUNED</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, autem
        labore aperiam alias modi vero suscipit vel voluptas obcaecati a
        reiciendis perspiciatis molestiae, laboriosam at aliquid fugiat sequi
        harum! Dignissimos, aspernatur alias. Necessitatibus!
      </p>
    </ShowModal>
  );

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && mainModal}

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        facere voluptatum voluptatem, eligendi eius quibusdam minus, dolores
        quasi incidunt debitis quidem. In, unde perferendis veniam eligendi
        quaerat assumenda facere.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        facere voluptatum voluptatem, eligendi eius quibusdam minus, dolores
        quasi incidunt debitis quidem. In, unde perferendis veniam eligendi
        quaerat assumenda facere.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        facere voluptatum voluptatem, eligendi eius quibusdam minus, dolores
        quasi incidunt debitis quidem. In, unde perferendis veniam eligendi
        quaerat assumenda facere.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        facere voluptatum voluptatem, eligendi eius quibusdam minus, dolores
        quasi incidunt debitis quidem. In, unde perferendis veniam eligendi
        quaerat assumenda facere.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        facere voluptatum voluptatem, eligendi eius quibusdam minus, dolores
        quasi incidunt debitis quidem. In, unde perferendis veniam eligendi
        quaerat assumenda facere.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        facere voluptatum voluptatem, eligendi eius quibusdam minus, dolores
        quasi incidunt debitis quidem. In, unde perferendis veniam eligendi
        quaerat assumenda facere.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        facere voluptatum voluptatem, eligendi eius quibusdam minus, dolores
        quasi incidunt debitis quidem. In, unde perferendis veniam eligendi
        quaerat assumenda facere.
      </div>
    </>
  );
};

export default Modal;
