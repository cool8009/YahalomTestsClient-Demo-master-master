import React, {useState} from 'react';
import TagService from '../services/ServicesFolder/TagService'

const AddTags = () => {
    const [tag, setTag] = useState('');
    const onSubmit = (tag) => {
        let title = tag
        TagService.AddTag({title});
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Add Tag</label>
        <input
          type="text"
          placeholder="Add Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
    </form>
  )
}

export default AddTags