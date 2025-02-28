import { useState } from 'react'
import './PageParts.css'
import { HeaderSection, SkillsSection, EducationSection, ExperienceSection } from '../components/Sections'
import { EducationEditor, HeaderEditor, SkillsEditor, ExperienceEditor } from '../components/EditorSections'

function ResumePreview({ fields }) {

  return (
    <>
      <div className="preview-container">
        <div className="resume">
          <div className="overflow-wrapper">
            <HeaderSection fields={fields.header} />

            <SkillsSection fields={fields.skills} />

            <EducationSection fields={fields.education} />

            <ExperienceSection fields={fields.experience} />
          </div>
        </div>

        <div className="Pages">
          <button>Next Page &#62;</button>
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

  return (
    <>
      <div className="editor">
        <div className="wrapper">
          {sections[index]}

          <div className="button-wrapper">
            {index > 0 && <button onClick={() => { setIndex(index - 1) }}>&#60;</button>}
            <button className="save">Save</button>
            {index < sections.length-1 && <button onClick={() => { setIndex(index + 1) }}>&#62;</button>}
          </div>
        </div>
      </div>
    </>
  )
}

export { ResumePreview, ResumeEditor }
