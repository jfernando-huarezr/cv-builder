import { useState } from "react";
import Modal from "./Modal";
import { formatDate } from "./helpers";
import { createDataUpdater } from "./helpers";

export default function Experience({ data, set }) {
  const handleExperienceData = createDataUpdater(data, set);

  const handleDelete = (dataId) => {
    const newData = data.filter(
      (experienceInfo) => experienceInfo.id !== dataId
    );
    set(newData);
  };

  const showExperienceInfo = data.map((experienceInfo) => {
    return (
      <div key={experienceInfo.id} className="card">
        <div className="section-container">
          <div>{experienceInfo.company}</div>
          <div>{experienceInfo.location}</div>
        </div>
        <div className="section-container">
          <div>
            <i>{experienceInfo.position}</i>
          </div>
          <div>{`${formatDate(experienceInfo.startDate)} - ${formatDate(
            experienceInfo.endDate
          )}`}</div>
        </div>
        <div className="crud">
          <div className="crud-buttons">
            <Modal
              type="edit"
              section="Experience"
              handleData={handleExperienceData}
              currentData={experienceInfo}
            />
            <Modal
              type="delete"
              handleData={handleDelete}
              currentData={experienceInfo.id}
            />
          </div>
        </div>
      </div>
    );
  });
  return <>{showExperienceInfo}</>;
}
