
const QuestionsTable = (props) => {
    return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              {props.questions.map((question) => (
                <tr key={question.Id}>
                  <th scope="row">{question.Id}</th>
                  <td>{question.Title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default QuestionsTable