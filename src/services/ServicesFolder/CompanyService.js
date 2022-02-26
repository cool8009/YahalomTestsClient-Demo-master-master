import http from "../httpService";


const serverRoute = "/Company/";

const CompanyService = { 
  async AddCompany(Company) {
     await http.post(serverRoute + "create", Company);
  },
  
  async UpdateCompany(newCompany) {
     await http.put(serverRoute + "Update", newCompany);
  },
  
  async GetAllCompanys() {
    const result =  await http.get(serverRoute + "GetAll");
    return result.data;
  },

  async GetCompanyById(id) {
    const result = await http.post(serverRoute + "GetById/" + id);
    return result.data;
  },

  async DeleteCompany(id) {
     await http.delete(serverRoute + "Delete/" + id);
  }
};

export default CompanyService;