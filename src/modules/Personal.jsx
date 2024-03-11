export default function Personal({ data }) {
  const showPersonalInfo = data.map((element) => {
    return (
      <div key={element.id} className="card">
        <ul>
          <li>{element.fullName}</li>
          <li>{element.email}</li>
          <li>{element.phone}</li>
          <li>{element.country}</li>
        </ul>
      </div>
    );
  });
  return <>{showPersonalInfo}</>;
}
