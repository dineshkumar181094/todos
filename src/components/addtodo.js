import React, { useState } from 'react'
import './header.css'

export const Addtodo = (props) => {
    let [title, updateTitle] = useState("");
    let [description, updateDes] = useState("")
    let eventTitle = (e) => {
        // alert(e.target.value);
        updateTitle(e.target.value);

    }
    let eventDescription = (e) => {
        updateDes(e.target.value);

    }

    let submit = (e) => {
        // alert("pressed");
        e.preventDefault();
        if (!title|!description) {
            alert("Title or Description can't be empty!!!");
            return
        }
        
        props.submitUpdateTodo(title,description)
        updateTitle("");
        updateDes("");
    }
    return (
        <>
            <div className="mb-4 row px-5 text-center  ">
                <h5 class="card-title">ADD TODO</h5>
            </div>
        <form onSubmit={submit}>
            <div className="mb-4 row px-5 fw-bold">
                <label for="staticEmail" className="col-sm-2 col-form-label">TITLE</label>
                <div className="col-sm-7">
                    <input type="text" autoComplete='off' className="form-control" id="staticEmail" value={title} onChange={(e) => eventTitle(e)} />
                </div>
            </div>
            <div className="mb-3 row px-5 fw-bold">
                <label for="inputPassword"  className="col-sm-2 col-form-label">DESCRIPTION</label>
                <div className="col-sm-7">
                    <input type="text" autoComplete='off' className="form-control" id="inputPassword" value={description} onChange={(e) => eventDescription(e)} />
                </div>
                <div className="mb-1 row px-5 text-end p-4">
                    <button type="submit" class="btn btn-primary w-25">ADD</button>
                </div>
            </div>
            </form>
        </>
    )
}
