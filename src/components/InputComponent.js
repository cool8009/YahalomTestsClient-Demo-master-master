import React, {useState} from 'react'

const InputComponent = (props) => {
  const [Condition, setCondition] = useState(props.Condition)
  const [Field, setField] = useState('')
  
  return (
    <form className="add-form" onSubmit={props.nSubmit}>
      <div className="form-control">
        <label>{props.label}</label>
        <input
          type="text"
          placeholder="Add Task"
          value={props.value}
          onChange={(e) => setField(e.target.value)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  )
}

export default InputComponent