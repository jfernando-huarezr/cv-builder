import Personal from "./modules/Personal";
import Education from "./modules/Education";
import Experience from "./modules/Experience";
import Modal from "./modules/Modal";

const sectionOrder = ["personalData", "education", "work"];

export default function Resume({ resumeInfo }) {
  const sections = sectionOrder.map((sectionKey) => {
    const sectionData = resumeInfo[sectionKey];
    return (
      <section key={sectionKey}>
        <h1>
          {sectionKey === "personalData"
            ? ""
            : sectionKey === "education"
            ? "Education"
            : "Experience"}
        </h1>
        {sectionKey === "personalData" && <Personal data={sectionData} />}
        {sectionKey === "education" && <Education data={sectionData} />}
        {sectionKey === "work" && <Experience data={sectionData} />}
      </section>
    );
  });

  return <>{sections}</>;
}
