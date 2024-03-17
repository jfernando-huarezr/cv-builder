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
        <ul>
          <li>{experienceInfo.position}</li>
          <li>{experienceInfo.company}</li>
          <li>{formatDate(experienceInfo.startDate)}</li>
          <li>{formatDate(experienceInfo.endDate)}</li>
        </ul>
        <div className="crud">
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
    );
  });
  return <>{showExperienceInfo}</>;
}
