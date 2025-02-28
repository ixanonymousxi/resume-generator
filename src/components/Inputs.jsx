import { useState } from 'react'
import '../Pages/PageParts.css'

function EditorInput({ field, setFields, section, onDelete }) {
    const id = field.label.toLowerCase().split(" ").join("-");

    const updateInput = (e) => {
        setFields(prevFields => ({
            ...prevFields,
            [section]: prevFields[section].map(f =>
                f.label === field.label ? { ...f, val: e.target.value } : f
            )
        }));
    };

    return (
        <>
            <div className="input-wrapper">
                <label htmlFor={id}>{field.label}:{field.required && <sup>*</sup>}</label>
                <input id={id} type={field.type} placeholder={field.placeholder} value={field.val} required={field.required} onChange={updateInput}></input>
                {section !== "header" && <button className="delete" onClick={() => { onDelete(field) }}>&#128465;</button>}
            </div>
        </>
    )
}

function EditorFieldset({ field, setFields, section, onDelete }) {

    const updateInput = (e) => {
        const { id, value } = e.target; // Extract input id and new value

        setFields(prevFields => ({
            ...prevFields,
            [section]: prevFields[section].map(f =>
                f.legend === field.legend // Find the correct fieldset
                    ? {
                        ...f,
                        inputs: f.inputs.map(input =>
                            input.label.toLowerCase().split(" ").join("-") === id
                                ? { ...input, val: value } // Update the correct input
                                : input
                        )
                    }
                    : f
            )
        }));
    };


    return (
        <>
            <fieldset>
                <legend>{field.legend}</legend>

                {field.inputs.map((input, i) => {
                    const id = input.label.toLowerCase().split(" ").join("-");
                    return(
                        <div className="input-wrapper" key={input.id}>
                            <label htmlFor={id}>{input.label}</label>
                            <input id={id} type={input.type} placeholder={input.placeholder} value={input.val} required={input.required} onChange={updateInput} />
                            {i === field.inputs.length - 1 && <button className="delete" onClick={() => { onDelete(field) }}>&#128465;</button>}
                        </div>
                    )
                })}
            </fieldset>
        </>
    )
}

export { EditorInput, EditorFieldset }