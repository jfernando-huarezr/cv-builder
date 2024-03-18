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
        <div className="section-container">
          <div>{educationInfo.school}</div>
          <div>{educationInfo.country}</div>
        </div>
        <div className="section-container">
          <div>
            <i>{educationInfo.degree}</i>
          </div>
          <div>{`${formatDate(educationInfo.startDate)} - ${formatDate(
            educationInfo.endDate
          )}`}</div>
        </div>

        <div className="crud">
          <div className="crud-buttons">
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
      </div>
    );
  });
  return <>{showEducationInfo}</>;
}
