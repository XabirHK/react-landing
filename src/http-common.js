import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/front/api/v1",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});
