export default function EducationForm() {
  return (
    <div>
      <h1>Add Education Details</h1>
      <form action="/submit" method="post">
        <label htmlFor="degree">Degree:</label>
        <input type="text" id="degree" name="degree" required />

        <label htmlFor="school">School/University:</label>
        <input type="text" id="school" name="school" required />

        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" required />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="month"
          id="startDate"
          name="startDate"
          placeholder="e.g., March 2019"
          required
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          placeholder="e.g., July 2015"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
