import { useState } from "react";
import closeIcon from "../../assets/close-btn-white.svg";
import "./ItemModal.css";

function ItemModal({ activeModal, handleClose, card, handleDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const onClose = () => {
    setShowConfirm(false);
    handleClose();
  };

  const onConfirmDelete = () => {
    handleDelete(card);
    setShowConfirm(false);
  };

  return (
    <div className={`modal ${activeModal === "preview" && "modal__opened"}`}>
      <div
        className={`modal__content ${
          showConfirm
            ? "modal__content_type_confirm"
            : "modal__content_type_image"
        }`}
      >
        <button
          onClick={onClose}
          type="button"
          className={`modal__close ${
            showConfirm ? "modal__close_type_confirm" : ""
          }`}
        >
          <img
            src={closeIcon}
            alt="Close modal"
            className="modal__close-icon"
          />
        </button>

        {!showConfirm ? (
          <div className="modal__image-container">
            <img src={card.imageUrl} alt={card.name} className="modal__image" />
            <div className="modal__footer">
              <div className="modal__caption-container">
                <h2 className="modal__caption">{card.name}</h2>
                <p className="modal__weather">Weather: {card.weather}</p>
              </div>
              <button
                type="button"
                className="modal__delete-btn"
                onClick={() => setShowConfirm(true)}
              >
                Delete item
              </button>
            </div>
          </div>
        ) : (
          <div className="modal__confirm-container">
            <p className="modal__confirm-text">
              Are you sure you want to delete this item?
              <br />
              This action is irreversible.
            </p>
            <button
              type="button"
              className="modal__confirm-btn"
              onClick={onConfirmDelete}
            >
              Yes, delete item
            </button>
            <button
              type="button"
              className="modal__cancel-btn"
              onClick={() => setShowConfirm(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemModal;
