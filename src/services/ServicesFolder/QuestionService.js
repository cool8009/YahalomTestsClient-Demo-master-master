import http from "../httpService";

const serverRoute = "/Question/";

const QuestionService = {
  async AddQuestion(question) {
    const result = await http.post(serverRoute + "create", question);
    return result;
  },

  async UpdateQuestion(newQuestion) {
    await http.put(serverRoute + "Update", newQuestion);
  },

  async GetAllQuestions() {
    const result = await http.get(serverRoute + "GetAll");
    return result.data;
  },

  async GetQuestionById(id) {
    const result = await http.get(serverRoute + "GetById/" + id);
    return result.data;
  },

  async GetQuestionsByTestId(testid) {
    const result = await http.get(serverRoute + "GetByTestId/" + testid);
    return result.data;
  },

  async DeleteQuestion(id) {
    await http.delete(serverRoute + "Delete/" + id);
  },
};

export default QuestionService;
