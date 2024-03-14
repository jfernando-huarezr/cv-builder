import { useState } from "react";
import Modal from "./Modal";
import { formatDate } from "./helpers";
import { createDataUpdater } from "./helpers";

export default function Experience({ data }) {
  const [experienceData, setExperienceData] = useState(data);

  const handleExperienceData = createDataUpdater(
    experienceData,
    setExperienceData
  );

  const showExperienceInfo = experienceData.map((element) => {
    return (
      <div key={element.id} className="card">
        <ul>
          <li>{element.position}</li>
          <li>{element.company}</li>
          <li>{formatDate(element.startDate)}</li>
          <li>{formatDate(element.endDate)}</li>
        </ul>
        <Modal
          type="edit"
          section="Experience"
          handleData={handleExperienceData}
          currentData={element}
        />
      </div>
    );
  });
  return <>{showExperienceInfo}</>;
}
