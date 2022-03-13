import React, { useState } from "react";
import CreateTag from './CreateTag'

const TagSelector = ({ allTags, questionTags, setQuestionTags, selectedTag, handleAddTag }) => {
  const addToTagList = (e) => {
    selectedTag(e.currentTarget.value);
  };

  return (
    <div className="form-control form-control-check">
      <label>Select tags</label>
      <select 
        onChange={addToTagList}
      >
        {allTags.map((tag) => (
          <option 
            key={tag.TagId}
            value={tag.Title}
            >
                {tag.Title}
        </option>
        ))}
      </select>
      <div>
        <p>Selected Tags:</p>
        {questionTags.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
      <p>Or, create a new tag:</p>
      <CreateTag
        allTags={allTags}
        handleAddTag={handleAddTag}
      />
    </div>
  );
};

export default TagSelector;
