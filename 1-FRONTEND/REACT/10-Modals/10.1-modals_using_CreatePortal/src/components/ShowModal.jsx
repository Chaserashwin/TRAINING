import { useEffect } from "react";
import ReactDOM from "react-dom";

const ShowModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>STAY TUNED</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, autem
          labore aperiam alias modi vero suscipit vel voluptas obcaecati a
          reiciendis perspiciatis molestiae, laboriosam at aliquid fugiat sequi
          harum! Dignissimos, aspernatur alias. Necessitatibus!
        </p>
        <button onClick={closeModal}>Accept it</button>
      </div>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default ShowModal;
