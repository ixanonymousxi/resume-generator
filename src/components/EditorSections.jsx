import { useState } from 'react'
import { EditorInput, EditorFieldset } from './Inputs.jsx'
import '../Pages/PageParts.css'

function HeaderEditor({ fields, setFields }) {
    return (
        <>
            <h2>Profile</h2>
            {fields.map((field) => (
                <EditorInput field={field} setFields={setFields} section="header" key={field.id}/>
            ))}
        </>
    )
}


function SkillsEditor({ fields, setFields }) {
    const addInput = () => {
        setFields(prevFields => ({
            ...prevFields,
            skills: [
                ...prevFields.skills,
                {
                    val: "Skill " + (prevFields.skills.length + 1),
                    label: "Skill " + (prevFields.skills.length + 1),
                    type: "text",
                    placeholder: "Enter a skill",
                    required: false,
                    id: crypto.randomUUID()
                }
            ]
        }));
    }

    const deleteInput = (field) => {
        setFields(prevFields => {
            const newSkills = prevFields.skills.filter(f => f.label !== field.label);

            // Renumber "Skill X" labels, keeping user-entered values untouched
            return {
                ...prevFields,
                skills: newSkills.map((skill, index) => ({
                    ...skill,
                    label: skill.label.startsWith("Skill ") ? `Skill ${index + 1}` : skill.label,
                    val: skill.val.startsWith("Skill ") ? `Skill ${index + 1}` : skill.val
                }))
            };
        });
    };

    return (
        <>
            <h2>Skills</h2>
            <div className="inputs">
                {fields.map((field) => (
                    <EditorInput field={field} setFields={setFields} section="skills" onDelete={deleteInput} key={field.id} />
                ))}
            </div>

            <button className="add" onClick={addInput}>Add Skill +</button>
        </>
    )
}


function EducationEditor({ fields, setFields }) {
    const addInput = () => {
        setFields(prevFields => ({
            ...prevFields,
            education: [
                ...prevFields.education,
                {
                    legend: "Education " + (prevFields.education.length + 1),
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
            ]
        }));
    }

    const deleteInput = (field) => {
        setFields(prevFields => {
            const newEducation  = prevFields.education.filter(f => f.legend !== field.legend);

            // Renumber "Education X" labels, keeping user-entered values untouched
            return {
                ...prevFields,
                education: newEducation.map((edu, index) => ({
                    ...edu,
                    legend: `Education ${index + 1}`
                }))
            };
        });
    };

    return (
        <>
            <h2>Education</h2>
            <div className="inputs">
                {fields.map((field) => (
                    <EditorFieldset field={field} setFields={setFields} section="education" onDelete={deleteInput} key={field.id} />
                ))}
            </div>

            <button className="add" onClick={addInput}>Add Education +</button>
        </>
    )
}

function ExperienceEditor({ fields, setFields }) {
    const addInput = (type = "experience", field = {}) => {
        if(type === "bullet"){
            setFields(prevFields => {
                return {
                    ...prevFields,
                    experience: prevFields.experience.map(exp =>
                        exp.legend === field.legend ?
                            {
                                ...exp,
                                inputs: {
                                    ...exp.inputs,
                                    bullets: [
                                        ...exp.inputs.bullets,
                                        {
                                            val: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                            label: `Bullet ${exp.inputs.bullets.length + 1}`,
                                            type: "text",
                                            placeholder: "Describe your job or project duties",
                                            required: false,
                                            id: crypto.randomUUID()
                                        }
                                    ]
                                }
                            }
                            : exp
                    )
                };
            });
        }else{
            setFields(prevFields => ({
                ...prevFields,
                experience: [
                    ...prevFields.experience,
                    {
                        legend: "Experience " + (prevFields.experience.length + 1),
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
                    }
                ]
            }));
        }
    }

    const deleteInput = (field, label = "Experience") => {
        if (label === "Experience"){
            setFields(prevFields => {
                const newExperience = prevFields.experience.filter(f => f.legend !== field.legend);

                // Renumber "Education X" labels, keeping user-entered values untouched
                return {
                    ...prevFields,
                    experience: newExperience.map((exp, index) => ({
                        ...exp,
                        legend: `Experience ${index + 1}`
                    }))
                };
            });
        }else{
            setFields(prevFields => {
                const currentExperience = prevFields.experience.filter(f => f.legend === field.legend)[0];
                const newBullet = currentExperience.inputs.bullets.filter(f => f.label !== label);

                return {
                    ...prevFields,
                    experience: prevFields.experience.map(exp => 
                        exp.legend === field.legend ? 
                        {
                            ...exp, 
                            inputs: {
                                ...exp.inputs,
                                // Renumber "Bullet X" labels, keeping user-entered values untouched
                                bullets: newBullet ? newBullet.map((bullet, index) => ({
                                    ...bullet,
                                    label: bullet.label.startsWith("Bullet ") ? `Bullet ${index + 1}` : bullet.label
                                })) : []
                            }
                        } 
                        : exp
                    )
                };
            });
        }

        
    };

    return (
        <>
            <h2>Experience</h2>
            <div className="inputs">
                {fields.map((field) => (
                    <EditorFieldset field={field} setFields={setFields} section="experience" onDelete={deleteInput} onAdd={addInput} key={field.id} />
                ))}
            </div>

            <button className="add" onClick={addInput}>Add Experience +</button>
        </>
    )
}

export { HeaderEditor, SkillsEditor, EducationEditor, ExperienceEditor }