import http from "../httpService";


const serverRoute = "/Tag/";

const TagService = { 
  async AddTag(Tag) {
     await http.post(serverRoute + "create", Tag);
  },
  
  async UpdateTag(newTag) {
     await http.put(serverRoute + "Update", newTag);
  },
  
  async GetAllTags() {
    const result =  await http.get(serverRoute + "GetAll");
    return result.data;
  },

  async GetTagsById(id) {
    const result = await http.post(serverRoute + "GetById/" + id);
    return result.data;
  },

  async DeleteTag(id) {
     await http.delete(serverRoute + "Delete/" + id);
  }
};

export default TagService;