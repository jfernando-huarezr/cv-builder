import Personal from "./modules/Personal";
import { useState } from "react";
import Education from "./modules/Education";
import Experience from "./modules/Experience";
import Modal from "./modules/Modal";
import { resumeInfo } from "./data";

export default function Resume() {
  const [personal, setPersonal] = useState(resumeInfo.personalData);
  const [education, setEducation] = useState(resumeInfo.education);
  const [work, setWork] = useState(resumeInfo.work);

  const handleNewEducation = (newEducation) => {
    setEducation([...education, newEducation]);
  };
  const handleNewWork = (newWork) => {
    setWork([...work, newWork]);
  };

  return (
    <>
      <header>
        <h1>Resume Builder 1.0</h1>
        <nav>
          <Modal
            type="new"
            section="Education"
            handleData={handleNewEducation}
          />
          <Modal type="new" section="Experience" handleData={handleNewWork} />
        </nav>
      </header>
      <main>
        <section id="personal" key="personalData">
          <Personal data={personal} set={setPersonal} />
        </section>
        <section id="education" key="education">
          <h2>EDUCATION</h2>
          <Education data={education} set={setEducation} />
        </section>
        <section id="work" key="work">
          <h2>WORK EXPERIENCE</h2>
          <Experience data={work} set={setWork} />
        </section>
      </main>
    </>
  );
}
