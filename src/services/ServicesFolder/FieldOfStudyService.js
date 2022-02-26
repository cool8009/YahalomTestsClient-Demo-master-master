import http from "../httpService";


const serverRoute = "/FieldOfStudy/";

const FieldOfStudyService = { 
  async AddFieldOfStudy(FieldOfStudy) {
     await http.post(serverRoute + "create", FieldOfStudy);
  },
  
  async UpdateFieldOfStudy(newFieldOfStudy) {
     await http.put(serverRoute + "Update", newFieldOfStudy);
  },
  
  async GetAllFieldsOfStudy() {
    const result =  await http.get(serverRoute + "GetAll");
    return result.data;
  },

  async GetFieldOfStudyById(id) {
    const result = await http.post(serverRoute + "GetById/" + id);
    return result.data;
  },

  async DeleteFieldOfStudy(id) {
     await http.delete(serverRoute + "Delete/" + id);
  }
};

export default FieldOfStudyService;