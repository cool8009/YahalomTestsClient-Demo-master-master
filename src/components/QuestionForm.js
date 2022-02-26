import {useState} from "react";

const QuestionForm = ({addQuestion}) => {
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setTitle({title: e.currentTarget.value, errors: {}})
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors({errors: errors || {}});
    if (errors) return;

    const questionToAdd = {Title: title};
    addQuestion(questionToAdd);
    setTitle('');
  };

  const validate = () => {
    const errors = {};
    if (title.trim() === "") 
        errors.title = "Title is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group space">
          <label htmlFor="title">Title: </label>
          <input
            value={title}
            onChange={handleChange}
            id="title"
            type="text"
            className="input form-control"
          />
          {errors.title && (
            <div className="alert alert-danger">{errors.title}</div>
          )}
        </div>
        <button className="btn btn-primary btn-sm">Add question</button>
      </form>
    </div>
  );
};

export default QuestionForm;
