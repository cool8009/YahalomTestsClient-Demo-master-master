import http from "../httpService";


const serverRoute = "/AnswerInstanceRoutes/";

const AnswerInstanceService = { 
  async AddAnswerInstance(AnswerInstance) {
     await http.post(serverRoute + "create", AnswerInstance);
  },
  
  async UpdateAnswer(newAnswerInstance) {
     await http.put(serverRoute + "Update", newAnswerInstance);
  },
  
  async GetAllAnswerInstances() {
    const result =  await http.get(serverRoute + "GetAll");
    return result.data;
  },

  async GetAnswerInstanceById(id) {
    const result = await http.get(serverRoute + "GetById/" + id);
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

export default AnswerInstanceService;