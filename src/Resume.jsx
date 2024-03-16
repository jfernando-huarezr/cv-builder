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
        <section key="personalData">
          <Personal data={personal} set={setPersonal} />
        </section>
        <section key="education">
          <h2>Education</h2>
          <Education data={education} set={setEducation} />
        </section>
        <section key="work">
          <h2>Experience</h2>
          <Experience data={work} set={setWork} />
        </section>
      </main>
    </>
  );
}
