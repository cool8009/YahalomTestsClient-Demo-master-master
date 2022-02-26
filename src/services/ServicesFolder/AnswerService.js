import http from "../httpService";


const serverRoute = "/Answer/";

const AnswerService = { 
  async AddAnswer(Answer) {
     await http.post(serverRoute + "create", Answer);
  },
  
  async UpdateAnswer(newAnswer) {
     await http.put(serverRoute + "Update", newAnswer);
  },
  
  async GetAllAnswers() {
    const result =  await http.get(serverRoute + "GetAll");
    return result.data;
  },

  async GetAnswerById(id) {
    const result = await http.get(serverRoute + "GetById/" + id);
    return result.data;
  },

  async GetAnswersByQuestionId(questionid) {
    const result = await http.get(serverRoute + "GetByQuestionId/" + questionid);
    return result.data;
  },

  async GetAnswersByTestId(testid) {
    const result = await http.get(serverRoute + "GetByTestId/" + testid);
    return result.data;
  },

  async DeleteAnswer(id) {
     await http.delete(serverRoute + "Delete/" + id);
  }
};

export default AnswerService;