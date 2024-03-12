export default function ExperienceForm() {
  return (
    <div>
      <h1>Add Experience Details</h1>
      <form>
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" required />

        <label htmlFor="company">Company:</label>
        <input type="text" id="company" name="company" required />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="month"
          id="startDate"
          name="startDate"
          placeholder="e.g., January 2023"
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          placeholder="e.g., December 2023"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
