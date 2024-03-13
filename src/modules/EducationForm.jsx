import { useState } from "react";

export default function EducationForm({
  type,
  handleData,
  currentData,
  closeModal,
}) {
  console.log(currentData);
  const [formData, setFormData] = useState(currentData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div>
      {type === "new" && <h1>Add new Education</h1>}
      {type === "edit" && <h1>Edit Education</h1>}

      <form>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={type === "edit" ? formData.degree : ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="school">School/University:</label>
        <input
          type="text"
          id="school"
          name="school"
          value={type === "edit" ? formData.school : ""}
          onChange={handleChange}
          required
        />

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={type === "edit" ? formData.country : ""}
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
          placeholder="e.g., March 2019"
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={type === "edit" ? formData.endDate : ""}
          onChange={handleChange}
          placeholder="e.g., July 2015"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
