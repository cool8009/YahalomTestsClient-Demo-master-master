import http from "../httpService";


const serverRoute = "/TestInstancesRoutes/";

const TestInstanceService = { 
  async AddTestInstance(TestInstance) {
    await http.post(serverRoute + "create",  TestInstance)
      .catch((err) => {
        console.log(err);
      });
  },
  
  async UpdateTestInstance(newTestInstance) {
     await http.put(serverRoute + "Update", newTestInstance);
  },
  
  async GetAllTestsInstances() {
    const result =  await http.get(serverRoute + "GetAll");
    return result.data;
  },

  async GetTestInstanceById(id) {
    const result = await http.post(serverRoute + "GetById/" + id);
    return result.data;
  },

  async DeleteTestInstance(id) {
     await http.delete(serverRoute + "Delete/" + id);
  }
};

export default TestInstanceService;