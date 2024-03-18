import Modal from "./Modal";
import { useState } from "react";

export default function Personal({ data, set }) {
  const handlePersonalData = (updatedData) => {
    const updatedPersonal = { ...data, ...updatedData };
    set(updatedPersonal);
  };

  const showPersonalInfo = (
    <div key={data.id} className="personal-container card">
      <div className="main-info">
        <h1>{data.fullName}</h1>
        <div className="personal-extra-info">
          <ul>
            <li>{data.email}</li>
            <li>{data.phone}</li>
            <li>{data.country}</li>
          </ul>
        </div>
      </div>

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
