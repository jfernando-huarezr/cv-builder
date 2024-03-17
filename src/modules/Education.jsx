import { useState } from "react";
import Modal from "./Modal";
import { formatDate } from "./helpers";
import { createDataUpdater } from "./helpers";

export default function Education({ data, set }) {
  const handleEducationData = createDataUpdater(data, set);
  const handleDelete = (dataId) => {
    const newData = data.filter((element) => element.id !== dataId);
    set(newData);
  };

  const showEducationInfo = data.map((educationInfo) => {
    return (
      <div key={educationInfo.id} className="card">
        <ul>
          <li>{educationInfo.degree}</li>
          <li>{educationInfo.school}</li>
          <li>{educationInfo.country}</li>
          <li>{formatDate(educationInfo.startDate)}</li>
          <li>{formatDate(educationInfo.endDate)}</li>
        </ul>
        <div className="crud">
          <Modal
            type="edit"
            section="Education"
            handleData={handleEducationData}
            currentData={educationInfo}
          />
          <Modal
            type="delete"
            handleData={handleDelete}
            currentData={educationInfo.id}
          />
        </div>
      </div>
    );
  });
  return <>{showEducationInfo}</>;
}
