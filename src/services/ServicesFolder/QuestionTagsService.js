import http from "../httpService";


const serverRoute = "/QuestionTags/";

const AnswerService = { 
  async AddQuestionTag(QuestionTag) {
     await http.post(serverRoute + "create", QuestionTag);
  },
  
  async UpdateQuestionTag(newAnswer) {
     await http.put(serverRoute + "Update", newAnswer);
  },
  
  async GetAllQuestionTag() {
    const result =  await http.get(serverRoute + "GetAll");
    return result.data;
  },

  async GetQuestionTagById(id) {
    const result = await http.get(serverRoute + "GetById/" + id);
    return result.data;
  },

  async GetQuestionTagByQuestionId(questionid) {
    const result = await http.get(serverRoute + "GetByQuestionId/" + questionid);
    return result.data;
  },

  async DeleteQuestionTag(id) {
     await http.delete(serverRoute + "Delete/" + id);
  }
};

export default AnswerService;