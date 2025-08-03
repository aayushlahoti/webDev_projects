import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        } else {
           props.addTodo(title, desc);
            setTitle(title);
            setDesc(desc);
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={(e)=> setTitle(e.target.value)} />

                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <input type="text" class="form-control" id="desc" value={desc} onChange={(e)=> setDesc(e.target.value)} />
                </div>

                <button type="submit" class="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}

export default AddTodo;
