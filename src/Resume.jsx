import Personal from "./modules/Personal";
import Education from "./modules/Education";
import Experience from "./modules/Experience";
import Modal from "./modules/Modal";

export default function Resume({ data }) {
  const sections = data.map((element) => {
    return (
      <section key={element.id}>
        <h1>{element.id}</h1>
        {element.id === "Personal Data" && <Personal data={element.data} />}
        {element.id === "Education" && <Education data={element.data} />}
        {element.id === "Experience" && <Experience data={element.data} />}
      </section>
    );
  });

  return <>{sections}</>;
}
