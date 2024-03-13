import Modal from "./Modal";
import { useState } from "react";

export default function Personal({ data }) {
  const [personalData, setPersonalData] = useState(data);

  const handlePersonalData = (updatedData) => {
    const updatedPersonal = { ...personalData, ...updatedData };
    setPersonalData(updatedPersonal);
  };

  const showPersonalInfo = (
    <div key={personalData.id} className="personal-container card">
      <ul>
        <li>{personalData.fullName}</li>
        <li>{personalData.email}</li>
        <li>{personalData.phone}</li>
        <li>{personalData.country}</li>
      </ul>
      <Modal
        type="edit"
        section="Personal"
        handleData={handlePersonalData}
        currentData={personalData}
      />
    </div>
  );

  return <>{showPersonalInfo}</>;
}
