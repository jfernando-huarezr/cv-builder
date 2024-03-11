export default function Education({ data }) {
  const showEducationInfo = data.map((element) => {
    return (
      <div key={element.id} className="card">
        <ul>
          <li>{element.degree}</li>
          <li>{element.school}</li>
          <li>{element.country}</li>
          <li>{element.startDate}</li>
          <li>{element.endDate}</li>
        </ul>
      </div>
    );
  });
  return <>{showEducationInfo}</>;
}
