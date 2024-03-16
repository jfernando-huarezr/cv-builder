import { useState } from "react";

export default function ExperienceForm({
  type,
  handleData,
  currentData,
  closeModal,
}) {
  const [formData, setFormData] = useState(currentData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleData(formData);
    closeModal();
  };
  return (
    <div>
      {type === "new" && <h1>Add new Work Experience</h1>}
      {type === "edit" && <h1>Edit Work Experience</h1>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={type === "edit" ? formData.position : ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={type === "edit" ? formData.company : ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="month"
          id="startDate"
          name="startDate"
          value={type === "edit" ? formData.startDate : ""}
          onChange={handleChange}
          placeholder="e.g., January 2023"
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={type === "edit" ? formData.endDate : ""}
          onChange={handleChange}
          placeholder="e.g., December 2023"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
