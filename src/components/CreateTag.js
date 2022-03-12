import React, { useState } from "react";
import TagService from "../services/ServicesFolder/TagService";

const CreateTag = () => {
  const [title, setTitle] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert("Please enter a title");
    }
    const value = await TagService.AddTag({ title }).catch((err) =>
    console.log(err)
    );
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Enter Tag Title</label>
        <input
          type="text"
          placeholder="Tag"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input className="btn" type="submit" value="Save Tag" />
      </div>
    </form>
  );
};

export default CreateTag;
