import Modal from "./Modal";
import { useState } from "react";

export default function Personal({ data, set }) {
  const handlePersonalData = (updatedData) => {
    const updatedPersonal = { ...data, ...updatedData };
    set(updatedPersonal);
  };

  const showPersonalInfo = (
    <div key={data.id} className="personal-container card">
      <ul>
        <li>{data.fullName}</li>
        <li>{data.email}</li>
        <li>{data.phone}</li>
        <li>{data.country}</li>
      </ul>
      <div className="crud">
        <Modal
          type="edit"
          section="Personal"
          handleData={handlePersonalData}
          currentData={data}
        />
      </div>
    </div>
  );

  return <>{showPersonalInfo}</>;
}
