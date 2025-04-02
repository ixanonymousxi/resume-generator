import { useState } from 'react'
import { ResumeEditor, ResumePreview } from './PageParts'
import './App.css'

function App() {

  const [fields, setFields] = useState(() => {
    const storedFields = localStorage.getItem("fields");
    return storedFields ? JSON.parse(storedFields) : {
      header: [{
        val: "Susie Smith",
        label: "Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
        id: crypto.randomUUID()
      }, {
        val: "Job Title",
        label: "Title",
        type: "text",
        placeholder: "Enter your job title",
        required: true,
        id: crypto.randomUUID()
      }, {
        val: "555.555.5555",
        label: "Phone",
        type: "text",
        placeholder: "Enter your phone number",
        required: true,
        id: crypto.randomUUID()
      }, {
        val: "email@emailaddress.com",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        required: true,
        id: crypto.randomUUID()
      }, {
        val: "yourwebsite.com",
        label: "Website",
        type: "url",
        placeholder: "Enter your portfolio link",
        required: false,
        id: crypto.randomUUID()
      }, {
        val: "github.com/yourusername",
        label: "Github",
        type: "url",
        placeholder: "Enter your Github link",
        required: false,
        id: crypto.randomUUID()
      }, {
        val: "linkedin.com/in/firstname-lastname-0000000a/",
        label: "LinkedIn",
        type: "url",
        placeholder: "Enter yourLinkedIn Link",
        required: false,
        id: crypto.randomUUID()
      }],
      skills: [{
        val: "Skill 1",
        label: "Skill 1",
        type: "text",
        placeholder: "Enter a skill",
        required: false,
        id: crypto.randomUUID()
      }, {
        val: "Skill 2",
        label: "Skill 2",
        type: "text",
        placeholder: "Enter a skill",
        required: false,
        id: crypto.randomUUID()
      }, {
        val: "Skill 3",
        label: "Skill 3",
        type: "text",
        placeholder: "Enter a skill",
        required: false,
        id: crypto.randomUUID()
      }, {
        val: "Skill 4",
        label: "Skill 4",
        type: "text",
        placeholder: "Enter a skill",
        required: false,
        id: crypto.randomUUID()
      }, {
        val: "Skill 5",
        label: "Skill 5",
        type: "text",
        placeholder: "Enter a skill",
        required: false,
        id: crypto.randomUUID()
      }, {
        val: "Skill 6",
        label: "Skill 6",
        type: "text",
        placeholder: "Enter a skill",
        required: false,
        id: crypto.randomUUID()
      }],
      education: [{
        legend: "Education 1",
        id: crypto.randomUUID(),
        inputs: [{
          val: "Institution",
          label: "Institution",
          type: "text",
          placeholder: "Enter an institution",
          required: false,
          id: crypto.randomUUID()
        }, {
          val: "Degree Example",
          label: "Degree/Certification",
          type: "text",
          placeholder: "Enter a degree or certification",
          required: false,
          id: crypto.randomUUID()
        }, {
          val: new Date(),
          label: "Date Acquired",
          type: "date",
          required: false,
          id: crypto.randomUUID()
        }]
      }, {
        legend: "Education 2",
        id: crypto.randomUUID(),
        inputs: [{
          val: "Institution",
          label: "Institution",
          type: "text",
          placeholder: "Enter an institution",
          required: false,
          id: crypto.randomUUID()
        }, {
          val: "Degree Example",
          label: "Degree/Certification",
          type: "text",
          placeholder: "Enter a degree or certification",
          required: false,
          id: crypto.randomUUID()
        }, {
          val: new Date(),
          label: "Date Acquired",
          type: "date",
          required: false,
          id: crypto.randomUUID()
        }]
      }
      ],
      experience: [{
        legend: "Experience 1",
        id: crypto.randomUUID(),
        inputs: {
          title: [{
            val: "Company/Project",
            label: "Company/Project",
            type: "text",
            placeholder: "Enter a company or project",
            required: false,
            id: crypto.randomUUID()
          }, {
            val: new Date(),
            label: "Start Date",
            type: "date",
            required: false,
            id: crypto.randomUUID()
          }, {
            val: new Date(),
            label: "End Date",
            type: "date",
            required: false,
            id: crypto.randomUUID()
          }, {
            val: "Title",
            label: "Title",
            type: "text",
            placeholder: "Enter your title",
            required: false,
            id: crypto.randomUUID()
          }],
          bullets: [{
            val: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            label: "Bullet 1",
            type: "text",
            placeholder: "Describe your job or project duties",
            required: false,
            id: crypto.randomUUID()
          }]
        }
      }]
    };
  });

  return (
    <>
      <ResumeEditor fields={fields} setFields={setFields} />
      <ResumePreview fields={fields} />
    </>
  )
}

export default App
