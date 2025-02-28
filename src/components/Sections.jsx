import React, { useState } from 'react';
import '../Pages/PageParts.css'

function HeaderSection({ fields }) {
    const name = fields.filter((field) => { return field.label === "Name" }).map((field) => { return field.val })[0];
    const title = fields.filter((field) => { return field.label === "Title" }).map((field) => { return field.val })[0];

    return (
        <>
            <div className="header section">
                <h1>{name} <span>- {title}</span></h1>
                <ul>
                    {fields
                        .filter(field => field.label !== "Name" && field.label !== "Title" && field.val !== "")
                        .map((field, i, filteredFields) => (
                            <React.Fragment key={field.id}>
                                <li>{field.val}</li>
                                {i !== filteredFields.length - 1 && <li> | </li>}
                            </React.Fragment>
                        ))}
                </ul>
            </div>
        </>
    )
}

function SkillsSection({ fields }) {
    if (fields.length === 0) return null;
    return (
        <>
            <div className="skills section">
                <h3>Skills</h3>
                <ul>
                    {fields
                        .filter(field => field.val !== "")
                        .map((field, i, filteredFields) => (
                            <React.Fragment key={field.id}>
                                <li>{field.val}</li>
                                {i !== filteredFields.length - 1 && <li> / </li>}
                            </React.Fragment>
                        ))}
                </ul>
            </div>
        </>
    )
}

function EducationSection({ fields }) {
    if (fields.length === 0) return null;
    return (
        <>
            <div className="education section">
                <h3>Education</h3>
                <ul>
                 {fields.map((field) => (
                    <li key={field.id}>
                         <h4>{field.inputs[0].val} <span>&nbsp;/&nbsp; {field.inputs[1].val} &nbsp;/&nbsp; {new Date(field.inputs[2].val).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span></h4>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

function ExperienceSection({ fields }) {
    return (
        <>
            <div className="experience section">
                <h3>Experience</h3>
                <ul>
                    {fields.map((field) => (
                        <li key={field.id}>
                            <h4>
                                {field.inputs.title[0].val}
                                <span>&nbsp;/&nbsp;
                                    {new Date(field.inputs.title[1].val).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                                    {field.inputs.title[2].val && ` - ${new Date(field.inputs.title[2].val).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}`}
                                    &nbsp;/&nbsp; {field.inputs.title[3].val}
                                </span>
                            </h4>
                            <ul className="bullet-list">
                                {field.inputs.bullets.map((bullet) => (
                                    <li key={bullet.id}>{bullet.val}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                {/*
                    <li>
                        <h4>Company 1 <span>&nbsp;/&nbsp; Jan 2010 -  Jan 2025 &nbsp;/&nbsp; Title</span></h4>
                        <ul className="bullet-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                        </ul>
                    </li>
                    <li>
                        <h4>Company 2 <span>&nbsp;/&nbsp; Feb 2010 -  Aug 2025 &nbsp;/&nbsp; Title</span></h4>
                        <ul className="bullet-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                        </ul>
                    </li>
                    <li>
                        <h4>Company 3 <span>&nbsp;/&nbsp; Feb 2010 -  Aug 2025 &nbsp;/&nbsp; Title</span></h4>
                        <ul className="bullet-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                        </ul>
                    </li>
                    <li>
                        <h4>Company 4 <span>&nbsp;/&nbsp; Feb 2010 -  Aug 2025 &nbsp;/&nbsp; Title</span></h4>
                        <ul className="bullet-list">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                        </ul>
                    </li>
                    */}
                </ul>
            </div>
        </>
    )
}

export { HeaderSection, SkillsSection, EducationSection, ExperienceSection }