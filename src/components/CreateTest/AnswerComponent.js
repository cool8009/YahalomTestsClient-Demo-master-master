import InputComponent from '../InputComponent';

const AnswerComponent = ({props}) => {
  
    return (
      <div>
          <input 
              type='checkbox'
              checked={props.IsTrue}
              />
              <input type='text' />
      </div>
    )
  }
  
  export default AnswerComponent