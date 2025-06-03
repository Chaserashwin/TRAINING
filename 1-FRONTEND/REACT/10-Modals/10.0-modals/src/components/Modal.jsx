import React, { useState } from "react";
import ShowModal from "./ShowModal";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <ShowModal closeModal={closeModal} />}

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
