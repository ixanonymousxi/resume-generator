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

function EditorFieldset({ field, setFields, section, onDelete, onAdd }) {

    const updateInput = (e) => {
        const { id, value } = e.target; // Extract input id and new value

        if(section === "education"){
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
        } else{
            const propName = id.slice(0, 6) === "bullet" ? "bullets" : "title";
            setFields(prevFields => ({
                ...prevFields,
                [section]: prevFields[section].map(f =>
                    f.legend === field.legend // Find the correct fieldset
                        ? {
                            ...f,
                            inputs: {
                                ...f.inputs,
                                [propName]: f.inputs[propName].map(input =>
                                input.label.toLowerCase().split(" ").join("-") === id
                                    ? { ...input, val: value } // Update the correct input
                                    : input
                            )}
                        }
                        : f
                )
            }));
        }
    };


    return (
        <>
            <fieldset>
                <legend>{field.legend}</legend>

                {field.inputs.bullets ? (
                    <>
                        {field.inputs.title.map((input, i) => {
                            const id = input.label.toLowerCase().split(" ").join("-");
                            return (
                                <div className="input-wrapper" key={input.id}>
                                    <label htmlFor={id}>{input.label}</label>
                                    <input id={id} type={input.type} placeholder={input.placeholder} value={input.val} required={input.required} onChange={updateInput} />
                                </div>
                            );
                        })}

                        {field.inputs.bullets.map((bullet,i) => {
                            const bulletId = bullet.label.toLowerCase().split(" ").join("-");
                            return (
                                <div className="input-wrapper" key={bullet.id}>
                                    <label htmlFor={bulletId}>{bullet.label}</label>
                                    <input id={bulletId} type={bullet.type} placeholder={bullet.placeholder} value={bullet.val} required={bullet.required} onChange={updateInput} />
                                    { field.inputs.bullets.length > 0 && <button className="delete" onClick={() => { onDelete(field, bullet.label) }}>&#128465;</button>}
                                </div>
                            );
                        })}
                        
                        {<button className="add" onClick={() => { onAdd("bullet", field) }}>Add Bullet +</button>}
                        {<button className="delete" onClick={() => { onDelete(field) }}>&#128465;</button>}
                    </>
                ) : (
                    field.inputs.map((input, i) => {
                        const id = input.label.toLowerCase().split(" ").join("-");
                        return (
                            <div className="input-wrapper" key={input.id}>
                                <label htmlFor={id}>{input.label}</label>
                                <input id={id} type={input.type} placeholder={input.placeholder} value={input.val} required={input.required} onChange={updateInput} />
                                {i === field.inputs.length - 1 && <button className="delete" onClick={() => { onDelete(field) }}>&#128465;</button>}
                            </div>
                        );
                    })
                )}

            </fieldset>
        </>
    )
}

export { EditorInput, EditorFieldset }