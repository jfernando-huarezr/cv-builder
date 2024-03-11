import { useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="Edit">
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="overlay">
          <div className="modal-container">
            {/* Your form inputs go here */}
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}
