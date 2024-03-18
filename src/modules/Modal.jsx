import { useState } from "react";
import editImg from "../assets/edit.svg";
import deleteImg from "../assets/delete.svg";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ConfirmDelete from "./ConfirmDelete";
import PersonalForm from "./PersonalForm";

export default function Modal({ type, section, handleData, currentData }) {
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
        {type === "edit" && "Edit"}
        {type === "delete" && "Delete"}
        {type === "new" && `${section}+`}
      </button>
      {isOpen && (
        <div className="overlay">
          <div className="modal-container">
            {section === "Education" && (
              <EducationForm
                type={type}
                handleData={handleData}
                currentData={currentData}
                closeModal={closeModal}
              />
            )}
            {section === "Experience" && (
              <ExperienceForm
                type={type}
                handleData={handleData}
                currentData={currentData}
                closeModal={closeModal}
              />
            )}
            {section === "Personal" && (
              <PersonalForm
                type={type}
                handleData={handleData}
                currentData={currentData}
                closeModal={closeModal}
              />
            )}
            {type === "delete" && (
              <ConfirmDelete
                handleData={handleData}
                currentData={currentData}
                closeModal={closeModal}
              />
            )}

            <div className="btn-close-modal">
              <button onClick={closeModal}>x</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
