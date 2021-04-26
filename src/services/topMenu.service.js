import http from "../http-common";

class TopMenuDataService {
    getTopMenu() {
      return http.get("/menu");
    }
  
    get(id) {
      return http.get(`/menu/${id}`);
    }
  
    findByTitle(title) {
      return http.get(`/menu?title=${title}`);
    }
  }
  
  export default new TopMenuDataService();