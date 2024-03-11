export default function Experience({ data }) {
  const showExperienceInfo = data.map((element) => {
    return (
      <div key={element.id} className="card">
        <ul>
          <li>{element.position}</li>
          <li>{element.company}</li>
          <li>{element.startDate}</li>
          <li>{element.endDate}</li>
        </ul>
      </div>
    );
  });
  return <>{showExperienceInfo}</>;
}
