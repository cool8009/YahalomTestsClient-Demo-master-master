import http from "../httpService";

const serverRoute = "/Test/";

const TestService = { 
  async AddTest(Test) {
     await http.post(serverRoute + "create", Test);
  },
  
  async UpdateTest(newTest) {
     await http.put(serverRoute + "Update", newTest);
  },
  
  async GetAllTests() {
    const result =  await http.get(serverRoute + "GetAll");
    return result.data;
  },

  async GetTestById(id) {
    const result = await http.post(serverRoute + "GetById/" + id);
    return result.data;
  },

  async DeleteTest(id) {
     await http.delete(serverRoute + "Delete/" + id);
  }
};

export default TestService;