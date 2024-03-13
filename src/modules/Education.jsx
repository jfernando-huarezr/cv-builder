import { useState } from "react";
import Modal from "./Modal";
import { formatDate } from "./helpers";

export default function Education({ data }) {
  const [educationData, setEducationData] = useState(data);

  const handleEducationData = (updatedData) => {
    setEducationData(
      educationData.map((educationInfo) =>
        educationInfo.id === updatedData.id
          ? { ...educationInfo, ...updatedData }
          : educationInfo
      )
    );
  };

  const showEducationInfo = educationData.map((educationInfo) => {
    return (
      <div key={educationInfo.id} className="card">
        <ul>
          <li>{educationInfo.degree}</li>
          <li>{educationInfo.school}</li>
          <li>{educationInfo.country}</li>
          <li>{formatDate(educationInfo.startDate)}</li>
          <li>{formatDate(educationInfo.endDate)}</li>
        </ul>
        <Modal
          type="edit"
          section="Education"
          handleData={handleEducationData}
          currentData={educationInfo}
        />
      </div>
    );
  });
  return <>{showEducationInfo}</>;
}
