import { useState, useRef, useEffect } from 'react'
import './PageParts.css'
import { HeaderSection, SkillsSection, EducationSection, ExperienceSection } from '../components/Sections'
import { EducationEditor, HeaderEditor, SkillsEditor, ExperienceEditor } from '../components/EditorSections'

function ResumePreview({ fields }) {
  const pageRef = useRef(null); // Create a reference to the "page" div
  const [currentPage, setCurrentPage] = useState(0);
  const pageHeight = 588;
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.style.transform = `translateY(-${currentPage * pageHeight}px)`;
    }
  }, [currentPage]); // Runs whenever `currentPage` changes

  useEffect(() => {
    if (pageRef.current) {
      setMaxPages(Math.floor(pageRef.current.offsetHeight / pageHeight));
    }
  }, [fields]); // Runs whenever `fields' changes

  const nextPage = () => {
    setCurrentPage((prev) => (prev < maxPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <>
      <div className="preview-container">
        <div className="resume">
          <div className="overflow-wrapper">
            <div className="page" ref={pageRef}>
              <HeaderSection fields={fields.header} />

              <SkillsSection fields={fields.skills} />

              <EducationSection fields={fields.education} />

              <ExperienceSection fields={fields.experience} />
            </div>
          </div>
        </div>

        <div className="Pages">
          {currentPage > 0 && <button onClick={prevPage}>&#60; Previous Page </button>}
          {maxPages >= 1 && currentPage < maxPages && <button onClick={nextPage}>Next Page &#62;</button>}
        </div>
      </div>
    </>
  )
}

function ResumeEditor({ fields, setFields }) {
  const [index, setIndex] = useState(0);
  const sections = [
    <HeaderEditor fields={fields.header} setFields={setFields} />,
    <SkillsEditor fields={fields.skills} setFields={setFields} />,
    <EducationEditor fields={fields.education} setFields={setFields} />,
    <ExperienceEditor fields={fields.experience} setFields={setFields} />
  ];

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    console.log("clicked")
    localStorage.setItem("fields", JSON.stringify(fields));
    setIsSaved(true); // Show "Saved!" message
    setTimeout(() => {
      setIsSaved(false); // Hide it after 2 seconds
    }, 2000);
  };

  return (
    <>
      <div className="editor">
        <div className="wrapper">
          {sections[index]}

          <div className="button-wrapper">
            {index > 0 && <button onClick={() => { setIndex(index - 1) }}>&#60;</button>}
            <button className={`save ${isSaved ? "show-saved" : ""}`} onClick={handleSave}>Save</button>
            {index < sections.length-1 && <button onClick={() => { setIndex(index + 1) }}>&#62;</button>}
          </div>
        </div>
      </div>
    </>
  )
}

export { ResumePreview, ResumeEditor }
