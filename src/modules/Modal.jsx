import { useState } from "react";
import editImg from "../assets/edit.svg";
import deleteImg from "../assets/delete.svg";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

export default function Modal({ type, section }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`modal ${type}`}>
      <button className="modal-button" onClick={openModal}>
        {type === "edit" && <img src={editImg} alt="Edit" />}
        {type === "delete" && <img src={deleteImg} alt="Delete" />}
        {type === "new" && `${section}+`}
      </button>
      {isOpen && (
        <div className="overlay">
          <div className="modal-container">
            {section === "Education" && <EducationForm />}
            {section === "Experience" && <ExperienceForm />}
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}
