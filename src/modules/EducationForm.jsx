import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function EducationForm({
  type,
  handleData,
  currentData,
  closeModal,
}) {
  const initialFormData = {
    id: uuidv4(),
    degree: "",
    school: "",
    country: "",
    startDate: "",
    endDate: "",
  };

  const [formData, setFormData] = useState(
    type === "edit" ? currentData : initialFormData
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleData(formData);
    closeModal();
  };
  return (
    <div>
      {type === "new" && <h1>Add new Education</h1>}
      {type === "edit" && <h1>Edit Education</h1>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />

        <label htmlFor="school">School/University:</label>
        <input
          type="text"
          id="school"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
        />

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="month"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          placeholder="e.g., March 2019"
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          placeholder="e.g., July 2015"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
